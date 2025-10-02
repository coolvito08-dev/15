// Galería automática
let galleryIndex = 0;
const galleryImgs = document.querySelectorAll("#gallery img");
setInterval(() => {
  galleryImgs[galleryIndex].classList.remove("active");
  galleryIndex = (galleryIndex + 1) % galleryImgs.length;
  galleryImgs[galleryIndex].classList.add("active");
}, 4000);
