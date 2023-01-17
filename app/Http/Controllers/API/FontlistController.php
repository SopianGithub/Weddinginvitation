<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting\Font_model;

class FontlistController extends Controller
{

    public function index()
    {
        dd('index');
    }

    public function list()
    {
        $fonts = Font_model::all();
        return response()->json($fonts);
    }
}
