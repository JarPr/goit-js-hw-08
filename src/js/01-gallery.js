// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", handleImmage);

function createMarkup (arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a href="${original}" class="gallery__link">
        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
        </a>
    </li>`;
    }).join("");
}

function handleImmage(event) {
    if (event.target === event.currentTarget) {
        return;
    }

    event.preventDefault();

    // const targetElement = event.target.closest('.gallery__image')
 
    const instance = basicLightbox.create(
        `<div class="modal">
       <img src="${event.target.dataset.source}" alt="${event.target.alt}"/>
    </div>`
    );

    instance.show();
}

console.log(galleryItems);
