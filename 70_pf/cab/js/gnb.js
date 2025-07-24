$(document).ready(function(){
            // 메인 메뉴(.main>li)에 마우스를 올리면
            $('.main>li').mouseover(function(){
                // 서브 메뉴(.sub)가 위에서 아래로 나타난다.
                $('.sub').stop().slideDown();
            });
            // 메인 메뉴(.main>li)에서 마우스가 나가면
            $('.main>li').mouseout(function(){
                // 서브 메뉴(.sub)가 아래서 위로 사라진다.
                $('.sub').stop().slideUp();
            });
        });