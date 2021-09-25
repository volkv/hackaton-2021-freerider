<?php

namespace App\Http\Controllers;

use App\Models\Route;
use App\Models\Stop;
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

    public function getStops()
    {

        $routes = Stop::orderBy('id')->limit(100)->get()->toArray();

        return response()->json($routes);
    }

}
