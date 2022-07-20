import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkUp = createImageGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkUp);



function createImageGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"s/>
        </a>
        </div>`;
        })
        .join('');
};

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: "img",
    captionsData: "alt",
    captionsPosition: "bottom",
    captionsDelay: 250,
    showCounter: false,
    enableKeyboard: true,
});
