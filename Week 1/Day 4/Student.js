var names = ['Paul', 'Ringo', 'Dicky', 'Darkholer', 'Daddy', 'Hardon', 'Ronn', 'Deep', 'Barbie', 'Muffin', 'Hermione', 'Snickers', 'Jedi'];
var randomNumber = Math.random()*5*100;
var randomFreshman = Math.round(Math.random()*(names.length-1));
console.log(randomFreshman);4

function Student(name, major, random){
  this.name = name;
  this.major = major;
  this.lazyness = random;
}

Student.prototype.greet = function(){
  console.log('Wasaaaap broda??');
}

function Freshman(name, major, randomFreshman){
  Student.call(this,name, major)
  this.nickname = names[randomFreshman] + this.major +
}
