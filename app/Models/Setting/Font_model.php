<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Font_model extends Model
{
    use HasFactory;

    protected $table = 'font_list';

    protected $fillable = ['id', 'font_name', 'class_name', 'is_default', 'is_show'];
}
