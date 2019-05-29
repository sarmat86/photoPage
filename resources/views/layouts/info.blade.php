@if (count($errors->all()) > 0)
<div class="errors alert alert-danger">
    @foreach ($errors->all() as $error)
<p>{{$error}}</p>
    @endforeach
</div>
@endif
@if (Session::has('status'))
<div class="errors alert alert-success">{{Session::get('status')}}</div>
@endif
