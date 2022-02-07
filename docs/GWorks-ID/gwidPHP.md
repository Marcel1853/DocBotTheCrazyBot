---
id: GworksIdPHP
title: How to use GWorks-ID in PHP
---


### How to use GWorks-ID in PHP ?

```PHP
//First let check if user is logged in. Here we use PHP-Sessions
session_start();

//Check if the callback includes the token
if (isset($_GET['code'])) {
    $code = $_GET['code'];
    $userData = file_get_contents("https://id.g-works.eu/v2/userData/?token=$code"); //Get user information from API


    $userData = json_decode($userData); //Format to JSON
    $_SESSION['CODE'] = $code; //Use the token as session to call it every time and everywhere

    header("Location: http://your-nice-page.example/"); //Redirect the user to the main page if the user is logged in
}else{
    //Redirect user to Authorization page if the user isn't logged in
    header('Location: https://id.g-works.eu/auth/?clientID=(App ID)&redirectURI=(Redirect URI)'); //Redirect URI is the url on your website to this page
}

```

> :warning: **Before you can test it**: Replace `(App ID)` with the numeric ID from your project from <a href="https://id.g-works.eu/panel/applications/">here</a>! After this replace `(Redirect URI)` with the redirect URI you set at your project at <b>GWorks ID</b>!
