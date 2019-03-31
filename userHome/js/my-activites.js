$(function() {

	$("#navHide li").mouseenter(function() {
		$(this).find("ul").show();
	});
	$("#navHide li").mouseleave(function() {
		$(this).find("ul").hide();
	});

	
	$("#my-activites-classify").mouseenter(function() {
		$("#my-activites-classify").find('ul').show();
		$("#my-activites-classify li i").css('transform','rotate(90deg)');
		$("#my-activites-classify").css('color','rgb(250,125,60)');
	});
	$("#my-activites-classify").mouseleave(function() {
		$("#my-activites-classify").find('ul').hide();
		$("#my-activites-classify li i").css('transform','rotate(0)');
		$("#my-activites-classify").css('color','#9D9D9D');
	});

	$("#my-activites-display ol li").click(function () {
        // find方法寻找当前元素的后代元素
        if($(this).find("ul").is(':hidden')){
            // toggle方法在显示和隐藏状态之间切换，括号内是速率
            $(this).find("ul").toggle(500);
        }else{
            $(this).find("ul").toggle(500);
        }
    });
});