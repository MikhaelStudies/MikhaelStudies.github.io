// Function to add a product to the cart
function addToCart(productName, price) {
    // Retrieve cart from localStorage or initialize an empty array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart array
    cart.push({ name: productName, price: price });

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Confirm addition to the user
    alert(`${productName} has been added to your cart.`);
}

// Function to update the cart display on the cart page
function updateCart() {
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = ''; // Clear any existing items

    let total = 0;

    // Loop through each item in the cart and add it to the cart display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Update the total price display
    totalPrice.textContent = `Total: $${total}`;
}

// Function to handle the checkout process
function checkout() {
    // Notify the user that this is a test site
    alert('Thank you for shopping with us! Note: This is a testing website, no real purchase has been made.');

    // Clear the cart from localStorage
    localStorage.removeItem('cart');

    // Redirect to a checkout page
    window.location.href = 'checkout.html';
}

// Ensure the cart is updated whenever the cart page loads
if (document.getElementById('cart-items')) {
    updateCart();
}
