$(function(){
    MainSlider();
    // BannerSlide();
    swiper();
    text_Banner_slider();
});

function MainSlider(){
    $('.Main_slider').bxSlider({
        speed:'300',
        auto:'true'
    });
    $('.BannerSlide').bxSlider({
        speed:'500',
        auto:'true'
    });
}
// function BannerSlide(){
//     $('.BannerSlide').bxSlider({
//     });
// }
function text_Banner_slider(){
    $('.text_Banner_slider').bxSlider({
        speed:'400',
        auto:'true',
        mode:'fade',
    });
}


function swiper(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 50,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        centereSlides:true,
        autoplay:{
            delay: 2500,
            disbleOnInteraction: false,
        },
    });
    $( ".swiper-container" ).hover(
        function() {
          swiper .autoplay.stop();
        }, function() {
          swiper .autoplay.start();
        }
      );
}