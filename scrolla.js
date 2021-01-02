function Scrollino () {
  var destinazioneScroll = $('#homesection').outerHeight();

  //se clicco su scroll vado alla sezione progetti
  $(".scroll-more-btn").click(function() {
    $('html,body').animate({
        //scrollTop: $("#projects").offset().top
        scrollTop: destinazioneScroll
      },1000);
  });
  //se clicco su back to top vado alla sezione progetti
  $(".scroll-up").click(function() {
    $('html,body').animate({
        //scrollTop: $("#projects").offset().top
        scrollTop: 0
      },1000);
  });

  /*
  if(isDesktop) {
    //nuovo test scroll down
    //scroll direction
    var positionScrollInitial = $(window).scrollTop();
    var scrollDownCheck = false;
    var overMouseCheck = false;

    //is scrolling check
    // Setup isScrolling variable
    var isScrolling;
    var isScrollingCheck = false;

    // Listen for scroll events
    window.addEventListener('scroll', function ( event ) {

      // Clear our timeout throughout the scroll
      window.clearTimeout( isScrolling );
      isScrollingCheck = true;
      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function() {

        // Run the callback
        console.log( 'Scrolling has stopped.' );
        isScrollingCheck = false;

      }, 66);

    }, false);


    //scroll check direction
    window.addEventListener('wheel', function(event)
    {
     if (event.deltaY < 0)
     {
      console.log('scrolling up');
      //scrollDownCheck = false;
     }
     else if (event.deltaY > 0)
     {
      console.log('scrolling down');
      //scrollDownCheck = true;
     }
    });

    $('.home-container').hover(function() {
      overMouseCheck = true;
      //console.log("sono sul trigger");
    }, function() {
      overMouseCheck = false;
      //console.log("non sono sul trigger");
    });
    */


    /*
    //metedo per l'autoscroll
    $(window).scroll(function() {
      if(scrollDownCheck && overMouseCheck && isScrollingCheck ){
        $('html,body').animate({
            //scrollTop: $("#projects").offset().top
            scrollTop: destinazioneScroll
          }, 1000);
        overMouseCheck = false;
        scrollDownCheck = false;
        positionScrollInitial = 0;
        console.log("eccola la condizione giusta");

      }
    });
    */


  //}
};
