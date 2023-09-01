import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
let modalImage = null;

function createMarkup(arr) {
   return arr.map((image) => `
  <li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}" />
      </a>
    </li>
  `).join('');

}

gallery.innerHTML = createMarkup(galleryItems);

function handleClick(event) {
    event.preventDefault();
    const clickedImage = event.target.closest('.gallery__image');
    if (clickedImage) {
    const imageSource = clickedImage.dataset.source;

    modalImage = basicLightbox.create(`
      <img src="${imageSource}" alt="${clickedImage.alt}" width="800" height="600" />
    `,{
  closable: true,
});
        modalImage.show();

   document.addEventListener('keydown', handlePress);
  }
}
function handlePress(event) {
    if (event.key === "Escape" && modalImage) {
    modalImage.close();
    modalImage = null;
    document.removeEventListener('keydown', handlePress);

    }
}
gallery.addEventListener('click', handleClick);

