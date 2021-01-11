$(document).ready(function () {
  //MOUSEOVER and MOUSEOUT >> pseudoclass :hover
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

  // CLICK & DOUBLE CLICK
  box.click(function () {
    $(this).css("background", "blue").css("color", "white");
  });

  box.dblclick(function () {
    $(this).css("background", "pink").css("color", "yellow");
  });

  // FOCUS & BLUL
  const inputForm = $("#name");
  const inputData = $("#divData");

  inputForm.focus(function () {
    $(this).css("border", "2px solid green");
  });

  // metodo show() /= none & metodo val() = .value
  inputForm.blur(function () {
    $(this).css("border", "2px solid transparent");

    // en el metodo text introduzco el metodo val para que refleje en divData el valor de inputForm
    inputData.text($(this).val()).show();
  });

  // MOUSEDOWN & MOUSEUP
  inputData.mousedown(function () {
    $(this).css("border-color", "gray");
  });
  inputData.mouseup(function () {
    $(this).css("border-color", "black");
  });

  //MOUSEMOVE coordenadas movimiento ratón
  let doc = $(document);
  doc.mousemove(function (event) {
    const cursor = $("body");
    cursor.css("cursor", "none");

    const followMouse = $("#followMe");
    followMouse.css("left", +event.clientX).css("top", +event.clientY);
  });
});
