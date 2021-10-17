$(function(){


// 상단 네비게이션 설정
$(window).scroll(function(){

  var scrollPos = $(window).scrollTop();
  // console.log(scrollPos);

  if(scrollPos > 30){
    $('#navi').addClass('fixed');
  }else{
    $('#navi').removeClass('fixed');
    $('#navi #gnb li').removeClass('active');
  }

});


  // 상단 네비게이션 스크롤이동 설정
  var menuItem = $('#gnb a, #intro a, #contact a, .lightbox_btn');

  menuItem.click(function(e){

    var el = $(this).attr('href');
    // console.log(el);
    var elWrap = $(el);   // 변수는 ''로 감으면 안된다 !!!

    scrollMove(elWrap, 63);
    e.preventDefault();

  });

  // 부드러운 움직임 함수 만들기
  function scrollMove(elWrap, navHeight){

    var offset = elWrap.offset().top;
    // console.log(offset); 
    var totalScroll = offset - navHeight;

    $('html, body').animate({scrollTop: totalScroll}, 800);
  }

});