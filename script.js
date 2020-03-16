window.addEventListener('DOMContentLoaded', function() {
  

  let services = document.querySelector('.services'),
   portfolio = document.querySelector('.portfolio__btns'),
   nav = document.querySelector('.nav'),
   btnPrev = document.querySelector('.slider__btn-prev'),
   btnNext = document.querySelector('.slider__btn-next'),
   btnSlider = document.querySelector(".slider__slides"),
   IMAGE = document.getElementById('image'),
   TAG = document.getElementById('tag'),
   BUTTON = document.getElementById('btn'),
   CLOSE_BUTTON = document.getElementById('close-btn'),
   // -----switch tags-----
   TAG_BUTTON = document.querySelector('.Square_container'),
   TAG_SCREEN_VERTICAL = document.querySelector('.iphone-visible'),
   TAG_SCREEN_HORIZONTAL = document.querySelector('.iphone-visible-horizontal'),
   TAG_BUTTON_HORIZONTAL = document.querySelector('.Square_container_horizontal');
   let horizontal_btn = 0;
   let vertical_btn = 0;






   


  //  -----navigation-----

   nav.addEventListener('click', (event) => {
    nav.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active')
   })

  //  -----tags-----

  
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

   // -----switch tags-----

   IMAGE.addEventListener('click', (event) => {
    IMAGE.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
    event.target.classList.add('active_img');
  });

  // -----switch screen-----

  TAG_BUTTON.addEventListener('click', (event) => {
    if (vertical_btn % 2 == 0) {
    TAG_SCREEN_VERTICAL.classList.remove('iphone-visible');
    TAG_SCREEN_VERTICAL.classList.add('iphone-hidden');
    } else {
    TAG_SCREEN_VERTICAL.classList.remove('iphone-hidden');
    TAG_SCREEN_VERTICAL.classList.add('iphone-visible');
    }
    vertical_btn++;
  });

  TAG_BUTTON_HORIZONTAL.addEventListener('click', (event) => {
    if (horizontal_btn % 2 == 0) {
    TAG_SCREEN_HORIZONTAL.classList.remove('iphone-visible-horizontal');
    TAG_SCREEN_HORIZONTAL.classList.add('iphone-hidden');
    } else {
    TAG_SCREEN_HORIZONTAL.classList.remove('iphone-hidden');
    TAG_SCREEN_HORIZONTAL.classList.add('iphone-visible-horizontal');
    }
    horizontal_btn++;
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

// ----- Get a quote -------------
BUTTON.addEventListener('click', () => {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let subject = document.getElementById('subject').value;
  let describe = document.getElementById('describe').value;
  if (name.validity.valid && email.validity.valid) {
    document.getElementById('message-block').classList.remove('hidden');
  } else {
    alert("Проверьте введенные данные name и Email");
  }
    if (subject == "Singolo") {
      subject = "Тема: " + subject;
  } else {
    subject = 'Без темы';
  }
  if (describe != '') {
    describe = "Описание: " + describe;
  } else {
    describe = "Без описания";
  }
  document.getElementById('result').innerText = "\n" + subject + "\n" + describe;
  
});
CLOSE_BUTTON.addEventListener('click', () => {
  document.getElementById('Form').reset();
  document.getElementById('message-block').classList.add('hidden');
});




});
