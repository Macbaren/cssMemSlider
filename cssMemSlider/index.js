const TEXT_A = document.querySelector('#item-a');
const TEXT_B = document.querySelector('#item-b');
const TEXT_C = document.querySelector('#item-c');
const TEXT_D = document.querySelector('#item-d');

const INPUTS = document.querySelectorAll('.state');

const TEXTS = document.querySelectorAll('.text-item');

const CAROUSEL_WINDOW = document.querySelector('.meme__items');

const MEME_TEXT = document.querySelector('.meme-text');

INPUTS.forEach((inp) =>
  inp.addEventListener('click', (event) => {
    switch (event.target.id) {
      case 'button-a':
        CAROUSEL_WINDOW.style.marginLeft = '0';
        MEME_TEXT.style.marginLeft = '0';
        break;
      case 'button-b':
        CAROUSEL_WINDOW.style.marginLeft = '-1280px';
        MEME_TEXT.style.marginLeft = '-930px';

        break;
      case 'button-c':
        CAROUSEL_WINDOW.style.marginLeft = '-2560px';
        MEME_TEXT.style.marginLeft = '-1860px';

        break;
      case 'button-d':
        CAROUSEL_WINDOW.style.marginLeft = '-3840px';
        MEME_TEXT.style.marginLeft = '-2790px';

        break;

      default:
        break;
    }
    console.log('event', event.target.id);
  })
);

// const BTN_LEFT = document.querySelector('#btn-left');
// const BTN_RIGHT = document.querySelector('#btn-right');
// const CAROUSEL = document.querySelector('#carousel');

// let ITEMS_LEFT = document.querySelector('#items-left');
// let ITEMS_RIGHT = document.querySelector('#items-right');
// let ITEMS_ACTIVE = document.querySelector('#items-active');

// let PET_BUTTONS;
// const PETS_ID_ARR = [0, 1, 2, 3, 4, 5, 6, 7];

// let ITEMS_LEFT_ARR = [0, 1, 2];
// let ITEMS_RIGHT_ARR = [6, 7, 0];
// let ITEMS_ACTIVE_ARR = [3, 4, 5];

// const getActiveButtons = () => {
//   return ITEMS_ACTIVE.querySelectorAll('.pets__card');
// };

// //create card depending id
// const createCardTemplate = (num) => {
//   return `<div class="pets__card" id="${num}">
//             <div class="pets__card-img">
//               <img src="${pets[num].img}" alt="" />
//             </div>
//             <p class="pets__card-title">${pets[num].petname}</p>
//             <button class="pets__card-button">Learn more</button>
//           </div>`;
// };

// //create group
// const createGroupCardsTemplate = (arr, tag) => {
//   arr.forEach((el) => {
//     tag.insertAdjacentHTML('beforeend', createCardTemplate(el));
//   });
// };

// createGroupCardsTemplate(ITEMS_LEFT_ARR, ITEMS_LEFT);
// createGroupCardsTemplate(ITEMS_ACTIVE_ARR, ITEMS_ACTIVE);
// createGroupCardsTemplate(ITEMS_RIGHT_ARR, ITEMS_RIGHT);

// //add class, remove listener
// const moveLeft = () => {
//   CAROUSEL.classList.add('transition-left');
//   BTN_LEFT.removeEventListener('click', moveLeft);
//   BTN_RIGHT.removeEventListener('click', moveRight);
// };

// const moveRight = () => {
//   CAROUSEL.classList.add('transition-right');
//   BTN_RIGHT.removeEventListener('click', moveRight);
//   BTN_LEFT.removeEventListener('click', moveLeft);
// };

// BTN_LEFT.addEventListener('click', moveLeft);
// BTN_RIGHT.addEventListener('click', moveRight);
