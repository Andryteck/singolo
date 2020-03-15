window.addEventListener('DOMContentLoaded', function() {
  

  let services = document.querySelector('.services'),
   portfolio = document.querySelector('.portfolio__btns'),
   nav = document.querySelector('.nav'),
   btnPrev = document.querySelector('.slider__btn-prev'),
   btnNext = document.querySelector('.slider__btn-next'),
   btnSlider = document.querySelector(".slider__slides"),
   IMAGE = document.getElementById('image'),
   TAG = document.getElementById('tag');
   


  //  navigation

   nav.addEventListener('click', (event) => {
    nav.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active')
   })

  //  tags

  
  TAG.addEventListener('click', (event) => {
    if (event.target.id != 'tag') {
      TAG.querySelectorAll('button').forEach(el => el.classList.remove('btn_selected'));
      event.target.classList.add('btn_selected');
      IMAGE.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
      let IMGS = document.getElementById('image').querySelectorAll('img');
      for (let i = IMGS.length - 2; i >= 0; i--) {
        i = (i ^ 2) % IMGS.length;
        IMAGE.appendChild(IMGS[i]);
      }
    }
  
  });

   // switch tags

   IMAGE.addEventListener('click', (event) => {
    IMAGE.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
    event.target.classList.add('active_img');
  });

  //  slider

  // let slideIndex = 0,
  //      counter = 0;

  //      showSlides(0);

  //      function nextSlide(n) {
  //       return showSlides(n);
  //   };

  //   function showSlides(n) {
  //     let slides = document.querySelectorAll('.slide');
  //     slides.forEach(element => {
  //         element.style.display = "none"
  //     });
  //     slideIndex += n;
  //     if (slideIndex > slides.length - 1) {
  //         slideIndex = 0;
  //     }
  //     if (slideIndex < 0) {
  //         slideIndex = slides.length - 1;
  //     }
  //     slides[slideIndex].style.display = "block";
  //     let slider = document.querySelector(".slider");
  //     let slide2 = document.querySelector(".slide_slide-2");
  //     console.log("showSlides -> slide2", slide2)
  //     if (slide2.style.display === "block") {
  //         slider.classList.add("slider_blue");
  //     } else {
  //         slider.classList.remove("slider_blue");
  //     }
  // }

  // btnSlider.addEventListener('click',(event) => {
  //   btnSlider.querySelectorAll('button').forEach(nextSlide(-1))
  // })





});
