// Selectores
$(document).ready(function () {
  console.log("estamos listos");

  // Selector de ID

  $("#jq-red");

  // Guardado en variable
  let paragrapahGreen = $("#jq-green");

  // Aplicando estilos y encandenando propiedades
  let paragrapahChangeColor = $("#jq-yellow")
    .css("background", "orange")
    .css("color", "white");

  paragrapahGreen.css("font-size", "30px").css("color", "green");

  console.log(paragrapahGreen);
});
