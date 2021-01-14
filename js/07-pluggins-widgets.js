$(document).ready(function () {
  // Tooltip()
  const itemTooltipe = $(".sectionsWeb");
  itemTooltipe.tooltip();

  // Dialog() - Cuadro de diálogo - PopUp
  const itemPopUp = $(".popUp");
  const buttonPopUp = $(".btnPopUp");

  buttonPopUp.click(function () {
    itemPopUp.dialog();
  });

  // Datepicker()
  const itemCalendar = $(".calendar");
  itemCalendar.datepicker();
});
