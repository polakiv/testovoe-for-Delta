<?php
header('Content-Type: application/json');
 
$data = json_decode(file_get_contents("php://input"), true);
 
$mysqli = new mysqli("localhost", "bairam", "YkQia4km6RgE", "bairam");
 
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

$query = $data['query'];
$result = $mysqli->query($query);
 
$dataArray = array();
while ($row = $result->fetch_assoc()) {
    $dataArray[] = $row;
} 
$mysqli->close();
 
echo json_encode($dataArray); 
