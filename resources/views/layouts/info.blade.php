@if (count($errors->all()) > 0)
<div>
    <div class="errors alert alert-danger text-center ">
        @foreach ($errors->all() as $error)
    <p>{{$error}}</p>
        @endforeach
    </div>
</div>
@endif
@if (Session::has('status'))
<div>

        <div class="errors alert alert-success text-center">{{Session::get('status')}}</div>

</div>

@endif
