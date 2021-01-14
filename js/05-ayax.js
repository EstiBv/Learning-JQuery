$(document).ready(function () {
  //  Load() => peticion Ayax por Get e incrustar el resultado en elemento html
  const data = $(".js-data");
  data.load("https://reqres.in/");
});
