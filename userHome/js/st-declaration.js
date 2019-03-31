$(function() {

    // 顶部菜单栏活动资讯下拉菜单
    $("#navHide li").mouseenter(function() {
        $(this).find("ul").show();
    });
    $("#navHide li").mouseleave(function() {
        $(this).find("ul").hide();
    });

    
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

    $(".btn").click(function() {
    	// 获取活动序号
    	var stId = $(this).parent().parent().children("ul").children("li").eq(0).children("span").text();
    	// console.log($(this).parent().parent().children("ul").children(".activities-id").text());
    	// 隐藏展示区，显示申报区
    	$(this).parent().parent().parent().parent().css('display','none');
    	$("nav").css('display','none');
    	$("#st-declaration-classify").css('display','none');
    	$("#stDeclare").css('display','block');

    	$("#stDeclareDiv1").children(".st-declare-item").children("ul").children("li").eq(0).append(stId);
    });
	
});