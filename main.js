/* Descrizione:
Creare uno slider di immagini
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider */



$(document).ready(function() {

  /* CLICK NEXT */
  $(".next").click(function() {
    var imaggine = $(".images img.active");
    var doc = $(".doc .active")

    /* SULL'ULTIMA IMMAGINE SE CLICCO SU NEXT TORNO ALLA PRIMA */
    if (imaggine.hasClass("last")) {
      $(".images img.active").removeClass("active");
      $(".images img.first").addClass("active");
      $(".doc.active").removeClass("active");
      $(".doc.first").addClass("active");
    } else {
      $(".images img.active").removeClass("active");
      imaggine.next().addClass("active");
      $(".doc.active").removeClass("active");
      doc.next().addClass("active");
    }
  });

  /* CLICK PREV */
  $(".prev").click(function() {
    var imaggine = $(".images img.active");
    var doc = $(".doc.active")

    /* SULLA PTIMA IMMAGINE SE CLICCO SU PREV VADO ALL'ULTIMA IMMAGINE */
    if (imaggine.hasClass("first")) {
      $(".images img.active").removeClass("active");
      $(".images img.last").addClass("active");
      $(".doc.active").removeClass("active");
      $(".doc.last").addClass("active");
    } else {
      $(".images img.active").removeClass("active");
      imaggine.prev().addClass("active");
      $(".doc.active").removeClass("active");
      doc.prev().addClass("active");
    }
  });
});

