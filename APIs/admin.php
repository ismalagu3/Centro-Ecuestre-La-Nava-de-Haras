<?php
include 'bbdd.php';
$insert = "INSERT INTO `servicios`(`nombre_servicio`, `precio`) VALUES ('test nombre','test precio')";
$res=$mysqli->query($insert);
?>