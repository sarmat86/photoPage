<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
        DB::table('roles')->truncate();

        DB::table('users')->insert([
                'name' => 'admin',
                'email' => 'admin@admin.com',
                'password' => bcrypt('Qwerty12'),
                'role_id' => 1
        ]);
        DB::table('roles')->insert([
            ['name' => 'admin'],
            ['name' => 'user']
    ]);
    }
}
