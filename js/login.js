// auth.js

// 1. 카카오 SDK 초기화 (YOUR_JAVASCRIPT_KEY를 실제 키로 교체)
Kakao.init('71225b6c164992526c7945def3a32ce6');


/**
 * 사용자 정보를 서버로 전송하는 함수
 * 빈 응답에 대해서도 안전하게 처리합니다.
 */
async function sendUserInfoToServer(userInfo) {
  try {
    const response = await fetch('/.netlify/functions/saveUserInfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    });
    // 응답 본문을 text로 받아서, 비어 있으면 빈 객체 사용
    const text = await response.text();
    const result = text ? JSON.parse(text) : {};
    console.log("서버 저장 결과:", result);
    return { status: response.status, message: result.message || "" };
  } catch (error) {
    console.error("사용자 정보 서버 전송 실패:", error);
    return { status: 500, message: "서버 오류" };
  }
}

/**
 * 카카오 로그인 처리 함수
 */
function kakaoLogin() {
  Kakao.Auth.login({
    scope: 'account_email',
    success: function(authObj) {
      console.log("로그인 성공:", authObj);
      // 액세스 토큰을 localStorage에 저장 (로그인 상태 관리용)
      localStorage.setItem('kakaoAuthToken', authObj.access_token);

      // 사용자 정보 요청
      Kakao.API.request({
        url: '/v2/user/me',
        // success 콜백을 async 함수로 선언하여 내부에서 await 사용 가능
        success: async function(res) {
          console.log("사용자 정보:", res);
          // 사용자 정보를 localStorage에 저장 (JSON 문자열 형태)
          localStorage.setItem('kakaoUser', JSON.stringify(res));

          // 사용자 정보를 서버로 전송 (밴 처리 및 데이터 저장 등)
          const serverResponse = await sendUserInfoToServer({
            id: res.id, // 사용자 고유 ID
            // nickname: res.properties.nickname,
            // profileImage: res.properties.profile_image,
            email: res.kakao_account && res.kakao_account.email // 이메일 정보 (옵션)
          });

          // 서버가 403 (Forbidden)을 반환하면 밴된 사용자로 판단
          if (serverResponse.status === 403) {
            alert("해당 계정은 밴 처리되었습니다.");
            Kakao.Auth.logout(function() {
              localStorage.removeItem('kakaoAuthToken');
              localStorage.removeItem('kakaoUser');
              window.location.href = "login.html";
            });
          } else if (serverResponse.status === 200) {
            // 정상 사용자인 경우 메인 페이지(index.html)로 이동
            window.location.href = "lx-index.html";
          } else {
            alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
          }
        },
        fail: function(error) {
          console.error("사용자 정보 요청 실패:", error);
        }
      });
    },
    fail: function(err) {
      console.error("로그인 실패:", err);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  });
}

// DOMContentLoaded 이벤트: HTML 요소들이 모두 로드된 후 로그인 버튼 이벤트 등록
document.addEventListener("DOMContentLoaded", function() {
  var loginBtn = document.getElementById('kakao-login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      kakaoLogin();
    });
  }
});








// async function sendUserInfoToServer(userInfo) {
//     try {
//       const response = await fetch('/.netlify/functions/saveUserInfo', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userInfo)
//       });
//       const result = await response.json();
//       console.log("서버 저장 결과:", result);
//     } catch (error) {
//       console.error("사용자 정보 서버 전송 실패:", error);
//     }
//   }
// // 2. DOMContentLoaded 이벤트: HTML 요소들이 모두 로드된 후 실행
// document.addEventListener("DOMContentLoaded", function() {

// var bannedUsers = ["123", "987654321"]; 


//     var loginBtn = document.getElementById('kakao-login-btn');
//     if (loginBtn) {
//       loginBtn.addEventListener('click', function() {
//         kakaoLogin();
//       });
//     }

//     var logoutBtn = document.getElementById('logoutBtn');
//       if (logoutBtn) {
//         logoutBtn.addEventListener('click', function() {
//           Kakao.Auth.logout(function(response) {
//             console.log("카카오 로그아웃 완료:", response);
//             // 클라이언트에 저장된 로그인 정보 삭제
//             localStorage.removeItem('kakaoAuthToken');
//             // 로그아웃 후 로그인 페이지(또는 원하는 페이지)로 이동
//             window.location.href = "login.html";
//           });
//         });
//       }


// // 3. 로그인 함수 정의
// function kakaoLogin() {
//   Kakao.Auth.login({
//     scope: 'account_email', // 요청할 권한 설정 (필요에 따라 수정)
//     success: function(authObj) {
//       console.log("로그인 성공:", authObj);
      
//       // 3-1. 액세스 토큰을 localStorage에 저장 (로그인 상태 관리용)
//       localStorage.setItem('kakaoAuthToken', authObj.access_token);

//       // 3-2. 사용자 정보 요청
//       Kakao.API.request({
//         url: '/v2/user/me',
//         success: function(res) {
//           console.log("사용자 정보:", res);
          
//           // 3-3. 사용자 정보를 JSON 문자열 형태로 localStorage에 저장
//           localStorage.setItem('kakaoUser', JSON.stringify(res));
//           await sendUserInfoToServer({
//             id: res.id, // 사용자 고유 ID
//             nickname: res.properties.nickname,
//             profileImage: res.properties.profile_image,
//             email: res.kakao_account && res.kakao_account.email // 이메일 정보 (옵션)
//           });
//           // 3-4. 사용자 ID를 가져와 밴 여부 체크
//           var userId = String(res.id);
//           if (bannedUsers.includes(userId)) {
//             alert("해당 계정은 이용 정지되었습니다.");
//             // 밴된 사용자이면 로그아웃 처리 후 로그인 페이지로 이동
//             Kakao.Auth.logout(function() {
//               // 저장된 정보 삭제
//               localStorage.removeItem('kakaoAuthToken');
//               localStorage.removeItem('kakaoUser');
//               window.location.href = "login.html";
//             });
//           } else {
//             // 정상 사용자라면 메인 페이지(index.html)로 이동
//             window.location.href = "lx-index.html";
//           }
//         },
//         fail: function(error) {
//           console.error("사용자 정보 요청 실패:", error);
//         }
//       });
//     },
//     fail: function(err) {
//       console.error("로그인 실패:", err);
//       alert("로그인에 실패했습니다. 다시 시도해주세요.");
//     }
//   });
// }



  // 로그인 버튼 이벤트 처리 (id가 'kakao-login-btn'인 요소가 있을 경우)
//   var loginBtn = document.getElementById('kakao-login-btn');
//   if (loginBtn) {
//     loginBtn.addEventListener('click', function() {

//         Kakao.Auth.login({
//             scope: 'account_email',
//             success: function(authObj) {
//               console.log("로그인 성공:", authObj);
//               // 액세스 토큰 저장 (로그인 상태 관리용)
//               localStorage.setItem('kakaoAuthToken', authObj.access_token);
              
//               // 사용자 정보 요청
//               Kakao.API.request({
//                 url: '/v2/user/me',
//                 success: function(res) {
//                   console.log("사용자 정보:", res);
//                   // 받아온 사용자 정보를 JSON 형태로 localStorage에 저장
//                   localStorage.setItem('kakaoUser', JSON.stringify(res));
                  
//                   // 정보 저장 후 index 페이지로 이동
//                   window.location.href = "lx-index.html";
//                 },
//                 fail: function(error) {
//                   console.error("사용자 정보 요청 실패:", error);
//                 }
//               });
//             },
//             fail: function(err) {
//               console.error("로그인 실패:", err);
//               alert("로그인에 실패했습니다. 다시 시도해주세요.");
//             }
//           });
          
//     });
//   }

  // 로그아웃 버튼 이벤트 처리 (id가 'logoutBtn'인 요소가 있을 경우)
//   var logoutBtn = document.getElementById('logoutBtn');
//   if (logoutBtn) {
//     logoutBtn.addEventListener('click', function() {
//       Kakao.Auth.logout(function(response) {
//         console.log("카카오 로그아웃 완료:", response);
//         // 클라이언트에 저장된 로그인 정보 삭제
//         localStorage.removeItem('kakaoAuthToken');
//         // 로그아웃 후 로그인 페이지(또는 원하는 페이지)로 이동
//         window.location.href = "login.html";
//       });
//     });
//   }
// });




// 4. DOMContentLoaded 이벤트: HTML 요소들이 모두 로드된 후에 이벤트 리스너 등록





