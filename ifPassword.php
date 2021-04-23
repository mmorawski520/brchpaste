<?php
	require_once "NoteClass.php";
	require_once "connect.php";
	$ArrayForPages=array();
	$hash=$_REQUEST['hash'];
	if(isset($_REQUEST['isPassword'])){
		$isPassword=$_REQUEST['isPassword'];
	}
	else{
		$isPassword=false;
	}
	$connection = mysqli_connect($host, $db_user, $db_password, $db_name);
	$result=mysqli_query($connection,"SELECT * FROM encoded_note_name WHERE name='$hash'");
	if(mysqli_num_rows($result)>0 && $isPassword==false){
		if($row=mysqli_fetch_assoc($result)){
			
			$password=$row["password"];
			$author=$row["author"];
			$expiration_date=$row["expiration_date"];
			if($row["password"]==null || $row["password"]==""){
				//echo "nopassword";

				$getNotesResult=mysqli_query($connection,"SELECT * FROM table_of_notes WHERE name='$hash'");
				while($record=mysqli_fetch_assoc($getNotesResult)){
					array_push($ArrayForPages,new Note($record["content"],$author,$password,$expiration_date,$record["page_title"]));


				}

				//$encodedArray=json_encode($ArrayForPages);
				print_r(json_encode($ArrayForPages));
			}
			else{
				echo "password";
			}
		}
	}
	if(mysqli_num_rows($result)>0 && $isPassword!=false){
		if($row=mysqli_fetch_assoc($result)){
			$password=$row["password"];
			$author=$row["author"];
			$expiration_date=$row["expiration_date"];
				 if(password_verify($isPassword,$password)){
				 
				//echo "nopassword";

				$getNotesResult=mysqli_query($connection,"SELECT * FROM table_of_notes WHERE name='$hash'");
				while($record=mysqli_fetch_assoc($getNotesResult)){
					array_push($ArrayForPages,new Note($record["content"],$author,$password,$expiration_date,$record["page_title"]));


				}

				//$encodedArray=json_encode($ArrayForPages);
				print_r(json_encode($ArrayForPages));
			
			}
			else{
				echo "no logged";
			}
		}
	}
	if(mysqli_num_rows($result)==0){
		echo "doesnt exists";
	}
	mysqli_close($connection);
?>