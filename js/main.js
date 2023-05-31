//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Services section - Modal 
const serviceModals = document.querySelectorAll(".service-modal");
const viewmoreBtns = document.querySelectorAll(".view-more-btn"); 
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
        serviceModals[modalClick].classList.add("active");
}

viewmoreBtns.forEach((viewmoreBtn, i) => {
    viewmoreBtn.addEventListener("click", () => {
        modal(i);

    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click" , () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
      });
    });

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card"); 
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);

    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click" , () => {
        portfolioModals.forEach((portfoliomodalView) => {
            portfoliomodalView.classList.remove("active");
        });
      });
    });





//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Website dark/light theme

//Srcoll to top button
const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations

//Common reveal optins to create reveal animations



























