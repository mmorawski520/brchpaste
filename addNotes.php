<?php
require_once "NoteClass.php";
require_once "connect.php";
$connection = mysqli_connect($host, $db_user, $db_password, $db_name);
$isHashGenerated=false;
$everyThinkOk=true;
error_reporting(0);

 
$uselessArray=array();
if(!isset($data)){
$data=json_decode($_POST["dataArray"]);}

 
$i=0;
/* creating second array of objects doesn't have any sense but I really wanted to check my php oop skills <3 */
for($i;$i<count($data);$i++){
	 
	 $data[$i]->note;
	 if($data[$i]->expiration_date!=""){
	 	array_push($uselessArray,new Note($data[$i]->note,$data[$i]->author,$data[$i]->password,$data[$i]->expiration_date,$data[$i]->title));
	 }
	 else{
	 	array_push($uselessArray,new Note($data[$i]->note,$data[$i]->author,$data[$i]->password,"",$data[$i]->title));
	 }
	
	 
}

 
while($isHashGenerated==false){
$hash=rand();
$hashResult=md5($hash);
 
$isHashExisting=mysqli_query($connection,"SELECT * FROM encoded_note_name WHERE name='$hashResult'");
if(mysqli_num_rows($isHashExisting)==0){
	$isHashGenerated=true;
}
}
$password=$uselessArray[0]->get_password();
$author=$uselessArray[0]->get_author();
$expiration_date=$uselessArray[0]->get_expiration_date();

//If name of the author doesn't exist just change it into anonnym
if($author==""||str_replace(' ', '', $author)==""){
	$author="Anonim";
}

//Checking if exist any empty title or note
for($k=0;$k<$i;$k++){
	$dc=$uselessArray[$k]->get_contents();
	$dt=$uselessArray[$k]->get_title();
	//deleting white spaces to check if there is somethin else than spaces ;-;
	if(str_replace(' ', '', $dc)=="" && (str_replace(' ', '', $dt)==""||strlen($dt)>20)){
		$everyThinkOk=false;
		print_r("note_and_title_error");
		break;
	}
	if(str_replace(' ', '', $dt)==""){
		$everyThinkOk=false;
		 print_r("title_error");
		 break;
	}
	if(str_replace(' ', '', $dc)==""){
		print_r("note_error");
		$everyThinkOk=false;
		break;
	 
	}
}

if($everyThinkOk==true){
	$password = htmlentities($password, ENT_QUOTES, "UTF-8");
	$hashedPassword=password_hash($password, PASSWORD_DEFAULT);
	if($password!="" && $password!=null){
mysqli_query($connection,"INSERT INTO encoded_note_name(name,password,author,expiration_date) values('$hashResult','$hashedPassword','$author','$expiration_date')" );}
else{
	mysqli_query($connection,"INSERT INTO encoded_note_name(name,author,expiration_date) values('$hashResult','$author','$expiration_date')" );
}
for($j=0;$j<$i;$j++){
	 
	$dc=$uselessArray[$j]->get_contents();
	$dt=$uselessArray[$j]->get_title();
	 
	mysqli_query($connection,"INSERT INTO table_of_notes VALUES('$hashResult','$dt','$dc')");
}
print_r("ok".$hashResult);
 
}
mysqli_close($connection);
?>