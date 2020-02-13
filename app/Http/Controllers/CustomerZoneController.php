<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\GalleryPhoto;
use App\Photo;
use Illuminate\Support\Facades\Validator;
use App\CustomerZone;

use Storage;
use Illuminate\Http\UploadedFile;
use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Handler\AbstractHandler;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;


class CustomerZoneController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $customerToDelete = CustomerZone::where('autodelete', 1)->get();
        foreach ($customerToDelete as $item) {
            $customerPhotos = $item->galleryPhoto;

                foreach ($customerPhotos as  $customerPhoto) {
                    GalleryPhoto::findOrFail($customerPhoto->id)->delete();
                }
           $item->delete();
        }
        $customerZones  = CustomerZone::orderBy('position', 'desc')->get();
        return view('admin.customerZone.index', compact('customerZones'));
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $customerZone = CustomerZone::create([
            'title' => 'me & you',
            'password' => str_random(8),
            'file' => null
        ]);
        return view('admin.customerZone.create', compact('customerZone'));

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $customerZone  = CustomerZone::findOrFail($id);
        $fileName = substr($customerZone->file, strpos($customerZone->file, "/") + 1);
        $fileName = substr($fileName, strpos($fileName, "_") + 1);
        $customerZonePhotos = $customerZone->galleryPhoto->sortByDesc('position');
        return view('admin.customerZone.edit', compact('customerZone', 'customerZonePhotos', 'fileName'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
             'password' => 'required|min:6|alpha_num',          
                 
        ]);
        if ($validator->fails()) {
            return redirect()->route('customerZone.edit', $id)
                        ->withErrors($validator)
                        ->withInput();
        }

        $customerZone = CustomerZone::findOrFail($id);

        $input = $request->all();
        if ($file_photo = $request->file('file_thumbnail')) {
            if ($customerZone->photo_id) {
               $currentPhoto = Photo::findOrFail($customerZone->photo_id);
               if (Storage::exists($currentPhoto->path)) {
                Storage::delete($currentPhoto->path);
            }
                $currentPhoto->delete();
            }

            $name =  time().'_'.$file_photo->getClientOriginalName();
            $size = $file_photo->getClientSize();
            $path = $file_photo->storeAs('gallery_photos', $name);
            
            $photo = Photo::create([
                'path' => $path,
                'size' => $size,
                'name' => $input['thumbnail']
            ]);
            $input['photo_id'] = $photo->id;
        }
   
        $input['autodelete'] = 0;
        if ($customerZone->autodelete !== 0) {
            $input['position'] = $id;
        }
       
        $customerZone->update($input);

        $request->session()->flash('status', 'Customer Zone has been saved');

        return redirect()->route('customerZone.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request) 
    {
        $customerZone = CustomerZone::findOrFail($id);

        $customerZonePhotos = $customerZone->galleryPhoto;

        foreach ($customerZonePhotos as  $customerZonePhoto) {
            GalleryPhoto::findOrFail($customerZonePhoto->id)->delete();
        }
        if ($customerZone->file) {
            if (Storage::disk('ftp')->exists($customerZone->file)) {
             Storage::disk('ftp')->delete($customerZone->file);
         }
         }
        $customerZone->delete();
        $request->session()->flash('status', 'Customer Zone has been deleted');
       return redirect()->route('customerZone.index');
    }

    
    public function deleteFile($id){
        $customerZone = CustomerZone::findOrFail($id);
            if ($customerZone->file) {
               if (Storage::disk('ftp')->exists($customerZone->file)) {
                Storage::disk('ftp')->delete($customerZone->file);
            }
            $customerZone->update([
                'file' => null
            ]);
            return response()->json([
                'success' => true,
                'deleted' => $id,
            ]);
    }
}
    

/* pionl/laravel-chunk-upload */
/**
     * Handles the file upload
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws UploadMissingFileException
     * @throws \Pion\Laravel\ChunkUpload\Exceptions\UploadFailedException
     */
    public function uploadFile(Request $request) {
        // create the file receiver
        $customerZone_id = $request->customerZone_id;


        $receiver = new FileReceiver("file", $request, HandlerFactory::classFromRequest($request));
        // check if the upload is success, throw exception or return response you need
        if ($receiver->isUploaded() === false) {
            throw new UploadMissingFileException();
        }
        // receive the file
        $save = $receiver->receive();
        // check if the upload has finished (in chunk mode it will send smaller files)
        if ($save->isFinished()) {
            // save the file and return any response you need, current example uses `move` function. If you are
            // not using move, you need to manually delete the file by unlink($save->getFile()->getPathname())
            return $this->saveFile($save->getFile(), $customerZone_id);
        }
        // we are in chunk mode, lets send the current progress
        /** @var AbstractHandler $handler */
        $handler = $save->handler();
        return response()->json([
            "done" => $handler->getPercentageDone(),
            'status' => true
        ]);
    }


    protected function saveFile(UploadedFile $file, $customerZone_id)
    {

        $customerZone = CustomerZone::findOrFail($customerZone_id);
        if ($customerZone->file) {
            if (Storage::disk('ftp')->exists($customerZone->file)) {
                Storage::disk('ftp')->delete($customerZone->file);
                }
            }
        $fileName =  time().'_'.$file->getClientOriginalName();

        
        $path = storage_path("app/public/gallery_files/");
        // move the file name
        $file->move($path, $fileName);

            $customerZone->update([
                'file' => 'gallery_files/'.$fileName,
            ]);
            return response()->json([
                'path' => $path,
                'name' => $fileName,
                'customerZone_id' => $customerZone_id
            ]);
        
        
    }
  
}
