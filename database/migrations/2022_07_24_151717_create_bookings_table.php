<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            // $table->foreignId('resort_id')->nullable()->constrained()->onDelete("cascade");
            // $table->string('user_id')->nullable();
            $table->string('fullname');
            // $table->string('email')->unique();
            // $table->date('startdate')->nullable();
            // $table->date('enddate')->nullable();
            // $table->string('phone')->nullable();
            // $table->string('message')->nullable();
            // $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
}
