const BUTTON_A = document.querySelector('#button-a');

const INPUTS = document.querySelectorAll('.state');

const TEXTS = document.querySelectorAll('.text-item');

const CAROUSEL_WINDOW = document.querySelector('.meme__items');

const MEME_TEXT = document.querySelector('.meme-text');
let widthContent = 900;

const render = () => {
  INPUTS.forEach((inp) =>
    inp.addEventListener('click', (event) => {
      switch (event.target.id) {
        case 'button-a':
          CAROUSEL_WINDOW.style.marginLeft = '0';
          MEME_TEXT.style.marginLeft = '0';
          break;
        case 'button-b':
          CAROUSEL_WINDOW.style.marginLeft = `-${widthContent}px`;
          MEME_TEXT.style.marginLeft = `-${widthContent}px`;
          break;
        case 'button-c':
          CAROUSEL_WINDOW.style.marginLeft = `-${widthContent * 2}px`;
          MEME_TEXT.style.marginLeft = `-${widthContent * 2}px`;
          break;
        case 'button-d':
          CAROUSEL_WINDOW.style.marginLeft = `-${widthContent * 3}px`;
          MEME_TEXT.style.marginLeft = `-${widthContent * 3}px`;
          break;
        default:
          break;
      }
    })
  );
};

window.addEventListener('resize', (event) => {
  if (event.target.innerWidth < 1280) {
    widthContent = 300;
    CAROUSEL_WINDOW.style.marginLeft = '0';
    MEME_TEXT.style.marginLeft = '0';
    BUTTON_A.checked = true;
    render();
  } else {
    widthContent = 900;
    CAROUSEL_WINDOW.style.marginLeft = '0';
    MEME_TEXT.style.marginLeft = '0';
    BUTTON_A.checked = true;
    render();
  }
});

render();
