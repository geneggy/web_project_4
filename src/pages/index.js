/* eslint-disable no-console */

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {
  addPopupButton,
  editPopupButton,
  nameInput,
  aboutInput,
} from '../utils/constants.js';
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
    'Content-Type': 'application/json',
  },
});

//change loading text
const renderLoading = (isLoading, buttonSelector, buttonText) => {
  if (isLoading) {
    document.querySelector(buttonSelector).textContent = 'Saving...';
  } else {
    document.querySelector(buttonSelector).textContent = `${buttonText}`;
  }
};

//popup delete
const handleDeleteSubmit = (card, trashParentElement) => {
  renderLoading(true, '.popup__button-delete', 'Save');
  trashParentElement.remove();
  popupDelete.close();
  api.removeCard(card._id).finally(() => {
    renderLoading(false, '.popup__button-delete', 'Save');
  });
};

const popupDelete = new PopupWithConfirm('.popup_delete', handleDeleteSubmit);

const handleTrashClick = (card, trashParent) =>
  popupDelete.open(card, trashParent);

//popupwithimage
const popupWithImage = new PopupWithImage('.popup_img');
//handle image popup open
const handleCardClick = (card, trashParentElement) => {
  popupWithImage.open(card, trashParentElement);
};

//handleLikeClick
const handleLikeClick = (userId, cardIsLiked) => {
  api.changeLikeCardStatus(userId, cardIsLiked);
};

// popup avatar
const handleAvatarSubmit = (link) => {
  renderLoading(true, '.popup__button-avatar', 'Save');
  api.setUserAvatar(link).finally(() => {
    renderLoading(false, '.popup__button-avatar', 'Save');
  });
  userProfile.setAvatar(link.avatar);
};

const popupSetAvatar = new PopupWithForm('.popup_avatar', handleAvatarSubmit);
document
  .querySelector('.profile__avatar-edit')
  .addEventListener('click', () => {
    popupSetAvatar.open();
  });

//cardlist and submitting new cards
api.getCardList().then((res) => {
  const placeList = new Section(
    {
      items: res,
      renderer: (data) => {
        const place = new Card(
          data,
          '#placeTemplate',
          handleCardClick,
          handleTrashClick,
          userProfile._userId,
          handleLikeClick
        );
        placeList.addItem(place.generateCard());
      },
    },
    '.places'
  );
  placeList.renderItems();

  const handleAddPlaceSubmit = (data) => {
    renderLoading(true, '.popup__button-image', 'Save');
    api
      .addCard(data)
      .then((res) => {
        const place = new Card(
          res,
          '#placeTemplate',
          handleCardClick,
          handleTrashClick,
          userProfile._userId,
          handleLikeClick
        );
        placeList.addItem(place.generateCard());
      })
      .finally(() => {
        renderLoading(false, '.popup__button-image', 'Save');
      });
  };

  const addPlaceForm = new PopupWithForm(
    '.popup_new-place',
    handleAddPlaceSubmit
  );
  addPopupButton.addEventListener('click', () => {
    addPlaceForm.open();
  });
});

//profile
const userProfile = new userInfo(
  '.profile__name',
  '.profile__subtitle',
  '.profile__avatar'
);

api.getUserInfo().then((res) => {
  userProfile.setUserInfo({
    name: res.name,
    about: res.about,
    userId: res._id,
  });
  userProfile.setAvatar(res.avatar);
});

const handleEditSubmit = (data) => {
  renderLoading(true, '.popup__button-edit', 'Save');
  userProfile.setUserInfo({ name: data.name, about: data.about });
  api.setUserInfo({ name: data.name, about: data.about }).finally(() => {
    renderLoading(false, '.popup__button-edit', 'Save');
  });
};

//edit profile popup
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
