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
});
