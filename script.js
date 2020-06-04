//interaction buttons
const editPopupButton = document.querySelector('.profile__edit-button');
const closeEditPopupButton = document.querySelector('.popup__exit_edit');
const closeAddPopupButton = document.querySelector('.popup__exit_new-place');
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

//value fields
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');

//Edit profile functions
function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  popupEdit.classList.toggle('popup_open');
}

//add new image functions

function submitAddForm(e) {
  e.preventDefault();
  renderPlace({name: titleInput.value, link: linkInput.value});
  addForm.reset();
  togglePlacePopup();
}


//toggle popups
function toggleEditPopup() {
  popupEdit.classList.toggle('popup_open');
}

function togglePlacePopup() {
  popupPlace.classList.toggle('popup_open');
}

editPopupButton.addEventListener('click', toggleEditPopup);
addPopupButton.addEventListener('click', togglePlacePopup);
closeEditPopupButton.addEventListener('click', toggleEditPopup);
closeAddPopupButton.addEventListener('click', togglePlacePopup);

addForm.addEventListener('submit', submitAddForm);
editForm.addEventListener('submit', formSubmitHandler);


//initial 6 places
const placeTemplate = document.querySelector('#placeTemplate').content;
const placesContainer = document.querySelector('.places');

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
  placeLike.addEventListener('click', function (e) {
    e.target.classList.toggle('place__like-button_liked');
  });

  //delete place when trash button clicked
  placeTrash.addEventListener('click', function (e) {
    e.target.parentElement.remove();
  });

  return placeElement;
}

//render place
function renderPlace(place) {
  placesContainer.append(createPlace(place));
}

//render each place on initial render

initialPlaces.forEach(function (place) {
  renderPlace(place);
});


