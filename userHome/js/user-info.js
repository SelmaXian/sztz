$(function() {

	// 顶部菜单栏活动资讯下拉菜单
	$("#navHide li").mouseenter(function() {
		$(this).find("ul").show();
	});
	$("#navHide li").mouseleave(function() {
		$(this).find("ul").hide();
	});

	function getUserInfo() {
		$.getJSON("./php/service.php?action=getUserInfo", function(json) {

			if (json.userInfo.length > 0) {
				$('#userId').empty();
				$('#userName').empty();
				$('#passWord').empty();
				$('#gender').empty();
				$('#age').empty();
				$('#unit').empty();
				$('#grade').empty();
				$('#profession').empty();
				$('#administrativeClass').empty();
				$('#birthplace').empty();
				$('#nationality').empty();
				$("#politicalOutlook").empty();
				$('#academicSystem').empty();
				$('#identityNum').empty();
				$('#phone').empty();
				$('#eMail').empty();
				$('#address').empty();

				$.each(json.userInfo, function() {
					$('#userId').text(this["user_id"]);
					$('#userName').text(this["user_name"]);
					$('#passWord').text(this["password"]);
					$('#gender').text(this["gender"]);
					$('#age').text(this["age"]);
					$('#unit').text(this["unit"]);
					$('#grade').text(this["grade"]);
					$('#profession').text(this["profession"]);
					$('#administrativeClass').text(this["administrative_class"]);
					$('#birthplace').text(this["birthplace"]);
					$('#nationality').text(this["nationality"]);
					$("#politicalOutlook").text(this["political_outlook"]);
					$('#academicSystem').text(this["academic_system"]);
					$('#identityNum').text(this["identity_num"]);
					$('#phone').text(this["phone"]);
					$('#eMail').text(this["e_mail"]);
					$('#address').text(this["address"]);
					
				});		
			}
		});
	}

	getUserInfo();


	// 保存按钮提交
	$('#userInfoSave').click(function() {

		if ($("#firstPasswordInput").val() !== $("#secondPasswordInput").val() || 
			$("#firstPasswordInput").val() === '' || $("#secondPasswordInput").val() === '') {
			return ;
		}

		// 选择表单的所有input输入元素,serializeArray将创建一个“键/值”对关联数组,把所有表单输入连接起来
		var data = $("#user-info-form :input").serializeArray();

		// $.post是jQuery快捷方法，用于向服务器发送数据。
		// 向action这个url发送数据data，完成以后执行function，向它传入php返回的json格式数据
		$.post($("#user-info-form").text('action'), data, function(json){
				// 查看json数据的值，进行条件判断并输出相应值
				// 具体看php的success函数
				if (json.status == "fail") {
					alert(json.message);
				}else if (json.status == "success") {
					alert(json.message);
				}else{alert("再试一次..");}
			}, "json");
	});

	// 取消表单的默认提交动作，即取消默认跳转到php页面
	$("#user-info-form").submit(function() {
		return false;
	});	

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
