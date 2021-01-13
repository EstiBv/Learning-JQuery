$(document).ready(function () {
  const boxText = $(".box");
  const buttonShow = $(".show");
  const buttonHide = $(".hide");

  buttonShow.hide();

  buttonShow.click(function () {
    $(this).hide();
    buttonHide.show();
    boxText.fadeIn("slow");
  });

  buttonHide.click(function () {
    $(this).hide();
    buttonShow.show();
    boxText.fadeOut("normal");
  });

  /*
  EFECTOS: "fast", "normal", "slow"
  FUNDIDOS: 

  fadeIn() = show() vs fadeOut() = hide() 
  fadeTo (speed, opacity) = transition : speed, opacity
*/

  const boxText2 = $(".boxSecond");
  const buttonOpen = $(".open");
  const buttonClose = $(".close");

  buttonOpen.click(function () {
    let button = $(this);
    button.text("Cerrar");
    boxText2.slideToggle().fadeTo("normal", 0.5).text("Efectos con jQuery");
  });

  /*
  EFECTOS: 
toggle("speed"); fadeToggle(); slideToggle(); slideUp(); slideDown();
*/
});
