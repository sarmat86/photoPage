<nav class="admin-nav">
    <ul class="nav">
    <li class="{{request()->routeIs('admin') == 1 ? 'active' : '' }}">
            <a href="{{route('admin')}}"><i class="icon-gauge"></i>Pulpit</a>
        </li>
        <li><a href="#"><i class="icon-wrench"></i>Zarządzanie stroną</a>
            <ul class="nav nav-second-lvl">
                <li class="{{request()->routeIs('media.index') == 1 ? 'active' : '' }}">
                    <a href="{{route('media.index')}}">Media</a>
                </li>
            </ul>
        </li>
        <li><a ><i class="icon-pencil"></i>Strefy CMS</a>
            <ul class="nav nav-second-lvl">
                <li class="{{request()->routeIs('CmsZone.create') == 1 ? 'active' : '' }}">
                <a href="{{route('CmsZone.create')}}">Dodaj strefę</a></li>
            <li class="{{request()->routeIs('CmsZone.index') == 1 ? 'active' : '' }}">
                <a href="{{route('CmsZone.index')}}">Lista CMS</a>
            </li>
            </ul>
        </li>
        <li><a href="#"><i class="icon-pencil"></i>Blog</a>
            <ul class="nav nav-second-lvl">
                <li class="{{request()->routeIs('blog.create') == 1 ? 'active' : '' }}">
                <a href="{{route('blog.create')}}">Utwórz post</a></li>
                <li class="{{request()->routeIs('blog.index') == 1 ? 'active' : '' }}">
                <a href="{{route('blog.index')}}">Lista postów</a>
                </li>
            <li class="{{request()->routeIs('categories.create') == 1 ? 'active' : '' }}">
                <a href="{{route('categories.create')}}">Kategorie</a>
            </li>
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
