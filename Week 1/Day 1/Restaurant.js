function Dish(dishName, price, ingredientArray){
  this.name=dishName;
  this.ingredient=ingredientArray;
  this.fixedCost=10;
  this.priceOfDish=price;
}

Dish.prototype.cost = function(){
  var totalCost=this.fixedCost;
  for (var i in this.ingredient){
    totalCost+=this.ingredient[i].price;
  }
  return totalCost;
}

Dish.prototype.profit = function(){
  var totalCost=this.fixedCost;
  for (var i in this.ingredient){
    totalCost+=this.ingredient[i].price;
  }
  return this.priceOfDish-totalCost;
}

function Restaurant(){
  this.ammountOfOrders=0;
  this.orders=[];
}

Restaurant.prototype.orderDish = function(object){
  this.ammountOfOrders++;
  // var newObject=object;
  object["orderNo"]=this.ammountOfOrders;
  this.orders.push(object)
  // this.orders.object[orderNo]=this.ammountOfOrders;
}

Restaurant.prototype.printOrders = function(){
  for (var i in this.orders){
    console.log("Order #"+this.orders[i].orderNo+": "+this.orders[i].name);
  }
}

Restaurant.prototype.printCheck = function (){
  for (var i in this.orders){
    console.log("Order #"+this.orders[i].orderNo+": "+this.orders[i].name+" - "+this.orders[i].priceOfDish);
  }
}

function Ingredient(nameOfIngredient, ingredientPrice){
  this.name=nameOfIngredient;
  this.price=ingredientPrice;
}

var pizza = new Dish('Pizza', 35, [cheese, pepperoni, dough]);
var salad = new Dish('Salad',22, [cheese,pepperoni]);
var cheese = new Ingredient('Cheese', 5);
var pepperoni = new Ingredient('Pepperoni', 6);
var dough = new Ingredient('Dough', 7);
var restaurant = new Restaurant();
restaurant.orderDish(pizza);
restaurant.orderDish(salad);
restaurant.printOrders();
restaurant.printCheck();
console.log(pizza.cost());
console.log(pizza.profit());
