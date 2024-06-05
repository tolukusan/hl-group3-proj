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
        }, 500); // Adjust the delay time as needed
      }, 500); // Adjust the delay time as needed
    }, 2000); // Adjust the initial delay time as needed
  });