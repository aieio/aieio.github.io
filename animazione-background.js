//$( document ).ready(function() {
let homeInSchermo = true;


function animazioneSfondo () {
  const section = document.querySelector(".bg-animation");

  const logo = document.querySelector(".shape-bg-1");
  const logo2 = document.querySelector(".shape-bg-2");
  const logo3 = document.querySelector(".shape-bg-3");
  //$(".shape-bg-1").css('opacity',1);

  //const FPS = 60;
  //const FPS = 30;
  var widthLimite = section.offsetWidth;
  var heightLimite = section.offsetHeight;

  //var widthLimite = $('.bg-animation').outerWidth();
  //var heightLimite = $('.bg-animation').outerHeight();

  //disattivo un sec
  //section.style.height = heightLimite;
  //section.style.width = widthLimite;

  // Logo moving velocity Variables
  //posizioni iniziali
  let xPosition = 10;
  let yPosition = 10;

  let x2Position = 1200;
  let y2Position = 500;

  let x3Position = 700;
  let y3Position = 200;

  //genero posizioni random
  if(isDesktop()){
    //larghezza sarà di 88vw
    console.log("siamo su desktop e ora assegno le coordinate");
    xPosition = randomXCoordinateDesk();
    yPosition = randomYCoordinateDesk();
    x2Position = randomXCoordinateDesk();
    y2Position = randomYCoordinateDesk();
    x3Position = randomXCoordinateDesk();
    y3Position = randomYCoordinateDesk();
  } else {
    console.log("siamo su mobile e ora assegno le coordinate");
    xPosition = randomXCoordinateMob();
    yPosition = randomYCoordinateMob();
    x2Position = randomXCoordinateMob();
    y2Position = randomYCoordinateMob();
    x3Position = randomXCoordinateMob();
    y3Position = randomYCoordinateMob();
  }

  //$(".shape-bg-1").css('opacity',1);
  //$(".shape-bg-2").css('opacity',1);
  //$(".shape-bg-3").css('opacity',1);
  logo.style.opacity = 1;
  logo2.style.opacity = 1;
  logo3.style.opacity = 1;


  //velocità
  let xSpeed = 0.8;
  let ySpeed = 0.8;

  let x2Speed = 0.9;
  let y2Speed = 0.6;

  let x3Speed = 0.7;
  let y3Speed = 0.9;

  //call function requestAnimationFrame
  prepareUpdate();

  function update() {
    logo.style.left = xPosition + "px";
    logo.style.top = yPosition + "px";

    logo2.style.left = x2Position + "px";
    logo2.style.top = y2Position + "px";

    logo3.style.left = x3Position + "px";
    logo3.style.top = y3Position + "px";
  }

  //function requestAnimationFrame
  function prepareUpdate() {
    if (xPosition + logo.clientWidth >= widthLimite || xPosition <= 0) {
        xSpeed = -xSpeed;
      }
      if (yPosition + logo.clientHeight >= heightLimite || yPosition <= 0) {
        ySpeed = -ySpeed;
      }
      //shape2
      if (x2Position + logo2.clientWidth >= widthLimite || x2Position <= 0) {
        x2Speed = -x2Speed;
      }
      if (y2Position + logo2.clientHeight >= heightLimite || y2Position <= 0) {
        y2Speed = -y2Speed;
      }
      //shape3
      if (x3Position + logo3.clientWidth >= widthLimite || x3Position <= 0) {
        x3Speed = -x3Speed;
      }
      if (y3Position + logo3.clientHeight >= heightLimite || y3Position <= 0) {
        y3Speed = -y3Speed;
      }

      xPosition += xSpeed;
      yPosition += ySpeed;

      x2Position += x2Speed;
      y2Position += y2Speed;

      x3Position += x3Speed;
      y3Position += y3Speed;

      update();
      /*
      if(homeInSchermo){
        window.requestAnimationFrame(prepareUpdate);
        console.log("l'animazione va");
      } else {
        console.log("l'animazione è ferma");
      }*/
      stoppaAnimazione = window.requestAnimationFrame(prepareUpdate);
  }
};


function AnimazioneSfondoFooter() {
  const section = document.querySelector(".footer-bg-animation");

  //const logo = document.querySelector(".shape-bg-1-footer");
  //const logo2 = document.querySelector(".shape-bg-2-footer");
  //const logo3 = document.querySelector(".shape-bg-3-footer");
  var logo;
  var logo2;
  var logo3;
  if(isDesktop()){
    logo = document.querySelector(".shape-bg-1-footer");
    logo2 = document.querySelector(".shape-bg-2-footer");
    logo3 = document.querySelector(".shape-bg-3-footer");
  } else {
    logo = document.querySelector(".shape-bgmb-1-footer");
    logo2 = document.querySelector(".shape-bgmb-2-footer");
    logo3 = document.querySelector(".shape-bgmb-3-footer");

  }
  //$(".shape-bg-1").css('opacity',1);

  const FPS = 60;

  //var widthLimite = $('.footer-bg-animation').outerWidth();
  //var heightLimite = $('.footer-bg-animation').outerHeight();

  var widthLimite = section.offsetWidth;
  var heightLimite = section.offsetHeight;

  //disattivo un sec
  //section.style.height = heightLimite;
  //section.style.width = widthLimite;

  // Logo moving velocity Variables
  //posizioni iniziali
  let xPosition = 10;
  let yPosition = 10;

  let x2Position = 1200;
  let y2Position = 500;

  let x3Position = 700;
  let y3Position = 200;

  //genero posizioni random
  if(isDesktop()){
    //larghezza sarà di 88vw
    console.log("siamo su desktop e ora assegno le coordinate");
    xPosition = randomXCoordinateDesk();
    yPosition = randomYCoordinateDesk();
    x2Position = randomXCoordinateDesk();
    y2Position = randomYCoordinateDesk();
    x3Position = randomXCoordinateDesk();
    y3Position = randomYCoordinateDesk();
  } else {
    console.log("siamo su mobile e ora assegno le coordinate");
    xPosition = randomXCoordinateMob();
    yPosition = randomYCoordinateMob();
    x2Position = randomXCoordinateMob();
    y2Position = randomYCoordinateMob();
    x3Position = randomXCoordinateMob();
    y3Position = randomYCoordinateMob();
  }

  //$(".shape-bg-1-footer").css('opacity',1);
  //$(".shape-bg-2-footer").css('opacity',1);
  //$(".shape-bg-3-footer").css('opacity',1);
  document.querySelector(".shape-bg-1-footer").style.opacity = 1;
  document.querySelector(".shape-bg-2-footer").style.opacity = 1;
  document.querySelector(".shape-bg-3-footer").style.opacity = 1;

  //$(".shape-bgmb-1-footer").css('opacity',1);
  //$(".shape-bgmb-2-footer").css('opacity',1);
  //$(".shape-bgmb-3-footer").css('opacity',1);
  document.querySelector(".shape-bgmb-1-footer").style.opacity = 1;
  document.querySelector(".shape-bgmb-2-footer").style.opacity = 1;
  document.querySelector(".shape-bgmb-3-footer").style.opacity = 1;


  //velocità
  let xSpeed = 0.8;
  let ySpeed = 0.8;

  let x2Speed = 0.9;
  let y2Speed = 0.6;

  let x3Speed = 0.7;
  let y3Speed = 0.9;

  //call function requestAnimationFrame
  prepareUpdate();

  function update() {
    logo.style.left = xPosition + "px";
    logo.style.top = yPosition + "px";

    logo2.style.left = x2Position + "px";
    logo2.style.top = y2Position + "px";

    logo3.style.left = x3Position + "px";
    logo3.style.top = y3Position + "px";
  }

  //function requestAnimationFrame
  function prepareUpdate() {
    if (xPosition + logo.clientWidth >= widthLimite || xPosition <= 0) {
        xSpeed = -xSpeed;
      }
      if (yPosition + logo.clientHeight >= heightLimite || yPosition <= 0) {
        ySpeed = -ySpeed;
      }
      //shape2
      if (x2Position + logo2.clientWidth >= widthLimite || x2Position <= 0) {
        x2Speed = -x2Speed;
      }
      if (y2Position + logo2.clientHeight >= heightLimite || y2Position <= 0) {
        y2Speed = -y2Speed;
      }
      //shape3
      if (x3Position + logo3.clientWidth >= widthLimite || x3Position <= 0) {
        x3Speed = -x3Speed;
      }
      if (y3Position + logo3.clientHeight >= heightLimite || y3Position <= 0) {
        y3Speed = -y3Speed;
      }

      xPosition += xSpeed;
      yPosition += ySpeed;

      x2Position += x2Speed;
      y2Position += y2Speed;

      x3Position += x3Speed;
      y3Position += y3Speed;

      update();
      window.requestAnimationFrame(prepareUpdate);
  }
};


function randomXCoordinateDesk() {
  //var limiteCoordinate = $( window ).width() / 5 * 4;
  var limiteCoordinate = window.innerWidth / 5 * 4;
  console.log("questo è il limite X: "+ limiteCoordinate);
  return Math.floor(Math.random() * limiteCoordinate) + 0;
}
function randomYCoordinateDesk() {
  var section1 = document.querySelector(".bg-animation");
  console.log("questo è il limite Y: "+ limiteCoordinate);
  console.log("questa è section 1");
  console.log(section1);
  console.log("questa è section 1 offest heihg");
  console.log(section1.offsetHeight);
  //var limiteCoordinate = $('.bg-animation').outerHeight() - ($('.bg-animation').outerHeight() / 100 * 84);
  var limiteCoordinate = section1.offsetHeight - (section1.offsetHeight / 100 * 84);
  return Math.floor(Math.random() * limiteCoordinate) + 0;
}
function randomXCoordinateMob() {
  var limiteCoordinate = window.innerWidth / 5 * 4;
  console.log("questo è il limite X mob: "+ limiteCoordinate);
  return Math.floor(Math.random() * limiteCoordinate) + 0;
}
function randomYCoordinateMob() {
  var section1 = document.querySelector(".bg-animation");
  //var limiteCoordinate = $('.bg-animation').outerHeight() - ($('.bg-animation').outerHeight() / 100 * 84);
  var limiteCoordinate = section1.offsetHeight - (section1.offsetHeight / 100 * 84);
  console.log("questo è il limite Y mob: "+ limiteCoordinate);
  return Math.floor(Math.random() * limiteCoordinate) + 0;
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
document.addEventListener('scroll', function() {
  let homesect = document.querySelector(".home-container");
  homeInSchermo = isInViewport(homesect);
});
//});
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
