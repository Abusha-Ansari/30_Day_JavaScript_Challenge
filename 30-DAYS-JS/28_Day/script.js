document.addEventListener("DOMContentLoaded", function() {
    let data = [];
    let container = document.getElementById("shop_items");
    let cart = document.getElementById("cart");
    let cartToggle = document.getElementById("cartToggle");
    let cartItemsContainer = document.getElementById("cart_items");

    let cartItems = {};

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            data = json; 
            
            data.forEach((item) => {
                let itemDiv = document.createElement("div");
                itemDiv.className = "item";
                itemDiv.innerHTML = `
                    <h3>${item.title}</h3>
                    <img src="${item.image}" alt="${item.description}">
                    <h3>$${item.price}</h3>
                    <p>${item.description}</p>
                    <button data-id="${item.id}">Add to Cart+</button>
                `;
                container.appendChild(itemDiv);
            });

          
            let addToCartButtons = document.querySelectorAll(".item button");
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    let id = this.getAttribute('data-id');
                    addItemToCart(id);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error)); 

    cartToggle.addEventListener('click', function() {
        cart.classList.toggle('active');
    });

  
    function addItemToCart(id) {
        if (cartItems[id]) {
            cartItems[id].quantity++;
        } else {
            let item = data.find(item => item.id == id);
            cartItems[id] = {
                ...item,
                quantity: 1
            };
        }
        updateCartDisplay();
    }

    
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = ''; 
        for (let id in cartItems) {
            let cartItem = cartItems[id];
            let cartItemDiv = document.createElement("div");
            cartItemDiv.className = "cart-item";
            cartItemDiv.innerHTML = `
                <img src="${cartItem.image}" alt="${cartItem.title}">
                <div class="cart-item-details">
                    <h4>${cartItem.title}</h4>
                    <p>$${cartItem.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <button data-id="${id}" class="decrease">-</button>
                    <span>${cartItem.quantity}</span>
                    <button data-id="${id}" class="increase">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        }

        
        let decreaseButtons = document.querySelectorAll('.decrease');
        let increaseButtons = document.querySelectorAll('.increase');

        decreaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                let id = this.getAttribute('data-id');
                if (cartItems[id].quantity > 1) {
                    cartItems[id].quantity--;
                } else {
                    delete cartItems[id];
                }
                updateCartDisplay();
            });
        });

        increaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                let id = this.getAttribute('data-id');
                cartItems[id].quantity++;
                updateCartDisplay();
            });
        });
    }
});
