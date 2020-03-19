window.addEventListener('DOMContentLoaded', function() {
  

  let services = document.querySelector('.services'),
   portfolio = document.querySelector('.portfolio__btns'),
   nav = document.querySelector('.nav'),
   //--- Slider. Переключение слайдов-------------

  slides = document.querySelectorAll('.slider'),
  currentSlide = 0,
  isEnabled = true,
   btnPrev = document.querySelector('.slider__btn-prev'),
   btnNext = document.querySelector('.slider__btn-next'),
   btnSlider = document.querySelector(".slider__slides"),
   //---- Portfolio------

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
      let IMGS = document.getElementById('image');
      for (let i = IMGS.children.length ; i >= 0; i--) {
        IMAGE.appendChild(IMGS.children[Math.random() * i | 0 ] );
      }
    }
     
  });

   // -----switch image-----

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
  function changeCurrentSlide(n) {// функция изменяющая текущий слайд "карусель"
    currentSlide = (n + slides.length) % slides.length;
  }
  function hideSlide(direction) { // функция скрытия текущего элемента
    isEnabled = false;
  slides[currentSlide].classList.add(direction);  // добавление в текущий элемент анимацию
  slides[currentSlide].addEventListener('animationend', function () {
    this.classList.remove('active_slide', direction);  
  });
  }
  function showSlide(direction) { // функция появления следующего элемента
    slides[currentSlide].classList.add('next', direction); //начало анимации на экране два слайда
    slides[currentSlide].addEventListener('animationend', function () {
    this.classList.remove('next', direction); // удаляем класс следующий, т.к. Анимация закончилась
    this.classList.add('active_slide'); // объявляем след слайд актив
    isEnabled = true;
  });
}
function nextSlide(n) { //функция смены слайда право
  hideSlide('to-left');
  changeCurrentSlide(n + 1);
  showSlide('from-right');
  if (n % 2 == 0) {
    document.querySelector('.slider').classList.remove('red_slide');
    document.querySelector('.slider').classList.add('blue_slide');
  } else {
    document.querySelector('.slider').classList.remove('blue_slide');
    document.querySelector('.slider').classList.add('red_slide');
  }
}
function previousSlide(n) { //функция смены слайда право
  hideSlide('to-right');
  changeCurrentSlide(n - 1);
  showSlide('from-left');
  if (n % 2 == 0) {
    document.querySelector('.slider').classList.remove('red_slide');
    document.querySelector('.slider').classList.add('blue_slide');
  } else {
    document.querySelector('.slider').classList.remove('blue_slide');
    document.querySelector('.slider').classList.add('red_slide');
  }
}
  

document.querySelector('.slider__btn-prev').addEventListener('click', function () {
  if (isEnabled) {
    previousSlide(currentSlide);
  }
});

document.querySelector('.slider__btn-next').addEventListener('click', function () {
  if (isEnabled) {
    nextSlide(currentSlide);
  }
});

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
