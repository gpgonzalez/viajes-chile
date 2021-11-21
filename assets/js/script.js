//Funcion que cambia color de navbar con scroll 

$(window).scroll(function(){

    if ($(this).scrollTop() > 400) {
        $("#menu").removeClass("navbar");
       $('#menu').addClass("bg-interno");
      } else {
    
       $("#menu").removeClass("bg-interno");
       $('#menu').addClass("navbar");
      }


      $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var numeral= this.hash;

            $("html, body").animate({
                scrollTop: $(numeral).offset().top   
            }, 800, function() {
               window.location.hash = numeral; 
            });
        }
    });

   });