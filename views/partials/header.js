<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="icon" href="/img/logo.png">
    <title>mIIT-KUTE</title>
</head>

<body>
    <nav class="navbar">
        <a class="logo" href="/">
            <img src="/img/logo.png" width="200px" height="100px/" />
        </a>
        <ul class="navlinks">

            <li class="link"><a href="/">ONGOING EVENTS</a></li>
            <li class="link"><a href="/find-event">FIND EVENTS</a></li>
            <li class="link"><a href="/myevents">MY EVENTS</a></li>
            <li class="link"><a href="/community">COMMUNITY</a></li>
            <li class="link" id="logout">
                <form action="/signout?_method=DELETE" method="POST"><button id="logout">LOGOUT</button></form>
            </li>

        </ul>
    </nav>
