// 문서가 준비되면 함수를 실행
$(document).ready(function () {
    // GNB
    // 메인 메뉴(.main>li)에 마우스를 올리면
    $('.main>li').mouseover(function () {
        // 마우스를 올린 메인 메뉴에 해당하는 서브 메뉴(.sub)만 나타난다.
        $(this).find('.sub').css({ visibility: 'visible' });
        $(this).find('.sub').stop().animate({ left: 160, opacity: 1 }, 200);
    });
    // 메인 메뉴(.main>li)에서 마우스가 나가면
    $('.main>li').mouseout(function () {
        // 마우스가 벗어난 메인 메뉴에 해당하는 서브 메뉴(.sub)가 사라진다.
        $(this).find('.sub').css({ visibility: 'hidden' });
        $(this).find('.sub').stop().animate({ left: 100, opacity: 0 }, 200);
    });

    // 모달 팝업
    // 1. 공지사항의 첫 번째 li를 클릭하면
    $('.notice li:first-of-type').click(function () {
        // 2. 팝업 창이 보인다.
        $('.modal').show();
    });
    // 3. 팝업 창의 닫기 버튼을 클릭하면
    $('.modal a').click(function () {
        // 4. 팝업창이 숨겨진다.
        $('.modal').hide();
    });
});