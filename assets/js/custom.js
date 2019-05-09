$(document).ready(function(){

  // Mobile ham menu
  $('.ham-button').click(function(){
    if( $(this).hasClass('close') ){
      $(this).removeClass('close');
      $('nav ul').slideUp();
    }else{
      $(this).addClass('close');
      $('nav ul').slideDown();
    }
  });

// Slider 
    $('.slder-cont ul').slick({
        dots: true,
        infinite: false,
        speed: 500,
        arrows:false,
        autoPlaySpeed: 3000,
        autoPlay:true
    });

});
