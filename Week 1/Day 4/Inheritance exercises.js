function People(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.isAlive = true;
}

People.prototype.greet = function (){
  console.log('Hello this is ' + this.firstName + ' ' + this.lastName);
}

function Writer (firstName, lastName){
  People.call(this, firstName, lastName);
  this.pseudonym = this.firstName.split('').reverse().join('') + this.lastName.split('').reverse().join('')
}

Writer.prototype=Object.create(People.prototype);

function Developer (firstName, lastName, codename){
  People.call(this, firstName, lastName);
  this.codename = codename;
}

Developer.prototype=Object.create(People.prototype);

Developer.prototype.impress = function (){

}

function Singer (firstName, lastName, melody){
  People.call(this, firstName);
  this.artisticName = 'Fancy '+this.firstName;
  this.melody = melody;
}

Singer.prototype=Object.create(People.prototype);

Singer.prototype.sing = function(){
  for (var i=0; i<3; i++){
    console.log(this.melody+'\n');
  }
}

function JuniorDeveloper (firstName, lastName, codename){
  Developer.call(this, firstName, lastName, codename);
  this.isStruggling = true;
}

JuniorDeveloper.prototype=Object.create(People.prototype);

JuniorDeveloper.prototype.complain = function (){
  console.log(this.codename.toUpperCase());
}

var michal = new People('Michał', 'Żurczak', true);
var ania = new Writer('Ania', 'Nowak', true);
var manel = new JuniorDeveloper('Manel', 'Pavon', 'Ping Pong King');
var tina = new Singer('Tina', 'Turner', 'lala');
