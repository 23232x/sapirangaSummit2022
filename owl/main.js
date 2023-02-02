$('.owl-carousel').owlCarousel({
    loop: true,
    mouseDrag: true,
    center: true,
    margin: 0,
    nav: true,



    responsive: {
        0: {
            items: 1,
            center: true
        },
        400: {
            items: 1,
            center: true
        },
        600: {
            items: 2,
            center: true,

        },
        900: {
            items: 2,
            center: true,

        },
        1000: {
            items: 5,
            center: true,

        },



    }
})