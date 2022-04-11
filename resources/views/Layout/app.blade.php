<!Doctype html>
<html>
  <head>
    <title>@yield('title')</title>


    <link rel="stylesheet" href="{{asset('css/app.css')}}">
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
  </head>
  <body>



    @yield('content')

    <script src="{{asset('js/app.js')}}"></script>
  </body>

</html>
