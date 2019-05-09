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


    $('.ts_nw_list:first-of-type').slick({
        dots: true,
        infinite: false,
        speed: 500,
        arrows:false
    });

    $('.carousel_list').slick({
        autoplay:false,
        autoPlaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="snp cust-prev"><span></span></button>',
        nextArrow: '<button type="button" class="snp cust-next"><span></span></button>'
    });
});
