'use strict'
window.addEventListener('DOMContentLoaded', () => {
   const first = document.querySelector('.first'),
      second = document.querySelector('.second'),
      third = document.querySelector('.third'),
      fourth = document.querySelector('.fourth'),
      square = document.querySelector('.square'),
      squareItem = document.querySelectorAll('.square-item'),
      circle = document.querySelector('.circle');
   let req;
   let pos = 0;





   let prom = new Promise(function (resolve, reject) {
      const id = setInterval(() => {
         if (pos >= 50) {
            clearInterval(id);
            square.style.display = 'none';
            circle.style.display = 'flex';
            setTimeout(() => {
               resolve(rotateCircle)
            }, 2000);
         }
         else {
            pos += 0.1;
            first.style.right = pos + "vw";
            first.style.bottom = pos + 'vh';
            second.style.left = pos + "vw";
            second.style.bottom = pos + 'vh';
            third.style.right = pos + "vw";
            third.style.top = pos + 'vh';
            fourth.style.left = pos + "vw";
            fourth.style.top = pos + 'vh';
            //console.log(pos);
         }
      }, 10);

   });

   //prom.then(circleAlert);
   prom.then(function () {
      rotateCircle();
      setTimeout(circleAlert, 2000);
   });

   function circleAlert() {
      alert('Hello')
      //circle.addEventListener('click', () => {
      //alert('Hello');
      //})
   }
   function rotateCircle() {
      circle.classList.add('circle-rotate');
   }

   //function showForm() {
   //   circle.addEventListener
   // }

});