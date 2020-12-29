(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.pushpin').pushpin();
    $(document).ready(function(){
        $('.carousel').carousel();
      });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
            

  }); // end of document ready
})(jQuery); // end of jQuery name space

