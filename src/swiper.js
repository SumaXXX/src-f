import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

if (window.innerWidth <= 768) {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    // Optional parameters
    slidesPerView: "auto",
    loop: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination1",
    },
    // // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  console.log(213);
} else {
  document.querySelector(".second-swiper").classList.remove("swiper");
  document.querySelector(".first-swiper").classList.remove("swiper");
  document.querySelector(".third-swiper").classList.remove("swiper");
}
