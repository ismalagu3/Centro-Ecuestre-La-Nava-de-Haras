<?php
//error_reporting(0);
include 'bbdd.php';
$mysqli;
$consulta = "SELECT servicio, descripcion, precio from servicios where servicio is not null";
$res=$mysqli->query($consulta);
$fila=$res->fetch_assoc();

$datos = array();
while($fila){
    $servicio = $fila["servicio"];
    $datos[]=$fila;
    $fila=$res->fetch_assoc();
}
?>