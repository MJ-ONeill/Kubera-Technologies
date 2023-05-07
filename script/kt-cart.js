var cart = []

function addToCart(item) {
    cart.push(item);
    console.log(item + " added to cart ");
}

function displayCart() {
    var cartContainer = document.getElementById("shopping-cart");
    var cartHTML = "<ul>";
    for (var i = 0; i < cart.length; i++) {
        cartHTML += "<li>" + cart[i] + "</li>";
    }
    cartHTML += "<ul>";
    cartContainer.innerHTML = cartHTML;
}

window.onload = function() {
    var addButton = document.getElementById("add-to-cart");
    addButton.addEventListener("click", function() {
      var item = document.getElementById("item-name").value;
      addToCart(item);
    });
  
    var cartButton = document.getElementById("cart-button");
    cartButton.addEventListener("click", function() {
      displayCart();
    });
  }
  