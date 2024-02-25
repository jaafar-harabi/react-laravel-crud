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

        Data::create($request->all());
        return response()->json([
          'message'=>'item added successfully'
        ]);
    }


    public function show($id)
    {

      $data=Data::find($id);
        return response()->json([
            'item'=>$data
        ]);
    }

    public function update(Request $request, $id)
    {
      $request->validate([
        'name'=>'required',
        'email'=>'required',
        'phone'=>'required'
      ]);
      
      $data=Data::find($id);
      $data->update($request->all());

  
      return response()->json([
        'message'=>'data updated'
      ]);
    }

    public function destroy($id)
    {
        $data=Data::find($id);
        $data->delete();
        return response()->json([
          'message'=>"item deleted successfully"
        ]);
    }
}
