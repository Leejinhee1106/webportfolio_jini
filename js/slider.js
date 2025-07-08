//배너 슬라이더
const swiper = new Swiper('.banner-swiper', {
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3000, // 3000ms = 3초
    disableOnInteraction: false, // 사용자가 조작해도 자동재생 유지
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//카드뉴스 슬라이더
const cardSwiper = new Swiper('.card-swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 600,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});