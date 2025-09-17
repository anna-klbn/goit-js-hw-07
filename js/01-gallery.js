import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");

function markupGallery() {
   return galleryItems.map(item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original.value}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`).join("");
};

gallery.innerHTML = markupGallery();


function selectGalleryEl(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }
    const source = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
}
gallery.addEventListener("click", selectGalleryEl);