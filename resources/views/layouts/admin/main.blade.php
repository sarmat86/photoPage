<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="{{asset('css/admin.css')}}"> 
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
                    <button id="sidebar_switcher" class="hamburger hamburger--arrowturn" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div class="user-config">
                  @if (Auth::check())
                  <div class="user-options">{{Auth::User()->name}} <i class="icon-angle-down"></i>
                    
                    <div class="dropdown-user">
                    <a href="{{route('admin.edit')}}">Account settings</a>
                        <a href="#" class="" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>
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
                    <div class="row">
                <div class="col-md-12">
                   
                <header>
                    <h4> 
                        @yield('header') 
                    </h4>
                  </header>
                  @include('layouts.info')
                @yield('content')
            </div>
        </div>
            </div>
        </div>
    </div>

    <footer>

    </footer>
 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="{{asset('js/admin/libs.js')}}"></script>
    <script src="{{asset('js/admin/admin.js')}}"></script>

</body>

</html>
