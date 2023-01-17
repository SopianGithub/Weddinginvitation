<?php

namespace App\Http\Controllers\Invited;

use App\Http\Controllers\Controller;
use App\Models\Invited\Greeting_model;
use Illuminate\Http\Request;

class Greetingcontrol extends Controller
{
    public function index(Request $request)
    {
        $data = Greeting_model::where('couple_desc_id', $request['id'])->orderBy('waktu', 'DESC')->get();
        // dd(DB::getQueryLog());
        return response()->json($data);
    }

    public function submit(Request $request)
    {
        $request->validate([
            'nama' => ['required', 'max:255'],
            'pesan' => ['required', 'max:500']
        ]);

        $greetings = new Greeting_model();
        $greetings->couple_desc_id = $request->input('couple_desc_id');
        $greetings->nama = $request->input('nama');
        $greetings->pesan = $request->input('pesan');
        $greetings->confirmed = $request->input('isConfirm') ? 1 : 0;
        $greetings->waktu = date('Y-m-d h:i:s');
        $res = $greetings->save();
        
        if($res){
            return response()->json([ 'success' => true, 'greeting' => $greetings ]);
        }else{  
            return response()->json([ 'success' => false, 'greeting' => $greetings ]); 
        }
    }
}
