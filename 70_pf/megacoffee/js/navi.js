$(() => {
  //객체 찾기
  const gnb = $('#gnb');
  const gnb_bg = gnb.find('.nav_bg');
  const gnb_main_lst = gnb.find('.main>li');
  const gnb_sub = gnb.find('.sub');

  gnb_main_lst.mouseenter(function () {
  gnb_sub.stop().slideDown();
  // gnb의 배경색바가 높이가 0에서 220으로 늘어난다.
  gnb_bg.stop().animate({ height: 220 });
});
gnb.mouseleave(function () {
  gnb_sub.stop().slideUp();
  // gnb의 배경색바가 높이가 220에서 0으로 줄어든다.
  gnb_bg.stop().animate({ height: 0 });
  });
});