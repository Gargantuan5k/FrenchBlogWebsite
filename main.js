//with masonry
new Masonry("#posts .grid", {
    itemSelector: '.grid-item',
    gutter: 100
});

// swiper library initialization
new Swiper('.swiper-container',{
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay:{
        delay: 3000
    },
    //responsive brakepoints
    breakpoints:{
        '@0':{
            slidesPerView:2
        },
        //>888px
        '@1.00':{
            slidesPerView:3
        },
        //>1110px
        '@1.25':{
            slidesPerView:4
        },
        //>1330px
        '@1.50':{
            slidesPerView:5
        }
    }
})  