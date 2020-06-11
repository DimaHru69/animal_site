$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000, 
        easing: 'ease',
        infinite: true,
        initialSlide:0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: false,
    });
});