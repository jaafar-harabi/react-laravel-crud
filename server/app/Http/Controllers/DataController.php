<?php

namespace App\Http\Controllers;

use App\Models\Data;
use Illuminate\Http\Request;


class DataController extends Controller
{
    
    public function index()
    {
      $data = Data::all(); 
          
      return response()->json([
           'results' => $data
      ],200);    }

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
      
      $data->fill($request->post())->update();

  
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
