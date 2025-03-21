// Expense data
const expenseCategories = [
    { category: "Food", amount: "$256,89", color: "rgba(112,0,255,1)" },
    { category: "Travelling", amount: "$120,56", color: "rgba(0,255,194,1)" },
    { category: "Premiums", amount: "$120,56", color: "rgba(255,119,61,1)" },
    { category: "Health", amount: "$120,56", color: "rgba(0,133,255,1)" },
    { category: "pets", amount: "$25,67", color: "rgba(196,0,255,1)" },
  ];
  
  // DOM Elements
  const searchInput = document.getElementById('search-input');
  const expenseList = document.getElementById('expense-list');
  
  // Initialize the app
  function initApp() {
    // Render expense items
    renderExpenseItems(expenseCategories);
    
    // Add event listeners
    searchInput.addEventListener('input', handleSearch);
    
    // Render pie chart
    renderPieChart();
  }
  
  // Render expense items
  function renderExpenseItems(expenses) {
    // Clear the expense list
    expenseList.innerHTML = '';
    
    // Create and append expense items
    expenses.forEach((expense) => {
      const expenseItem = createExpenseItem(expense);
      expenseList.appendChild(expenseItem);
    });
  }
  
  // Create an expense item element
  function createExpenseItem(expense) {
    const item = document.createElement('div');
    item.className = 'expense-item';
    item.setAttribute('data-category', expense.category.toLowerCase());
    
    const categoryContainer = document.createElement('div');
    categoryContainer.className = 'category';
    
    const colorDot = document.createElement('div');
    colorDot.className = 'color-dot';
    colorDot.style.backgroundColor = expense.color;
    
    const categoryName = document.createElement('div');
    categoryName.textContent = expense.category;
    
    const amount = document.createElement('div');
    amount.className = 'expense-amount';
    amount.textContent = expense.amount;
    
    categoryContainer.appendChild(colorDot);
    categoryContainer.appendChild(categoryName);
    
    item.appendChild(categoryContainer);
    item.appendChild(amount);
    
    return item;
  }
  
  // Handle search input
  function handleSearch(event) {
    const searchValue = event.target.value.toLowerCase();
    
    if (searchValue === '') {
      // If search is empty, show all expenses
      renderExpenseItems(expenseCategories);
    } else {
      // Filter expenses that match the search query
      const filteredExpenses = expenseCategories.filter((expense) => {
        return expense.category.toLowerCase().includes(searchValue);
      });
      
      renderExpenseItems(filteredExpenses);
    }
  }
  
  // Month selector toggle
  const monthToggle = document.querySelector('.month-toggle');
  monthToggle.addEventListener('click', () => {
    // This would typically open a month picker
    // For this demo, we'll just log to console
    console.log('Month selector clicked');
  });
  
  // Render the pie chart
  function renderPieChart() {
    const canvas = document.getElementById('expense-chart');
    const ctx = canvas.getContext('2d');
    
    // Get total expenses for calculating percentages
    const totalExpenses = expenseCategories.reduce((total, expense) => {
      // Extract numeric value from amount string, removing $ and replacing comma with dot
      const value = parseFloat(expense.amount.replace('$', '').replace(',', '.'));
      return total + value;
    }, 0);
    
    // Set canvas dimensions for proper rendering
    canvas.width = 200;
    canvas.height = 200;
    
    // Define the center and radius of the pie chart
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    
    // Starting angle
    let startAngle = 0;
    
    // Draw each slice of the pie
    expenseCategories.forEach(expense => {
      // Calculate the expense amount as a number
      const expenseValue = parseFloat(expense.amount.replace('$', '').replace(',', '.'));
      
      // Calculate the angle for this slice
      const sliceAngle = (expenseValue / totalExpenses) * 2 * Math.PI;
      
      // Draw the slice
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      
      // Fill with the category color
      ctx.fillStyle = expense.color;
      ctx.fill();
      
      // Update the starting angle for the next slice
      startAngle += sliceAngle;
    });
    
    // Draw a white circle in the middle for a donut chart effect
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    
    // Add a subtle white border
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Create a legend below the chart
    createChartLegend();
  }
  
  // Create a legend for the pie chart
  function createChartLegend() {
    const container = document.querySelector('.pie-chart-container');
    
    // If a legend already exists, remove it
    const existingLegend = container.querySelector('.chart-legend');
    if (existingLegend) {
      container.removeChild(existingLegend);
    }
    
    // Create legend container
    const legend = document.createElement('div');
    legend.className = 'chart-legend';
    
    // Add legend items
    expenseCategories.forEach(expense => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      
      const colorSquare = document.createElement('div');
      colorSquare.className = 'legend-color';
      colorSquare.style.backgroundColor = expense.color;
      
      const label = document.createElement('span');
      label.textContent = expense.category;
      
      item.appendChild(colorSquare);
      item.appendChild(label);
      legend.appendChild(item);
    });
    
    // Add legend to container
    container.appendChild(legend);
  }
  
  // Initialize the app when the DOM is loaded
  document.addEventListener('DOMContentLoaded', initApp);
  document.getElementById("goBackButton").addEventListener("click", function() {
    window.history.back(); // This navigates back to the previous page in the browser's history
});