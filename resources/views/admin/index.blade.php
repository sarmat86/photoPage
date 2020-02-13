@extends('layouts.admin.main')
@section('content')
@section('header')
Dashboard
@endsection

  <div class="card">
      <h4 class="my-3">Hello {{Auth::User()->name}}!</h4>
  
  <div class="row mb-5">
    <div class="col-md-6">
      <div class="card">
        <h4 class="jumbotron text-center">
          Panel version 2.0.1
        </h4>
      </div>
    </div>
    <div class="col-md-6">
        <div class="card">
            <h4 class="jumbotron text-center">
                Placeholder
              </h4>
              <div>
                  <p>Place for other stuff</p>
                </div>
          </div>
    </div>
  </div>
</div>


@endsection