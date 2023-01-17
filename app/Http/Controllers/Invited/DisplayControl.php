<?php

namespace App\Http\Controllers\Invited;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DisplayControl extends Controller
{
    public function index(Request $request)
    {
        return inertia('Invited', [
            'id' => 1
        ]);
    }
}
