$(function(){


  // Scrollspy JS
  $('body').scrollspy({ 
    target: '#navi' ,
    offset: 64
  })

  var scrollPos = $(window).scrollTop();

  if(scrollPos < 20){
  $('#navi #gnb li:first-child').removeClass('active');
}


  // gmenu 활성화 JS
  var menuItem = $('#projects .g-menu li a');
  
    menuItem.click(function(e){
    menuItem.removeClass('gmenu-act');
    $(this).addClass('gmenu-act');

    e.preventDefault();
  });

  // Jarallax JS
  $('.jarallax').jarallax({
    speed: 0.2
  });

  // WOW JS
  new WOW().init();

  // Rellax JS
  var rellax = new Rellax('.rellax');

  
  // WhatIdo 토글버튼
  $('.toggle-btn').click(function(e){
    $(this).parent().toggleClass('toggle-act');

    e.preventDefault();
  })

  $('#whatido .content>div:first-child .toggle-btn').click(function(e){
   $(this).parent().next().toggleClass('toggle-height')

   e.preventDefault();
  });


});

