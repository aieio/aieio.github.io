// se ci sono più progetti aperti
// solo un progetto aperto per volta
// non funziona del projectCloseButton
$( document ).ready(function() {



//console.log("ecco il target cos'è");
//console.log(target);
//console.log("ed ecco il parent");
//console.log(genitor);


let parametroGetMob = document.querySelector(".mob-proj-page").id;
var outputGetMob = getProjMobPageInfo(parametroGetMob);
const gotMobTopSito = outputGetMob.topDelSito;
const gotMobFontSize = outputGetMob.dimensioneFont;
const gotMobMarginTop = outputGetMob.margineAlTop;
const gotMobTopSubtitle = outputGetMob.topSubtitle;


const clone = document.querySelector(".mob-proj-page");
/*
clone.style.height = height + "px";
clone.style.width = width + "px";
clone.style.top = top + "px";
clone.style.left = left + "px";
clone.style.position = "fixed";
clone.style.zIndex = 9;
clone.classList.add("project-item");
clone.classList.add("clone");*/


//colore sfondo clone
//console.log("questo è il colore di sfondo dell'elemento cliccato");
//console.log(genitor.style.backgroundColor);
//clone.style.backgroundColor = genitor.style.backgroundColor;
//animazione di apertura

//qui copio l'inner html quindi tutto il codice contenuto nell'item progetto
//clone.innerHTML = genitor.innerHTML;
//projectPage.appendChild(clone);

//test
//clone.style.backgroundColor = genitor.style.backgroundColor;
//clone.style.backgroundColor = "red";


//definisco variabili per animazione
const progectitem = clone.querySelector(".project-item");
const title = clone.querySelector(".project-title");
var subtitle = clone.querySelector(".project-subtitle");

//console.log("questo è il subtitle");
//console.log(subtitle);

//controllo per sottotitolo corretto
if(subtitle.classList.contains("mob-hidden")){
  //console.log("ok cha la doppia classe");
  if(isDesktop()){
    //console.log("e mi piglio la desk");
    subtitle = clone.querySelector(".project-subtitle.mob-hidden");
    //console.log(subtitle);
  } else {
    //console.log("e mi piglio la mob");
    subtitle = clone.querySelector(".project-subtitle.des-hidden");
    //console.log(subtitle);
  }
} else {
  //console.log("non ce l'ha la doppia classe");
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
//closeButton.addEventListener("click", onProjectClose);

//calcolo left per titolo progetto madre_aperto
const largColumn = (window.innerWidth - 80 - 220)/12;
const paddingLeftTitle = 40 + largColumn + 20;

//funzione per calcolare posizione di fondo del paragrafo
var paragrafetto = $("#project-page .project-description");
var positionParagrafo = paragrafetto.position(); //cache the position
//questo è il bottom a cui andrà il sito web + 340 //220
const topParagrafo = 220 + paragrafetto.height() - 300;
//console.log("questa è l'altezza del paragrafo: " + paragrafetto.height() );
//const bottomParagrafo = $(window).height() - positionParagrafo.top - paragrafetto.height();

//calcolo altezza projectSubtitle
//var sottoSubpartenza = $("#project-page .project-subtitle");
//var sottoSub = sottoSubpartenza.position().top + sottoSubpartenza.outerHeight(true) + 90;

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
//console.log("queste sono le lettere:");
//console.log(linkSitoWebLettere);

//scroll homes
var destinazioneScroll = $('#homesection').outerHeight();
//console.log("altezza home section: " + destinazioneScroll);




//animazione per mobile
gsap.timeline()
.to(clone, {
    //duration: 1.6,
    duration: 0.5,
    backgroundColor: "white",
    top: 0,
    height: "100%",
    ease: "none"
    //ease: Expo.easeOut
}, "scaleFS")
.to(title, {
    x: 40,
    fontSize: gotMobFontSize,
    marginTop: gotMobMarginTop,
    ease: "none"
}, "scaleFS")
.to(subtitle, {
    //left: 15,
    top: gotMobTopSubtitle,
    fontSize: gotMobFontSize,
    ease: "none"
}, "scaleFS")
.add("Gisel")
.fromTo(closeButton, {
    x: -40,
    autoAlpha: 1,
}, {
    x: 0,
    display: "block",
    autoAlpha: 1,
    duration: 1,
    pointerEvents: "all",
},'Gisel')
.set(sitowebbe, {
    autoAlpha: 1,
    //duration: 0.01,
    left: 15,
    color: "black",
    top: gotMobTopSito,
    pointerEvents: "all",
//},'Gisel -=1.4')
},'Gisel')
.from(linkSitoWebLettere, {
  yPercent:100,
  duration:1.8,
  stagger: {
    each: 0.03,
    ease: "power3.in"
  },
  ease: Expo.easeInOut
//},'Gisel -=1')
},'Gisel')
.from(linkSitoWebUnderline, {
  x: -130,
  duration:1.2,
  ease: Expo.easeIn
//},'Gisel -=1')
},'Gisel')
.fromTo(contenutoPagina, {
    //display: "none",
    //y: 80,
    autoAlpha: 0,
}, {
    display: "block",
    //y: 0,
    autoAlpha: 1,
    duration: 1.8,
//},'Gisel -=1.8')
},'Gisel')
.set(clone, {
  height: "auto",
  position: "relative"
})
.add( function(){

  console.log('ok la animazione dovrebbe essere finita');

  //scroll pagina sotto homesection
  window.scrollTo(0, destinazioneScroll);

  //funzione per gestire lo scroll/fixed del titolo nel caso ce ne siano più di uno
  //var argumentProjTitle = $("#project-page h2.project-title").last();
  var argumentProjTitle = $(".mob-proj-page h2.project-title");

  var action = gsap.set(argumentProjTitle, {position:'fixed', paused:true});
  var action5 = gsap.set(argumentProjTitle, {opacity:0, paused:true});
  var action6 = gsap.set('.mob-proj-page h2.project-close', {opacity:0, paused:true});

  //console.log("questo è il risultato ultimo del title:");
  //console.log(argumentProjTitle.last());

  var action2 = gsap.set('.mob-proj-page h2.project-close', {position:'fixed', paused:true});

  //funzione per gestire il website
  var action3 = gsap.set('.mob-proj-page .project-website', {position:'fixed', paused:true, top:60, ease: Expo.easeInOut});
  //funzione per gestire il website lateralmente possibilità gestire ease
  var action3b = gsap.fromTo('.mob-proj-page .project-website', {left:15}, {left:55, paused:true, duration:0.5, ease: Expo.easeInOut});


  var action4 = gsap.set('.mob-proj-page .project-website', {opacity:0, pointerEvents: "none", paused:true});

  //ScrollTrigger.update();
  //var argumentProjPage = $("#project-page").last();
  var argumentProjPage = $(".mob-proj-page");


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
    trigger: ".mob-proj-page",
    start: "bottom bottom",
    onEnter: () => action4.play(),
    onLeaveBack: () => action4.reverse(),
    onEnterBack: () => action4.play(),
    markers:false
  });

})


//fine on window loading
});


//funzione per avere i valori Mobile
function getProjMobPageInfo(idDelProgetto) {
  var oggettoConInfo = {
    margineAlTop : 0,
    dimensioneFont  : 38,
    topDelSito     : 0,
    topSubtitle     : 59
  };
  //switch per top sito
  switch (idDelProgetto) {
    case "proj-madre-open":
      oggettoConInfo.topDelSito = 156;
      break;
    case "proj-italics-open":
      oggettoConInfo.topDelSito = 156;
      break;
    case "proj-combo-open":
      oggettoConInfo.topDelSito = 110;
      break;
    case "proj-ll-open":
      oggettoConInfo.topDelSito = 110;
      break;
    case "proj-grc-open":
      oggettoConInfo.topDelSito = 110;
      break;
    default:
      oggettoConInfo.topDelSito = 0;
  }
  if(idDelProgetto == "proj-land-open"){
    oggettoConInfo.topSubtitle = 54;
    oggettoConInfo.dimensioneFont = 30;
    oggettoConInfo.margineAlTop = 4;
  }
  if(idDelProgetto == "proj-maxxi-open"){
    oggettoConInfo.topSubtitle = 100;
  }
  if(idDelProgetto == "proj-icon-open"){
    oggettoConInfo.dimensioneFont = 34;
  }
  if(idDelProgetto == "proj-gs1-open"){
    oggettoConInfo.dimensioneFont = 34;
    oggettoConInfo.topSubtitle = 100;
  }
  if(idDelProgetto == "proj-grc-open"){
    oggettoConInfo.dimensioneFont = 27;
    oggettoConInfo.margineAlTop = 7;
    oggettoConInfo.topDelSito = 98;
  } else if (idDelProgetto == "proj-mm-open") {
    oggettoConInfo.dimensioneFont = 32;
    oggettoConInfo.margineAlTop = 4;
  }

  return oggettoConInfo;

}
