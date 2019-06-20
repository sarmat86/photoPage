<div class="category-list-wrapper card">
  <h5>List</h5>
  @if ( count($categories) > 0 )
  
      <table class="table-sm table-striped text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
         </thead>
         <tbody>
           @foreach ($categories as $key=>$category)
               <tr>
               <td>{{$key+1}}</td>
               <td>{{$category->name}}</td>
               <td>
                 <a href="{{route('categories.edit', $category->id)}}" class="btn btn-warning"><i class="icon-pencil"></i></a>
               <form action="{{action('CategoryController@destroy', $category->id)}}" method="POST" class="del-form">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-danger"><i class="icon-trash-empty"></i></button>
              </form>
               </td>
               </tr>
           @endforeach
         </tbody>
  </table>
  @else
  <p class="alert alert-info">There are no categories</p>
  @endif
  
</div>