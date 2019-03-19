
// 视口宽度
// console.log($(window).width());
// console.log($(window).height());
$("#popLoginBox").click(function popLoginBox() {
	$('#login').show();  //显示登陆弹窗
	$('#login-feature-left').addClass('login-active');
	$("#loginCover").css('height', document.body.clientHeight + 'px');
    $('#loginCover').css('display', 'block');
    document.documentElement.style.overflow = 'hidden'; 
});

$("#popRegisterBox").click(function popRegisterBox() {
	$('#register').show();  //显示注册弹窗
	$('#register-feature-right').addClass('login-active');	
	$('#loginCover').css('height', document.body.clientHeight + 'px');
    $('#loginCover').css('display', 'block');
    document.documentElement.style.overflow = 'hidden'; 
});

// 在注册弹窗中点击登录功能
$("#register-feature-left").click(function popLoginBox() {
	$('#register').css('display', 'none');
	$('#login').show();  //显示登陆弹窗
	$('#login-feature-left').addClass('login-active');
	$("#loginCover").css('height', document.body.clientHeight + 'px');
    $('#loginCover').css('display', 'block');
    document.documentElement.style.overflow = 'hidden'; 
});

// 在登录弹窗中点击注册功能
$("#login-feature-right").click(popRegisterBox);

function popRegisterBox() {
	$('#login').css('display', 'none');	
	$('#register').show();  //显示注册弹窗
	$('#register-feature-right').addClass('login-active');	
	$('#loginCover').css('height', document.body.clientHeight + 'px');
    $('#loginCover').css('display', 'block');
    document.documentElement.style.overflow = 'hidden'; 
}


$("#loginCover").click(function closeLoginBox() {
    $('#loginCover').css('display', 'none'); //关闭遮罩层
    $('#login').css('display', 'none');	
    $('#register').css('display', 'none');
    document.documentElement.style.overflow = 'scroll'; 
});



$(".passwordHide").on("click", ".fa-eye-slash", function () {
    $(this).removeClass("fa-eye-slash").addClass("fa-eye");
    $(this).next().attr("type", "text");
});
 
$(".passwordHide").on("click", ".fa-eye", function () {
    $(this).removeClass("fa-eye").addClass("fa-eye-slash");
    $(this).next().attr("type", "password");
});


// 最近的活动hover弹框触发
$(function () { $("[data-toggle='tooltip']").tooltip(); });

// 注册功能
$('#btn-register').click(function() {
	// 选择表单的所有input输入元素,serializeArray将创建一个“键/值”对关联数组,把所有表单输入连接起来
	var data = $("#register-form :input").serializeArray();

	// $.post是jQuery快捷方法，用于向服务器发送数据。
	// 向action这个url发送数据data，完成以后执行function，向它传入php返回的json格式数据
	$.post($("#register-form").attr('action'), data, function(json){
			// 查看json数据的值，进行条件判断并输出相应值
			// 具体看php的success函数
			if (json.status == "fail") {
				alert(json.message);
				cleanInputs();
			}else if (json.status == "success") {
				alert(json.message);
				cleanInputs();  // 提交成功后调用清空表单函数清空表单输入域
				setTimeout("location.href='../userHome/index.html'", 1500);
			}else{alert("Nothing Happened");}
		}, "json");
});

// 清空表单函数
function cleanInputs() {
	$(".userId").val('');
	$(".userName").val('');
	$(".password").val('');
}

function saveReport() { 
	// jquery 表单提交 
	$("#register-form").ajaxSubmit(function(message) { 
	// 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容 
	}); 

	// 取消表单的默认提交动作，让按钮点击事件中的jQuery代码负责发送数据
	return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转 
} 

