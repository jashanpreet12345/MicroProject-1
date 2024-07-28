document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('load-items');
    button.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/items');
        const items = await response.json();
        displayItems(items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    });
  });
  
  function displayItems(items) {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = items.map(item => `
      <div class="item">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
      </div>
    `).join('');
  }
  