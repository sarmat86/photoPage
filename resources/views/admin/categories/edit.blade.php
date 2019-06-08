@extends('layouts.admin.main')
@section('header')
Categories
@endsection
@section('content')



      <div class="row">
      <div class="col-md-6">
      <form action="{{action('CategoryController@update', $edited->id)}}" class="card" method="POST">
          @csrf
          @method('PATCH')
          <h5>Edit category</h5>
        <div class="row">
          <div class="col-md-12">
              <div class="form-group">
                  <label for="name">Name </label>
                  <input type="text" name="name" id="name_input" class="form-control" value="{{$edited->name}}">
              </div>
          </div>
         
        </div>

            <div class="form-group text-right">
                <button type="submit" class="btn btn-primary">update</button>
              </div>
          </form>
        </div>

        <div class="col-md-6">
            
          @include('admin.categories.list')
           
      </div>
    

@endsection