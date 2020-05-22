//interaction buttons
let editPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__exit');
let savePopupButton = document.querySelector('.popup__save-button');
let popup = document.querySelector('.popup');

//form and form fields
let form = document.querySelector('.popup__form');
let aboutInput = document.querySelector('.popup__form-about');
let nameInput = document.querySelector('.popup__form-name');

//value fields
let profileName = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  popup.classList.toggle('popup_open');
}

function togglePopup() {
  popup.classList.toggle('popup_open');
}


editPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click',togglePopup);
form.addEventListener('submit', formSubmitHandler);
