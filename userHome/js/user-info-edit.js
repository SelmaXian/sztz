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
				$('#userId').attr('value','');
				$('#userName').attr('value','');
				$('#firstPasswordInput').attr('value','');
				$('#secondPasswordInput').attr('value','');
				$('#gender').val('');
				$('#age').attr('value','');
				$('#unit').attr('value','');
				$('#grade').attr('value','');
				$('#profession').attr('value','');
				$('#administrativeClass').attr('value','');
				$('#birthplace').attr('value','');
				$('#nationality').val('');
				$('#politicalOutlook').val('');
				$('#academicSystem').val('');
				$('#identityNum').attr('value','');
				$('#phone').attr('value','');
				$('#eMail').attr('value','');
				$('#address').attr('value','');

				$.each(json.userInfo, function() {

					$('#userId').attr('value', this["user_id"]);
					$('#userName').attr('value', this["user_name"]);
					$('#firstPasswordInput').attr('value', this["password"]);
					$('#secondPasswordInput').attr('value', this["password"]);
					$('#gender').val(this['gender']);
					$('#age').attr('value', this["age"]);
					$('#unit').attr('value', this["unit"]);
					$('#grade').attr('value', this["grade"]);
					$('#profession').attr('value', this["profession"]);
					$('#administrativeClass').attr('value', this["administrative_class"]);
					$('#birthplace').attr('value', this["birthplace"]);
					$('#nationality').val(this["nationality"]);
					$("#politicalOutlook").val(this["political_outlook"]);
					$('#academicSystem').val(this["academic_system"]);
					$('#identityNum').attr('value', this["identity_num"]);
					$('#phone').attr('value', this["phone"]);
					$('#eMail').attr('value', this["e_mail"]);
					$('#address').attr('value', this["address"]);
					
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
		$.post($("#user-info-form").attr('action'), data, function(json){
				// 查看json数据的值，进行条件判断并输出相应值
				// 具体看php的success函数
				if (json.status == "fail") {
					alert(json.message);
				}else if (json.status == "success") {
					alert(json.message);
				}else{toastr.success("再试一次...");}
			}, "json");
	});

	// 取消表单的默认提交动作，即取消默认跳转到php页面
	$("#user-info-form").submit(function() {
		return false;
	});	


	// 密码显示/隐藏
	$(".passwordHide").on("click", ".fa-eye-slash", function () {
	    $(this).removeClass("fa-eye-slash").addClass("fa-eye");
	    $(this).next().attr("type", "text");
	});
	 
	$(".passwordHide").on("click", ".fa-eye", function () {
	    $(this).removeClass("fa-eye").addClass("fa-eye-slash");
	    $(this).next().attr("type", "password");
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
