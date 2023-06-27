import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPrimeEl = document.querySelector(".gallery");

const newGallery = galleryItems.map(
  ({ preview, original, description }) => 
    
    
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`).join("");

let instance
  
galleryPrimeEl.insertAdjacentHTML("beforeend", newGallery)

galleryPrimeEl.addEventListener("click", handleClick)

function handleClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(
    `<img 
    src="${event.target.dataset.source}"
    alt = ${event.target.description}/>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", pressModalKey)
      },
      onClose: (instance) => document.removeEventListener("keydown", pressModalKey)
    });
  instance.show()
}
function pressModalKey(evt) {
  if (evt.key === "Escape") {
    instance.close()
  }
}

