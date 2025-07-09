// 노선안내 서브페이지 노선별 지도 바꾸기
$(function(){
const maps = [
  "../images/routemap/allroutes.png",
  "../images/routemap/kyongbu.png",
  "../images/routemap/Honam.png",
  "../images/routemap/Jolla.png",
  "../images/routemap/kyongjon.png",
  "../images/routemap/EastSeaLine.png",
];

const tabs = $(".route_tabs .tab");
const map_img = $(".map_container img");

tabs.click(function (e) {
  e.preventDefault();

  // 탭에서 data-index 가져오기
  const index = $(this).data("index");

  // 지도 이미지 교체
  map_img.attr("src", maps[index]);

  // 모든 탭에서 active 제거 후 현재 탭에만 추가
  tabs.removeClass("active");
  $(this).addClass("active");
});

})