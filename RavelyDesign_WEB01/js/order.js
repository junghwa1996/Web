$(function(){
    floatMenu();
    scrollTop();
});

function floatMenu(){
// 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
    var floatPosition = parseInt($("#floatMenu").css('top'));
    // 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

    $(window).scroll(function() {
        // 현재 스크롤 위치를 가져온다.
        var scrollTop = $(window).scrollTop();
        var newPosition = scrollTop + floatPosition + "px";

        /* 애니메이션 없이 바로 따라감
        $("#floatMenu").css('top', newPosition);
        */

        $("#floatMenu").stop().animate({
            "top" : newPosition
        }, 500);

    }).scroll();

}
// 플로팅 메뉴

function scrollTop(){
    $('.scrollTop').on('click',function(){
        $('html,body').stop().animate({scrollTop:0},1000);
    });
}
// 클릭 시 최상단으로 1초에 걸쳐서 이동

