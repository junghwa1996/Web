$(function(){
subOpen();
slider();

fadeIn();
fadeInLeft();
fadeInTop();

Nscroll();
scrollEadd();
wow();
QuickMenu();

});




function subOpen(){
var $serviceMenu = $('.service');
$subNav = $('.sub-nav');
// var test = $('.service,.sub-nav');

$serviceMenu.mouseenter(function(){
if($(window).width() > 962){
// console.log('aa');
$subNav.fadeIn();
}
})
$serviceMenu.mouseleave(function(){
// console.log('dd');

if($(window).width() > 962){
// console.log('aa');
$subNav.fadeOut();
}

});
};
// nav open Fin

function slider(){
$('.slider').bxSlider({
controls:false,
auto:true,
speed:'400',
mode:'fade',
tickerHover:true
});        
};

// slider Fin

function fadeIn(){
var portfolio = $('.portfolio');
var pfOST = portfolio.offset().top/3;

var order = $('.order-ctn');
var orderOST = order.offset().top/1.5;

$(window).scroll(function(){

if($(this).scrollTop()>pfOST){
portfolio.find('h3').addClass('animate');
}
if($(this).scrollTop()>orderOST){
order.find('li:nth-child(2n)').addClass('animate');
}
});

}


// fadein

function fadeInLeft(){

    var order = $('.order-ctn');
    var orderOST = order.offset().top/1.5;



    $(window).scroll(function(){

        if($(this).scrollTop()>orderOST){
        order.find('li:nth-child(2n-1)').addClass('animate_left');
        }



    });

}



// fadeInLeft

function fadeInTop(){
    var year = $('#year');
    yearOST = year.offset().top/2;

    var pfwrap=$('.portfolio-wrap');
    pfwrapOST=pfwrap.offset().top - ($(window).height()/1.3);

    var withcom = $('#withcompany ul');
    withcomOST = withcom.offset().top-($(window).height()/2);

    $(window).scroll(function(){

        if($(this).scrollTop()>yearOST){
                year.find('li').addClass('animate_top');
        }

        if($(this).scrollTop() >= pfwrapOST){
            $('.listBox').each(function(idx){
            var pfBoxthis =$(this);
            setTimeout(function(){ pfBoxthis.addClass('animate_top');},100*idx);
            });
        }

        if($(this).scrollTop() >= withcomOST){
            $('.withBox').each(function(idx){
            var withBoxthis=$(this);
            setTimeout(function(){ withBoxthis.addClass('animate_top');},100*idx);
            });
        }


    
    });

}







// fadeInTop




function Nscroll(){
    var numberctn=$('.number_ctn');
    numberOST=numberctn.offset().top - ($(window).height()/2);
    var stop = true;

    $(window).scroll(function(){

    if(stop){
        if($(this).scrollTop() >= numberOST){      
        numberctn.find('#number_year').animateNumber({number:2019},{duration:1500}),
        numberctn.find('#number_pjt').animateNumber({number:1000},{duration:1500}),
        numberctn.find('#number_with').animateNumber({number:5},{duration:1500}); 
        stop=false;    
        }
    }

    });
}

// number scroll 


function wow(){
    new WOW().init();
}


