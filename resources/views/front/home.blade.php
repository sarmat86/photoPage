@extends('layouts.pages.main')
@section('content')
<div id="home_page" class="page-container">
    <div class="main-section">
        <div class="logo">
            
        </div>
        <div id="btn-wrapper">
            <button id="humb-btn" class="humb-btn btn-style" type="button" name="button"></button>
        </div>
        @include('front.slider')
        @include('front.navigation')
    </div>
    
    <section id="main-content" class="main-content container">
       
    </section>
    <section id="social-banner" class="social-banner">
       
        
    </section>
  
     {{-- @include('front.homeGallerySection') --}}
        
        
    <section id="insta" class="insta container-fluid">
        <h2 id="insta-title">Instagram</h2>
        <div id="instafeed" class="row blog-section">
        </div>
    </section>

    <section id="contact" class="contact">
        <h2>Kontakt</h2>
        <div class="contact-txt-wrap">
            {!!isset($cmsZones['zone3']) ? $cmsZones['zone3']  : ''!!}
        </div>
        {{-- <i href="{{route('contact')}}"><i class="icon-mail"></i></i> --}}
    </section>    
     
</div>
@endsection