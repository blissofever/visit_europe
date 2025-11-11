// netlify/functions/saveUserInfo.js

const bannedUsers = ["123456789", "987654321",
  
  "3925395335", //cthinae@naver.com
  "3930863609", //58827099a@gmail.com
  "3935150212", //jjb_0705@naver.com
  "3938203995", //hw01619@naver.com
  "3959513059", //da6987@naver.com
  "3917592151", //knighta@naver.com
  "4229162689", //skagus7912@naver.com
  "4230780696", //paradise2151@naver.com
  "4242974826", //qotpdl20@nate.com
  "4215931465", //chaos132@naver.com
  "4323673373", //chingoo4860@naver.com
  // "3919632115", //jan4081@naver.com 전주희
  "3919437960", //7116420@hanmail.net
  // "3929517577", //mansaok79@hanmail.net 김진혁
  "4209342117", //sunny-family@nate.com
  "4227462736", //dmzgt@naver.com
  "3919380490", //bb9706@daum.net
  "3916838698", //selfh1@naver.com
  // "3900898788", //blissofever@hotmail.com
];

exports.handler = async function(event, context) {
  try {
    const userInfo = JSON.parse(event.body);
    console.log("서버에 전송된 사용자 정보:", userInfo);
    
    if (bannedUsers.includes(String(userInfo.id))) {
      return {
        statusCode: 403,
        body: JSON.stringify({ message: "403 error." })
      };
    }
    
    // 추가 데이터베이스 저장 로직 등을 여기에 구현
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "User info saved successfully" })
    };
  } catch (error) {
    console.error("사용자 정보 저장 실패:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error" })
    };
  }
};
