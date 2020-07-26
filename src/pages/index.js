import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { initialPlaces, addPopupButton, editPopupButton, nameInput, aboutInput} from '../utils/constants.js';
import Section from '../components/section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import userInfo from '../components/UserInfo.js';
import './index.css';

//popupwithimage
const popupWithImage = new PopupWithImage('.popup_img');
//handle image popup open
const handleCardClick = (card) => {
  popupWithImage.open(card);
};

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
const handleEditSubmit = ({name, about}) => {
  console.log('this works');
  console.log(userProfile);
  console.log(about);
  userProfile.setUserInfo(name, about);
};
const editPopupForm = new PopupWithForm('.popup_edit', handleEditSubmit);

//open forms
addPopupButton.addEventListener('click', () => {
  addPlaceForm.open();
});

editPopupButton.addEventListener('click', () => {
  const userInfo = userProfile.getUserInfo();
  nameInput.value = userInfo.name;
  aboutInput.value = userInfo.job;
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
