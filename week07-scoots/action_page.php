<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="description"
      content="UpFrontWeather.com Preston Page for WDD230 W02"
    />
    <meta name="keywords" content="HTML, CSS, JavaScript" />
    <meta name="author" content="Scott LeFoll" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Montserrat"
    />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>UpFrontWeather.com</title>
  </head>

  <body class="weather-content">
    <header>
      <div class="logo">
          <picture>
            <img
              src="images/weather.png"
              alt="upfrontweather.com image"
            />
          </picture>
          <section class="headings">
            <h1>Up Front Weather</h1>
            <q class="m">Accurate weather, when you need it.</q>
          </section>
      </div>
    </header>





    <nav class="mobile-container">

      <!-- ****************************** Hamburger menu html-->
      <div class="topnav">
        <a href="#home" class="active">Menu</a>
        <div id="myLinks">
          <a href="index.html">🏡Home</a>
          <a href="preston.html">🚜Preston</a>
          <a href="soda-springs.html">🌄Soda Springs</a>
          <a href="fish-haven.html">🏞️Fish Haven</a>
          <a href="storm-center.html">⛈️Storm Center</a>
          <a href="gallery-7.html">🖼️Gallery</a>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
  <!-- ****************************** Hamburger menu html-->
        <ul class="big-menu">
          <li><a href="index.html" class="active">🏡Home</a></li>
          <li><a href="preston.html">🚜Preston</a></li>
          <li><a href="soda-springs.html">🌄Soda Springs</a></li>
          <li><a href="fish-haven.html">🏞️Fish Haven</a></li>
          <li><a href="storm-center.html">⛈️Storm Center</a></li>
          <li><a href="gallery-7.html">🖼️Gallery</a></li>
        </ul>
    </nav>

    <main class="weather-container2">
      <h2>Thank you for sending in a Weather Center Storm Report!</h2>
    </main>

    <footer class="footer2">
      <p class="p-footer">
        <span
          >Ⓒ<a href="index.html"
            >UpFrontWeather.com</a
          >|</span>

        <span>Attributions | </span>
        <span>Scott R. LeFoll</span>
      </p>
      <p class="p-footer2">
        Last modified: &nbsp <span id="date-time"></span>
      </p>
    </footer>

    <script>
      let dt = new Date();
      const currentDate = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'};
      document.getElementById('date-time').innerHTML=currentDate.toLocaleDateString('en-uk', options);
    </script>

    <script>
      function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
      </script>

    <script src="js/script.js"></script>
  </body>
</html>

<!-- ***************************************************** -->
