const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slider');
const contents = document.querySelectorAll('.content');

var sliderNav = function(index) {
    btns.forEach((btn)=>{
        btn.classList.remove('active');
    });
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    });
    contents.forEach((content)=>{
        content.classList.remove('active');
    });
    btns[index].classList.add('active');
    slides[index].classList.add('active');
    contents[index].classList.add('active');
}
btns.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        sliderNav(i);
    })
});

new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

