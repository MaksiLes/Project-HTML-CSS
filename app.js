// import * as $ from 'jquery'

$(function () {

    // Fixed Header

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navClick = $("#navClick");

    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {

            header.addClass("fixed");

        } else {

            header.removeClass("fixed");
        }

    });




    // Smooth Scroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 65
        }, 700);


    });



    //Nav Click

    navClick.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");

    })


    //Reviews https://kenwheeler.github.io/slick/-ссылка на бибилиотеку

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true
    });



});