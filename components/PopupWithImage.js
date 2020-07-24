// Creating the PopupWithImage Class
// Create the PopupWithImage class as a child class of Popup. This class has to change the parent open() method. In the open() method of the PopupWithImage class, you need to add an image to the popup and the corresponding image src attribute along with a caption for the image.
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
  }

  open({link, caption}) {
    const popupImgElement = this._popupElement.querySelector('.popup__img');
    popupImgElement.src = link;
    popupImgElement.alt = caption;
    this._popupElement.querySelector('.popup__subtext').textContent = caption;
    super.open();
  }
}

