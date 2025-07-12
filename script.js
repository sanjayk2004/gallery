const thumbBar = document.getElementById('thumb-bar');
const displayedImg = document.getElementById('displayed-img');

// Array of image file names — replace with your own or adjust paths
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
];

// Create thumbnails dynamically
for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement('img');
  newImage.src = 'images/' + images[i];
  newImage.alt = 'Thumbnail ' + (i + 1);

  // Add click event for each thumbnail
  newImage.addEventListener('click', function() {
    displayedImg.src = newImage.src;
    displayedImg.alt = newImage.alt;
  });

  thumbBar.appendChild(newImage);
}
