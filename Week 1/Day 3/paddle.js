'use strict'

function Paddle (side, position){
  this.move=6;
  this.position=[3,100];
  this.side=side;
  if (side==='right') this.position[0]=position;
  this.size = [8,100];      //  [width, hight]
  this.movementUp=false;
  this.movementDown=false;
}

Paddle.prototype.render = function(context, position, size) {
  if (this.side==='left') context.fillStyle = "red";
  if (this.side==='right') context.fillStyle = "yellow";
  context.fillRect(position[0],position[1],size[0],size[1]);
}

Paddle.prototype.movement = function(){
  if (this.movementUp===true) this.moveUp();
  if (this.movementDown===true) this.moveDown();
}

Paddle.prototype.moveUp = function(){
  if (this.position[1]<=0) this.position[1]=0;
  else this.position[1] -= this.move;
}

Paddle.prototype.moveDown = function(){
  if (this.position[1]>=400) this.position[1] = 400;
  else this.position[1] += this.move;
}

Paddle.prototype.move = function(){
  if (this.movementUp===true){
    if (this.position[1]<=0) this.position[1]=0;
    else this.position[1] -= this.move;
  }
  if (this.movementDown===true){
    if (this.position[1]>=400) this.position[1] = 400;
    else this.position[1] += this.move;
  }
}

Paddle.prototype.movementCheck = function() {
  var that = this;
  document.addEventListener('keydown', function(event) {
    if(that.side==='left'){
      if (event.keyCode===87) that.movementUp=true;
      if (event.keyCode===83) that.movementDown=true;
    }
    if(that.side==='right'){
      if (event.keyCode===38) that.movementUp=true;
      if (event.keyCode===40) that.movementDown=true;
    }
  });
  document.addEventListener('keyup', function(event) {
    if (that.side==='left'){
      if (event.keyCode===87) that.movementUp=false;
      if (event.keyCode===83) that.movementDown=false;
    }
    if (that.side==='right') {
      if (event.keyCode===38) that.movementUp=false;
      if (event.keyCode===40) that.movementDown=false;
    }
  });
}
