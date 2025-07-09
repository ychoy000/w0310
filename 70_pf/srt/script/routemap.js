    
// 노선안내 서브페이지 노선별 지도 바꾸기

$(function(){


       const maps = [
        "../images/routemap/allroutes.png",
        "../images/routemap/kyongbu.png",
        "../images/routemap/Honam.png",
        "../images/routemap/Jolla.png",
        "../images/routemap/kyongjon.png",
        "../images/routemap/EastSeaLine.png"
      ];

      const tabs = $('.route_tabs .tab');
      const tab_btn1 = $('#tab_btn1');
      const tab_btn2 = $('#tab_btn2');
      const tab_btn3 = $('#tab_btn3');
      const tab_btn4 = $('#tab_btn4');
      const tab_btn5 = $('#tab_btn5');
      const tab_btn6 = $('#tab_btn6');
      const map_img = $('.map_container img');

      tab_btn1.click(function(e){
        e.preventDefault();
        tabs.removeClass('active');
        map_img.attr('src', maps[0]);
        $(this).addClass('active');
      });
      tab_btn2.click(function(e){
        e.preventDefault();
        tabs.removeClass('active');
        map_img.attr('src', maps[1]);
        $(this).addClass('active');
      });
      tab_btn3.click(function(e){
        e.preventDefault();
        tabs.removeClass('active');
        map_img.attr('src', maps[2]);
        $(this).addClass('active');
      });
      tab_btn4.click(function(e){
        e.preventDefault();
        tabs.removeClass('active');
        map_img.attr('src', maps[3]);
        $(this).addClass('active');
      });
      tab_btn5.click(function(e){
        e.preventDefault();
        tabs.removeClass('active');
        map_img.attr('src', maps[4]);
        $(this).addClass('active');
      });
      tab_btn6.click(function(e){
        e.preventDefault();
        tabs.removeClass('active');
        map_img.attr('src', maps[5]);
        $(this).addClass('active');
      });  


});
