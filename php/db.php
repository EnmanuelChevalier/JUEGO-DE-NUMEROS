<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "juego";

// Conectar a la BD
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Conexión fallida: " . $conn->connect_error]));
}
?>
