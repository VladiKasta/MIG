const swiper = new Swiper(".swiper", {
  // Optional parameters
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000, // задержка между переключениями в миллисекундах
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
