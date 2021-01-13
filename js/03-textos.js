/* A través de un formulario, añadir enlaces nuevos a la lista */

$(document).ready(function () {
  const buttonAdd = $("#addButton");
  const textLink = $("#addLink");
  const menuListLinks = $(".menuLinks");
  reloadLinks();
  buttonAdd.removeAttr("disabled");
  buttonAdd.click(function () {
    // otras funciones = append(), before(), after()
    menuListLinks.prepend(
      '<li> <a href= "https://' + textLink.val() + '"></a> </li>'
    );
    reloadLinks();
  });

  // recorrer links
  function reloadLinks() {
    let linksPage = $("a");
    linksPage.each(function () {
      // guardar this en variable para no sobrecargar el acceso al DOM
      let that = $(this);
      // metodo para acceder al atributo src de la etiqueta <a>
      let textLinks = that.attr("href");

      // metodo para pintar textos
      that.text(textLinks);
    });
  }

  // cantidad de links
  // console.log(linksPage.length);
});
