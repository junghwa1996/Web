$(function(){
    mainslide();
    minislide();
    recommend_swiper();
    textbanner();
});


function mainslide(){
    var swiper = new Swiper('.swiper_main', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop: true,
      });
}

function minislide(){
  var swiper = new Swiper('.mini_swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  });
}

function recommend_swiper(){
  var swiper = new Swiper('.recommend_swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  });
}

function textbanner(){
  var swiper = new Swiper('.text_swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  });
}