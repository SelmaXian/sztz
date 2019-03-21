
<?php
header("Content-type:text/html;charset=utf-8");

if($_POST) {
	// 判断name为action的表单元素的值（value）是否为addData
	if($_POST['action'] == 'addData') {
		
		// php的变量都由$打头
		// 将name为userId的表单元素的值（value）赋给变量$user_id
		// htmlspecialchars表示采用对数据库安全的格式转换一些特殊的HTML实体
		$user_id = $_POST['user_id'];
		$password = htmlspecialchars($_POST['password']);
		$gender = htmlspecialchars($_POST['gender']);
		$age = htmlspecialchars($_POST['age']);
		$unit = htmlspecialchars($_POST['unit']);
		$grade = htmlspecialchars($_POST['grade']);
		$profession = htmlspecialchars($_POST['profession']);
		$administrative_class = htmlspecialchars($_POST['administrative_class']);
		$birthplace = htmlspecialchars($_POST['birthplace']);
		$nationality = htmlspecialchars($_POST['nationality']);
		$political_outlook = htmlspecialchars($_POST['political_outlook']);
		$academic_system = htmlspecialchars($_POST['academic_system']);
		$identity_num = htmlspecialchars($_POST['identity_num']);
		$phone = $_POST['phone'];
		$e_mail = $_POST['e_mail'];
		$address = htmlspecialchars($_POST['address']);

		// 查询语句，用以查询数据库
		// INSERT语句还有一种写法是INSERT INTO table(date) VALUES("111");
		$query = "UPDATE user_info SET password='$password',gender='$gender',age='$age',unit='$unit',grade='$grade',profession='$profession',administrative_class='$administrative_class',birthplace='$birthplace',nationality='$nationality',political_outlook='$political_outlook',academic_system='$academic_system',identity_num='$identity_num',phone='$phone',e_mail='$e_mail',address='$address' where user_id='$user_id';";

		// 调用函数db_connection，传入查询语句$query，并将结果赋给变量$result
		$result = db_connection($query);

		// $result不为空则执行如下语句		
		if ($result) {
			$msg = "修改成功！" ;
			success($msg);
		} else {
			fail('修改失败..');
		}
		exit;
	}
}
	


if($_GET){

	if($_GET['action'] == 'getUserInfo') {

		$query = "select user_id,user_name,password,gender,age,unit,grade,profession,administrative_class,birthplace,nationality,political_outlook,academic_system,identity_num,phone,e_mail,address from user_info";
		$result = db_connection($query);

		// 定义一个新的数组userInfo
		$userInfo = array();

		// mysqli_fetch_array() 函数从结果集中取得一行作为关联数组
		// 返回根据从结果集取得的行生成的数组，如果没有更多行则返回 false
		// 遍历数组，并将结果（也是一个关联数组）赋给$row
		while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
			// 使用键访问关联数组中的元素，赋给新建数组$userInfo中的属性
			array_push($userInfo, array('user_id'=>$row['user_id'], 'user_name'=>$row['user_name'],'password'=>$row['password'], 'gender'=>$row['gender'], 'age'=>$row['age'], 'unit'=>$row['unit'], 'grade'=>$row['grade'], 'profession'=>$row['profession'], 'administrative_class'=>$row['administrative_class'], 'birthplace'=>$row['birthplace'], 'nationality'=>$row['nationality'], 'political_outlook'=>$row['political_outlook'], 'academic_system'=>$row['academic_system'], 'identity_num'=>$row['identity_num'], 'phone'=>$row['phone'], 'e_mail'=>$row['e_mail'], 'address'=>$row['address'])
			);
		}
		// 将关联数组$userInfo的值赋给userInfo，并转化为json格式的值串
		echo json_encode(array("userInfo"=>$userInfo));
		return $userInfo;

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

	return mysqli_query($conn, $query);
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