$(document).ready(function () {
    $('.logo').hover(function () {
        $(this).animate({
            rotate: '-=5deg',
            'width': '65px',
            'height': '65px',
        }, 'fast');
    }, function () {
        $(this).animate({
            rotate: '+=5deg',
            'width': '60px',
            'height': '60px',
        }, 'fast');
    });


    
    setTimeout( () => {
        $('.right ').animate({'opacity': '100%'},'middle');
        $('.left ').animate({'opacity': '100%'},'middle');
    }, 800);
    setTimeout( () => {
        $('.top').animate({'opacity': '100%'},'middle');
        $('.bottom').animate({'opacity': '100%'},'middle');
    }, 1600);
    setTimeout( () => {
        $('.bottom-right').animate({'opacity': '100%'},'middle');
        $('.bottom-left').animate({'opacity': '100%'},'middle');
    }, 2400);

    setTimeout( () => {
        $('.logo').animate({'opacity': '100%'},'100');
        $('.btn').animate({'opacity': '100%'},'100');
    }, 3200);
});