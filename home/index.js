
$(function() {

	// 顶部菜单栏活动资讯下拉菜单
	$("#navHide li").mouseenter(function() {
		$(this).find("ul").show();
	});
	$("#navHide li").mouseleave(function() {
		$(this).find("ul").hide();
	});

	// 视口宽度
	// console.log($(window).width());
	// console.log($(window).height());
	// 打开遮罩
	$("#popLoginBox, #popRegisterBox").click(function coverShow() {
		$("#cover").css('height', document.body.clientHeight + 'px');
	    $('#cover').show();
	    document.documentElement.style.overflow = 'hidden'; 
	});

	$("#popLoginBox").click(function popLoginBox() {
		$('#loginWrapper').show();  //显示登陆弹窗		
	});

	$("#popRegisterBox").click(function popRegisterBox() {
		$('#registerWrapper').show();  //显示注册弹窗
	});

	// 在注册弹窗中点击登录功能
	$(".register-feature").click(function popLoginBox() {
		$('#registerWrapper').hide();
		$('#loginWrapper').show();  //显示登陆弹窗
	});

	// 在登录弹窗中点击注册功能
	$(".login-feature").click(function popRegisterBox() {
		$('#loginWrapper').hide();	
		$('#registerWrapper').show();  //显示注册弹窗	 
	});

	//关闭遮罩层
	$("#cover").click(function closeLoginBox() {
	    $('#cover').hide(); 
	    $('#loginWrapper').hide();	
	    $('#registerWrapper').hide();
	    document.documentElement.style.overflow = 'scroll'; 
	});


	// 密码显示/隐藏
	$(".password-hide").on("click", ".fa-eye-slash", function () {
	    $(this).removeClass("fa-eye-slash").addClass("fa-eye");
	    $(this).next().attr("type", "text");
	});
	 
	$(".password-hide").on("click", ".fa-eye", function () {
	    $(this).removeClass("fa-eye").addClass("fa-eye-slash");
	    $(this).next().attr("type", "password");
	});


	// 最近的活动hover弹框触发
	$("[data-toggle='tooltip']").tooltip();

	// 注册功能
	$('#registerBtn').click(function() {
		// 选择表单的所有input输入元素,serializeArray将创建一个“键/值”对关联数组,把所有表单输入连接起来
		var data = $("#registerForm :input").serializeArray();

		// $.post是jQuery快捷方法，用于向服务器发送数据。
		// 向action这个url发送数据data，完成以后执行function，向它传入php返回的json格式数据
		$.post($("#registerForm").attr('action'), data, function(json){
				// 查看json数据的值，进行条件判断并输出相应值
				// 具体看php的success函数
				if (json.status == "fail") {
					alert(json.message);
					cleanInputs();
				}else if (json.status == "success") {
					alert(json.message);
					cleanInputs();  // 提交成功后调用清空表单函数清空表单输入域
					setTimeout("location.href='../userHome/index.html'", 1000);
				}else{alert("Nothing Happened");}
			}, "json");
	});

});



// 清空表单函数
function cleanInputs() {
	$(".userId").val('');
	$(".userName").val('');
	$(".password").val('');
}

function saveReport() { 
	// jquery 表单提交 
	$("#registerForm").ajaxSubmit(function(message) { 
	// 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容 
	}); 

	// 取消表单的默认提交动作，让按钮点击事件中的jQuery代码负责发送数据
	return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转 
} 

