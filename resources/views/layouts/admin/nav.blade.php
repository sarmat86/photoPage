<nav class="admin-nav">
    <ul class="nav">
    <li class="{{request()->routeIs('admin') == 1 ? 'active' : '' }}">
            <a href="{{route('admin')}}"><i class="icon-gauge"></i>Dashboard</a>
        </li>
        <li><a href="#"><i class="icon-wrench"></i>Page settings</a>
            <ul class="nav nav-second-lvl">
                <li class="{{request()->routeIs('media.index') == 1 ? 'active' : '' }}">
                    <a href="{{route('media.index')}}">Media</a>
                </li>
                <li class="{{request()->routeIs('editSettings') == 1 ? 'active' : '' }}">
                        <a href="{{route('editSettings')}}">Edit settings</a>
                </li>
                <li class="{{request()->routeIs('editAdditions') == 1 ? 'active' : '' }}">
                        <a href="{{route('editAdditions')}}">Scripts & CSS</a>
                </li>
            </ul>
        </li>
        <li><a ><i class="icon-pencil"></i>Slider</a>
            <ul class="nav nav-second-lvl">
                <li class="{{request()->routeIs('slides.create') == 1 ? 'active' : '' }}">
                <a href="{{route('slides.create')}}">Create slide</a></li>
            <li class="{{request()->routeIs('slides.index') == 1 ? 'active' : '' }}">
                <a href="{{route('slides.index')}}">Slides list</a>
            </li>
            </ul>
        </li>
        <li><a ><i class="icon-pencil"></i>CMS zones</a>
            <ul class="nav nav-second-lvl">
                <li class="{{request()->routeIs('CmsZone.create') == 1 ? 'active' : '' }}">
                <a href="{{route('CmsZone.create')}}">Create</a></li>
            <li class="{{request()->routeIs('CmsZone.index') == 1 ? 'active' : '' }}">
                <a href="{{route('CmsZone.index')}}">CMS list</a>
            </li>
            </ul>
        </li>
        <li><a href="#"><i class="icon-pencil"></i>Blog</a>
            <ul class="nav nav-second-lvl">
                <li class="{{request()->routeIs('blog.create') == 1 ? 'active' : '' }}">
                <a href="{{route('blog.create')}}">Create post</a></li>
                <li class="{{request()->routeIs('blog.index') == 1 ? 'active' : '' }}">
                <a href="{{route('blog.index')}}">List of posts</a>
                </li>
            <li class="{{request()->routeIs('categories.create') == 1 ? 'active' : '' }}">
                <a href="{{route('categories.create')}}">Categories</a>
            </li>
            </ul>
        </li>
        <li><a href="#"><i class="icon-picture"></i>Gallery</a>
            <ul class="nav nav-second-lvl">
                <li class="{{request()->routeIs('gallery.create') == 1 ? 'active' : '' }}">
                    <a href="{{route('gallery.create')}}">Create</a>
                </li>
                <li class="{{request()->routeIs('gallery.index') == 1 ? 'active' : '' }}">
                    <a href="{{route('gallery.index')}}">List of galleries</a>
                </li>
            </ul>
        </li>
        <li><a href="#"><i class="icon-users"></i>Customer zone</a>
            <ul class="nav nav-second-lvl ">
                <li class="{{request()->routeIs('customerZone.create') == 1 ? 'active' : '' }}">
                    <a href="{{route('customerZone.create')}}">Create</a>
                </li>
                <li class="{{request()->routeIs('customerZone.index') == 1 ? 'active' : '' }}">
                    <a href="{{route('customerZone.index')}}">List of zones</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
