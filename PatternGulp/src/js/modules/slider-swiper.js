export { init };

const init = () => {
   new Swiper('', {
      spaceBetween: 30,
      slidesPerView: 1,
      loop: false,
      // autoplay: {
      //    delay: 3000,
      //    disableOnInteraction: false,
      // },
      // centeredSlides: true,
      // initialSlide: 1,
      //speed: 1000,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      pagination: {
         clickable: true,
         el: '.swiper-pagination-bullets'
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
      },
      keyboard: {
         enabled: true,
         onlyInViewport: true,
         pageUpDown: true,
      },
      // mousewheel: {
      //    sensitivity: 1,
      // },
      //autoHeight: true,
      // breakpoints: {
      //    280: {
      //       slidesPerView: 1.1,
      //       spaceBetween: 10
      //    },
      //    768: {
      //       slidesPerView: 2,
      //       spaceBetween: 20
      //    },
      //    992: {
      //       slidesPerView: 3,
      //       spaceBetween: 32
      //    }
      // },
      // on: {
      //    init: function(swiper){
      //        console.log(swiper);
      //        this.el.addEventListener('mouseover', e => this.autoplay.stop());
      //        this.el.addEventListener('mouseout', e => this.autoplay.start());
      //    },
      //    slideChange: function(swiper){
      //       console.log(swiper);
      //    }
      // }
   });
}