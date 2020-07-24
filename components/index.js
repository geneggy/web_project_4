import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialPlaces, addPopupButton, editPopupButton} from './constants.js';
//
import Section from './section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import userInfo from './UserInfo.js';

//popupwithimage
const popupWithImage = new PopupWithImage('.popup_img');
//handle image popup open
const handleCardClick = (card) => {
  popupWithImage.open(card);
};

//


//load initial places
const placeList = new Section(
  {
    items: initialPlaces,
    renderer: (data) => {
      const place = new Card(data, '#placeTemplate', handleCardClick);
      placeList.addItem(place.generateCard());
    },
  },
  '.places'
);
placeList.renderItems();

//addplace
const handleAddPlaceSubmit = (data) => {
  const place = new Card(data, '#placeTemplate', handleCardClick);
  placeList.addItem(place.generateCard());
};

const addPlaceForm = new PopupWithForm('.popup_new-place',handleAddPlaceSubmit);

//profile
const userProfile = new userInfo('.profile__name', '.profile__subtitle');
const handleEditSubmit = (name, title) => {
  userProfile.setUserInfo(name, title);
};
const editPopupForm = new PopupWithForm('.popup_edit', handleEditSubmit);

//open forms
addPopupButton.addEventListener('click', () => {
  addPlaceForm.open();
});

editPopupButton.addEventListener('click', () => {
  editPopupForm.open();
});

//form validation
const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((formElement) => {
  const validation = new FormValidator(
    {
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__button',
      inactiveButtonClass: 'popup__button_disabled',
      inputErrorClass: 'popup__input_type_error',
      errorClass: 'popup__error_visible',
    },
    formElement
  );

  validation.enableValidation();
});
