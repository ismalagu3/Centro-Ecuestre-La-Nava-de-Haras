<?php
$servicio = $_POST["servicio"] ?? null;
$descripcion = $_POST["descripcion"] ?? null;
$precio = $_POST["precio"] ?? null;
include 'bbdd.php';

$insert = "INSERT INTO `servicios` (`servicio`, `descripcion`, `precio`) VALUES ('$servicio','$descripcion','$precio')";
$res=$mysqli->query($insert);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test INSERT</title>
</head>
<body>
    <form action="../APIs/admin.php" method="post">
        <label for="servicio">servicio</label>
        <input type="text" name="servicio">
        <label for="descripcion">descripcion</label>
        <input type="text" name="descripcion">
        <label for="precio">precio</label>
        <input type="number" name="precio">
        <button>INSERT</button>
    </form>

    <form action="../APIs/borrar.php" method="post">
        <p>Borrar datos</p>
        <button>BORRAR</button>
    </form>
</body>
</html>