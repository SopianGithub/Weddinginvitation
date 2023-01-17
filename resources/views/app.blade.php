<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="./favicon.ico">
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png">
        <link rel="manifest" href="./site.webmanifest">

        <meta property="og:title" content="Undangan Pernikahan Gita & Yayan | Gista Invitation">
        <meta property="og:type" content="pages" />
        <meta property="og:description" content="Undangan Pernikahan Gita & Yayan, Kamis 10 November 2022, Kp. Pamipiran RT/RW 02/04 Desa Pagersari Kec. Pagerageung Kab. Tasikmalaya, Jawa Barat">
        <meta property="og:image" content="https://gistaa.my.id/cover.png">
        <meta property="og:url" content="https://gistaa.my.id/">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Scripts -->
        @routes
        @vite('resources/js/app.js')
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
