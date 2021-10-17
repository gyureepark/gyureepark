$(function(){


  $(window).load(function(){
    $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });
  });

  var grid = $('.grid');  

  // 초기설정
  $('.g1').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery:{enabled:true}
  });


  // 필터링 버튼 설정
  $('#m1').click(function(e){
    grid.isotope({ filter: '.grid-item'});

    e.preventDefault();
  });

  $('#m2').click(function(e){
    grid.isotope({filter: '.g1'});

    e.preventDefault();
  });



  $('#m3').click(function(e){
    grid.isotope({filter: '.g2'});
    
    e.preventDefault();
  });

  $('#m4').click(function(e){
    grid.isotope({filter: '.g3'});

    e.preventDefault();
  });

  $('#m5').click(function(e){
    grid.isotope({filter: '.g4'});

    e.preventDefault();
  });


  $('.popup-btn').magnificPopup({
    type: 'inline',
    closeBtnInside: true,
    closeOnBgClick: false,
    gallery: {
      enabled: true
    }
  });

  $('.close-btn').click(function(){
    $.magnificPopup.close();
  });
  


});