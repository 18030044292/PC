$(function(){
/*	$(".tab-ico").hover(function() {
		$(".tab-text").eq($(this).index()).hide();
	}, function() {
		$(".tab-text").eq($(this).index()).show();
	});
		*/
		
	$(".tab-ico").each(function(i) {
		$(this).mouseover(function(event) {
			$(".tab-text").eq(i).stop().show().animate({"left":-80}, 400);
			$(".tab-ico").eq(i).stop().css({
				backgroundColor: 'red',
				
			});
			$(".tab-text").eq(i).stop().show().css({
				backgroundColor: 'red',
				
			});
		});
		$(this).mouseout(function(event) {
			$(".tab-text").eq(i).stop().hide().animate({"left":20}, 400);
			$(".tab-ico").eq(i).stop().css({
				backgroundColor: '#7a6e6e',
				
			});
			$(".tab-text").eq(i).stop().css({
				backgroundColor: '#7a6e6e',
				
			});
		});
	});
})