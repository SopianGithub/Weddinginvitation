<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Layout_model extends Model
{
    public const LIST_LAYOUT = ['inline', 'block', 'grid'];
    public const FONTS = ['Arial', 'sans-serif', 'serif', 'sans', 'Verdana'];

    use HasFactory;
}
