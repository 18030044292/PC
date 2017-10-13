$(function(){
	function funScroll(){
		var top=$(document).scrollTop();
		var targetTop=$(".miaosha").offset().top;
	/*	var targeTop=$(".miaosha").offset().top;
		var targeBottom=$(".miaosha").height();*/
		if(top<targetTop){
			$("#header_nav_top").fadeOut();
			/*$(".").fadeOut();*/
		}
		if(top>=targetTop){
				$("#header_nav_top").fadeIn();
		/*	$(".").fadeOut();*/
		}
	}
	$(window).scroll(funScroll);
})