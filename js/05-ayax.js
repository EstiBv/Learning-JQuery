$(document).ready(function () {
  //  Metodo Load() => peticion Ayax por Get e incrustar el resultado en elemento html

  const data = $(".js-data");
  data.load("https://reqres.in/");

  // Metodo Get() para peticion GET
  $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
    console.log(response);
    console.log(
      response.data.forEach((each, index) => {
        $(".js-dataUser").append(
          "<p>" + index + " " + each.first_name + " " + each.last_name + "</p>"
        );
      })
    );
  });

  // Metodo Post() para peticion POST
});
