$(document).ready(function () {
    $('#sign-up').click(() => {


        if ($(window).width() < 1005) {
            // do something here if the window width is greater than 500
            $("body").css("background-color", '#0d6efd');
          }

          else{

          }



        $('.bottom-left').animate({
            'width': '190vw',
            'height': '190vw',
            'left': '-20vw',
        }, 'slow');
        
        
        $('.bottom-right').animate({
            'width': '190vw',
            'height': '190vw',
            'left': '-20vw',
        }, 'slow');
        
        
        $('body').animate({'opacity': '0'},'middle');
        setTimeout(function () {
            window.location.href = "..\\opening\\signUp.html";
        }, 2000);
    });


    $('#log-in').click(() => {

        $('.bottom-left').animate({
            'width': '190vw',
            'height': '190vw',
            'left': '-20vw',
        }, 'slow');
        
        
        $('.bottom-right').animate({
            'width': '190vw',
            'height': '190vw',
            'left': '-20vw',
        }, 'slow');
        
        
        $('body').animate({'opacity': '0'},'middle');
        setTimeout(function () {
            window.location.href = "..\\opening\\logIn.html";
        }, 2000);
    });
});