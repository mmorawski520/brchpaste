<?php
class Note{
	public $contents;
	public $author;
	public $password;
	public $title;
	public $expiration_date;
	/*These methods were useful when variables were still private */
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

	function __construct($contents,$author,$password,$expiration_date,$title){
		$this->contents=$contents;
		$this->author=$author;
		$this->password=$password;
		$this->expiration_date=$expiration_date;
		$this->title=$title;
	}
}
?>