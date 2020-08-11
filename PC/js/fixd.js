$(function(){
    searchopen();
    navFixed();
    quickFixed();
    scrollTopbtn();
});

function searchopen(){
    $('.search_ico').click(function(){
        $('.search input[type="text"]').toggleClass('open');
    });
}
// search ico 클릭시 검색란 오픈




function navFixed(){
    var nav = $('.header_Wrap').height();
    $(window).scroll(function(){
        if($(this).scrollTop() > nav){
            $('.Fixd_Nav').addClass('fixed');
        }else{
            $('.Fixd_Nav').removeClass('fixed');
        }
    });
}


function quickFixed(){
    var nav = $('.header_Wrap').height();
    $(window).scroll(function(){
        if($(this).scrollTop() > nav){
            $('.quick_menu_Left').addClass('quickfixed');
        }else{
            $('.quick_menu_Left').removeClass('quickfixed');
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > nav){
            $('.quick_menu_right').addClass('quickfixed_right');
        }else{
            $('.quick_menu_right').removeClass('quickfixed_right');
        }
    });
}

function scrollTopbtn(){
    $('.scrollTop').on('click',function(){
        $('html,body').stop().animate({scrollTop:0},1000);
    });
}