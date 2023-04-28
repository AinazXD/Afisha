// модальное окно
const section = document.querySelector(".modaly"),
    overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector(".show-modal"),
    closeBtn = document.querySelector(".icon-close");

showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () =>
    section.classList.remove("active")
);

closeBtn.addEventListener("click", () =>
    section.classList.remove("active")
);

// бургер меню
let burger = document.querySelector('.burger')
let katalog = document.querySelector('.katalog')
burger.addEventListener('click', () =>{
  katalog.classList.toggle('active')
})

// фильтр
let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".box");

list.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list.forEach((el1)=>{
            el1.style.color = "#423f3e        ";
            el1.style.borderBottom = "none";
        })
        e.target.style.borderBottom = "1px solid #fff"
        box.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "flex";
        })
    })
})



let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 19,
    loop: true,
    centerSlide: 'true',
    centerSlide: true, 
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4100,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

