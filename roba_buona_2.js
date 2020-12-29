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

  //console.log("urcamdimm");
  function onProjectClick(event) {

      // se ci sono più progetti aperti
      // solo un progetto aperto per volta
      // non funziona del projectCloseButton

      if (projectPage.children.length > 0) {
          console.log("c'era già un progetto aperto, mo lo chiudiamo");
          // velocizzo chiusura
          onProjectClose();
          //projectPage.firstElementChild.remove();
          //const cloneDaRimuovere = $(".clone");
          //cloneDaRimuovere.remove();
      } else {
        console.log("non c'erano progetti aperti");
      }

      const { target } = event;
      const genitor = target.parentElement;
      //console.log("ecco il target cos'è");
      //console.log(target);
      //console.log("ed ecco il parent");
      //console.log(genitor);

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
      clone.style.zIndex = 10;
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
      const subtitle = clone.querySelector(".project-subtitle");
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
      const paddingLeftTitle = 50 + largColumn + 20;

      //funzione per calcolare posizione di fondo del paragrafo
      var paragrafetto = $("#project-page .project-description");
      var positionParagrafo = paragrafetto.position(); //cache the position
      //questo è il bottom a cui andrà il sito web + 340 //220
      const topParagrafo = 220 + paragrafetto.height() - 300;
      console.log("questa è l'altezza del paragrafo: " + paragrafetto.height() );
      //const bottomParagrafo = $(window).height() - positionParagrafo.top - paragrafetto.height();


      //rimuovo la classe con il video
      $("#project-page .proj-video-preview").removeClass( "show-video-preview" );


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
          top: 130,
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
      .fromTo(sitowebbe, {
          autoAlpha: 0,
          y: 80,
          left: paddingLeftTitle,
          top: topParagrafo,
      }, {
          autoAlpha: 1,
          y: 0,
          duration: 2,
          left: paddingLeftTitle,
          color: "black",
          top: 300,
          pointerEvents: "all",
          ease: Expo.easeInOut
      },'Gisel -=1.4')
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
          //scale: 1,
          stagger: 0.1,
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
        window.scrollTo(0, destinazioneScroll);
        /*$('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 2000);*/

      })
      .add( function(){ console.log('ok la animazione dovrebbe essere finita')} )
      .add( function(){

        //aggiungo la classe per mettere in evidenza la sezione projects
        //$("#projects").addClass("projects-area-active");



        //funzione per gestire lo scroll/fixed del titolo
        var argumentProjTitle = $("#project-page h2.project-title").last();




        /*if (argumentProjTitle.length() > 0){
          argumentProjTitle = argumentProjTitle.last();
          console.log("questo oggetto non era unico eh, aveva:" + argumentProjTitle.length() + " elementi");
        }*/


        var action = gsap.set(argumentProjTitle, {position:'fixed', paused:true});
        var action5 = gsap.set(argumentProjTitle, {opacity:0, paused:true});
        var action6 = gsap.set('#project-page h2.project-close', {opacity:0, paused:true});

        //console.log("questo è il risultato ultimo del title:");
        //console.log(argumentProjTitle.last());

        var action2 = gsap.set('#project-page h2.project-close', {position:'fixed', paused:true});

        //funzione per gestire il website
        var action3 = gsap.set('#project-page .project-website', {position:'fixed', paused:true, top:130});
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
          start: "top 130px",
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
      });


  }

  // test closeButton
  function onProjectClose() {

      const clone = document.querySelector(".clone");
      const contenutoPagina = clone.querySelector(".project-content");
      const projectHero = clone.querySelector(".project-hero");
      const projectContent = clone.querySelector(".project-content");
      const duration = 0.6;

      const destinazioneScrollBack = $('#homesection').outerHeight();

      gsap.timeline()
          .add("close")
          .to(clone, {
              duration,
              height: "0vh",
              minHeight: "0vh",
              padding: "0",
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
          });
  }
  function onProjectCloseFast() {

      const clone = document.querySelector(".clone");
      const contenutoPagina = clone.querySelector(".project-content");
      const projectHero = clone.querySelector(".project-hero");
      const projectContent = clone.querySelector(".project-content");
      const duration = 0.1;

      gsap.timeline()
          .add("close")
          .to(clone, {
              duration,
              height: "0vh",
              minHeight: "0vh",
              padding: "0",
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
  /*
  function scrollino () {

    var targettino = $("#project-page h2.project-title");
    var chiuditi = $("#project-page h2.project-close");

    var triggerino = $(".clone");
    var action = gsap.set(targettino, {position:'fixed', paused:true});
    var actionClose = gsap.set(chiuditi, {position:'fixed', paused:true});



    ScrollTrigger.create({
      trigger: triggerino,
      start: "top top",
      end: "bottom 200px",
      onEnter: () => action.play(),
      onLeave: () => action.reverse(),
      onLeaveBack: () => action.reverse(),
      onEnterBack: () => action.reverse(),
      markers:true
    });

    ScrollTrigger.create({
      trigger: triggerino,
      start: "top top",
      end: "bottom 200px",
      onEnter: () => actionClose.play(),
      onLeave: () => actionClose.reverse(),
      onLeaveBack: () => actionClose.reverse(),
      onEnterBack: () => actionClose.reverse(),
      markers:false
    });
  }
*/

});
