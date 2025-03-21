// This script adds interactivity to the Payment App

document.addEventListener('DOMContentLoaded', function() {
    // Make contact cards clickable
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
      card.addEventListener('click', function() {
        // You would implement contact selection functionality here
        const contactName = this.querySelector('.contact-name').textContent;
        console.log(`Selected contact: ${contactName}`);
        
        // Visual feedback on click
        this.style.opacity = '0.7';
        setTimeout(() => {
          this.style.opacity = '1';
        }, 200);
      });
    });
  
    // Make payment cards clickable
    const paymentCards = document.querySelectorAll('.payment-card');
    paymentCards.forEach(card => {
      card.addEventListener('click', function() {
        // You would implement card selection functionality here
        const cardNumber = this.querySelector('.card-number span:last-child').textContent;
        console.log(`Selected card ending with: ${cardNumber}`);
        
        // Visual feedback on click
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 200);
      });
    });
  
    // Make action buttons clickable
    const actionButtons = document.querySelectorAll('.action-button');
    actionButtons.forEach(button => {
      button.addEventListener('click', function() {
        // You would implement action button functionality here
        console.log('Action button clicked');
        
        // Visual feedback on click
        this.style.opacity = '0.7';
        setTimeout(() => {
          this.style.opacity = '1';
        }, 200);
      });
    });
  
    // Make templates clickable
    const templates = document.querySelectorAll('.template');
    templates.forEach(template => {
      template.addEventListener('click', function() {
        // You would implement template selection functionality here
        const templateTitle = this.querySelector('.template-title').textContent;
        console.log(`Selected template: ${templateTitle}`);
        
        // Visual feedback on click
        this.style.backgroundColor = 'rgba(40, 40, 40, 1)';
        setTimeout(() => {
          this.style.backgroundColor = 'rgba(28, 28, 28, 1)';
        }, 200);
      });
    });
  
    // Implement search functionality
    const searchInputs = document.querySelectorAll('.search-input input');
    searchInputs.forEach(input => {
      input.addEventListener('input', function() {
        // You would implement search functionality here
        console.log(`Searching for: ${this.value}`);
      });
    });
  
    // Update the time in the status bar
    function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      
      // Format hours to 12-hour format
      if (hours > 12) {
        hours -= 12;
      } else if (hours === 0) {
        hours = 12;
      }
      
      // Add leading zero to minutes if needed
      minutes = minutes < 10 ? '0' + minutes : minutes;
      
      // Display time in status bar
      document.querySelector('.time').textContent = `${hours}:${minutes}`;
    }
    
    // Update time immediately and then every minute
    updateTime();
    setInterval(updateTime, 60000);
  });
  