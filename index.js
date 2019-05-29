$(document).ready(function(){
  $('.header').height($(window).height());

  $('.nav-link').on('click', function(event){

    var hash = this.hash;
    $('html, body').animate({
      scrollTop : $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  });

  var intro = document.getElementById('intro');

  var typewriter = new Typewriter(intro, {
      loop: true
  });

  typewriter.typeString('Hello World!')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Strings can be removed')
      .pauseFor(2500)
      .deleteChars(7)
      .typeString('<strong>altered!</strong>')
      .pauseFor(2500)
      .start();
});

