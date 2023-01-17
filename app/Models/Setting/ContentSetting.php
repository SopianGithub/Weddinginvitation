<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContentSetting extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'name', 'description', 'icon', 'isVIP'];
}
