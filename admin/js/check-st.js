$(function() {
	$("#stClassify").mouseenter(function() {
		$("#stClassify").find('ul').show();
		$("#stClassify li i").css('transform','rotate(90deg)');
		$("#stClassify").css('color','rgb(250,125,60)');
	});
	$("#stClassify").mouseleave(function() {
		$("#stClassify").find('ul').hide();
		$("#stClassify li i").css('transform','rotate(0)');
		$("#stClassify").css('color','#9D9D9D');
	});
});