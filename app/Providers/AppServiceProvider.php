<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Inertia::share('generallyAPIKey', env('GENERAL_TOKEN_KEY'));
        Inertia::share('generallySecretKeyAPI', env('SECRET_KEY_GENERAL_ACCESS'));
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
