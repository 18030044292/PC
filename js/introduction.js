$(function(){
	/*选择商品颜色变红*/
	$(".xiema").eq(0).click(function(){
		$(".xiema1").css({
			border: '2px solid red'
		});
		$(".xiema2").css({
			border: '2px solid #b8b7bd'
		});
	})
	$(".xiema").eq(1).click(function(){
		$(".xiema2").css({
			border: '2px solid red'
		});
		$(".xiema1").css({
			border: '2px solid #b8b7bd'
		});
	})
	$(".yansefenlei").eq(0).click(function(){
		$(".yanse1").css({
			border: '2px solid red'
		});
		$(".yanse2").css({
			border: '2px solid #b8b7bd'
		});
	})
	$(".yansefenlei").eq(1).click(function(){
		$(".yanse2").css({
			border: '2px solid red'
		});
		$(".yanse1").css({
			border: '2px solid #b8b7bd'
		});
	})
	/*商品加减*/
		$("#max").click(function(){
			var n=$(this).prev().val();
			var num=parseInt(n)+1;
			if(num==0){ return;}
			$(this).prev().val(num);
			});
			//减的效果
			$("#min").click(function(){
			var n=$(this).next().val();
			var num=parseInt(n)-1;
			if(num==0){ return}
			$(this).next().val(num);
			});
})