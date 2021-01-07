// Selectores
$(document).ready(function () {
  console.log("estamos listos");

  // Selector de ID

  $("#jq-red");

  // Guardado en variable
  let paragrapahGreen = $("#jq-green");

  // Aplicando estilos y encandenando propiedades
  let paragrapahChangeColor = $("#jq-yellow")
    .css("background", "#d6ce56")
    .css("color", "orange");

  paragrapahGreen.css("padding", "3px").css("background", "#6dac43");
  console.log(paragrapahGreen);

  // Selector de clase
  let paragrahImportant = $(".js-importantP")
    .css("color", "black")
    .css("border", "2px dashed #ac4355");
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

  // Selectores de atributo
  $('[title = "Google"]').addClass("linkGl");
  $('[title = "Facebook"]').addClass("linkFb");

  // Otros
  $("p,a").addClass("maginSup");

  // Búsqueda de elementos por clase
  let search = $("#box .highlighted");

  search.eq(0).parent().parent().parent(); // prevObjects: posicionamiento (saltos) sobre los elementos del DOM (li < ul < div < etc) >> ../../ == parent()
  console.log(search);
});
