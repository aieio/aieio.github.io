document.addEventListener('lazyloaded', function(e){

  if(isDesktop()){
    //ScrollTrigger.refresh();
    //console.log("refreshato su desk!");
  }
  //ScrollTrigger.refresh();
  //console.log("refreshatooo!");
});


var stoppalo;
var cont = 0;
function refreshScroll(){
  cont = cont + 1;
  console.log("cont vale: "+ cont);
  //if(cont == 10){
    ScrollTrigger.refresh();
    cont = 0;
    console.log("ho refreshato lo scroll");
  //}
  stoppalo = window.requestAnimationFrame(refreshScroll);


}

$( document ).ready(function() {

  //prova per rc
  /*console.log("queste sono le coordinate di partenza di Raffaella Cortese");
  const cortesella = document.getElementById("proj-rc");
  console.log(cortesella.getBoundingClientRect());*/

  // js che si occupa di aprire e chiudere i progetti

  const projects = document.getElementById("projects");
  const projectClose = document.getElementById("project-close");
  const projectItems = document.querySelectorAll(".project-item");
  const projectPage = document.getElementById("project-page");

  //aggiungo i project names
  const projectNames = document.querySelectorAll(".project-title");
  const projectSubtitles = document.querySelectorAll(".project-subtitle");

  //projectClose.addEventListener("click", onProjectClose);
  projectNames.forEach((item) => item.addEventListener("click", onProjectClick));
  projectSubtitles.forEach((item) => item.addEventListener("click", onProjectClick));

  //se siamo su mobile anche i pulsanti diventano cliccabili
  const projectThumb = document.querySelectorAll(".proj-video-preview");

  if(!isDesktop()){
    projectThumb.forEach((item) => item.addEventListener("click", onProjectClick));
  }

  //console.log("urcamdimm");
  function onProjectClick(event) {

      // se ci sono più progetti aperti
      // solo un progetto aperto per volta
      // non funziona del projectCloseButton

      if (projectPage.children.length > 0) {
          console.log("c'era già un progetto aperto, mo lo chiudiamo");
          // velocizzo chiusura
          if(isDesktop()){
            onProjectCloseFast();
          } else {
            onProjectCloseFastMob();
          }

          //projectPage.firstElementChild.remove();
          //const cloneDaRimuovere = $(".clone");
          //cloneDaRimuovere.remove();
      } else {
        console.log("non c'erano progetti aperti");
      }

      const { target } = event;
      const genitor = target.parentElement;

      //se mobile
      /*
      if(!isDesktop()){
        const genitor = target;
        console.log("abbiamo definito il genitor");
        console.log(genitor);
      } else {
        const genitor = target.parentElement;
      }*/

      console.log("ecco il target cos'è");
      console.log(target);
      console.log("ed ecco il parent");
      console.log(genitor);

      let parametroGetMob = genitor.id;
      var outputGetMob = getProjMobInfo(parametroGetMob);
      const gotMobTopSito = outputGetMob.topDelSito;
      const gotMobFontSize = outputGetMob.dimensioneFont;
      const gotMobMarginTop = outputGetMob.margineAlTop;
      const gotMobTopSubtitle = outputGetMob.topSubtitle;

      //old
      //const { index } = target.dataset;
      //new
      const { index } = genitor.dataset;
      const { width, height, top, left } = genitor.getBoundingClientRect();

      //console.log("ed ecco le coordinate in questione");
      //console.log(genitor.getBoundingClientRect());

      const clone = document.createElement("div");
      clone.style.height = height + "px";
      clone.style.width = width + "px";
      clone.style.top = top + "px";
      clone.style.left = left + "px";
      clone.style.position = "fixed";
      clone.style.zIndex = 9;
      clone.classList.add("project-item");
      clone.classList.add("clone");


      //colore sfondo clone
      //console.log("questo è il colore di sfondo dell'elemento cliccato");
      //console.log(genitor.style.backgroundColor);
      clone.style.backgroundColor = genitor.style.backgroundColor;
      //animazione di apertura

      //qui copio l'inner html quindi tutto il codice contenuto nell'item progetto
      clone.innerHTML = genitor.innerHTML;
      projectPage.appendChild(clone);

      //test
      //clone.style.backgroundColor = genitor.style.backgroundColor;
      //clone.style.backgroundColor = "red";


      //definisco variabili per animazione
      const progectitem = clone.querySelector(".project-item");
      const title = clone.querySelector(".project-title");
      var subtitle = clone.querySelector(".project-subtitle");

      console.log("questo è il subtitle");
      console.log(subtitle);
      //controllo per sottotitolo corretto
      if(subtitle.classList.contains("mob-hidden")){
        console.log("ok cha la doppia classe");
        if(isDesktop()){
          console.log("e mi piglio la desk");
          subtitle = clone.querySelector(".project-subtitle.mob-hidden");
          console.log(subtitle);
        } else {
          console.log("e mi piglio la mob");
          subtitle = clone.querySelector(".project-subtitle.des-hidden");
          console.log(subtitle);
        }
      } else {
        console.log("non ce l'ha la doppia classe");
      }

      // const hero = clone.querySelector(".project-hero");
      const contenutoPagina = clone.querySelector(".project-content");
      const sitowebbe = clone.querySelector(".project-website");
      const closeButton = clone.querySelector(".project-close");
      const duration = 1;

      //aggiungo i project close
      //const projectClose =
      //projectCloseButton.addEventListener("click", onProjectClose);

      //aggiungo l'event listner sul closeButton
      closeButton.addEventListener("click", onProjectClose);

      //calcolo left per titolo progetto madre_aperto
      const largColumn = (window.innerWidth - 80 - 220)/12;
      const paddingLeftTitle = 40 + largColumn + 20;

      //funzione per calcolare posizione di fondo del paragrafo
      var paragrafetto = $("#project-page .project-description");
      var positionParagrafo = paragrafetto.position(); //cache the position
      //questo è il bottom a cui andrà il sito web + 340 //220
      const topParagrafo = 220 + paragrafetto.height() - 300;
      console.log("questa è l'altezza del paragrafo: " + paragrafetto.height() );
      //const bottomParagrafo = $(window).height() - positionParagrafo.top - paragrafetto.height();

      //calcolo altezza projectSubtitle
      var sottoSubpartenza = $("#project-page .project-subtitle");
      var sottoSub = sottoSubpartenza.position().top + sottoSubpartenza.outerHeight(true) + 90;

      //refresh triggerin solo su Mobile
      if(!isDesktop()){
        ScrollTrigger.refresh();
        console.log("refreshatooo!");
      }

      //rimuovo la classe con il video
      $("#project-page .proj-video-preview").removeClass( "show-video-preview" );
      //metto il video a display none
      $("#project-page .proj-video-preview").css("display", "none");

      //variabili per lettere
      const linkSitoWebLettere = clone.querySelectorAll(".link-sito li");
      const linkSitoWebUnderline = clone.querySelector(".underline-website");
      //let taglineSplit = new SplitText(linkSitoWeb, {type:"chars, words"});
      console.log("queste sono le lettere:");
      console.log(linkSitoWebLettere);


      if(isDesktop()){
        //animazione per isDesktop
        gsap.timeline()
        .to(clone, {
            duration: 1.4,
            backgroundColor: "white",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            ease: Expo.easeInOut
        }, "scaleFS")
        .to(title, {
            duration: 1.4,
            left: paddingLeftTitle,
            fontSize: 52,
            pointerEvents: "none",
            ease: Expo.easeInOut
        }, "scaleFS")
        .to(subtitle, {
            duration: 1.4,
            left: paddingLeftTitle,
            top: 100,
            fontSize: 52,
            pointerEvents: "none",
            ease: Expo.easeInOut
        }, "scaleFS")
        .add("Gisel")
        .fromTo(closeButton, {
            x: -40,
            autoAlpha: 0,
            scale: 1,
            transformOrigin: '50% 0%'
        }, {
            x: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 2,
            pointerEvents: "all",
            cursor: "pointer",
            ease: Expo.easeOut
        },'Gisel -=1')
        .set(sitowebbe, {
            autoAlpha: 1,
            y: 0,
            duration: 2,
            left: paddingLeftTitle,
            color: "black",
            top: 220,
            pointerEvents: "all",
            ease: Expo.easeInOut
        },'Gisel -=1.4')
        .from(linkSitoWebLettere, {
          yPercent:100,
          duration:1,
          stagger: {
            each: 0.03,
            ease: Expo.easeIn
          },
          ease: Expo.easeInOut
        },'Gisel -=1')
        .from(linkSitoWebUnderline, {
          x: -150,
          duration:1.4,
          ease: Expo.easeIn
        },'Gisel -=1')
        .fromTo(contenutoPagina, {
            display: "none",
            x: 0,
            y: 80,
            autoAlpha: 0,
            //scale: 1.1,
            //transformOrigin: '50% 0%'
        }, {
            display: "block",
            x: 0,
            y: 0,
            autoAlpha: 1,
            //stagger: 0.1,
            duration: 1.8,
            ease: Expo.easeInOut
        },'Gisel -=1.4')
        .set(clone, {height: "auto", overflow: "hidden", display: "block", position: "relative"})
        //.set(title, {position: "fixed", zIndex: 999})
        .add(() => {
          // funziona questo sottyo
          //window.scrollTo(0, window.innerHeight)
          var destinazioneScroll = $('#homesection').outerHeight();
          console.log("altezza home section: " + destinazioneScroll);

          //prova mezzo secondo
          /*
          setTimeout(
            function()
            {
              window.scrollTo(0, destinazioneScroll);
            }, 1000);
          */
          //questo sotto funziona
          window.scrollTo(0, destinazioneScroll);
          /*$('html, body').animate({
              scrollTop: $("#projects").offset().top
          }, 2000);*/

        })
        .add( function(){ console.log('ok la animazione dovrebbe essere finita')} )
        .add( function(){

          //funzione per gestire lo scroll/fixed del titolo
          var argumentProjTitle = $("#project-page h2.project-title").last();

          var action = gsap.set(argumentProjTitle, {position:'fixed', paused:true});
          var action5 = gsap.set(argumentProjTitle, {opacity:0, paused:true});
          var action6 = gsap.set('#project-page h2.project-close', {opacity:0, paused:true});

          //console.log("questo è il risultato ultimo del title:");
          //console.log(argumentProjTitle.last());

          var action2 = gsap.set('#project-page h2.project-close', {position:'fixed', paused:true});

          //funzione per gestire il website
          var action3 = gsap.set('#project-page .project-website', {position:'fixed', paused:true, top:100});
          var action4 = gsap.set('#project-page .project-website', {opacity:0, pointerEvents: "none", paused:true});

          //ScrollTrigger.update();
          var argumentProjPage = $("#project-page").last();

          console.log("questo è la situazione projects");
          var ecctl = $("#projects");
          console.log(ecctl);

          ScrollTrigger.create({
            trigger: argumentProjPage,
            start: "top top",
            end: "bottom 100px",
            onEnter: function(){ action.play(); action2.play();},
            onLeave: function(){ action.reverse(); action2.reverse();},
            onLeaveBack: function(){ action.reverse(); action2.reverse();},
            onEnterBack: function(){ action.play(); action2.play();},
            markers:false
          });
          ScrollTrigger.create({
            trigger: "#projects",
            start: "top center",
            onEnter: function(){ action5.play(); action6.play();},
            onLeaveBack: function(){ action5.reverse(); action6.reverse();},
            onEnterBack: function(){ action5.play(); action6.play();},
            markers:false
          });

          // azioni per website
          //funzione per calcolare posizione di fondo del paragrafo
          var oggettoLinkSito = $("#project-page .project-website");
          var positionLinkSito = oggettoLinkSito.position(); //cache the position
          //questo è il bottom a cui andrà il sito web + 340
          const topLinkSito = positionLinkSito.top;
          console.log("questo è il top del sito");
          console.log(topLinkSito);

          ScrollTrigger.create({
            trigger: ".project-website",
            start: "top 100px",
            onEnter: () => action3.play(),
            onLeaveBack: () => action3.reverse(),
            onEnterBack: () => action3.play(),
            markers:false
          });

          ScrollTrigger.create({
            trigger: "#project-page",
            start: "bottom center",
            onEnter: () => action4.play(),
            onLeaveBack: () => action4.reverse(),
            onEnterBack: () => action4.play(),
            markers:false
          });

        })
        //.call( scrollino )
        .add(() => {
          // se ci sono più progetti aperti
          // solo un progetto aperto per volta

          if (projectPage.children.length > 1) {
              console.log("c'era già un progetto aperto, mo lo chiudiamo");
              projectPage.firstElementChild.remove();
          }
          //imposto attivo il blocco dei progetti non il body
          //document.body.classList.add("project-active");
          //$(".proj-cont").addClass("project-active");
          document.getElementById("project-page").classList.add("project-active");

          //imposto attivo solo il progetto corrente?
          Array.from(projects.children).forEach((child) =>
              child.classList.remove("active")
          );
          projects.children[parseInt(index)].classList.add("active");
          //refresh
          //window.requestAnimationFrame(refreshScroll);
        });
      } else {
        //animazione per mobile
        gsap.timeline()
        .to(clone, {
            //duration: 1.6,
            duration: 0.9,
            backgroundColor: "white",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            ease: Expo.easeOut
        }, "scaleFS")
        .to(title, {
            duration: 1.2,
            left: 55,
            fontSize: gotMobFontSize,
            marginTop: gotMobMarginTop,
            pointerEvents: "none",
            ease: Expo.easeOut
        }, "scaleFS")
        .to(subtitle, {
            duration: 1.2,
            left: 15,
            top: gotMobTopSubtitle,
            fontSize: gotMobFontSize,
            pointerEvents: "none",
            ease: Expo.easeOut
        }, "scaleFS")
        .add("Gisel")
        .fromTo(closeButton, {
            x: -40,
            autoAlpha: 1,
            //transformOrigin: '50% 0%'
        }, {
            x: 0,
            autoAlpha: 1,
            duration: 1,
            pointerEvents: "all",
            cursor: "pointer",
            ease: Expo.easeOut
        },'Gisel -=1')
        .set(sitowebbe, {
            autoAlpha: 1,
            duration: 0.01,
            left: 15,
            color: "black",
            top: gotMobTopSito,
            pointerEvents: "all",
        },'Gisel -=1.4')
        .from(linkSitoWebLettere, {
          yPercent:100,
          duration:1.8,
          stagger: {
            each: 0.03,
            ease: Expo.easeIn
          },
          ease: Expo.easeInOut
        },'Gisel -=1')
        .from(linkSitoWebUnderline, {
          x: -130,
          duration:1.2,
          ease: Expo.easeIn
        },'Gisel -=1')
        .fromTo(contenutoPagina, {
            display: "none",
            y: 50,
            autoAlpha: 0,
        }, {
            display: "block",
            y: 0,
            autoAlpha: 1,
            duration: 1.6,
        },'Gisel -=1.8')
        .set(clone, {
          height: "auto",
          //overflow: "hidden",
          //display: "block",
          position: "relative"
        })
        //.set(title, {position: "fixed", zIndex: 999})
        .add(() => {
          // funziona questo sottyo
          //window.scrollTo(0, window.innerHeight)
          var destinazioneScroll = $('#homesection').outerHeight();
          console.log("altezza home section: " + destinazioneScroll);

          //prova mezzo secondo
          /*
          setTimeout(
            function()
            {
              window.scrollTo(0, destinazioneScroll);
            }, 1000);
          */
          //questo sotto funziona
          window.scrollTo(0, destinazioneScroll);
          /*$('html, body').animate({
              scrollTop: $("#projects").offset().top
          }, 2000);*/

        })
        .add( function(){ console.log('ok la animazione dovrebbe essere finita')} )
        .add( function(){

          //funzione per gestire lo scroll/fixed del titolo
          var argumentProjTitle = $("#project-page h2.project-title").last();

          var action = gsap.set(argumentProjTitle, {position:'fixed', paused:true});
          var action5 = gsap.set(argumentProjTitle, {opacity:0, paused:true});
          var action6 = gsap.set('#project-page h2.project-close', {opacity:0, paused:true});

          //console.log("questo è il risultato ultimo del title:");
          //console.log(argumentProjTitle.last());

          var action2 = gsap.set('#project-page h2.project-close', {position:'fixed', paused:true});

          //funzione per gestire il website
          var action3 = gsap.set('#project-page .project-website', {position:'fixed', paused:true, top:60, ease: Expo.easeInOut});
          //funzione per gestire il website lateralmente possibilità gestire ease
          var action3b = gsap.fromTo('#project-page .project-website', {left:15}, {left:55, paused:true, duration:0.5, ease: Expo.easeInOut});


          var action4 = gsap.set('#project-page .project-website', {opacity:0, pointerEvents: "none", paused:true});

          //ScrollTrigger.update();
          var argumentProjPage = $("#project-page").last();

          console.log("questo è la situazione projects");
          var ecctl = $("#projects");
          console.log(ecctl);

          ScrollTrigger.create({
            trigger: argumentProjPage,
            start: "top top",
            end: "bottom 100px",
            onEnter: function(){ action.play(); action2.play();},
            onLeave: function(){ action.reverse(); action2.reverse();},
            onLeaveBack: function(){ action.reverse(); action2.reverse();},
            onEnterBack: function(){ action.play(); action2.play();},
            markers:false
          });
          ScrollTrigger.create({
            trigger: "#projects",
            start: "top bottom",
            onEnter: function(){ action5.play(); action6.play();},
            onLeaveBack: function(){ action5.reverse(); action6.reverse();},
            onEnterBack: function(){ action5.play(); action6.play();},
            markers:false
          });

          // azioni per website
          //funzione per calcolare posizione di fondo del paragrafo
          var oggettoLinkSito = $("#project-page .project-website");
          //var positionLinkSito = oggettoLinkSito.position(); //cache the position
          //questo è il bottom a cui andrà il sito web + 340
          //const topLinkSito = positionLinkSito.top;
          //console.log("questo è il top del sito");
          //console.log(topLinkSito);

          ScrollTrigger.create({
            trigger: ".project-website",
            start: "top 60px",
            onEnter: () => action3.play(),
            onLeaveBack: () => action3.reverse(),
            onEnterBack: () => action3.play(),
            markers:false
          });
          //prova movimento website laterale
          ScrollTrigger.create({
            trigger: ".project-website",
            start: "top 90px",
            onEnter: () => action3b.play(),
            onLeaveBack: () => action3b.reverse(),
            onEnterBack: () => action3b.play(),
            markers:false
          });

          ScrollTrigger.create({
            trigger: "#project-page",
            start: "bottom bottom",
            onEnter: () => action4.play(),
            onLeaveBack: () => action4.reverse(),
            onEnterBack: () => action4.play(),
            markers:false
          });

        })
        //.call( scrollino )
        .add(() => {
          // se ci sono più progetti aperti
          // solo un progetto aperto per volta

          if (projectPage.children.length > 1) {
              console.log("c'era già un progetto aperto, mo lo chiudiamo");
              projectPage.firstElementChild.remove();
          }
          //imposto attivo il blocco dei progetti non il body
          //document.body.classList.add("project-active");
          //$(".proj-cont").addClass("project-active");
          document.getElementById("project-page").classList.add("project-active");

          //imposto attivo solo il progetto corrente?
          Array.from(projects.children).forEach((child) =>
              child.classList.remove("active")
          );
          projects.children[parseInt(index)].classList.add("active");

          // inizio a refreshare
          //window.requestAnimationFrame(refreshScroll);
        });
      }



  }

  // test closeButton
  function onProjectClose() {

      const clone = document.querySelector(".clone");
      const contenutoPagina = clone.querySelector(".project-content");
      const projectHero = clone.querySelector(".project-hero");
      const projectContent = clone.querySelector(".project-content");
      const duration = 0.6;

      const destinazioneScrollBack = $('#homesection').outerHeight();

      //window.cancelAnimationFrame(stoppalo);

      gsap.timeline()
          .add("close")
          .to(clone, {
              duration,
              height: "0vh",
              minHeight: "0vh",
              padding: "0",
              opacity: "0",
              ease: Expo.easeInOut,
              onComplete() {
                  clone.remove();
              }
          }, "close")
          .to(contenutoPagina.children, {
              duration,
              opacity: 0,
              ease: Expo.easeInOut
          }, "close")
          .to(window, {
              duration,
              scrollTo: {
                  y: destinazioneScrollBack
              },
              ease: Expo.easeInOut
          }, "close")
          .add(() => {
              //document.body.classList.remove("project-active");
              //$(".proj-cont").addClass("project-active");
              document.getElementById("project-page").classList.remove("project-active");
              Array.from(projects.children).forEach((child) => child.classList.remove("active"));

              //rimuovo la classe per mettere in evidenza la sezione projects
              $("#projects").removeClass("projects-area-active");

              //refresh triggerin solo su Mobile
              if(!isDesktop()){
                ScrollTrigger.refresh();
                console.log("refreshatooo!");
              }
          });
  }
  function onProjectCloseFast() {

      const clone = document.querySelector(".clone");
      const contenutoPagina = clone.querySelector(".project-content");
      const projectHero = clone.querySelector(".project-hero");
      const projectContent = clone.querySelector(".project-content");

      const duration = 0.6;

      /*
      var duration = 0;
      if(!isDesktop()){
        duration = 0.6;
      } else {
        duration = 0.1;
      }
      */

      const nomeProggett = clone.querySelector(".project-title");
      const tutteCos = clone.querySelector(".project-item");
      const subProggett = clone.querySelector(".project-subtitle");
      const websiteProggett = clone.querySelector(".project-website");
      //nomeProggett.style.opacity = "0";
      //subProggett.style.opacity = "0";

      //refresh triggerin solo su Mobile
      if(!isDesktop()){
        ScrollTrigger.refresh();
        console.log("refreshatooo!");
      }

      gsap.timeline()
          .add("close")
          .to(clone, {
              duration,
              height: "0vh",
              minHeight: "0vh",
              padding: "0",
              opacity: "0",
              ease: Expo.easeInOut,
              onComplete() {
                  clone.remove();
              }
          }, "close")
          .to(nomeProggett, {
              duration,
              opacity: 0,
              ease: Expo.easeInOut
          }, "close")
          .to(websiteProggett, {
              duration,
              opacity: 0,
              ease: Expo.easeInOut
          }, "close")
          .to(contenutoPagina.children, {
              duration,
              opacity: 0,
              ease: Expo.easeInOut
          }, "close")
          .to(window, {
              duration,
              scrollTo: {
                  y: window.innerHeight
              },
              ease: Expo.easeInOut
          }, "close")
          .add(() => {


              //document.body.classList.remove("project-active");
              //$(".proj-cont").addClass("project-active");
              document.getElementById("project-page").classList.remove("project-active");
              Array.from(projects.children).forEach((child) => child.classList.remove("active"));

              //rimuovo la classe per mettere in evidenza la sezione projects
              $("#projects").removeClass("projects-area-active");
          });
  }
  function onProjectCloseFastMob() {

      const clone = document.querySelector(".clone");
      const contenutoPagina = clone.querySelector(".project-content");
      const projectHero = clone.querySelector(".project-hero");
      const projectContent = clone.querySelector(".project-content");

      const duration = 0.1;

      const nomeProggett = clone.querySelector(".project-title");
      const tutteCos = clone.querySelector(".project-item");
      const subProggett = clone.querySelector(".project-subtitle");
      const websiteProggett = clone.querySelector(".project-website");

      //refresh triggerin solo su Mobile
      if(!isDesktop()){
        ScrollTrigger.refresh();
        console.log("refreshatooo!");
      }

      gsap.timeline()
          .add("close")
          .to(clone, {
              duration,
              height: "0vh",
              minHeight: "0vh",
              opacity: "0",
              onComplete() {
                  clone.remove();
              }
          }, "close")
          .to(window, {
              duration,
              scrollTo: {
                  y: window.innerHeight
              },
              ease: Expo.easeInOut
          }, "close")
          .add(() => {
              document.getElementById("project-page").classList.remove("project-active");
              Array.from(projects.children).forEach((child) => child.classList.remove("active"));
          });
  }

// qui si chiude il windows ready
});

//funzione per avere i valori Mobile
function getProjMobInfo(idDelProgetto) {
  var oggettoConInfo = {
    margineAlTop : 0,
    dimensioneFont  : 38,
    topDelSito     : 0,
    topSubtitle     : 59
  };
  //switch per top sito
  switch (idDelProgetto) {
    case "proj-madre":
      oggettoConInfo.topDelSito = 156;
      break;
    case "proj-italics":
      oggettoConInfo.topDelSito = 156;
      break;
    case "proj-combo":
      oggettoConInfo.topDelSito = 110;
      break;
    case "proj-ll":
      oggettoConInfo.topDelSito = 110;
      break;
    case "proj-grc":
      oggettoConInfo.topDelSito = 110;
      break;
    default:
      oggettoConInfo.topDelSito = 0;
  }
  if(idDelProgetto == "proj-land"){
    oggettoConInfo.topSubtitle = 54;
    oggettoConInfo.dimensioneFont = 30;
    oggettoConInfo.margineAlTop = 4;
  }
  if(idDelProgetto == "proj-maxxi"){
    oggettoConInfo.topSubtitle = 100;
  }
  if(idDelProgetto == "proj-icon"){
    oggettoConInfo.dimensioneFont = 34;
  }
  if(idDelProgetto == "proj-gs1"){
    oggettoConInfo.dimensioneFont = 34;
    oggettoConInfo.topSubtitle = 100;
  }
  if(idDelProgetto == "proj-grc"){
    oggettoConInfo.dimensioneFont = 27;
    oggettoConInfo.margineAlTop = 7;
    oggettoConInfo.topDelSito = 98;
  } else if (idDelProgetto == "proj-mm") {
    oggettoConInfo.dimensioneFont = 32;
    oggettoConInfo.margineAlTop = 4;
  }

  return oggettoConInfo;

}
