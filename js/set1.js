$(function(){


  /* ScrollMagic 적용순서 :

    1. ScrollMagic 컨트롤러 생성 : **한번만** 생성
      ex) var controller = new ScrollMagic.Controller();

    2. Animation 오브젝트 생성 : 'GSAP'을 이용한 애니메이션 설정하기
      ex) tl1 = new TimelineMax();
          tl1.to(st1, 1, {autoAlpha: 0, y: 30}, 0.1)
              .to(st2, 1, {autoAlpha: 0, y: 30}, 0.5);

    3. Scene(장면) 오브젝트 생성
      ex) var scene1 = new ScrollMagic.Scene({
      triggerElement: "#section1",
      triggerHook: "0.5"
      });

    4. Animation 오브젝트(2번)를 Scene 오브젝트(3번)에 추가
      ex) .setTween(tl1);

    5. Scene Object(3번)를 ScrollMagic 컨트롤러(1번)에 추가
      ex) .addTo(controller);
  */


  /* **********************************  Scene 1 Area Start  ************************************* */

  // 1. ScrollMagic 컨트롤러 생성 : **한번만** 생성
  var controller = new ScrollMagic.Controller();

  // 2. Animation 오브젝트 생성
  var title1 = $('#projects .title');
  var para1 = $('#projects .content');
  var tl1 = new TimelineMax();

  tl1.from(title1, 1, {y: 20, opacity: 0})
    .from(para1, 1, {y: 20, opacity: 0});

  // 3. Scene 오브젝트 생성
  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#projects",
    triggerHook: 0.5
  })

  // 4. Animation오브젝트를 -> Scene오브젝트3번에 연결하기
  .setTween(tl1)
  .setClassToggle('#projects', 'bg1')  // 특정 클래스를 장면에 추가하기

  // 4-1. 디버깅 체크하기
  // .addIndicators({
  //   name: 'Scene1',
  //   colorTrigger: 'green',
  //   colorStart: 'blue',
  //   colorEnd: 'blue'
  // })

  // 5. 'Controller'에 Scene오브젝트 장면연결하기
  .addTo(controller);


    /* **********************************  Scene 2 Area Start  ************************************* */

    // var title2 = $('#about .title');
    // var para2 = $('#about .content');
    var tl2 = new TimelineMax();
  
    // tl2.from(title2, 1, {y: 20, opacity: 0});
      // .from(para2, 1, {y: 20, opacity: 0});

    var scene2 = new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: 0.6
    })
    .setTween(tl2)
    .setClassToggle('#about', 'bg2')  // 특정 클래스를 장면에 추가하기
    // .addIndicators({
    //   name: 'Scene2',
    //   colorTrigger: 'blue',
    //   colorStart: 'red',
    //   colorEnd: 'red'
    // })
  
    .addTo(controller);

    /* **********************************  Scene 3 Area Start  ************************************* */

    var title3 = $('#whatido .title');
    var para3 = $('#whatido .content');
    var tl3 = new TimelineMax();
  
    tl3.from(title3, 1, {y: 20, opacity: 0})
      .from(para3, 1, {y: 30, opacity: 0});

    var scene3 = new ScrollMagic.Scene({
      triggerElement: "#whatido",
      triggerHook: 0.5
    })
    .setTween(tl3)
    .setClassToggle('#whatido', 'bg1') 
    // .addIndicators({
    //   name: 'Scene3',
    //   colorTrigger: 'black',
    //   colorStart: 'green',
    //   colorEnd: 'green'
    // })
  
    .addTo(controller);


    /* **********************************  Scene4 Area Start  ************************************* */

    var title4 = $('#about2 .title');
    var para4 = $('#about2 .content');
    var tl4 = new TimelineMax();
  
    tl4.from(title4, 1, {y: 20, opacity: 0})
      .from(para4, 1, {y: 30, opacity: 0});

    var scene4 = new ScrollMagic.Scene({
      triggerElement: "#about2",
      triggerHook: 0.4
    })
    .setTween(tl4)
    .setClassToggle('#about2', 'bg2') 
    // .addIndicators({
    //   name: 'Scene3',
    //   colorTrigger: 'black',
    //   colorStart: 'green',
    //   colorEnd: 'green'
    // })
  
    .addTo(controller);

});