$(function() {
	total = document.documentElement.clientHeight;
	// document.getElementById("container").style.height=total+"px";
	$("#page-wrapper").css('height', total + "px");

	// var myTime = new Date().toLocaleString();
	// document.getElementById("user-info").innerHTML = myTime;

	getTime();
	$("#date").html(new Date().toLocaleDateString());
	setInterval("getTime()",1000); //每隔一秒运行一次

});

$(".head-slide-wrapper").mouseenter(function() {
	// $(".head-container").css('display','flex');
	$(".head-container").slideDown(100);
});
$(".head-slide-wrapper").mouseleave(function() {
	// $(".head-container").css('display','none');
	$(".head-container").slideUp(100);
});


//取得系统当前时间
function getTime(){
	var myDate = new Date();
	var hours = myDate.getHours(); // 小时
	var minutes = myDate.getMinutes(); // 分钟
	var seconds = myDate.getSeconds(); // 秒钟

	$("#time").html(hours + ":" + minutes + ":" + seconds); //将值赋给div
	
}
