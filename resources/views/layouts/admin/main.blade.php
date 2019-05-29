<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/admin.css')}}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <title>Admin Panel</title>
</head>

<body class="admin-panel">
    <div class="wrapper">
        <div class="sidebar">
            <div class="logo-wrapper">
            <a href="{{route('home')}}">Home</a>
            </div>
            @include('layouts.admin.nav')
        </div>
        <div class="main">
            <div class="top-bar">
                <div class='sidebar-toggle-wrapper'>
                    <button class="hamburger hamburger--arrowturn" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div class="user-config">
                  @if (Auth::check())
                  <div class="user-options">{{Auth::User()->name}} <i class="icon-angle-down"></i>
                    
                    <div class="dropdown-user">
                    <a href="{{route('admin.edit')}}">Ustawienia konta</a>
                        <a href="#" class="" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Wyloguj</a>
                      </div>
                  
                  </div>
                  <a href='#' class="logout" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="icon-power"></i></a>
                  <form id="logout-form" action="{{route('logout')}}" method="POST" style="display: none;">
                      @csrf
                  </form>
                  
                  @endif
                    
                </div>
            </div>
            <div class="content-wrapper container-fluid">
                @include('layouts.info')
                @yield('content')
            </div>
        </div>
    </div>

    <footer>

    </footer>

    <script src="{{asset('js/libs.js')}}"></script>

</body>

</html>
