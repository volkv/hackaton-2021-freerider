<?php

namespace App\Console\Commands;

use App\Models\Route;
use Illuminate\Console\Command;


class Test extends Command
{

    protected $signature = 'c:test';


    public function handle()
    {

        $routes = file_get_contents(storage_path('/routes.json'));

        $routes = json_decode($routes, true);

        foreach ($routes as $route) {
            $points = $route['geoData']['coordinates'][0];
            $points = array_map(fn($points) => [$points[1], $points[0]], $points);

            Route::create([
                'id' => $route['ID'],
                'route_name' => $route['RouteName'],
                'route_number' => $route['RouteNumber'],
                'points' => $points,
            ]);

        }


    }


}
