/* eslint-disable no-console */

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { addPopupButton, editPopupButton, nameInput, aboutInput} from '../utils/constants.js';
import Section from '../components/section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import userInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css';
import Popup from '../components/Popup.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-3',
  headers: {
    authorization: ' 84e6855b-5fd3-47bd-8833-73dfffbf3da7',
    'Content-Type': 'application/json'
  }
});


//popup delete

// pass into card, popupDelete.open, which will be passed this._id, and this._deleteCard
const handleDeleteSubmit = (card, trashParentElement) => {
 
  api.removeCard(card._id);
  console.log(trashParentElement);
  trashParentElement.remove();
  popupDelete.close();
  };

const popupDelete = new PopupWithConfirm('.popup_delete', handleDeleteSubmit)

const handleTrashClick = (card, trashParent) => popupDelete.open(card, trashParent);

//popupwithimage
const popupWithImage = new PopupWithImage('.popup_img');
//handle image popup open
const handleCardClick = (card, trashParentElement) => {
  popupWithImage.open(card, trashParentElement);
};

api.getCardList()
  .then(res => {
    const placeList = new Section(
      {
        items: res,
        renderer: (data) => {
          const place = new Card(data, '#placeTemplate', handleCardClick, handleTrashClick, userProfile._userId);
          placeList.addItem(place.generateCard());
        },
      },
      '.places'
    );
    placeList.renderItems();

    //addplace
    // const handleAddPlaceSubmit = (data) => {
    //   api.addCard(data).then(res => {
    //     const place = new Card(res, '#placeTemplate', handleCardClick, handleTrashClick, userProfile._userId);
    //     placeList.addItem(place.generateCard());
    //   })
    // };

    const handleAddPlaceSubmit = (data) => {
      api.addCard(data).then(res => {
        const place = new Card(res, '#placeTemplate', handleCardClick, handleTrashClick, userProfile._userId);
        placeList.addItem(place.generateCard());
      })
    };


    const addPlaceForm = new PopupWithForm('.popup_new-place',handleAddPlaceSubmit);
    addPopupButton.addEventListener('click', () => {
      addPlaceForm.open();
    });  
  }
  );


//profile
const userProfile = new userInfo('.profile__name', '.profile__subtitle');

//initial user info on load
api.getUserInfo()
  .then(res => {
    userProfile.setUserInfo({name: res.name, about: res.about, userId: res._id});
  });

const handleEditSubmit = (data) => {
  userProfile.setUserInfo({name: data.name, about: data.about});
  api.setUserInfo({name: data.name, about: data.about});
};

const editPopupForm = new PopupWithForm('.popup_edit', handleEditSubmit);

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
