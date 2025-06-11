$(document).ready(function(){
    $('.main>li').mouseover(function(){
        /*  $('.sub').css({"display":"block"}); */
        $(this).find('.sub').stop().slideDown();
        /*  $('.sub').css({"height":150, visibility: 'visible'}); */
    });
    $('.main>li').mouseout(function(){
        /* $('.sub').css({"display":"none", "background-color": "red"}); */
        $(this).find('.sub').stop().slideUp();
        /* $('.sub').css({"height":0, visibility: 'hidden',"background-color": "red"}); */
    });
});
