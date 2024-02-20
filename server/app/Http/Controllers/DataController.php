<?php

namespace App\Http\Controllers;

use App\Models\Data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Data::select('id','name','email','phone');
    }

  
    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $request->validate([
          'name'=>'required',
          'email'=>'required',
          'phone'=>'required'
        ]);
        return response()->json([
          'message'=>'item added successfully'
        ]);
    }


    public function show(Data $data)
    {
        return response()->json([
            'data'=>$data
        ]);
    }

    public function update(Request $request, Data $data)
    {
      $request->validate([
        'name'=>'required',
        'email'=>'required',
        'phone'=>'required'
      ]);
      return response()->json([
        'message'=>'item added successfully'
      ]);

      $data->fill($request->post())->update();
      $data->save();
      return response()->json([
        'message'=>'data updated'
      ]);
    }

    public function destroy(Data $data)
    {
        $data->delete();
        return response()->json([
          'message'=>"item deleted successfully"
        ]);
    }
}
