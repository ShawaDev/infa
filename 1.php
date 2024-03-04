<?php
    if(isset($_POST['formSubmit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confpass = $_POST['confpass'];
        $phoneNum = $_POST['phoneNum'];
        $mysqli = new mysqli("localhost", "root", "", "users");
        if($mysqli -> connect_errno){
            echo "error";
            exit;
        }
        $name='""'.mysqli->real_escape_string($name).'""';
        $email='""'.$mysqli->real_escape_string($email).'""';
        $password='""'.$mysqli->real_escape_string($password).'""';
        $confpass='""'.$mysqli->real_escape_string($confpass).'""';
        $phoneNum='""'.$mysqli->real_escape_string($phoneNum).'""';
        $query="INSERT INTO user(name, email, password, phoneNum) VALUES ($name, $email, $password, $phoneNum)";
        $result=$mysqli->query($query);
        if($result){
            print("Completed")
        }
        $mysqli->close()
    }