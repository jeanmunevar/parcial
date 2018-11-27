<?php
$servidor = 'localhost';
$usuario = 'root';
$password = '';
$bd = 'parcial';


$conexion = mysqli_connect($servidor, $usuario, $password, $bd);

if(mysqli_connect_errno()){
    echo "Error al conectar ". mysqli_connect_error();
}
