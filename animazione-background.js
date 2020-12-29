$( document ).ready(function() {
  const section = document.querySelector(".bg-animation");

  const logo = document.querySelector(".shape-bg-1");
  const logo2 = document.querySelector(".shape-bg-2");
  const logo3 = document.querySelector(".shape-bg-3");

  const FPS = 60;

  var widthLimite = $('.bg-animation').outerWidth();
  var heightLimite = $('.bg-animation').outerHeight();

  section.style.height = heightLimite;
  section.style.width = widthLimite;

  // Logo moving velocity Variables
  let xPosition = 10;
  let yPosition = 10;

  let x2Position = 1200;
  let y2Position = 500;

  let x3Position = 700;
  let y3Position = 200;


  //velocità
  let xSpeed = 0.8;
  let ySpeed = 0.8;

  let x2Speed = 0.9;
  let y2Speed = 0.6;

  let x3Speed = 0.7;
  let y3Speed = 0.9;

  function update() {
    logo.style.left = xPosition + "px";
    logo.style.top = yPosition + "px";

    logo2.style.left = x2Position + "px";
    logo2.style.top = y2Position + "px";

    logo3.style.left = x3Position + "px";
    logo3.style.top = y3Position + "px";
  }

  //var widthLimite = $('.bg-animation').outerWidth();
  //var heightLimite = $('.bg-animation').outerHeight();

  setInterval(() => {
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
  }, 1000 / FPS);

  /*
  window.addEventListener("resize", () => {
    xPosition = 10;
    yPosition = 10;

    section.style.height = window.innerHeight + "px";
    section.style.width = window.innerWidth + "px";
  });*/
});
