
//apertura pagina progetti
/*var madre_aperto = false;*/

$( document ).ready(function() {
    console.log( "ready!" );

    //se scrollo down nella home vado direttamente ai progetti
    var isOnDiv = false;
    $(".home-container").mouseenter(function(){isOnDiv=true;});
    $(".home-container").mouseleave(function(){isOnDiv=false;});
    /*
    document.getElementById("homesection").addEventListener("mouseenter", function(  ) {isOnDiv=true;});
    document.getElementById("homesection").addEventListener("mouseout", function(  ) {isOnDiv=false;});
    */

    /*
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop && isOnDiv){
           // downscroll code
           console.log("hai scrollato in basso nella home");
           $('html, body').animate({
              scrollTop: $("#projects").offset().top
           }, 2000);
           //var isOnDiv = false;
       } else {
          // upscroll code
          console.log("hai scrollato in alto nella home oppure scroll generico fuori dalla home");
       }
       lastScrollTop = st;
    });*/



    //video appare on hover

    $("#projects h2.project-title").hover(
      function() {
        var $variabilinaAppogg = $(this).parent();
        $variabilinaAppogg.find(".proj-video-preview").addClass( "show-video-preview" );
        console.log("mouse sul titolo");
      },
      function() {
        var $variabilinaAppogg = $(this).parent();
        $variabilinaAppogg.find(".proj-video-preview").removeClass( "show-video-preview" );
        console.log("mouse fuori dal titolo");
      }
    );
    $("#projects h2.project-subtitle").hover(
      function() {
        var $variabilinaAppogg = $(this).parent();
        $variabilinaAppogg.find(".proj-video-preview").addClass( "show-video-preview" );
        console.log("mouse sul titolo");
      },
      function() {
        var $variabilinaAppogg = $(this).parent();
        $variabilinaAppogg.find(".proj-video-preview").removeClass( "show-video-preview" );
        console.log("mouse fuori dal titolo");
      }
    );



    //mail icon copia indirizzo mail
    $("#mail-icon").click(function(){
      console.log("cliccato sull'icona");
      var mail_address = document.createElement("input");
      mail_address.value = "huiling.li.cn@gmail.com";
      document.body.appendChild(mail_address);
      mail_address.select();
      document.execCommand("Copy");
      mail_address.remove();
      console.log( "ho copiato la mail e mo cambio pure il messaggio" );
      $("#copy-link").html(" bravo!");
      $("#copy-link").addClass("bravo-on");
    });

    /*
    //hover thumb progetti
    $(".project-item *").off('click');

    $("#proj-mm h2.project-title").hover(
      function() {
    $("#proj-mm .project-hero .project-image video").addClass( "show-video-preview" );
      },
      function() {
    $("#proj-mm .project-hero .project-image video").removeClass( "show-video-preview" );}
    );
    */

    /*

      $("#madre h1").click(function(){
        if (!madre_aperto){
          var divClicked = $("#madre").offset();
          let divTop = divClicked.top;
          //window.scrollTo(0, divTop);
          window.scrollTo({
            top: divTop,
            left: 0,
            behavior: 'smooth'
          });
          console.log(divTop + " --- " + window.scrollY);
          $("#madre").addClass("opened-project");
          //$("#madre").css({width : "100%", height: "100vh", "background-color":"#EAEAEA", "background-image":"none"});
          $("#grc").css({width : "100%"});
          //$("#madre").addClass("opened-project-h");
          console.log("al momento madre aperto vale" + madre_aperto);
          madre_aperto = true;
          console.log("cliccato quando era chiuso");
          console.log("ora madre aperto vale" + madre_aperto);
        } else {
          $("#madre").removeClass("opened-project");
          $("#grc").css({width : "50%"});
          //$("#grc").css({width : "50%", position: "absolute", right:"0"});
        //$("#madre").css({width : "50%", height: "auto"});
        madre_aperto = false;
        console.log("cliccato quando era aperto");
        }
      });*/

    /*
    $("#grc h1").click(function(){
      $("#grc").addClass("opened-project");
      $("#madre").css({"grid-row-start" : "2",
        "grid-row-end": "3",
        "grid-column-start": "1",
        "grid-column-end": "3",
       });
    });*/

    /*
    let divs = document.querySelectorAll(".element");
    divs.forEach(div => {
    div.addEventListener("click", event =>{
        let divTop = div.offsetTop;
        window.scrollTo(0, divTop);
        console.log(divTop + " --- " + window.scrollY);
      });
    });*/


    //scroll bloccato su pagina prodotto
    /*
    var check_width = $("body").width();
    console.log("width screen = " + check_width);
    if (check_width > 980) {
      console.log("desktop mode");
      $(window).scroll(function(){
       var posscroll = $("#projects").offset();
       var pointscroll = posscroll.top - $(window).height();
       console.log(posscroll);
          if ($(window).scrollTop() >= pointscroll) {
        $("#project-page .project-title").addClass("start-scrolling").css({top: pointscroll});
       } else {
        $(".product-content-column-2").removeClass("start-scrolling").css({top: 0});
       }
      });
    }else {
      console.log("mobile mode");
    }*/

    /* cambio mouse gradient */
    /*
    $(document).mousemove(function(event) {
      windowWidth = $(window).width();
      windowHeight = $(window).height();

      mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
      mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

      $('.home-container').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #d3e4ff, #ffe4b9)');
    });
    */


});

//funzione per il responsive
function isDesktop() {
  if(window.innerWidth > 768){
    console.log("siamo su desktop");
    return true;
  }else {
    console.log("siamo su mobile");
    return false;
  }
}
