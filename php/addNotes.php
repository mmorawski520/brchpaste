<?php
error_reporting(0);
require_once "NoteClass.php";
require_once "connect.php";
require_once "getIp.php";
$isHashGenerated = false;
$IsPasswordCorrect = true;
$everyThinkOk = true;
$ip = getIP();

$howManyNotesToday = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM encoded_note_name WHERE date_added=current_date()"));
$uselessArray = array();

if (!isset($data))
{
    $data = json_decode($_POST["dataArray"]);
}

$i = 0;
/* creating second array of objects doesn't have any sense but I really wanted to check my php oop skills */
for ($i;$i < count($data);$i++)
{
    $data[$i]->note;
    if ($data[$i]->expiration_date != "")
    {
        array_push($uselessArray, new Note($data[$i]->note, $data[$i]->author, $data[$i]->password, $data[$i]->expiration_date, $data[$i]->title));
    }
    else
    {
        array_push($uselessArray, new Note($data[$i]->note, $data[$i]->author, $data[$i]->password, "", $data[$i]->title));
    }
}

while ($isHashGenerated == false)
{
    $hash = rand();
    $hashResult = md5($hash);
    $isHashExisting = mysqli_query($connection, "SELECT * FROM encoded_note_name WHERE name='$hashResult'");
    if (mysqli_num_rows($isHashExisting) == 0)
    {
        $isHashGenerated = true;
    }
}

$password = $uselessArray[0]->get_password();
$author = $uselessArray[0]->get_author();
$expiration_date = $uselessArray[0]->get_expiration_date();

//If name of the author doesn't exist just change it into anonnym
if ($author == "" || str_replace(' ', '', $author) == "")
{
    $author = "Anonim";
}

//Checking if exist any empty title or note
for ($k = 0;$k < $i;$k++)
{
    $dc = $uselessArray[$k]->get_contents();
    $dt = $uselessArray[$k]->get_title();
    //deleting white spaces to check if there is somethin else than spaces 
    if (str_replace(' ', '', $dc) == "" && (str_replace(' ', '', $dt) == "" || strlen($dt) > 20))
    {
        $everyThinkOk = false;
        print_r("note_and_title_error");
        break;
    }
    if (strlen($dt) > 20)
    {
        echo "to_long_title";
        $everyThinkOk = false;
        exit();
    }
    if (strlen($dt) < 3)
    {
        echo "to_short_title";
        $everyThinkOk = false;
        exit();
    }
    if (strlen($dc) < 20)
    {
        echo "to_short_note";
        $everyThinkOk = false;
        exit();
    }
    if (strlen($dc) > 3000)
    {
        echo "to_long_note";
        $everyThinkOk = false;
        exit();
    }
    if (str_replace(' ', '', $dt) == "")
    {
        $everyThinkOk = false;
        print_r("title_error");
        break;
    }
    if (str_replace(' ', '', $dc) == "")
    {
        print_r("note_error");
        $everyThinkOk = false;
        break;

    }
    if ($howManyNotesToday > 5)
    {
        $everyThinkOk = false;
        print_r("too_much_notes_today");
        break;
    }
    if ($i > 10)
    {
        $everyThinkOk = false;
        print_r("too_much_notes");
        break;
    }
}
if ($everyThinkOk == true)
{
    $password = htmlentities($password, ENT_QUOTES, "UTF-8");
    if ($password != "")
    {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    }
    else
    {
        $hashedPassword = "";
    }
    if ($password != "" && $password != null)
    {
        if (strlen($password) > 30)
        {
            echo "to_long_password";
            $IsPasswordCorrect = false;
            exit();
        }
        if (strlen($password) < 8)
        {
            echo "to_short_password";
            $IsPasswordCorrect = false;
            exit();
        }
    }
    if ($IsPasswordCorrect == true)
    {
        mysqli_query($connection, "INSERT INTO encoded_note_name(name,password,author,expiration_date,ip) values('$hashResult','$hashedPassword','$author','$expiration_date','$ip')");
    }
    else
    {
        mysqli_query($connection, "INSERT INTO encoded_note_name(name,author,expiration_date,ip) values('$hashResult','$author','$expiration_date','$ip')");
    }
    for ($j = 0;$j < $i;$j++)
    {
        $dc = $uselessArray[$j]->get_contents();
        $dt = $uselessArray[$j]->get_title();
        mysqli_query($connection, "INSERT INTO table_of_notes VALUES('$hashResult','$dt','$dc')");
    }
    print_r("ok" . $hashResult);
}
mysqli_close($connection);
?>
