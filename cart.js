const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(car) {
    this.cart.push(car);
    this.total += car.price;
  },

  removeFromCart: function(index, car) {
    this.cart.splice(index, 1);
    this.total -= car.price;
  },
  
  checkout: function() {
    this.cart.splice(0);
    this.total = 0;
  }
};