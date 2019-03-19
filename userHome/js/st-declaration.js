$(function() {
	$("#st-declaration-classify").mouseenter(function() {
		$("#st-declaration-classify").find('ul').show();
		$("#st-declaration-classify li i").css('transform','rotate(90deg)');
		$("#st-declaration-classify").css('color','rgb(250,125,60)');
	});
	$("#st-declaration-classify").mouseleave(function() {
		$("#st-declaration-classify").find('ul').hide();
		$("#st-declaration-classify li i").css('transform','rotate(0)');
		$("#st-declaration-classify").css('color','#9D9D9D');
	});

	$("#st-declaration-display ol li").click(function () {
        // find方法寻找当前元素的后代元素
        if($(this).find("ul").is(':hidden')){
            // toggle方法在显示和隐藏状态之间切换，括号内是速率
            $(this).find("ul").toggle(500);
        }else{
            $(this).find("ul").toggle(500);
        }
    });
	
});