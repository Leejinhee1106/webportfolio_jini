
//swiper
const swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 9,
  spaceBetween: 50,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

//skill 탭박스
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === target) {
        panel.classList.add('active');
      }
    });
  });
});

// 콘택트 섹션
document.addEventListener("DOMContentLoaded", () => {
  const emailElement = document.querySelector('.animated-email');
  const textBoxElement = document.querySelector('.sec6_maintext');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('animated-email')) {
            entry.target.classList.add('active');
          }
          if (entry.target.classList.contains('sec6_maintext')) {
            entry.target.classList.add('active');
          }
          observer.unobserve(entry.target); // 한 번만 실행
        }
      });
    },
    { threshold: 0.5 }
  );

  if (emailElement) observer.observe(emailElement);
  if (textBoxElement) observer.observe(textBoxElement);
});


