document.addEventListener('DOMContentLoaded', function() {
    // Current amount value
    let currentAmount = '1,265';
    const amountDisplay = document.getElementById('amount-display');
    
    // Handle keypad button presses
    const keypadButtons = document.querySelectorAll('.keypad-button, .delete-key');
    keypadButtons.forEach(button => {
      button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        handleKeyPress(value);
      });
    });
    
    // Send button click handler
    const sendButton = document.querySelector('.send-button');
    sendButton.addEventListener('click', function() {
      const message = document.querySelector('.message-field').value;
      handleSend(currentAmount, message);
    });
    
    // Key press handler
    function handleKeyPress(value) {
      console.log('Key pressed:', value);
      
      if (value === 'delete') {
        // Handle delete operation
        if (currentAmount.length > 0) {
          // Remove commas before processing
          let rawAmount = currentAmount.replace(/,/g, '');
          rawAmount = rawAmount.slice(0, -1);
          
          // Format with commas
          if (rawAmount.length > 0) {
            currentAmount = formatNumberWithCommas(rawAmount);
          } else {
            currentAmount = '0';
          }
        }
      } else {
        // Handle number keys
        // Remove commas before processing
        let rawAmount = currentAmount.replace(/,/g, '');
        
        // Don't add leading zeros
        if (rawAmount === '0' && value === '0') {
          return;
        }
        
        // Replace '0' with the new digit if it's the only digit
        if (rawAmount === '0') {
          rawAmount = value;
        } else {
          rawAmount += value;
        }
        
        // Format with commas
        currentAmount = formatNumberWithCommas(rawAmount);
      }
      
      // Update display
      amountDisplay.textContent = currentAmount;
    }
    
    // Send handler
    function handleSend(amount, message) {
      console.log(`Sending $${amount} with message: ${message}`);
      alert(`Payment of $${amount} sent successfully!`);
    }
    
    // Helper function to format numbers with commas
    function formatNumberWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  });
  