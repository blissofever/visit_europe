// netlify/functions/saveUserInfo.js

const bannedUsers = ["123456789", "987654321"];

exports.handler = async function(event, context) {
  try {
    const userInfo = JSON.parse(event.body);
    console.log("서버에 전송된 사용자 정보:", userInfo);
    
    if (bannedUsers.includes(String(userInfo.id))) {
      return {
        statusCode: 403,
        body: JSON.stringify({ message: "This user is banned." })
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
