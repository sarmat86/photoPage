<!DOCTYPE html>
<html lang="{{App::getLocale()}}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta keywords="{{ $settings['metaKeywords'] }}">
  <meta name="description" content="{{ $settings['metaDescription'] }}">
  <title>{{ $settings['pageTitle'] }}</title>
<link rel="shortcut icon" type="image/jpg" href="{{Storage::url($settings['favicon'])}}">
  <link rel="stylesheet" href="{{asset('css\main.css')}}">
   {{-- SCRIPTS --}}
   {!! $settings['additionsHead'] !!}
</head>

<body>
  {!! $settings['additionsBodyTop'] !!}
  <div id="viewType" style="display: none;"></div>
  @yield('content')
  @include('front.footer')
  {!! $settings['additionsBodyBottom'] !!}
</body>

</html>