// JavaScript Document
var lightbox = document.getElementById('lightbox');
var lightboxImage = document.getElementById('lightbox-image');
var lightboxLinks = document.querySelectorAll('.lightbox-link');
var closeButton = document.querySelector('.close');

function openLightbox(event) {
  event.preventDefault();
  var imageUrl = this.getAttribute('href');
  lightboxImage.setAttribute('src', imageUrl);
  lightbox.style.display = 'block';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

// Attach event listeners
lightboxLinks.forEach(function(link) {
  link.addEventListener('click', openLightbox);
});

closeButton.addEventListener('click', closeLightbox);