import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const imagesMarkup = incertImages(galleryItems);

gallery.insertAdjacentHTML("beforeend", imagesMarkup);
gallery.addEventListener("click", onImageClick);

function incertImages(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a ʼ
      class="gallery__link" 
      href="${original}"
      onclick="return false"
      >
      <img
      class="gallery__image"
      src="${preview}" 
      data-source="${original}"
      alt="${description}" 
      />
      </a>
      </li>
      `;
    })
    .join("");
}

function onImageClick(e) {
  const isImage = e.target.classList.contains("gallery__image");
  const { target } = e;

  if (!isImage) {
    return;
  }

  var lightbox = new SimpleLightbox(".gallery a", {});

  console.log();
}
