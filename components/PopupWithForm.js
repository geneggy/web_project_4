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
    this._getInputValue = this._getInputValue.bind(this);
    
  }

  _getInputValue() {
    if(this._popupElement.classList.contains('popup_edit')) {
      this._name = this._popupElement.querySelector('.popup__form-name').value;
      this._about = this._popupElement.querySelector('.popup__form-about').value;
    } else if (this._popupElement.classList.contains('popup_new-place')) {
      this._title = this._popupElement.querySelector('.popup__form-title').value;
      this._link = this._popupElement.querySelector('.popup__form-link').value;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.querySelector('.popup__button').addEventListener('submit', function() {
      this._getInputValue();
      this._close();
    });
  }

  close() {
    super.close();
    this._popupElement.querySelector('.popup__form').reset();
  }
}

