$(document).ready(function() {

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: '991',
    });

    /*  navbar */
    $(window).scroll(function() {
        if ($(window).scrollTop()) {
            $(".header-area").addClass("white");
        } else {
            $(".header-area").removeClass("white");
        }

    })

    /* slick slider */
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,


    });
    /* thresa slider */
    $('.theresa-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

    });

    /* brand slider */
    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,

    });


})