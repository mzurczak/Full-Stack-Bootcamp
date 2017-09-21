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
  this.paddleRight.movementCheck();
  this.paddleLeft.movementCheck();
  setInterval(function(){
    that.resetCanvas();
    that.paddleLeft.movePaddle();
    that.paddleRight.movePaddle();
    that.ball.moveBall(that.width, that.height);
    that.ball.render(that.context);
    that.paddleLeft.render(that.context, that.paddleLeft.position, that.paddleLeft.size);
    that.paddleRight.render(that.context, that.paddleRight.position, that.paddleRight.size);
    // debugger;
  },16.7);
}

var game = new Game();
game.resetCanvas();
game.play();
