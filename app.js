// Fetch products from the backend and populate the page
const main = document.querySelector('main');

fetch('/api/products')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <span>$${product.price}</span>
        <button>Add to Cart</button>
      `;
      main.appendChild(productCard);
    });
  })
  .catch((error) => console.error(error));
