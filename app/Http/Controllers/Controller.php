<?php

namespace App\Http\Controllers;

use App\Models\Route;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function index()
    {

         return view('index');

    }

    public function getRoutes()
    {

        $routes = Route::orderBy('id')->limit(50)->get()->toArray();

        return response()->json($routes);
    }

}
