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
>>> aceptan segundo parámetro un callback <<<

*/

  const boxText2 = $(".boxSecond");
  const buttonOpen = $(".open");
  const buttonClose = $(".close");

  buttonOpen.click(function () {
    let button = $(this);
    button.text("Cerrar");
    boxText2.slideToggle().fadeTo("slow", 0.5).text("Efectos con jQuery");
  });

  /*
  EFECTOS: 
toggle("speed"); fadeToggle(); slideToggle(); slideUp(); slideDown();
*/

  const buttonAnime = $(".anime");
  buttonAnime.click(function () {
    boxText.animate(
      {
        marginLeft: "100px",
        fontSize: "22px",
      },
      "fast"
    );
    boxText2.animate(
      {
        marginLeft: "100px",
        borderRadius: "20px",
        marginTop: "0px",
        fontSize: "12px",
      },
      "slow"
    );
  });
});
