var myNav = $("#nav");

$(window).on('scroll', function() {
    "use strict";
    if ($(window).scrollTop() >= 280) {
        myNav.addClass("scroll");
    } else {
        myNav.removeClass("scroll");
    }
});



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,

    dots: false,
    nav: false,
    navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})