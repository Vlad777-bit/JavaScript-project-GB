'use strict';

$(document).ready(function(){
    $('.slider_container').slick({
        adaptiveHeight: true,
        speed: 1200,
        prevArrow: '<button type="button" class="fas fa-angle-left"></button>',
        nextArrow: '<button type="button" class="fas fa-angle-right"></button>',
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: true,
                arrows: false,
              }
            }
        ],
    });
});
