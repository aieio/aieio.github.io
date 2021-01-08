function aggiornaScroll(){
  ScrollTrigger.refresh();
  console.log("refreshatooo!");
}
$( document ).ready(function() {
    console.log( "ready!" );
    if(isDesktop()){
      var mail_address;
      //desktop homepage
      $(".btn-pastemail-mob").click(function(){
        console.log("cliccato sull'icona");
        mail_address = document.createElement("input");
        mail_address.value = "huiling.li.cn@gmail.com";
        document.body.appendChild(mail_address);
        mail_address.select();
        document.execCommand("Copy");
        mail_address.remove();
        console.log( "ho copiato la mail e mo cambio pure il messaggio" );
        $("#copy-link").html(" bravo!");
        $("#copy-link").addClass("bravo-on");
      });
      //desktop footer
      $(".btn-pastemail-mob-footer").click(function(){
        console.log("cliccato sull'icona");
        mail_address = document.createElement("input");
        mail_address.value = "huiling.li.cn@gmail.com";
        document.body.appendChild(mail_address);
        mail_address.select();
        document.execCommand("Copy");
        mail_address.remove();
        console.log( "ho copiato la mail e mo cambio pure il messaggio" );
        $("#copy-link-footer").html(" bravo!");
        $("#copy-link-footer").addClass("bravo-on");
      });
    };
    //clicco sulla mail e copio
    if(!isDesktop()){
      var mail_address_mob;
      $(".btn-pastemail-mob").click(function(){
        console.log("cliccato sull'indirizzo mail mob");
        mail_address_mob = document.createElement("input");
        mail_address_mob.value = "huiling.li.cn@gmail.com";
        document.body.appendChild(mail_address_mob);
        mail_address_mob.select();
        document.execCommand("Copy");
        mail_address_mob.remove();
        console.log( "ho copiato la mail e mo cambio pure il messaggio" );

        var confermaMail = document.querySelector(".email-copied-confirmation");
        gsap.timeline()
          .fromTo(confermaMail, {
              display: "none",
              x: -40,
              autoAlpha: 0,
              //scale: 1.1,
              //transformOrigin: '50% 0%'
          }, {
              display: "block",
              x: 0,
              autoAlpha: 1,
              duration: 1.2,
              ease: Expo.easeOut
          });
      });

        $(".btn-pastemail-mob-footer").click(function(){
          console.log("cliccato sull'indirizzo mail mob");
          mail_address_mob = document.createElement("input");
          mail_address_mob.value = "huiling.li.cn@gmail.com";
          document.body.appendChild(mail_address_mob);
          mail_address_mob.select();
          document.execCommand("Copy");
          mail_address_mob.remove();
          console.log( "ho copiato la mail e mo cambio pure il messaggio" );

          var confermaMail = document.querySelector(".email-copied-confirmation-footer");
          gsap.timeline()
            .fromTo(confermaMail, {
                display: "none",
                x: -40,
                autoAlpha: 0,
                //scale: 1.1,
                //transformOrigin: '50% 0%'
            }, {
                display: "block",
                x: 0,
                autoAlpha: 1,
                duration: 1.2,
                ease: Expo.easeOut
            });
        });
    };
});
//funzione per il bravo footer
function bravoFooter(){
  //mail icon copia indirizzo mail
  $("#mail-icon-footer").click(function(){
    console.log("cliccato sull'icona");
    var mail_address = document.createElement("input");
    mail_address.value = "huiling.li.cn@gmail.com";
    document.body.appendChild(mail_address);
    mail_address.select();
    document.execCommand("Copy");
    mail_address.remove();
    console.log( "ho copiato la mail e mo cambio pure il messaggio" );
    $("#copy-link-footer").html(" bravo!");
    $("#copy-link-footer").addClass("bravo-on");
  });
}



//funzione per il responsive
function isDesktop() {
  if(window.innerWidth > 768){
    //console.log("siamo su desktop");
    return true;
  }else {
    //console.log("siamo su mobile");
    return false;
  }
}
function videoProjectsPreview() {
  //video appare on hover
  // solo su desktop
  if(isDesktop()){
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
  } else {
    //preview video su Mobile

    //provo una sola funzione NON VA
    /*const projThumbs = gsap.utils.toArray('#projects .proj-video-preview');
    console.log("questi sono i thumb");
    console.log(projThumbs);

    projThumbs.forEach(projThumb => {
      gsap.set(projThumb, {
        opacity:1,
        paused:true,
        scrollTrigger: {
          start: "top center",
          scrub: true
        }
      })
    });*/

    var actionProj1 = gsap.set('#projects #proj-madre .proj-video-preview', {opacity:1, paused:true});
    var actionProj2 = gsap.set('#projects #proj-italics .proj-video-preview', {opacity:1, paused:true});
    var actionProj3 = gsap.set('#projects #proj-gs1 .proj-video-preview', {opacity:1, paused:true});
    var actionProj4 = gsap.set('#projects #proj-grc .proj-video-preview', {opacity:1, paused:true});
    var actionProj5 = gsap.set('#projects #proj-land .proj-video-preview', {opacity:1, paused:true});
    var actionProj6 = gsap.set('#projects #proj-mm .proj-video-preview', {opacity:1, paused:true});
    var actionProj7 = gsap.set('#projects #proj-combo .proj-video-preview', {opacity:1, paused:true});
    var actionProj8 = gsap.set('#projects #proj-icon .proj-video-preview', {opacity:1, paused:true});
    var actionProj9 = gsap.set('#projects #proj-maxxi .proj-video-preview', {opacity:1, paused:true});
    var actionProj10 = gsap.set('#projects #proj-ll .proj-video-preview', {opacity:1, paused:true});


    ScrollTrigger.create({
              trigger: "#projects #proj-madre",
              start: "top center",
              end: "bottom center",
              onEnter: function(){ actionProj1.play();},
              onLeave: function(){ actionProj1.reverse();},
              onLeaveBack: function(){ actionProj1.reverse();},
              onEnterBack: function(){ actionProj1.play();},
              markers:false
            });
   ScrollTrigger.create({
              trigger: "#projects #proj-italics",
              start: "top center",
              end: "bottom center",
              onEnter: function(){ actionProj2.play();},
              onLeave: function(){ actionProj2.reverse();},
              onLeaveBack: function(){ actionProj2.reverse();},
              onEnterBack: function(){ actionProj2.play();},
              markers:false
            });
   ScrollTrigger.create({
              trigger: "#projects #proj-gs1",
              start: "top center",
              end: "bottom center",
              onEnter: function(){ actionProj3.play();},
              onLeave: function(){ actionProj3.reverse();},
              onLeaveBack: function(){ actionProj3.reverse();},
              onEnterBack: function(){ actionProj3.play();},
              markers:false
            });
  ScrollTrigger.create({
                  trigger: "#projects #proj-grc",
                  start: "top center",
                  end: "bottom center",
                  onEnter: function(){ actionProj4.play();},
                  onLeave: function(){ actionProj4.reverse();},
                  onLeaveBack: function(){ actionProj4.reverse();},
                  onEnterBack: function(){ actionProj4.play();},
                  markers:false
             });
  ScrollTrigger.create({
                  trigger: "#projects #proj-land",
                  start: "top center",
                  end: "bottom center",
                  onEnter: function(){ actionProj5.play();},
                  onLeave: function(){ actionProj5.reverse();},
                  onLeaveBack: function(){ actionProj5.reverse();},
                  onEnterBack: function(){ actionProj5.play();},
                  markers:false
                        });
  ScrollTrigger.create({
                  trigger: "#projects #proj-combo",
                  start: "top center",
                  end: "bottom center",
                  onEnter: function(){ actionProj7.play();},
                  onLeave: function(){ actionProj7.reverse();},
                  onLeaveBack: function(){ actionProj7.reverse();},
                  onEnterBack: function(){ actionProj7.play();},
                  markers:false
              });
  ScrollTrigger.create({
                 trigger: "#projects #proj-icon",
                 start: "top center",
                 end: "bottom center",
                 onEnter: function(){ actionProj8.play();},
                 onLeave: function(){ actionProj8.reverse();},
                 onLeaveBack: function(){ actionProj8.reverse();},
                 onEnterBack: function(){ actionProj8.play();},
                 markers:false
              });
  ScrollTrigger.create({
                 trigger: "#projects #proj-mm",
                 start: "top center",
                 end: "bottom center",
                 onEnter: function(){ actionProj6.play();},
                 onLeave: function(){ actionProj6.reverse();},
                 onLeaveBack: function(){ actionProj6.reverse();},
                 onEnterBack: function(){ actionProj6.play();},
                 markers:false
             });
  ScrollTrigger.create({
           trigger: "#projects #proj-maxxi",
           start: "top center",
           end: "bottom center",
           onEnter: function(){ actionProj9.play();},
           onLeave: function(){ actionProj9.reverse();},
           onLeaveBack: function(){ actionProj9.reverse();},
           onEnterBack: function(){ actionProj9.play();},
           markers:false
            });
  ScrollTrigger.create({
           trigger: "#projects #proj-ll",
           start: "top center",
           end: "bottom center",
           onEnter: function(){ actionProj10.play();},
           onLeave: function(){ actionProj10.reverse();},
           onLeaveBack: function(){ actionProj10.reverse();},
           onEnterBack: function(){ actionProj10.play();},
           markers:false
        });

  }
}
