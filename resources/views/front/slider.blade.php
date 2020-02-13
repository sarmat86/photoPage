@if (count($slides) > 0)
<div class="slider-wrapper">
<ul class="main-slider">
    @foreach ($slides as $slide)
    @php
    {{
      $slide4 = $slide->image->where('screen', 4)->first();
      $slide2 = $slide->image->where('screen', 2)->first();
      $slide1 = $slide->image->where('screen', 1)->first();
    }}
    @endphp
      <li class="slides" data-color="{{$slide->colorText}}">
        <img data-src="{{$slide4  ? Storage::url($slide4->path) : ''}}"  
        src4="{{$slide4  ? Storage::url($slide4->path) : ''}}" 
        src2="{{$slide2  ? Storage::url($slide2->path) : ''}}" 
        src1="{{$slide1  ? Storage::url($slide1->path) : ''}}" 
        alt="{{$slide4  ? $slide4->name : ''}}"
        >  
      </li>  
    @endforeach
</ul>
</div>   
@endif
{{--  --}}