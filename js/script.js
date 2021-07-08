'use strict'
const first = document.querySelector('.first'),
   second = document.querySelector('.second'),
   third = document.querySelector('.third'),
   fourth = document.querySelector('.fourth'),
   square = document.querySelector('.square'),
   squareItem = document.querySelectorAll('.square-item'),
   circle = document.querySelector('.circle');

function squreAnimation() {
   let pos = 0;
   const id = setInterval(firstAnimation, 10);
   function firstAnimation() {
      if (pos >= 50) {
         clearInterval(id);
         square.style.display = 'none';
         circle.style.display = 'flex';
         setTimeout(rotateCircle, 2000)
      } else {
         pos += 0.1;
         first.style.right = pos + "vw";
         first.style.bottom = pos + 'vh';
         second.style.left = pos + "vw";
         second.style.bottom = pos + 'vh';
         third.style.right = pos + "vw";
         third.style.top = pos + 'vh';
         fourth.style.left = pos + "vw";
         fourth.style.top = pos + 'vh';
         console.log(pos);
      }
   }
}

function rotateCircle() {
   circle.classList.add('circle-rotate');
}
squareItem.forEach(item => item.addEventListener('click', squreAnimation))

