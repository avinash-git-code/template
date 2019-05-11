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

    var monthNames = ["January", "February", "March", "April",
                        "May", "June","July", "August", "September",
                        "October", "November", "December"],
    date = new Date();
    var todayDate = date.getDate() + ' ' +monthNames[date.getMonth()]+', '+ date.getFullYear();
    $('#date').text(todayDate);
});
