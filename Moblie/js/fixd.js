$(function(){
    tapMenu();
    Menuopen();
    MSearchopen();
    scrollTopbtn();
    quickFixed();
    navFixed();
});


// 모바일 시작

function tapMenu(){
    $('.tapwrap>ul>li').click(function(){
        $('.tapwrap>ul>li').removeClass('tabOn');
        $(this).addClass('tabOn');
    });
}
// 좌측 메뉴 탭기능

function navFixed(){
    var nav = $('.middle').height();
    $(window).scroll(function(){
        if($(this).scrollTop() > nav){
            $('header').addClass('fixedNav');
        }else{
            $('header').removeClass('fixedNav');
        }
    });
}


function Menuopen(){
    $('.asideMenuIco').click(function(){
        $('.sidebar').toggleClass('open');
    });
}
// 좌측 메뉴 오픈
function MSearchopen(){
    $('.search_Btn').click(function(){
        $('.search form').toggleClass('searchOn');
    });
}

function scrollTopbtn(){
    $('.Topico').on('click',function(){
        $('html,body').stop().animate({scrollTop:0},1000);
    });
}

function quickFixed(){
    var nav = $('.middle').height();
    $(window).scroll(function(){
        if($(this).scrollTop() > nav){
            $('.Topbtn').addClass('block');
        }else{
            $('.Topbtn').removeClass('block');
        }
    });
}