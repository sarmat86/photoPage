<footer>
  @if ($settings['contactEmail'])
    <a href="{{$settings['contactEmail']}}">{{$settings['contactEmail']}}</a>
  @endif
  @if ($settings['contactPhone'])
    <a href="tel:{{$settings['contactPhone']}}">tel: {{$settings['contactPhone']}}</a>
  @endif
        
<script>
  const instToken = '{{ $settings["contactPhone"] }}';
</script>        
<script src="{{asset('js\pages\main.js')}}"></script>
</footer>