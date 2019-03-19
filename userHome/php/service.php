<?php

// if($_POST){		

// 	if ($_POST['action'] == 'addRunner') {

// 		$fname = htmlspecialchars($_POST['txtFirstName']);
// 		$lname = htmlspecialchars($_POST['txtLastName']);
// 		$gender = htmlspecialchars($_POST['ddlGender']);
// 		$minutes = htmlspecialchars($_POST['txtMinutes']);
// 		$seconds = htmlspecialchars($_POST['txtSeconds']);
// 		if(preg_match('/[^\w\s]/i', $fname) || preg_match('/[^\w\s]/i', $lname)) {
// 			fail('Invalid name provided.');
// 		}
// 		if (empty($fname) || empty($lname)) {
// 			fail('Please enter a first and last name.');
// 		}
// 		if(empty($gender)) {
// 			fail('Please select a gender.');
// 		}
// 		if( empty($minutes) || empty($seconds) ) {
// 			fail('Please enter minutes and seconds.');
// 		}
		
// 		$time = $minutes.":".$seconds;

// 		$query = "INSERT INTO runners SET first_name='$fname', last_name='$lname', gender='$gender', finish_time='$time'";
// 		$result = db_connection($query);
		
// 		if ($result) {
// 			$msg = "Runner: ".$fname." ".$lname." added successfully" ;
// 			success($msg);
// 		} else {
// 			fail('Insert failed.');
// 		}
// 		exit;
// 	}
// }


if($_GET){

	if($_GET['action'] == 'getUserInfo') {

		$query = "select user_id,user_name,password from user_info";
		$result = db_connection($query);

		$userInfo = array();

		while ($row = mysqli_fetch_array($userInfo, MYSQLI_ASSOC)) {
			array_push($userInfo, array('user_id'=>$user_id['user_id'], 'user_name'=>$row['user_name'],
			 'password'=>$row['password']));
		}

		echo json_encode(array("userInfo"=>$userInfo));
		exit;

	}
}

	function db_connection($query) {
		$conn = mysqli_connect("127.0.0.1","admin","1251")
			OR die('Could not connect: ' . mysqli_error());
		
		mysqli_select_db($conn, "user_info");

		return mysqli_query($conn, $query);
    }

    function fail($message) {
    	die(json_encode(array('status' => 'fail', 'message' => $message)));
    }

    function success($message) {
    	die(json_encode(array('status' => 'success', 'message' => $message)));
    }

?>