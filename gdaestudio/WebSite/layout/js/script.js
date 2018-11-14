$(document).ready(function() {

    // comportamiento del menu
    $('.menu-link').click(function() {
        $('.effect-airbnb').addClass('animate');
    });

    $('.outer-nav a').click(function(){
        $('.effect-airbnb').removeClass('animate');
    });
});
