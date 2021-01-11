/* A través de un formulario, añadir enlaces nuevos a la lista */

$(document).ready(function () {
  // recorrer links
  const linksPage = $("a");
  linksPage.each(function (index) {
    // guardar this en variable para no sobrecargar el acceso al DOM
    const that = $(this);
    // metodo para acceder al atributo src de la etiqueta <a>
    const textLinks = that.attr("href");
    // metodo para pintar textos
    that.text(textLinks);
    console.log(that.attr("href"));
  });

  // cantidad de links
  console.log(linksPage.length);
});
