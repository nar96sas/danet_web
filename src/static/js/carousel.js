function customSlider() {
    $('.main-banner').slick({
        arrows: false,
        dots: true,

    });
}

function customPlaylist() {
    $('.playlist').not('.slick-initialized').slick({ // not('.slick-initialized') prevent to multiple class
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1
    })
}

function customArtists() {
    $('.artists').not('.slick-initialized').slick({ // not('.slick-initialized') prevent to multiple class
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
    })
}

function customSeries(initialSlide) {
    $('.series').not('.slick-initialized').slick({ // not('.slick-initialized') prevent to multiple class
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: initialSlide
    });
}

export { customSlider, customPlaylist, customSeries, customArtists }