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
const popupImage = document.querySelector('.popup__image');
const popupSubtext = document.querySelector('.popup__subtext');
const popupImgModal = document.querySelector('.popup_img');

//template for new places and container for places
const placeTemplate = document.querySelector('#placeTemplate').content;
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

//popup toggle
function togglePopup(popup) {
  popup.classList.toggle('popup_open');
}

//create a place
function createPlace(place) {
  const placeElement = placeTemplate.cloneNode(true);
  const placeImage = placeElement.querySelector('.place__image');
  const placeTitle = placeElement.querySelector('.place__title');
  const placeLike = placeElement.querySelector('.place__like-button');
  const placeTrash = placeElement.querySelector('.place__trash-button');

  //set place image source, alt, and text
  placeImage.src = place.link;
  placeImage.alt = place.name;
  placeTitle.textContent = place.name;

  //event listeners
  //toggle heart fill in on click
  placeLike.addEventListener('click', (e) => {
    e.target.classList.toggle('place__like-button_liked');
  });

  //delete place when trash button clicked
  placeTrash.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });

  //image modal
  placeImage.addEventListener('click', () => {
    popupImage.src = place.link;
    popupImage.alt = place.name;
    popupSubtext.textContent = place.name;
    togglePopup(popupImgModal);
  });

  return placeElement;
}

//render place on dom
function renderPlace(place) {
  placesContainer.prepend(createPlace(place));
}

//add new image functions
function submitAddForm(e) {
  e.preventDefault();
  renderPlace({ name: titleInput.value, link: linkInput.value });
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

//render all initial places on load
initialPlaces.forEach((place) => {
  renderPlace(place);
});

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
