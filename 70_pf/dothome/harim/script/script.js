$(function () {
  $(".btn a").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    // 클릭한 li의 순번을 가져와서 i변수 저장
    var i = $(this).index();
    // :eq(n), n=0,1,~
    $(".tabs div").eq(i).css({ display: "block" });
    $(".tabs div").eq(i).siblings("div").css({ display: "none" });
  });
});

