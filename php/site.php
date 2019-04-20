<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
<form action="site.php" method="post">
Book Name:<input type="text" name="bname">
</form>
<?php
$book= $_POST["bname"];
if($book == "websites"){
	echo "https://ryan1.wisen.space/book";
}
?>
</body>
</html>
