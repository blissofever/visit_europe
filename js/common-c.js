

$(function(){
	// 공항 정보를 객체로 관리
const airports = {
	'AUH': '아부다비',
	'DXB': '두바이',
	'DOH': '도하',
	'IST': '이스탄불',
	'AYT': '안탈리아',
	'HEL': '헬싱키',
	'AMS': '암스테르담',
	'ICN': '인천',
	'GRX': '그라나다',
	'NCE': '니스',
	'DAM': '담페초',
	'LON': '런던',
	'LGW': '런던게트윅',
	'LHR': '런던히드로',
	'ROM': '로마',
	'FCO': '로마',
	'BSL': '바젤',
	'LIS': '리스본',
	'MAD': '마드리드',
	'AGP': '말라가',
	'MUC': '뮌헨',
	'MIL': '밀라노',
	'MXP': '밀라노',
	'LIN': '밀라노리나테',
	'BCN': '바르셀로나',
	'VCE': '베니스',
	'TSF': '베니스트레비소',
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
	'TFN': '테네리페(북)',
	'TFS': '테네리페(남)',
	'TOS': '토스카나',
	'PAR': '파리',
	'CDG': '파리',
	'ORY': '파리오를리',
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
	'ATH': '아테네',
	'JTR': '산토리니',
	'CPH': '코펜하겐',
	'OSL': '오슬로',
	'BGO': '베르겐',
	'ARN': '스톡홀름',
	'ZAG': '자그레브',
	'DBV': '두브로브니크',
	'BRU': '브뤼셀',

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
	'VY': '부엘링',
	'U2': '이지젯',
	'DS': '이스타젯',
	'PC': '페가수스항공',
	'TO': '트랜스아비아',
	'HG': '유로윙스',
	'BT': '에어 발틱',
	'A3': '에게안항공',
	'OA': '올림픽항공',
};

const depMonth = {
	'JAN': '01',
	'FEB': '02',
	'MAR': '03',
	'APR': '04',
	'MAY': '05',
	'JUN': '06',
	'JUL': '07',
	'AUG': '08',
	'SEP': '09',
	'OCT': '10',
	'NOV': '11',
	'DEC': '12'
}


function convertFlightInfo() {
    const input = $('#input').val().trim();
    const lines = input.split('\n');
    let output = '';
    
    // let firstFlightTime = '';
    let firstFlightAirline = '';
    let validLineCount = 0;

    $.each(lines, function(index, line) {
        line = line.trim();
        
        if (!line) return true;
        
        validLineCount++;
        let parts = line.split(/\s+/);
        parts = preprocessArray(parts);
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
            // firstFlightTime = `${depMonthOut}/${dateData}`;
            firstFlightAirline = flightModelKor;
        }
		let arrivalDayInfo = '';
		if (parts[3] !== parts[8]) {
			arrivalDayInfo = '+1';
		}
        output += `${depMonthOut}/${dateData} [${depTime}] ${flightCode} ${depAirport} 출발 / [${arrTime}${arrivalDayInfo}] ${arrAirport}  도착 \n\n`;
        // output += `[${arrTime}] ${arrAirport} 공항 도착\n\n`;
    });
    $('#output').text(output.trim());
    $('#firstFlightAirline').text(firstFlightAirline);
    $('#validLineCount').text(validLineCount);
}
function preprocessArray(data) {
    for (let i = 0; i < data.length; i++) {
        if (/^[A-Z]{2}\d{2,4}$/.test(data[i])) {
            let match = data[i].match(/^([A-Z]{2})(\d{2,4})$/);
            if (match) {
                data[i] = match[1];
                data.splice(i + 1, 0, match[2]);
                // console.log("After flight number split:", data.length, data);
                i++;
            }
        }
        if (data[i].includes('*')) {
            data[i] = data[i].replace(/^[^A-Z]*\*/, '');
            // console.log("After '*' removal:", data.length, data);
        }
        if (/^\d+$/.test(data[i]) && !isTimeFormat(data[i]) && !isFlightNumber(data[i])) {
            data.splice(i, 1);
            console.log("After number deletion:", data.length, data);
            i--;
        }
    }

    return data;
}
function isTimeFormat(value) {
    return /^\d{4}$/.test(value) && parseInt(value.substring(0, 2)) < 24 && parseInt(value.substring(2, 4)) < 60;
}
function isFlightNumber(value) {
    return /^\d{2,4}$/.test(value);
}

$('#convertBtn').click(convertFlightInfo);







});


