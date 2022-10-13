const saveCartItems = () => {
  const myCar = document.querySelector('.cart__items');
  return localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
