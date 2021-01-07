// Selectores
$(document).ready(function () {
  console.log("estamos listos");

  // Selector de ID

  $("#jq-red");

  // Guardado en variable
  let paragrapahGreen = $("#jq-green");

  // Aplicando estilos y encandenando propiedades
  let paragrapahChangeColor = $("#jq-yellow")
    .css("background", "yellow")
    .css("color", "orange");

  paragrapahGreen.css("padding", "30px").css("background", "green");
  console.log(paragrapahGreen);

  // Selector de clase
  let paragrahImportant = $(".js-importantP")
    .css("color", "red")
    .css("border", "5px dashed black");
  console.log(paragrahImportant.eq(0));

  // Selectores de etiqueta : clase definida en file.css
  //removeClass() >> remove() || hasClass() >> contains()

  $("p").click(function () {
    $(this).addClass("increaseFont");
    console.log("click dado");
  });

  // Optimizar carga accediendo una vez al DOM
  let selectP = $("p");

  selectP.click(function () {
    let that = $(this);
    if (!that.hasClass("numbersSelect")) {
      that.addClass("numbersSelect");
    } else {
      that.removeClass("numbersSelect");
    }
    console.log(that);
  });
});
