// auth.js

Kakao.init('911b46350bc0ca32f6b4b94b7f2ad2b8');

async function sendUserInfoToServer(userInfo) {
  try {
    const response = await fetch('/.netlify/functions/saveUserInfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    });
    const text = await response.text();
    const result = text ? JSON.parse(text) : {};
    console.log("서버 저장 결과:", result);
    return { status: response.status, message: result.message || "" };
  } catch (error) {
    console.error("사용자 정보 서버 전송 실패:", error);
    return { status: 500, message: "서버 오류" };
  }
}
function kakaoLogin() {
  Kakao.Auth.login({
    scope: 'account_email',
    success: function(authObj) {
      console.log("로그인 성공:", authObj);
      localStorage.setItem('kakaoAuthToken', authObj.access_token);
      Kakao.API.request({
        url: '/v2/user/me',
        success: async function(res) {
          console.log("사용자 정보:", res);
          localStorage.setItem('kakaoUser', JSON.stringify(res));
          const serverResponse = await sendUserInfoToServer({
            id: res.id, // 사용자 고유 ID
            // nickname: res.properties.nickname,
            // profileImage: res.properties.profile_image,
            email: res.kakao_account && res.kakao_account.email
          });
          if (serverResponse.status === 403) {
            alert("해당 계정은 밴 처리되었습니다.");
            Kakao.Auth.logout(function() {
              localStorage.removeItem('kakaoAuthToken');
              localStorage.removeItem('kakaoUser');
              window.location.href = "login.html";
            });
          } else if (serverResponse.status === 200) {
            window.location.href = "index.html";
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

function kakaoLogout() {
  Kakao.Auth.logout(function(response) {
    console.log("로그아웃 완료:", response);
    localStorage.removeItem('kakaoAuthToken');
    localStorage.removeItem('kakaoUser');
    window.location.href = "../login.html";
  });
}
document.addEventListener("DOMContentLoaded", function() {
  var loginBtn = document.getElementById('kakao-login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      kakaoLogin();
    });
  }

  
  var logoutBtn = document.getElementById('kakao-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      kakaoLogout();
    });
  }
});


// window.addEventListener("beforeunload", function(event) {
//   Kakao.Auth.logout(function(response) {
//     localStorage.removeItem('kakaoAuthToken');
//     localStorage.removeItem('kakaoUser');
//   });
// });