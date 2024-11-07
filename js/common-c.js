

$(function(){
	// 공항 정보를 객체로 관리
const airports = {
	'AUH': '아부다비',
	'DXB': '두바이',
	'ICN': '인천',
	'GRX': '그라나다',
	'NCE': '니스',
	'DAM': '담페초',
	'LON': '런던',
	'ROM': '로마',
	'LUZ': '루체른',
	'LIS': '리스본',
	'MAD': '마드리드',
	'AGP': '말라가',
	'MUC': '뮌헨',
	'MIL': '밀라노',
	'BCN': '바르셀로나',
	'VCE': '베니스',
	'VRN': '베로나',
	'BRN': '베른',
	'BOL': '볼차노',
	'BUD': '부다페스트',
	'VIE': '비엔나',
	'SVQ': '세비야',
	'SXB': '스트라스부르',
	'SIR': '시르미오네',
	'ORT': '오르티세이',
	'INN': '인스부르크',
	'INT': '인터라켄',
	'SZG': '잘츠부르크',
	'GVA': '제네바',
	'ZER': '체르마트',
	'ZRH': '취리히',
	'COL': '콜마르',
	'TCI': '테네리페',
	'TOS': '토스카나',
	'PAR': '파리',
	'OPO': '포르투',
	'PRG': '프라하',
	'FRA': '프랑크푸르트',
	'FLR': '피렌체',
	'PDF': '포자디파사',
	'KEF': '레이캬비크',
	'PMI': '마요르카',
	'MLA': '몰타',
	'BRI': '바리',
	'PDL': '폰타델가다',
	'ANN': '안시',
	'CMN': '샤모니',
	'AVI': '아비뇽',
	'MRS': '마르세유',
	'CDG': '샤를드골',
};



// 항공기 정보를 객체로 관리
const flightModels = {
	'EY': '에티하드항공',
	'KE': '대한항공',
	'OZ': '아시아나항공',
	'7C': '제주항공',
	'TW': '티웨이항공',
	'BX': '에어부산',
	'LJ': '진에어',
	'ZE': '이스타항공',
	'EK': '에미레이트항공',
	// 유럽 취항 항공사
	'LH': '루프트한자',
	'AF': '에어프랑스',
	'BA': '영국항공',
	'KL': '네덜란드항공',
	'SQ': '싱가포르항공',
	'QR': '카타르항공',
	'LX': '스위스항공',
	'SN': '브뤼셀항공',
	'AY': '핀에어',
	'AZ': '이탈리아항공',
	'SK': '스칸디나비아항공',
	'TK': '터키항공',
	'IB': '이베리아항공',
	'OS': '오스트리아항공',
	// 유럽 내 저가항공사
	'FR': '라이언에어',
	'EZY': '이지젯',
	'W6': '위즈에어',
	'VY': '브엘링',
	'U2': '이지젯',
	'DS': '이스타젯',
	'PC': '페가수스항공',
	'TO': '트랜스아비아',
	'HG': '유로윙스',
	'BT': '에어 발틱',
	// 필요한 추가 항공편 정보는 여기에 작성
};

const depMonth = {
	'JAN': '01월',
	'FEB': '02월',
	'MAR': '03월',
	'APR': '04월',
	'MAY': '05월',
	'JUN': '06월',
	'JUL': '07월',
	'AUG': '08월',
	'SEP': '09월',
	'OCT': '10월',
	'NOV': '11월',
	'DEC': '12월'
}



///////////////////////백업
///////////////////////백업
///////////////////////백업
///////////////////////백업
///////////////////////백업
///////////////////////백업
///////////////////////백업

// 변환 함수
// function convertFlightInfo() {
// const input = $('#input').val().trim();
// const lines = input.split('\n');
// let output = '';

// let firstFlightTime = '';
// let firstFlightAirline = '';
// let validLineCount = 0;

// $.each(lines, function(index, line) {
// 	if (line.trim()) validLineCount++; // 공백 제외한 글자가 있는 줄만 카운트
	
// 	const parts = line.trim().split(/\s+/);
	
// 	const dateData = parts[5].slice(0, 2);
// 	const monthData = parts[5].slice(2, 5);
// 	const depMonthOut = depMonth[monthData] || monthData;
	
// 	const depTime = parts[9].replace(/\b(\d{2})(\d{2})\b/, '$1:$2');
// 	const arrTime = parts[10].replace(/\b(\d{2})(\d{2})\b/, '$1:$2');
	
// 	const depAirportCode = parts[6].slice(2, 5);
// 	const arrAirportCode = parts[6].slice(5);
// 	const depAirport = airports[depAirportCode] || depAirportCode;
// 	const arrAirport = airports[arrAirportCode] || arrAirportCode;
	
// 	const flightCode = parts[2] + parts[3];
// 	const flightModelKor = flightModels[parts[1]];

// 	if (index === 0) {
// 		firstFlightTime = `${depMonthOut} ${dateData}일`;
// 		firstFlightAirline = flightModelKor;
// 	}

// 	output += `[${depTime}] ${flightCode} ${depAirport} 공항 출발\n`;
// 	output += `[${arrTime}] ${arrAirport} 공항 도착\n\n`;

// 	console.log(parts);
// });

// $('#output').text(output.trim());
// $('#firstFlightTime').text(firstFlightTime);
// $('#firstFlightAirline').text(firstFlightAirline);
// $('#validLineCount').text(validLineCount); // 유효한 줄 수 표시
// }
// // 버튼 클릭 이벤트에 함수 연결
// $('#convertBtn').click(convertFlightInfo);



// function preprocessArray(data) {
//     // 조건: 5번째 배열 요소가 숫자만 있는 경우 삭제
//     if (/^\d+$/.test(data[5])) {
// 		console.log(data);
//         data.splice(5, 1); // 5번째 요소 삭제, 배열 길이는 15에서 14로 줄어듦
        
//         // 디버깅용으로 배열 길이와 배열 상태 출력
//         console.log("After splice:", data.length, data); // 삭제 후 배열 길이 확인
        
//         // 배열을 슬라이스하여 분리
//         const slicePart1 = data.slice(2, 5);  // 3번째부터 5번째 요소까지
//         const slicePart2 = data.slice(5);     // 6번째부터 끝까지
//         return [slicePart1, slicePart2];
//     }
    
//     // 5번째 요소가 숫자가 아닌 경우 배열 그대로 반환
//     return data;
// }

// // 예시 데이터
// let exampleData = [
//     "3",
//     "EY",
//     "823",
//     "M",
//     "28APR",
//     "1*ICNAUH",
//     "DK2",
//     "1800",
//     "2300",
//     "28APR",
//     "E",
//     "0",
//     "789",
//     "M"
// ];
// let result = preprocessArray(exampleData);

// console.log("Result:", result);

///////////////////////////////////백업끝
///////////////////////////////////백업끝
///////////////////////////////////백업끝
///////////////////////////////////백업끝
///////////////////////////////////백업끝









function convertFlightInfo() {
    // 입력 데이터 가져오기
    const input = $('#input').val().trim();
    const lines = input.split('\n'); // 줄 단위로 데이터 분리
    let output = '';
    
    let firstFlightTime = '';
    let firstFlightAirline = '';
    let validLineCount = 0;

    $.each(lines, function(index, line) {
        line = line.trim(); // 줄 앞뒤 공백 제거
        
        // 빈 줄은 건너뛰기
        if (!line) return true;
        
        validLineCount++; // 공백 제외한 유효한 줄만 카운트

        // 공백으로 분리된 각 요소를 배열로 나눔
        let parts = line.split(/\s+/);

        // 배열을 전처리하여 6번째 요소를 삭제하거나 수정
        parts = preprocessArray(parts);

		console.log(parts);
        // 전처리된 parts 배열을 이용하여 데이터 구성
        const dateData = parts[3].slice(0, 2);
        const monthData = parts[3].slice(2, 5);
        const depMonthOut = depMonth[monthData] || monthData;
        
        const depTime = parts[6].replace(/\b(\d{2})(\d{2})\b/, '$1:$2');
        const arrTime = parts[7].replace(/\b(\d{2})(\d{2})\b/, '$1:$2');
        
        const depAirportCode = parts[4].slice(0, 3);
        const arrAirportCode = parts[4].slice(3);
        const depAirport = airports[depAirportCode] || depAirportCode;
        const arrAirport = airports[arrAirportCode] || arrAirportCode;
        
        const flightCode = parts[0] + parts[1];
        const flightModelKor = flightModels[parts[0]];

        if (index === 0) {
            firstFlightTime = `${depMonthOut} ${dateData}일`;
            firstFlightAirline = flightModelKor;
        }

        output += `[${depTime}] ${flightCode} ${depAirport} 공항 출발\n`;
        output += `[${arrTime}] ${arrAirport} 공항 도착\n\n`;
    });

    // 결과 출력
    $('#output').text(output.trim());
    $('#firstFlightTime').text(firstFlightTime);
    $('#firstFlightAirline').text(firstFlightAirline);
    $('#validLineCount').text(validLineCount); // 유효한 줄 수 표시
}

// 전처리 함수
// function preprocessArray(data) {
//     // 6번째 배열 요소가 숫자만 포함된 경우 삭제
//     if (/^\d+$/.test(data[5])) {
//         data.splice(5, 1); // 6번째 요소 삭제
//         // console.log("After number deletion:", data.length, data);
//     } 
//     // 6번째 배열 요소에 '*'가 포함된 경우 '*' 및 앞 문자 제거
//     else if (data[5].includes('*')) {
//         data[5] = data[5].replace(/.\*/, ''); // *와 그 앞 문자 제거
//         //console.log("After '*' removal:", data.length, data);
//     }

//     // 항공사 코드와 편명이 공백 없이 결합된 경우 분리 (예: "VY2110"을 "VY", "2110"으로)
//     if (/^[A-Z]{2}\d{2,4}$/.test(data[1])) {
//         let match = data[1].match(/^([A-Z]{2})(\d{2,4})$/);
//         if (match) {
//             data[1] = match[1]; // 항공사 코드
//             data.splice(2, 0, match[2]); // 편명을 data[2]로 삽입
//         }
//         // console.log("After flight number split:", data.length, data);
//     }
//     return data;
// }

function preprocessArray(data) {
    // 배열의 각 요소를 처리하기 위한 반복문
    for (let i = 0; i < data.length; i++) {
        // 항공사 코드와 편명이 결합된 경우 (예: "EY823"을 "EY", "823"으로 분리)
        if (/^[A-Z]{2}\d{2,4}$/.test(data[i])) {
            let match = data[i].match(/^([A-Z]{2})(\d{2,4})$/);
            if (match) {
                data[i] = match[1]; // 항공사 코드
                data.splice(i + 1, 0, match[2]); // 편명을 다음 인덱스에 삽입
                console.log("After flight number split:", data.length, data);
                // 배열 구조가 변경되었으므로 인덱스를 조정하여 반복
                i++;
            }
        }
        
        // 공항 코드에 '*'가 포함된 경우 ('1*ICNAUH' -> 'ICNAUH')
        if (data[i].includes('*')) {
            data[i] = data[i].replace(/^[^A-Z]*\*/, ''); // '*' 및 그 앞 문자 제거
            console.log("After '*' removal:", data.length, data);
        }

        // 불필요한 숫자 요소 삭제 (시간, 항공기 편명이 아닌 숫자 요소만 삭제)
        if (/^\d+$/.test(data[i]) && !isTimeFormat(data[i]) && !isFlightNumber(data[i])) {
            data.splice(i, 1); // 해당 요소 삭제
            console.log("After number deletion:", data.length, data);
            // 배열 구조가 변경되었으므로 인덱스를 조정하여 반복
            i--;
        }
    }

    return data;
}

// 시간 형식 확인 함수 (HHMM 형식으로 되어 있는지 확인)
function isTimeFormat(value) {
    return /^\d{4}$/.test(value) && parseInt(value.substring(0, 2)) < 24 && parseInt(value.substring(2, 4)) < 60;
}

// 항공기 편명 확인 함수 (항공사 코드 다음에 오는 숫자인지 확인)
function isFlightNumber(value) {
    return /^\d{2,4}$/.test(value);
}


// 버튼 클릭 이벤트에 함수 연결
$('#convertBtn').click(convertFlightInfo);







});


