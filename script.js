'use strict';
// building a Modal Window Project
//bascially how to toggle elements using JS.

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    //meant for displaying the modal window
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {

    //open modal when button is clicked.
    btnsOpenModal[i].addEventListener('click', openModal);

    // close modal when this button is clicked.
    btnCloseModal.addEventListener('click', closeModal);

    // close modal when overlay is clicked.
    overlay.addEventListener('click', closeModal);
};

// Making the Modal disappear using the Escape key
document.addEventListener('keydown', function(e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
       closeModal();
    }
});