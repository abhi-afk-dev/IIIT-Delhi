
document.addEventListener('DOMContentLoaded', function() {
    // Handle back button click
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
      // In a real app, this would navigate back
      // For this demo, just show an alert
      alert('Going back to previous screen');
    });
  });
  