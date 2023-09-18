// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);


function createMarkup (arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a href="${original}" class="gallery__link">
        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
        </a>
    </li>`;
    }).join("");
}

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250 ,
   
 });

console.log(galleryItems);
