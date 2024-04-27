<?php   

    $conexion = new mysqli("localhost", "root", "", "login_register_db");
    $conexion->set_charset("utf8");
    
    if($conexion){
        echo 'conectado'
    }else{
        echo 'no conectado'
    }



?>