<script>
    $(document).ready(function(){
        $('.main>li').mouseover(function () {
            // $('.sub').css({"display":"block"});
            $('.sub').stop().slideDown();
            // $('.sub').css({"height":150, visibility: 'visible'});
        });
            $('.main>li').mouseoout(function(){
        //  $('.sub').css({"display":"none", "background-color": "red"});
        $('.sub').stop().slideUp();
               // $('.sub').css({"height":0, visibility: 'hidden',"background-color": "red"});
            });
        });
</script>