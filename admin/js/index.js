$(function() {
	$("#navHide li").mouseenter(function() {
		$(this).find("ul").show();
	});
	$("#navHide li").mouseleave(function() {
		$(this).find("ul").hide();
	});

	
});

// div滚动吸附
// .float {
// position:fixed;
// top:0px;
// }

// window.onscroll=function(){
// if ($(document).scrollTop() >60)//这个60是距离顶部高度
// {
// $(".div").addClass('float');//
// }else{
// $(".div").removeClass('float');
// }