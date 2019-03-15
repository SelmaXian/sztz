<?php
header("Content-type:text/html;charset=utf-8");

if($_POST) {
	// 判断name为action的表单元素的值（value）是否为addData
	if($_POST['action'] == 'addData') {
		
		// php的变量都由$打头
		// 将name为userId的表单元素的值（value）赋给变量$user_id
		// htmlspecialchars表示采用对数据库安全的格式转换一些特殊的HTML实体
		$user_id = htmlspecialchars($_POST['userId']);
		$user_name = $_POST['userName'];
		$password = htmlspecialchars($_POST['password']);

		// 查询语句，用以查询数据库
		// INSERT语句还有一种写法是INSERT INTO table(date) VALUES("111");
		$query = "INSERT INTO user_info SET user_id='$user_id', user_name='$user_name', password='$password'";

		// 调用函数db_connection，传入查询语句$query，并将结果赋给变量$result
		$result = db_connection($query);

		// $result不为空则执行如下语句
		if($result == 1) {
			$msg = "注册成功！页面将在点击确认2s后自动跳转...";
			// 调用success函数，将变量$msg的值作为实参传入，下同
			success($msg);
		} else {
			fail($result);
		}
		exit;
		}
	}
	
// 连接数据库的函数，重要！$query是（查询语句）形参
function db_connection($query) {
	// 连接数据库，并将连接结果赋给变量$conn
	$conn = mysqli_connect("127.0.0.1", "admin", "1251")
		OR die("MYSQL数据库连接失败: ".mysqli_error());
	// 选择连接到的具体数据库
	mysqli_select_db($conn,"sztz_db");
	// 设置数据库编码格式为utf8
	mysqli_set_charset($conn, 'utf8');

	if(mysqli_query($conn, $query)) return 1;
	//返回查询语句执行后的结果，一般通过mysqli_fetch_array以关联数组呈现
	else return "该账号已被注册";
}

// fail函数定义了提交数据失败后要输出的值，于if($result)处调用
function fail($message) {
	// json_encode的作用是格式化输出，将关联数组转换为JSON编码的值串
	// 因此JS中可以直接通过点记法json.status/json.message访问数据
	die(json_encode(array('status'=>'fail', 'message'=>$message)));
}

// success函数定义了提交数据失败后要输出的值，于$result处调用
function success($message) {
	die(json_encode(array('status'=>'success','message'=>$message)));
}

?>
