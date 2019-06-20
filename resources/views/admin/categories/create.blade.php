@extends('layouts.admin.main')
@section('header')
Categories
@endsection
@section('content')



      <div class="row">
      <div class="col-md-6">
      <form  action="{{action('CategoryController@store')}}" class="card" method="POST">
          <h5>Add new category</h5>
          @csrf
        <div class="row">
          <div class="col-md-12">
              <div class="form-group">
                  <label for="name">Name </label>
                  <input type="text" name="name" id="name_input" class="form-control">
              </div>
          </div>
         
        </div>

            <div class="form-group text-right">
                <button type="submit" class="btn btn-primary">create</button>
              </div>
          </form>
        </div>

        <div class="col-md-6">
            
          @include('admin.categories.list')
           
      </div>
    

@endsection