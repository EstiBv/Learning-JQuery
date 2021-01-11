$(document).ready(function () {
  console.log("hola");
  // Eventos = MouseOver and MouseOut >> pseudoclass :hover
  const box = $("#box");

  /* box.mouseover(function () {
     $(this).css("background", "red");
  });
   box.mouseout(function () {
     $(this).css("background", "green");
   });
*/

  // como argumentos
  function changeRed() {
    $(this).css("background", "red");
  }

  function changeGreen() {
    $(this).css("background", "green");
  }
  box.hover(changeRed, changeGreen);

  // Evento = Click, doble click
  box.click(function () {
    $(this).css("background", "blue").css("color", "white");
  });

  box.dblclick(function () {
    $(this).css("background", "pink").css("color", "yellow");
  });
});
