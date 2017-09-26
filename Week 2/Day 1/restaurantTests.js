var test = require('tape');
// var restaurant = require('../../Week 1/Day 1/Restaurant.js');
var tapSpec = require('tap-spec');

var Dish = require('../../Week 1/Day 1/Restaurant.js').Dish;
var Restaurant = require('../../Week 1/Day 1/Restaurant.js').Restaurant;
var Ingredient = require('../../Week 1/Day 1/Restaurant.js').Ingredient;
test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);


var restaurant = new Restaurant();
var cheese = new Ingredient('Cheese', 5);
var pizza = new Dish('Pizza', 35, {cheese});
//
test('General test of Restaurant App', function(t){
  t.test('Ingredient constructor', function(t){
    t.deepEqual(new Ingredient("Cheese",5),{name:"Cheese", price:5});
    t.end();
  });

  t.test('Restaurant tests', function(t){
    t.test('Restaurant constructor', function (t){
      t.deepEqual(new Restaurant(),{ammountOfOrders: 0, orders: {}});
      t.end();
    });

    t.test('Restaurant orderDish', function (t){
      t.deepEqual(restaurant.orderDish(pizza),{ammountOfOrders: 0, orders: {1:{name: 'Pizza', ingredient: [cheese], fixedCost: 10, priceOfDish: 35}}});
      t.end();
    });

    t.test('Restaurant printOrders', function (t){
      t.equal(restaurant.printOrders(),'Order #1: Pizza');
      t.end();
    });
  });

  t.test('Dish tests', function(t){
    t.test('Dish constructor', function (t){
      t.deepEqual(new Dish('Pizza', 35,[cheese]),{name: 'Pizza', ingredient: [cheese], fixedCost: 10, priceOfDish: 35});
      t.end();
    });

    t.test('Cost method', function(t){
      t.equal(pizza.cost(), 15);
      t.end();
    });

    t.test('Profit method', function(t){
      t.equal(pizza.profit(), 20);
      t.end();
    });
  });
})
