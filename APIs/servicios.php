<?php
include 'bbdd.php';ç
$mysqli;
$consulta = "SELECT nombre_servicio from servicios";
$res=$mysqli->query($consulta);
?>