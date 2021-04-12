<?php
class Note{
	private $contents;
	private $author;
	private $password;
	private $title;
	private $expiration_date;
	function get_title(){
		 	return $this->title;
	}
	function get_contents(){
		 	return $this->contents;
	}

	function get_author(){
			return $this->author;
	}

	function get_password(){
			return $this->password;
	}

	function get_expiration_date(){
			return $this->expiration_date;
	}

	function __construct($contents,$author,$password,$expiration_date){
		$this->contents=$contents;
		$this->author=$author;
		$this->password=$password;
		$this->expiration_date=$expiration_date;
	}
}
if(isset($_GET["password"])){
echo $password=$_GET["password"];}
else{
	$password=null;
}
echo "<br>";
echo $author=$_GET["author"];
echo "<br>";
echo $title=$_GET["title"];
echo "<br>";
echo $note=$_GET["note"];
echo "<br>";
echo $calendar=$_GET["calendar"];


?>
