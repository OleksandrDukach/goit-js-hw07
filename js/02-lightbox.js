import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPrimeEl = document.querySelector(".gallery");

const newGallery = galleryItems.map(
  ({ preview, original, description }) => 
        
  `<li
   class="gallery__item">
   <a class="gallery__link" href="${original}">
   <img class="gallery__image"
   src="${preview}"
   alt="${description}" />
   </a>
</li>`).join("");

galleryPrimeEl.insertAdjacentHTML("beforeend", newGallery);

galleryPrimeEl.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
}

const galleryScroll = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
