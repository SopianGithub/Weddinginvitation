<?php

namespace App\Models\Invited;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Greeting_model extends Model
{
    use HasFactory;

    protected $table = 'couple_married_guest';

    protected $fillable = [
        'nama',
        'pesan',
        'waktu',
        'confirmed',
        'couple_desc_id'
    ];
}
