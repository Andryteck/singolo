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
   TAG_BUTTON = document.querySelector('.gallery__item_left-phone'),
   TAG_SCREEN_VERTICAL = document.querySelector('.iphone-visible'),
   TAG_SCREEN_HORIZONTAL = document.querySelector('.iphone-visible-horizontal'),
   TAG_BUTTON_HORIZONTAL = document.querySelector('.gallery__item_right-phone');
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
  const { target } = event;
    const dataClass = target.getAttribute('data-class');
    if (!dataClass) return;

    const content = this.slider.querySelector(`.${dataClass}-content`);
    content.classList.toggle('display-off');
  });

  TAG_BUTTON_HORIZONTAL.addEventListener('click', (event) => {
    const { target } = event;
    const dataClass = target.getAttribute('data-class');
    if (!dataClass) return;

    const content = this.slider.querySelector(`.${dataClass}-content`);
    content.classList.toggle('display-off');
  });


  //  -------------slider-------------

  class Slider {
    constructor() {
      this.currentSlide = 0;
      this.isSliceEnabled = true;
      this.slides = [];
  
      this.slider = null;
      this.controlButtons = {
        previousSlide: null,
        nextSlide: null,
      };
    }
  
    changeCurrentSlide(index) {
      const { slides } = this;
  
      this.currentSlide = (index + slides.length) % slides.length;
    }
  
    hideItem(direction) {
      const { slides, currentSlide } = this;
      const slide = slides[currentSlide];
  
      this.isSliceEnabled = false;
      slide.classList.add(direction);
      slide.addEventListener('animationend', () => {
        slide.classList.remove('slider__active', direction);
      });
    }
  
    showItem(direction) {
      const { slides, currentSlide } = this;
      const slide = slides[currentSlide];
  
      slide.classList.add('slider__next', direction);
      slide.addEventListener('animationend', () => {
        slide.classList.remove('slider__next', direction);
        slide.classList.add('slider__active');
        this.isSliceEnabled = true;
      });
    }
  
    nextItem(index) {
      this.hideItem('to-left');
      this.changeCurrentSlide(index + 1);
      this.showItem('from-right');
    }
  
    previousItem(index) {
      this.hideItem('to-right');
      this.changeCurrentSlide(index - 1);
      this.showItem('from-left');
    }
  
    sliderButtonClickHandler(callBack) {
      if (this.isSliceEnabled) {
        callBack(this.currentSlide);
      }
    }
  
    addHandlers() {
      const { previousSlide, nextSlide } = this.controlButtons;
      const { previousItem, nextItem } = this;
      const gallery = this.slider.querySelector('.gallery');
  
      previousSlide.addEventListener('click', () => {
        this.sliderButtonClickHandler(previousItem.bind(this));
      });
      nextSlide.addEventListener('click', () => {
        this.sliderButtonClickHandler(nextItem.bind(this));
      });
      
      
    }
  
    init() {
      this.slider = document.querySelector('.slider');
      this.slides = this.slider.querySelectorAll('.slider__item');
      this.controlButtons.previousSlide = this.slider.querySelector('.slider__button_previous');
      this.controlButtons.nextSlide = this.slider.querySelector('.slider__button_next');
  
      this.addHandlers();
    }
  }

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




