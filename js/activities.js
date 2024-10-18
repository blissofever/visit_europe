$(document).ready(function() {
	// 주요 일정 내용을 변수로 정의


	var cities  = {
		ICN : "인천",
		GRX : "그라나다",
		GRINDEL : "그린델발트",
		NCE : "니스",
		DAM : "담페초",
		LON : "런던",
		ROM : "로마",
		RONDA : "론다",
		LUZ : "루체른",
		LIS : "리스본",
		MAD : "마드리드",
		AGP : "말라가", //공항코드
		MAL : "말라가", //도시코드
		MONT : "몽트뢰",
		MUC : "뮌헨",
		MIL : "밀라노",
		BCN : "바르셀로나",
		VCE : "베니스",
		VRN : "베로나",
		BRN : "베른",
		BOL : "볼차노",
		BUD : "부다페스트",
		VIE : "비엔나",
		HONEGG : "빌라호네그",
		SANTRE : "산트레",
		SVQ : "세비야",
		SXB : "스트라스부르",
		SIR : "시르미오네",
		ADEL : "아델보덴",
		AQUA : "아쿠아돔", //호텔이름임
		ORT : "오르티세이",
		INN : "인스부르크",
		INT : "인터라켄",
		SZG : "잘츠부르크",
		GVA : "제네바",
		GVAAPT : "제네바 공항",
		ZER : "체르마트",
		CESKY : "체스키크룸로프",
		ZRH : "취리히",
		ZRHAPT : "취리히 공항",
		COL : "콜마르",
		TCI  : "테네리페",
		SPAIN  : "스페인",
		TOS : "토스카나",
		PAR : "파리",
		OPO : "포르투",
		POSI : "포지타노",
		PRG : "프라하",
		FRA : "프랑크푸르트",
		FLR : "피렌체",
		HALLS : "할슈타트",
		NERJA : "네르하",
		PDF : "포자디파사",
		KEF : "레이캬비크",
		PMI : "마요르카",
		MLA : "몰타",
		BRI : "바리",
		PDL : "폰타델가다",
		ANN : "안시",
		CMN : "샤모니",
		AVI : "아비뇽",
		MRS : "마르세유",
		GLB : "그레방",
	}


	// 일정 내용을 변수로 정의
	var activities = {
		// IN 일정
		arrivalPAR: "파리 IN",
		arrivalNCE: "니스 IN",
		arrivalICN: "인천 도착",
		arrivalROM: "로마 IN",
		arrivalVCE: "베니스 IN",
		arrivalMIL: "밀라노 IN",
		arrivalLON: "런던 IN",
		arrivalPRG: "프라하 IN",
		arrivalZRH: "취리히 IN",
		arrivalGVA: "제네바 IN",
		arrivalBCN: "바르셀로나 IN",
		arrivalMAD: "마드리드 IN",
		arrivalAGP: "말라가 IN",
		arrivalMAL: "말라가 IN",
		arrivalLIS: "리스본 IN",
		arrivalOPO: "포르투 IN",
		arrivalVIE: "비엔나 IN",
		arrivalBUD: "부다페스트 IN",
		arrivalMUC: "뮌헨 IN",
		arrivalKEF: "레이캬비크 IN",
		arrivalPMI: "마요르카 IN",
		arrivalMLA: "몰타 IN",

		// 이동 일정
		movetoPAR: "파리 이동",
		movetoNCE: "니스 이동",
		movetoAVI: "아비뇽 이동",
		movetoMRS: "마르세유 이동",
		movetoGLB: "그레방 이동",
		movetoCMN: "샤모니 이동",
		movetoANN: "안시 이동",
		movetoGVA: "제네바 이동",
		movetoROM: "로마 이동",
		movetoFLR: "피렌체 이동",
		movetoVCE: "베니스 이동",
		movetoFLR: "피렌체 이동",
		movetoTOS: "토스카나 이동",
		movetoBRI: "바리 이동",
		movetoDOLO: "돌로미티 동부 이동",
		movetoDOLW: "돌로미티 서부 이동",
		movetoMIL: "밀라노 이동",
		movetoINT: "인터라켄 이동",
		movetoLUZ: "루체른 이동",
		movetoADEL: "아델보덴 이동",
		movetoMONT: "몽트뢰 이동",
		movetoBCN: "바르셀로나 이동",
		movetoMAD: "마드리드 이동",
		movetoMAL: "말라가 이동",
		movetoAGP: "말라가 이동",
		movetoSVQ: "세비야 이동",
		movetoGRX: "그라나다 이동",
		movetoRONDA: "론다 이동",
		movetoNERJA: "네르하 이동",
		movetoPMI: "마요르카 이동",
		movetoPDL: "폰타델가다 이동",
		movetoLIS: "리스본 이동",
		movetoOPO: "포르투 이동",
		movetoPRG: "프라하 이동",
		movetoLON: "런던 이동",	
		movetoVIE: "비엔나 이동",
		movetoCESKY: "체스키 이동",
		movetoSZG: "잘츠부르크 이동",
		movetoHALLS: "할슈타트 이동",
		movetoINN: "인스부르크 이동",
		movetoMUC: "뮌헨 이동",
		movetoBUD: "부다페스트 이동",
		movetoKEF: "레이캬비크 이동",
		movetoMLA: "몰타 이동",
		// 이동 일정(골든패스)
		movetoINTG: "인터라켄 이동 (골든패스)",
		movetoLUZG: "루체른 이동 (골든패스)",
		movetoMONTG: "몽트뢰 이동 (골든패스)",

		// 공통 일정
		pickup: "픽업",
		movetoAPT: "공항 이동",
		APTexpress: "공항익스프레스",
		rentacar: "렌터카 자유시간",

		// OUT 일정
		departurePAR: "파리 OUT",
		departureNCE: "니스 OUT",
		departureICN: "인천 OUT",
		departureROM: "로마 OUT",
		departureVCE: "베니스 OUT",
		departureMIL: "밀라노 OUT",
		departureLON: "런던 OUT",
		departurePRG: "프라하 OUT",
		departureZRH: "취리히 OUT",
		departureGVA: "제네바 OUT",
		departureBCN: "바르셀로나 OUT",
		departurePMI: "마요르카 OUT",
		departureMAD: "마드리드 OUT",
		departureAGP: "말라가 OUT",
		departureMAL: "말라가 OUT",
		departureLIS: "리스본 OUT",
		departureOPO: "포르투 OUT",
		departureVIE: "비엔나 OUT",
		departureBUD: "부다페스트 OUT",
		departureMUC: "뮌헨 OUT",
		departureKEF: "레이캬비크 OUT",
		departureMLA: "몰타 OUT",
	

		// 프랑스 일정
		freetimePAR: "파리 자유시간",
		freetimeNCE: "니스 자유시간",
		freetimeANN: "안시 자유시간",
		freetimeCMN: "샤모니 자유시간 + 멀티패스",
		bustronomeLunch: "파리 선택일정 (버스트로놈 중식/스냅촬영)", // 파리 초이스로 코드 변경 예정 (2024-10-17)
		montStMichelTour: "몽생미셸 투어",
		louvreTour: "루브르 투어",
		parisNightTour: "파리 야경투어",
		versaillesGivernyVanGoghTour: "베르사유+지베르니+고흐마을 투어",
		QCthermespa : "QC떼르메 온천 스파",
		ezemonaco : " (에즈, 모나코)",
		grasssanitpaul : " (그라스, 생폴드방스)",
		
		
		
		//오스트리아 일정
		freetimeVIE: "비엔나 자유시간",
		freetimeSZG: "잘츠부르크 자유시간 + 시티패스",
		freetimeHALLS: "할슈타트 자유시간",
		freetimeINN: "인스부르크 자유시간 + 시티패스",
		pandorfoulet: "판도르프 아울렛 쇼핑",
		viennaTour: "비엔나 투어",
		
		
		//체코 일정
		freetimePRG: "프라하 자유시간",
		freetimeCESKY: "체스키 자유시간",
		pragueTour: "프라하 허니문투어 + 중식, 유람선",
		ceskyTour: "체스키 차량투어 + 중식",
		pragueChoice: "프라하 선택일정 (드레스덴 투어/스냅촬영/비어스파)",

		//헝가리 일정
		freetimeBUD: "부다페스트 자유시간",
		szechenyibath: "세체니 온천",
		budapestNightphoto: "야경투어&스냅",

		//독일 일정
		freetimeMUC: "뮌헨 자유시간",
		bayern: "뮌헨 근교 자유시간 + 바이애른티켓",

		//몰타 일정
		freetimeMLA: "몰타 자유시간",
		islandmaltaTour: "발레타+임디나+라밧 몰타섬 투어",
		gozocominoTour: "고조섬&코미노섬 크루즈 탑승",
		
		// 이탈리아 일정
		freetimeROM: "로마 자유시간",
		freetimeFLR: "피렌체 자유시간",
		freetimeMIL: "밀라노 자유시간",
		freetimeVCE: "베니스 자유시간",
		freetimePOSI: "포지타노 자유시간",
		southernItalyTour: "이태리 남부투어",
		stayPositano: "포지타노 숙박",
		vaticanTour: "바티칸 투어",
		romeNightTour: "로마 야경투어",
		veniceGondolaLunchTour : "베니스 허니문투어 + 곤돌라, 중식",
		QCthemespa : "QC떼르메 온천 스파",
		matera : " (마테라)",
		poliandalbe : " (폴리냐노아마레, 알베로벨로)",

		// 영국 일정
		freetimeLON: "런던 자유시간",
		nearByTour: "런던 선택일정 (근교투어/해리포터스튜디오/뮤지컬관람)",
		londonchoice: "런던 선택일정 (근교투어/해리포터스튜디오/뮤지컬관람)",

		//스페인 일정
		freetimeBCN: "바르셀로나 자유시간",
		freetimeMAD: "마드리드 자유시간",
		freetimeSVQ: "세비야 자유시간",
		freetimeGRX: "그라나다 자유시간",
		freetimeMAL: "말라가 자유시간",
		freetimeRONDA: "론다 자유시간",
		freetimeNERJA: "네르하 자유시간",
		gaudiAndFlamenco: "가우디투어 + 플라멩고쇼",
		toledosegoviaTour: "톨레도 + 세고비아 투어",
		alhanbraTour: "알함브라 투어",
		sevilleTour: "세비야 투어",
		stayKempinski: "캠핀스키 리조트 휴식",
		stayParador: "파라도르 고성호텔 휴식",

		//포르투갈 일정
		freetimeLIS: "리스본 자유시간",
		freetimeOPO: "포르투 자유시간",
		freetimePDL: "폰타델가다 자유시간",
		portwineryTour: "포트와인 와이너리 투어",
		sintraandrocaTour: "신트라+호카곶+카스카이스 투어",
		hotspringPDL: "활화산 천연 온천 스파",
		

		// 스위스 일정
		freetimeZER: "체르마트 당일치기 자유시간",
		freetimeINT: "인터라켄 자유시간",
		freetimeLUZ: "루체른 자유시간",
		freetimeADEL: "아델보덴 자유시간",
		freetimeMONT: "몽트뢰 자유시간",
		rigisMountain: "리기산 등정",
		jungfrauSpecialMeal: "융프라우 등정 + 컵라면, 삼겹살 특식",
		cambridgeSpa: "캠브리안 스파",
		honeggSpa: "빌라호네그 스파",

		// 아이슬란드 일정
		freetimeKEF: "레이캬비크 자유시간",
		reykavikchoice: "레이캬비크 선택일정 (오로라/돌고래왓칭/스카이라군)",
		goldencircleTour: "골든서클투어",
		jokulsalonTour: "남부해안 + 요쿨살론 빙하투어",
		bluelagoonKEF: "블루라군 온천 스파",



		slash: " / ",
		hyphen: " - ",
		plus: " + ",

		// 도시이동은 /로 구분
		// 투어 순서는 - 로 구분
		// 포함내용 +로 구분
	};

	// 모든 테이블의 2번째 <td>에 있는 data-city 읽고 내용을 설정
	$('.table-box td[data-city]').each(function() {
		var cityKeys = $(this).data('city').split(','); // 도시 정보를 ','로 분리
		var combinedCities = [];

		// 각 키를 순회하여 해당하는 도시명을 결합
		cityKeys.forEach(function(key) {
			if (cities[key]) {
				combinedCities.push(cities[key]);
			}
		});

		// 결합된 도시명을 셀에 표시
		$(this).find('span').text(combinedCities.join(' - '));
	});

	// 모든 테이블의 3번째 <td>에 있는 data-activity를 읽고 내용을 설정
	$('.table-box td[data-activity]').each(function() {
		var activityKeys = $(this).data('activity').split(','); // 여러 활동을 ','로 분리
		var combinedActivities = [];

		// 각 키를 순회하여 해당하는 활동 내용을 결합
		activityKeys.forEach(function(key) {
			if (activities[key]) {
				combinedActivities.push(activities[key]);
			}
		});

		// 결합된 내용을 셀에 표시
		$(this).find('span').text(combinedActivities.join(''));
	});

	$('.btn.top').click(function() {
		$('#mCSB_1_container, #mCSB_1_dragger_vertical').css('top', 'calc(-100% + 16px)');
	});
});


