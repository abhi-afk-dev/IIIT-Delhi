document.addEventListener('DOMContentLoaded', function () {
  // Initialize period selector
  const periodButtons = document.querySelectorAll('.period-button');

  periodButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove active class from all buttons
      periodButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      this.classList.add('active');
    });
  });

  // Transaction data

  // Render transaction items
  const transactionList = document.querySelector('.transaction-list');

  transactions.forEach(transaction => {
    const transactionItem = document.createElement('div');
    transactionItem.className = 'transaction-item';

    transactionItem.innerHTML = `
        
      `;

    transactionList.appendChild(transactionItem);
  });

  // "See all" button functionality
  const seeAllButton = document.querySelector('.see-all-button');

  seeAllButton.addEventListener('click', function () {
    alert('View all transactions');
  });
});
