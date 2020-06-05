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

console.log(popupSubtext);
console.log(popupImage);
console.log(popupImgModal);

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
  createPlace({name: titleInput.value, link: linkInput.value});
  addForm.reset();
  togglePlacePopup();
}

//create a place and render it in page
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


  //image modal
  placeImage.addEventListener('click', function () {
    popupImage.src = place.link;
    popupSubtext.textContent = place.name;
    popupImgModal.classList.toggle('popup_open');
  });

  //add new element to container
  placesContainer.append(placeElement);
}

//popup toggle functions
function toggleEditPopup() {
  popupEdit.classList.toggle('popup_open');
}

function togglePlacePopup() {
  popupPlace.classList.toggle('popup_open');
}

function toggleImgPopup() {
  popupImgModal.classList.toggle('popup_open');
}


//render all initial places on load
initialPlaces.forEach(function(place) {
  createPlace(place);
});

//event listeners
editPopupButton.addEventListener('click', toggleEditPopup);
addPopupButton.addEventListener('click', togglePlacePopup);
closeEditPopupButton.addEventListener('click', toggleEditPopup);
closeAddPopupButton.addEventListener('click', togglePlacePopup);
closeImgPopupButton.addEventListener('click', toggleImgPopup);
addForm.addEventListener('submit', submitAddForm);
editForm.addEventListener('submit', formSubmitHandler);



