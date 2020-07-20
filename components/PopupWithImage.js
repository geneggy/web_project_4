// Creating the PopupWithImage Class
// Create the PopupWithImage class as a child class of Popup. This class has to change the parent open() method. In the open() method of the PopupWithImage class, you need to add an image to the popup and the corresponding image src attribute along with a caption for the image.

class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
  }

  open({link, caption}) {
    this._popupElement.querySelector('.popup__img').src = link;
    this._popupElement.querySelector('.popup__subtext').textContent = caption;

    super.open();
  }
}

// const modalWithImage = new PopupWithImage('......');

// initialCards.forEach((data) => {
//   new Card(data, '.', function() {
//     modalWithImage.open();
//   });
// });