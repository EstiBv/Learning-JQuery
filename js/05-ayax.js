$(document).ready(function () {
  //  Metodo Load() => peticion Ayax por Get e incrustar el resultado en elemento html

  const data = $(".js-data");
  // data.load("https://reqres.in/");

  // Metodo Get() para peticion GET
  $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
    console.log(
      response.data.forEach((each, index) => {
        $(".js-dataUser").append(
          "<p>" + index + " " + each.first_name + " " + each.last_name + "</p>"
        );
      })
    );
  });

  // Metodo Post() para peticion POST >> añadir usuario al api

  const formUsers = $(".form");

  formUsers.submit(function (ev) {
    ev.preventDefault();

    // coge el valor desde el html
    let userNew = {
      name: $('input[name="name"]').val(),
      last_name: $('input[name="last_name"]').val(),
    };
    console.log(userNew);
    // la url la coge del propio formulario (url, atributo en html)
    $.post($(this).attr("action"), userNew, function (response) {
      console.log(response);
    }).done(function () {
      alert("Usuario registrado correctamente");
    });

    return false;
  });

  //$ajax({})
  /*
  $.ajax({
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    url: $(this).attr("action"),
    data: "userNew",
    beforeSend: function () {
      console.log("enviando usuario");
    },
    success: function (response) {
      console.log(response);
    },
    error: function () {
      console.log("Ha ocurrido un error");
    },
    timeout: 2000,
  });
  */
});
