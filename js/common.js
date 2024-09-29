function isMobileTablet() {
	// 화면이 1180px 이하인 경우 모바일/태블릿으로 판단
	return window.innerWidth <= 1180;
}


$(function(){
	$(".scroll-list").mCustomScrollbar({
        scrollInertia: 300
    });
	
	$('.banner-slide .slide').slick({
		centerMode: true,
		centerPadding: '140px',
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		dots:true
	});

    $("input[id^='date']").each(function(){
		var _this = this.id;
		$('#' + _this).datepicker({
			dateFormat: "yy-mm-dd",
			changeMonth: true,
			changeYear: true,
			showMonthAfterYear: true,
			dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
		});
	});
	

	'use strict';
	


	$('.schedule ul li>a').click(function(e){	
		e.preventDefault();
		// console.log('click');
		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).siblings('div.cont').stop().slideUp(300);
		}else{
			$(this).parent().addClass('active');
			$(this).siblings('div.cont').stop().slideDown(300);
		}

	});


	


});


