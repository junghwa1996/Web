$(function(){
    tab();
    fqa();
});


function tab(){
    $('.tab-Name li').click(function(){
        var activeTab = $(this).attr('data-Nember');
        $('.tab-Name li').removeClass('active');
        $(this).addClass('active');

        $('.tab-panel').removeClass('active');
        $('#'+ activeTab).addClass('active');

    });
};


function fqa(){
    $('.accordion_header').click(function(){
        $('.accordion_header').removeClass('active');
        $(this).addClass('active');
    });
}

// fadein Top 오류로 추가

