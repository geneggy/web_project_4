//interaction buttons
const editPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__exit");
const savePopupButton = document.querySelector(".popup__save-button");
const popup = document.querySelector(".popup");

//form and form fields
const form = document.querySelector(".popup__form");
const aboutInput = document.querySelector(".popup__form-about");
const nameInput = document.querySelector(".popup__form-name");

//value fields
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  popup.classList.toggle("popup_open");
}

function togglePopup() {
  popup.classList.toggle("popup_open");
}

editPopupButton.addEventListener("click", togglePopup);
closePopupButton.addEventListener("click", togglePopup);
form.addEventListener("submit", formSubmitHandler);
