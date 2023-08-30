document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".item");
    var totalPriceElement = document.getElementById("total-price");
    var cart = {};

    items.forEach(item => {
        var plusBtn = item.querySelector(".plus-btn");
        var minusBtn = item.querySelector(".minus-btn");
        var quantitySpan = item.querySelector(".quantity");
        var itemName = item.querySelector("h3").textContent;
        var itemPrice = parseFloat(item.querySelector(".item-details p").textContent.split("$")[1]);
        var likeBtn = item.querySelector(".like-btn");

        plusBtn.addEventListener("click", () => {
            addToCart(itemName, itemPrice);
            quantitySpan.textContent = cart[itemName] ? cart[itemName].quantity : 0;
        });

        minusBtn.addEventListener("click", () => {
            removeFromCart(itemName, itemPrice);
            quantitySpan.textContent = cart[itemName] ? cart[itemName].quantity : 0;
        });

        likeBtn.addEventListener("click", () => {
            toggleLike(like-Btn);
        });
    });

    function updateTotalPrice() {
        var total = 0;
        for (var itemName in cart) {
            total += cart[itemName].quantity * cart[itemName].price;
        }
        totalPriceElement.textContent = total.toFixed(2);
    }

    function addToCart(itemName, itemPrice) {
        if (!cart[itemName]) {
            cart[itemName] = { quantity: 0, price: itemPrice };
        }
        cart[itemName].quantity++;
        updateTotalPrice();
    }

    function removeFromCart(itemName, itemPrice) {
        if (cart[itemName] && cart[itemName].quantity > 0) {
            cart[itemName].quantity--;
            updateTotalPrice();
        }
        if (cart[itemName].quantity === 0) {
            delete cart[itemName];
        }
    }

    function toggleLike(button) {
        button.classList.toggle("liked");
    }
});
