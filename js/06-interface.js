$(document).ready(function () {
  const items = $(".item");

  // mover elementos por pag
  items.draggable();

  // redimensionar elementos de la pag (cargados en htlm <links struture.min.css & theme.min.css />)
  items.resizable();
});
