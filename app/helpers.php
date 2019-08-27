<?php

use App\Settings;

if (! function_exists('nameModelFormatted')) {
    function formatModelName($str)
    {
        $result = '';
        if($str === 'App\Blog'){
          $result = 'Blog';
        }elseif ($str === 'App\CmsZone') {
          $result = 'CMS';
        }
        elseif ($str === 'App\Slide') {
            $result = 'Slider';
          }

        return $result;
    }
}
if (! function_exists('formatSizeUnits')) {
function formatSizeUnits($bytes)
    {
        if ($bytes >= 1073741824)
        {
            $bytes = number_format($bytes / 1073741824, 2) . ' GB';
        }
        elseif ($bytes >= 1048576)
        {
            $bytes = number_format($bytes / 1048576, 2) . ' MB';
        }
        elseif ($bytes >= 1024)
        {
            $bytes = number_format($bytes / 1024, 2) . ' KB';
        }
        elseif ($bytes > 1)
        {
            $bytes = $bytes . ' bytes';
        }
        elseif ($bytes == 1)
        {
            $bytes = $bytes . ' byte';
        }
        else
        {
            $bytes = '0 bytes';
        }

        return $bytes;
}
}
function getPageSettings(){
    $data = Settings::all();
    $settings = [
        'instaToken' =>  $data->where('name', 'instagram_token')->first(),
        'instaLink' => $data->where('name', 'instagram_link')->first(),
        'fbLink' => $data->where('name', 'facebook_link')->first(),
        'pageTitle' => $data->where('name', 'page_title')->first(),
        'metaKeywords' => $data->where('name', 'meta_keywords')->first(),
        'metaDescription' => $data->where('name', 'meta_description')->first(),
        'additionsHead' => $data->where('name', 'additions_head')->first(),
        'additionsBodyTop' => $data->where('name', 'additions_body_top')->first(),
        'additionsBodyBottom' => $data->where('name', 'additions_body_bottom')->first(),
        'favicon' => $data->where('name', 'favicon')->first(),
        'contactPhone' => $data->where('name', 'contact_phone')->first(),
        'contactEmail' => $data->where('name', 'contact_email')->first(),

    ];
    foreach ($settings as $key => $item) {
        if ($item) {
         $settings[$key] =  $item->value;
        }else{
            $settings[$key] = '';
        }
    }
    return $settings;

}
