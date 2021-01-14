$(document).ready(function () {
  const items = $(".item");

  // MOVER elementos por pag
  items.draggable();

  // REDIMENSIONAR elementos de la pag (cargados en htlm <links struture.min.css & theme.min.css />)
  items.resizable();

  //  SELECCIONAR ITEMS
  const itemList = $(".listSkills");
  itemList.selectable();

  // ORDENAR ITEMS
  /* sortable ({aquí}) registrar cambios en la lista, con prop. update + function callback que recoge ev + cambios, podemos recorrer array, guardar en base de datos, etc.*/
  const itemList2 = $(".listSkills2");
  itemList2.sortable({
    update: function (ev, ui) {
      console.log("ha cambiado el orden de la lista");
    },
  });

  // SOLTAR Y ARRASTRAR
  const divArea = $("#area");
  const divMoved = $("#moved-item");

  divArea
    .draggable()
    .css("width", "75px")
    .css("backgroundColor", "hsl(45, 85%, 92%)");

  divMoved.droppable({
    drop: function () {
      console.log("has introducido un elemento dentro del área");
    },
  });

  // EFECTOS (segundo parámetro: {opciones} > velocidad > tiempo >  )

  const btnShow1 = $(".btnShow1");
  const boxEffects1 = $(".boxEffects1");
  btnShow1.click(function () {
    // arriba-abajo
    boxEffects1.toggle("blind");
  });

  const btnShow2 = $(".btnShow2");
  const boxEffects2 = $(".boxEffects2");
  btnShow2.click(function () {
    // explosion
    boxEffects2.effect("explode");
  });

  const btnShow3 = $(".btnShow3");
  const boxEffects3 = $(".boxEffects3");
  btnShow3.click(function () {
    // pag
    boxEffects3.toggle("slide");
  });

  const btnShow4 = $(".btnShow4");
  const boxEffects4 = $(".boxEffects4");
  btnShow4.click(function () {
    // pag degradado
    boxEffects4.toggle("drop");
  });

  const btnShow5 = $(".btnShow5");
  const boxEffects5 = $(".boxEffects5");
  btnShow5.click(function () {
    // pag doblado
    boxEffects5.toggle("fold");
  });

  const btnShow6 = $(".btnShow6");
  const boxEffects6 = $(".boxEffects6");
  btnShow6.click(function () {
    // pag soplo
    boxEffects6.toggle("puff");
  });

  const btnShow7 = $(".btnShow7");
  const boxEffects7 = $(".boxEffects7");
  btnShow7.click(function () {
    // pag batido/zumbido
    boxEffects7.toggle("shake", "fast", 1000);
  });
});
