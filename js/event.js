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
    $(window).scroll( function(){
			
        $('.col_small').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    })
});