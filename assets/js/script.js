//Funcion que cambia color de navbar con scroll 

$(window).scroll(function(){

    if ($(this).scrollTop() > 400) {
        $("#menu").removeClass("navbar");
       $('#menu').addClass("bg-interno");
      } else {
    
       $("#menu").removeClass("bg-interno");
       $('#menu').addClass("navbar");
      }

   });