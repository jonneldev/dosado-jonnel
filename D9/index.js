const cardContainer = document.getElementById('card-container')

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((produts) => {
    
    const cardsHTML = produts.map((product) => 
        `
        <div class="card">
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <span>$${product.price}</span>
          <p>${product.description}</p>
        </div>
      `
    ).join('')

    cardContainer.innerHTML = cardsHTML
    
  }).catch((error) => console.error('Error fetching data:', error))