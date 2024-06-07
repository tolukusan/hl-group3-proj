window.addEventListener('load', function() {
  const logo = document.querySelector('.logo');
  const mainBody = document.querySelector('.main-body');

  setTimeout(function() {
    logo.style.transform = 'scale(0.5)'; // Shrink the logo
    setTimeout(function() {
      logo.style.transform = 'scale(1)'; // Return the logo to its original size
      setTimeout(function() {
        logo.style.transform = 'translateY(100%)'; // Move the logo down
        mainBody.style.top = '0'; // Move the content into view
        setTimeout(function() {
          logo.style.transition = 'transform 1.5s ease-in-out, opacity 0.5s ease-out 1.5s'; // Adjust the transition duration and timing function
          logo.style.transform = 'translateY(-200%)'; // Move the logo up and off the screen
          logo.style.display = 'none'; // Set opacity to 0 after the logo moves up
        }, 500); // Adjust the delay time as needed
      }, 500); // Adjust the delay time as needed
    }, 500); // Adjust the delay time as needed
  }, 2000); // Adjust the initial delay time as needed
});

const gridContainer = document.querySelector('.grid-container');
const apiUrl = 'https://api.unsplash.com/photos/random?count=20&client_id=nnpFkKYiXTNTRkjehQKQD9J7KE34CpsAqMbvP7yF6a0';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const gridItems = data.map(photo => {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      const img = document.createElement('img');
      img.src = photo.urls.regular;
      img.alt = photo.alt_description;

      const aspectRatio = photo.width / photo.height;
      const rowSpan = Math.round(aspectRatio * 2); // Adjust row span based on aspect ratio
      gridItem.style.gridRowEnd = `span ${rowSpan}`;

      if (rowSpan > 6) {
        // Limit row span to 6 for larger images
        gridItem.style.gridRowEnd = 'span 6';
      }

      gridItem.appendChild(img);
      return gridItem;
    });

    gridItems.forEach(item => gridContainer.appendChild(item));
  })
  .catch(error => console.error(error));