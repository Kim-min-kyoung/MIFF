$(window).on('scroll',function(){ 
    if($(window).scrollTop()){ 
        $('.header').addClass('active'); 
    }
    else{ 
        $('.header').removeClass('active'); 
    } 
});

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#scollTop_btn').fadeIn();
        } else {
            $('#scollTop_btn').fadeOut();
        }
    });
    $("#scollTop_btn").click(function() {
        $('html').animate({
            scrollTop : 0
        }, 300);
        return false;
    });
});

$(document).ready(function() {
    $(".tab_contents").eq(0).show();
    $(".tab_menu li").click(function() {
      var idx = $(this).index();
      $(".tab_menu li").removeClass("on");
      $(".tab_menu li").eq(idx).addClass("on");
      $(".tab_contents").hide();
      $(".tab_contents").eq(idx).show();
    })
});

$(document).ready(function(){
    $(".qna_list > li").click(function(){
        $(this).toggleClass("on off");
    });
});