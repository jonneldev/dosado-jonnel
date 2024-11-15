let cart = [];

function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.className = "cart-item";
        
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
            <div>
                <button onclick="increaseQuantity('${item.name}')">+</button>
                <button onclick="decreaseQuantity('${item.name}')">-</button>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
        
        cartList.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    document.getElementById("total-price").innerText = total.toFixed(2);
}

function increaseQuantity(itemName) {
    const item = cart.find(item => item.name === itemName);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(itemName) {
    const item = cart.find(item => item.name === itemName);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(itemName);
        }
        updateCart();
    }
}

function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCart();
}
