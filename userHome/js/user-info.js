$(function() {

	function getUserInfo() {
		$.getJSON("../php/service.php?action=getUserInfo", function(json) {
			if (json.userInfo.length > 0) {
				$('#user-info-display>tr>td').eq(0).empty();

				$.each(json.userInfo, function() {
					var info = this["user_id"];
					// if(this['gender'] == "m" ){
					// 	$('#finishers_m').append( info );
					// }else if (this['gender'] == "f" ){
					// 	$('#finishers_f').append( info );
					// }else{ } 
					
					$('#user-info-display>tr>td').append( info );
					
				});				
			}
		});
	}

	getUserInfo();

});

	// total = document.documentElement.clientHeight;
	// // document.getElementById("container").style.height=total+"px";
	// $().css('height', total + "px");

	// getTime();
	// $("#date").html(new Date().toLocaleDateString());
	// setInterval("getTime()",1000); //每隔一秒运行一次

// $("#scoll").mouseenter(function() {
// 	// $(".head-container").css('display','flex');
// 	$(".head-container").slideDown(100);
// });
// $(".head-slide-wrapper").mouseleave(function() {
// 	// $(".head-container").css('display','none');
// 	$(".head-container").slideUp(100);
// });


//取得系统当前时间
// function getTime(){
// 	var myDate = new Date();
// 	var hours = myDate.getHours(); // 小时
// 	var minutes = myDate.getMinutes(); // 分钟
// 	var seconds = myDate.getSeconds(); // 秒钟

// 	$("#time").html(hours + ":" + minutes + ":" + seconds); //将值赋给div
	
// }
