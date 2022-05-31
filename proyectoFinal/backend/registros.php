<!-- TeclaWin + R, abrir services.msc ClicDer en MySQL |Iniciar -->
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="miestilo.css"  >
</head>
<body>
<h1>Procesando mensaje</h1>
<?php
//Recibo todos los datos del formulario de la pagina contacto.html
$nombre  = $_POST[nombre];
$email = $_POST[email];
$tipousuario    = $_POST[tipousuario];
$direc   = $_POST[direc];
$whats  = $_POST[whats];
$asunto = $_POST[asunto];
$mensaje    = $_POST[mensaje];

echo "<h2>Estamos procesando su mensaje con número $id </h2>";
echo "id= $id nombre= $nombre email= $email tipousuario= $tipousuario direc=$direc whats=$whats asunto=$asunto y mensaje=$mensaje <br>";

function dispError()
{ return mysql_error() . "(" . mysql_errno() . ")" ; }

$db_cnx = mysqli_connect("localhost", "root","59pordiga", "clientes");
$cnx_rslt = mysqli_connect_errno();

if ($cnx_rslt == 0)
   { echo "Conexion a DB Server exitosa <br>"; }
  else
   { echo "Error de Conexion al DB Server: "  . $cnx_rslt . " " . mysqli_connect_error()
       . "<br><br>" ; exit; }


$sql_cmd = "select * from mensajes ; # where id = " . $id;
echo "selCmd = $sql_cmd <br>";		

$rslt_set = mysqli_query($db_cnx, $sql_cmd);
$nRows = mysqli_num_rows($rslt_set);
echo "Rows= " . $nRows. "<br>";

$n = 1;

while ($n <= $nRows)
  { echo "row # " . $n;
    $fila = mysqli_fetch_array($rslt_set);
	echo " Datos=" .$fila[0]. " - ". $fila[1] . " - " . $fila[2] . " - " . $fila[3] . $fila[4] . " - " . $fila[5] . " - " . $fila[6] . " - " . $fila[7] . "<br>" ; 
    $n++;
  }

$sql_cmd = "insert into mensajes values ( '$id' , '$nombre',
        '$email' , '$tipousuario' , '$direc' ,
        '$whats' , '$asunto' , '$mensaje');";
echo "insCmd = $sql_cmd <br>";	

$rslt = mysqli_query($db_cnx, $sql_cmd);
echo "InsRslt = $rslt " . mysqli_error($db_cnx) ."<br>";


echo "<h3>Gracias por su preferencia</h3>";
?>
</body>
</html>