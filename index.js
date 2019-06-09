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

});

