<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomerZonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_zones', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('title');
                $table->integer('photo_id')->unsigned()->index()->nullable();
                $table->integer('position')->unsigned()->index()->default(0);
                $table->string('slug')->nullable();
                $table->string('password');
                $table->string('file')->nullable();
                $table->boolean('confirmed')->default(0);
                $table->boolean('autodelete')->default(1);
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
        Schema::dropIfExists('customer_zones');
    }
}
