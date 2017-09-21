'use strict'

function Game(){
  this.canvas = document.getElementById('canvas');
  this.context = canvas.getContext('2d');
  this.ball = new Ball(6, [6,6]);
  this.width = this.context.canvas.clientWidth;
  this.height= this.context.canvas.clientHeight;
  this.paddleLeft = new Paddle('left', this.width);
  this.paddleRight = new Paddle('right', this.width-11);
}

Game.prototype.resetCanvas = function (){
  this.context.fillStyle = '#000';
  this.context.fillRect(0,0, this.width, this.height);
}

Game.prototype.play = function (){
  var that = this;
  // document.addEventListener('keydown', function(event) {
  //   if (event.keyCode===87) that.paddleLeft.movementUp=true;
  //   if (event.keyCode===83) that.paddleLeft.movementDown=true;
  //   if (event.keyCode===38) that.paddleRight.movementUp=true;
  //   if (event.keyCode===40) that.paddleRight.movementDown=true;
  // });
  // document.addEventListener('keyup', function(event) {
  //   if (event.keyCode===87) that.paddleLeft.movementUp=false;
  //   if (event.keyCode===83) that.paddleLeft.movementDown=false;
  //   if (event.keyCode===38) that.paddleRight.movementUp=false;
  //   if (event.keyCode===40) that.paddleRight.movementDown=false;
  // });
  that.paddleRight.movementCheck();
  that.paddleLeft.movementCheck();

  setInterval(function(){
    that.resetCanvas();
    that.paddleLeft.movement();
    that.paddleRight.movement();
    // that.paddleLeft.move();
    // that.paddleRight.move();
    that.ball.move(that.width, that.height);
    that.ball.render(that.context);
    that.paddleLeft.render(that.context, that.paddleLeft.position, that.paddleLeft.size);
    that.paddleRight.render(that.context, that.paddleRight.position, that.paddleRight.size);
    // debugger;
  },16.7);
}

var game = new Game();
game.resetCanvas();
game.play();
