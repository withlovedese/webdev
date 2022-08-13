<?php

//connect to a database
$conn = mysqli_connect('localhost:3306', 'root','','ajaxtest');

$query = "SELECT * FROM users";

$result = mysqli_query($conn, $query);

//Fetch data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);