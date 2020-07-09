import {togglePopup} from './utils.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';


/* eslint-disable strict */
//interaction buttons
const editPopupButton = document.querySelector('.profile__edit-button');
const closeEditPopupButton = document.querySelector('.popup__exit_edit');
const closeAddPopupButton = document.querySelector('.popup__exit_new-place');
const closeImgPopupButton = document.querySelector('.popup__exit_img');
const addPopupButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_edit');
const popupPlace = document.querySelector('.popup_new-place');

//form and form fields
const editForm = document.querySelector('.popup__form_edit');
const addForm = document.querySelector('.popup__form_add');
const aboutInput = document.querySelector('.popup__form-about');
const nameInput = document.querySelector('.popup__form-name');
const titleInput = document.querySelector('.popup__form-title');
const linkInput = document.querySelector('.popup__form-link');

//profile fields to select
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');

//image modal fields
const popupImgModal = document.querySelector('.popup_img');

//template for new places and container for places
const placesContainer = document.querySelector('.places');

//initial 6 places
const initialPlaces = [
  {
    name: 'Yosemite Valley',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
  },
  {
    name: 'Lake Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
  },
  {
    name: 'Bald Mountains',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
  },
  {
    name: 'Vanois National Park',
    link: 'https://code.s3.yandex.net/web-code/vanois.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg',
  },
];


//load initial places
initialPlaces.forEach((place) => {
  const newPlace = new Card(place, '#placeTemplate');
  placesContainer.prepend(newPlace.generateCard());
});



//add new image functions
function submitAddForm(e) {
  e.preventDefault();
  const newPlace = new Card({ name: titleInput.value, link: linkInput.value }, '#placeTemplate');
  placesContainer.prepend(newPlace.generateCard());
  addForm.reset();
  togglePopup(popupPlace);
}

//Edit profile functions
function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  togglePopup(popupEdit);
}

//click out of popup listeners
popupEdit.addEventListener('click', (e) =>
  e.target.classList.contains('popup_edit') ? togglePopup(popupEdit) : ''
);
popupPlace.addEventListener('click', (e) =>
  e.target.classList.contains('popup_new-place') ? togglePopup(popupPlace) : ''
);
popupImgModal.addEventListener('click', (e) =>
  e.target.classList.contains('popup_img') ? togglePopup(popupImgModal) : ''
);

// Escape key function to allow removal of handler 
function escape(e) {
  if (e.key === 'Escape') {
    togglePopup(document.querySelector('.popup_open'));
  }
  e.target.removeEventListener('keyup', escape);
}

window.addEventListener('keyup', escape);

//submit popup listeners
editPopupButton.addEventListener('click', () => togglePopup(popupEdit));
addPopupButton.addEventListener('click', () => togglePopup(popupPlace));

//close popup listeners
closeEditPopupButton.addEventListener('click', () => togglePopup(popupEdit));
closeAddPopupButton.addEventListener('click', () => togglePopup(popupPlace));
closeImgPopupButton.addEventListener('click', () => togglePopup(popupImgModal));

//submitlisteners
addForm.addEventListener('submit', submitAddForm);
editForm.addEventListener('submit', formSubmitHandler);


//form validation
const formList = Array.from(document.querySelectorAll('.popup__form'));

formList.forEach((formElement) => {
  const validation = new FormValidator({
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
  }, formElement);

  validation.enableValidation();
});

