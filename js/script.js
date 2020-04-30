// Declare Globale variables
const arrowBtn = document.querySelector('#arrow');
const landing = document.querySelector('.landing');
const mainHeader = document.querySelector('.main-header');

// click event listener to arrow link
arrowBtn.addEventListener('click', hideLanding);

// Hide arrow link after scroll event
// Shrink landing page and re-style h1 element 
function hideLanding() {
  setTimeout(function() {
    arrowBtn.style.display = 'none';
    landing.style.alignItems = 'flex-start';
    landing.classList.add('shrink');
    mainHeader.classList.add('header-desktop');
  }, 1000);
};