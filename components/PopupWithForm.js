// Creating the PopupWithForm Class
// Create PopupWithForm as a child class of Popup. The PopupWithForm class must comply with the following requirements:
// It takes a callback of the form submission into the constructor, as well as the popup selector.
// It stores a private method named _getInputValues(), which collects data from all the input fields.
// It modifies the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm class has to add the click event listener to the close icon while also adding the submit event handler.
// It modifies the close() parent method in order to reset the form once the popup is closed.
// Create an instance of the PopupWithForm class for each popup.


class PopupWithForm extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
  }

  _getInputValue() {
    //grab all values in form and store them in object
    this._
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.querySelector('.popup__button').addEventListener('submit', )
  }
}



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

editPopupButton.addEventListener('click', () => togglePopup(popupEdit));
addPopupButton.addEventListener('click', () => togglePopup(popupPlace));

//submitlisteners
addForm.addEventListener('submit', submitAddForm);
editForm.addEventListener('submit', formSubmitHandler);
