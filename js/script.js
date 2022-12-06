// Solve the zero-height problem that it came with absolute positioning

// If you want to solve the zero-height container problem which it's comming with absolute positioning without setting a static height on CSS file.

const card = document.querySelectorAll('.card');

const tabletLandscape = 1199;

const cardHeight = function () {
   const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
   );

   for (let i = 0; i < card.length; i++) {
      if (vw > tabletLandscape) {
         const height =
            document.querySelectorAll('.card__head')[i].clientHeight +
            document.querySelectorAll('.card__body')[i].clientHeight;

         card[i].style.height = height + 'px';
      } else {
         card[i].removeAttribute('style');
      }
   }
};

cardHeight();

window.addEventListener('resize', cardHeight);
window.addEventListener('load', cardHeight);
