<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>
            @if (View::hasSection('title'))
                Laravel Tabler - @yield('title')
            @else
            Laravel Tabler
            @endif
        </title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext">

        <script src="{{ asset('js/app.js') }}" defer></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <script>
            document.getElementsByTagName("html")[0].style.visibility = "hidden";
        </script>
    </head>
    <body>
        <div id="app">
            <core>
                <app>                   
                    @yield('content')
                </app>
            </core>
        </div>
        <script>
            document.getElementsByTagName("html")[0].style.visibility = "visible";
        </script>
    </body>
</html>