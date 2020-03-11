window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let services = document.querySelector('.services'),
   portfolio = document.querySelector('.portfolios'),
   nav = document.querySelector('.nav')

   nav.addEventListener('click', (event) => {
    nav.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active')
   })
   


});
