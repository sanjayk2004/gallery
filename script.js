const thumbBar = document.getElementById('thumb-bar');
const displayedImg = document.getElementById('displayed-img');

// Array of image file names — replace with your own or adjust paths
const images = [
  '13906.jpg',
  '25917.jpg',
  '2013946.jpg',
  '25930.jpg',
  '25926.png',
  '25913.png'
];

// Create thumbnails dynamically
for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement('img');
  newImage.src = images[i];
  newImage.alt = 'Thumbnail ' + (i + 1);

  // Add click event for each thumbnail
  newImage.addEventListener('click', function() {
    displayedImg.src = newImage.src;
    displayedImg.alt = newImage.alt;
  });

  thumbBar.appendChild(newImage);
}
