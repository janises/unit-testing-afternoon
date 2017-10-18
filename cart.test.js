const cart = require('./cart');
const cars = require('./data/cars.js');

describe('Cart Properties:', ()=> {
    test('expects cart to be empty array', ()=> {
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    });
    test('should expect total to be 0', ()=> {
        expect(cart.total).toEqual(0);
    });
});

describe('Cart Methods:', ()=> {
    afterEach(()=> {
        cart.cart = [];
        cart.total = 0;
    })
    test('addToCart - expect cart length to increase by 1 on each call', ()=> {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);

    })

    test('addToCart - increase total property', ()=> {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        expect(cart.total).toEqual(cars[0].price + cars[1].price + cars[2].price)
    })

    test('removeFromCart should remove a car object from cart', ()=> {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        
        cart.removeFromCart(1, cars[1]);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[2]);
    });

    test ('removeFromCart should decrease total', ()=> {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(1, cars[1]);
        cart.removeFromCart(1, cars[0]);

        expect(cart.total).toEqual(cars[2].price);
    });

    test('checkout should empty cart array and set total to 0', ()=> {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);

        cart.checkout();

        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0);
    })
})