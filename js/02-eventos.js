$(document).ready(function () {
  console.log("hola");
  // MouseOver and MouseOut >> pseudoclass :hover
  const box = $("#box");
  box.mouseover(function () {
    $(this).css("background", "red");
  });
  box.mouseout(function () {
    $(this).css("background", "green");
  });
});
