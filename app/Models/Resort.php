<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resort extends Model
{
    use HasFactory;

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    protected $guarded = [];
    // protected $table = 'resorts';
    // protected $fillable = [
    //     'name',
    //     'image',
    //     'price',
    //     'location',
    //     'description',
    // ];
}
