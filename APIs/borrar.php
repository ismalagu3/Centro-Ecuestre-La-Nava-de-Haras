<?php
include 'bbdd.php';

$consulta = "DELETE FROM `servicios`";
$res=$mysqli->query($consulta);
header("Location: admin.php");
?>