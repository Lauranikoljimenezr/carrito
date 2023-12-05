document.addEventListener('DOMContentLoaded', function () {
  const containerCards = document.getElementById('products-container');
  let iconCart = document.querySelector('.icon-cart');
  let body = document.querySelector('body');
  let closeCart = document.querySelector('.close');
  let emptyCart = document.getElementById('empty-cart');
  let checkoutButton = document.getElementById('checkout');
  let cart = [];

  iconCart.addEventListener('click', () => {
      body.classList.toggle('showCart');
  });

  closeCart.addEventListener('click', () => {
      body.classList.remove('showCart'); // Use 'remove' instead of 'toggle' to ensure cart is closed
  });

  
});