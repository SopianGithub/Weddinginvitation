<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('couple_desc', function (Blueprint $table) {
            $table->id();
            $table->string('zauj');
            $table->string('zaujah');
            $table->date('tgl_akad');
            $table->text('ucapan_pembukaan');
            $table->text('quotes');
            $table->string('link');
            $table->foreignId('users_id')->nullable();
            $table->foreignId('couple_orders_id')->nullable();
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
        Schema::dropIfExists('couple_desc');
    }
};
