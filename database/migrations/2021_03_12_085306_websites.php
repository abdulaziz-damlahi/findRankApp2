<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Websites extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('websites', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('website_name');
            $table->integer('wordcount')->nullable();
            $table->integer('down')->nullable();
            $table->integer('equal')->nullable();
            $table->integer('up')->nullable();
            $table->unsignedBigInteger('user_id')->unsigned();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')->onDelete('cascade');
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
        //
    }
}
