<nav class="admin-nav">
    <ul class="nav">
    <li class="{{request()->routeIs('admin') == 1 ? 'active' : '' }}">
            <a href="{{route('admin')}}"><i class="icon-gauge"></i>Pulpit</a>
        </li>
        <li><a href="#"><i class="icon-wrench"></i>Zarządzanie stroną</a>
        </li>
        <li><a href="#"><i class="icon-pencil"></i>Blog</a>
            <ul class="nav nav-second-lvl">
                <li><a href="#">Utwórz post</a></li>
                <li><a href="#">Lista postów</a></li>
            </ul>
        </li>
        <li><a href="#"><i class="icon-picture"></i>Galeria</a>
            <ul class="nav nav-second-lvl">
                <li><a href="#">Utwórz galerię</a></li>
                <li><a href="#">Lista galeri</a></li>
            </ul>
        </li>
        <li><a href="#"><i class="icon-users"></i>Strefa klienta</a>
            <ul class="nav nav-second-lvl ">
                <li><a href="#">Utwórz strefę</a></li>
                <li><a href="#">Lista stref</a></li>
            </ul>
        </li>
    </ul>
</nav>
