
// This is a simple JavaScript file for any interactivity you might want to add
document.addEventListener('DOMContentLoaded', function() {
    // File button handler
    const fileButton = document.querySelector('.files-button');
    fileButton.addEventListener('click', function() {
      console.log('Open files button clicked');
      // You could show a file picker here
    });
  
    // More actions button handler
    const moreButton = document.querySelector('.more-button');
    moreButton.addEventListener('click', function() {
      console.log('Additional actions button clicked');
      // You could show a menu here
    });
  });
  document.getElementById("goBackButton").addEventListener("click", function() {
    window.history.back(); // This navigates back to the previous page in the browser's history
});