'use strict';
// Project #2
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);
// for (let i = 0; i < btnsOpenModal.length; i++)
//   console.log(btnsOpenModal[i].textContent);

// Working With Classes
const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Handling an "Esc" Keypress Event

// Keyboard Event
// document.addEventListener('keydown', function (e) {
//   //   console.log(e);
//   console.log(e.key);
//   if (e.key === 'Escape') {
//     console.log('you press Esc');
//   }
// });

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
