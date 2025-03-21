document.addEventListener('DOMContentLoaded', function() {
    // Wallet Tabs Functionality
    const coinsTab = document.getElementById('coins-tab');
    const cardsTab = document.getElementById('cards-tab');
    
    coinsTab.addEventListener('click', function() {
      coinsTab.classList.add('active');
      cardsTab.classList.remove('active');
    });
    
    cardsTab.addEventListener('click', function() {
      cardsTab.classList.add('active');
      coinsTab.classList.remove('active');
    });
    
    // Transaction History Items
    const transactionItems = document.getElementById('transaction-items');
    
    // Transaction data
    const transactions = [
      {
        merchant: "Figma",
        category: "Creative",
        amount: "-3.45$",
        cardNumber: "**** 4043"
      },
      {
        merchant: "Netflix",
        category: "Entertainment",
        amount: "-6.99$",
        cardNumber: "**** 4043"
      }
    ];
    
    // Create transaction items
    transactions.forEach(transaction => {
      const transactionItem = document.createElement('div');
      transactionItem.className = 'transaction-item';
      
      transactionItem.innerHTML = `
        <div class="merchant-info">
          <div class="merchant-details">
            <div class="merchant-name">${transaction.merchant}</div>
            <div class="merchant-category">${transaction.category}</div>
          </div>
        </div>
        <div class="transaction-details">
          <div class="transaction-amount">${transaction.amount}</div>
          <div class="transaction-card">${transaction.cardNumber}</div>
        </div>
      `;
      
      transactionItems.appendChild(transactionItem);
    });
    
    // Add empty transaction item
    const emptyItem = document.createElement('div');
    emptyItem.className = 'transaction-item empty';
    transactionItems.appendChild(emptyItem);
    
    // Add click event listeners for action buttons
    const actionButtons = document.querySelectorAll('.action-button button');
    actionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const action = this.getAttribute('aria-label');
        console.log(${action} button clicked);
        // Here you would implement actual functionality for each button
      });
    });
    
    // Add click event for add card button
    const addCardButton = document.querySelector('.add-card-button');
    addCardButton.addEventListener('click', function() {
      console.log('Add new card button clicked');
      // Implement add card functionality here
    });
    
    // Add click event for see all transactions button
    const seeAllButton = document.querySelector('.see-all-button');
    seeAllButton.addEventListener('click', function() {
      console.log('See all transactions button clicked');
      // Implement see all transactions functionality here
    });
  });