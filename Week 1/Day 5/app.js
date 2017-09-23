function Game (){
  this.canvas = document.getElementById("canvas");
  this.context = canvas.getContext('2d');
  this.width = this.context.canvas.clientWidth;
  this.height = this.context.canvas.clientHeight;
  this.paddle = new Paddle([this.width, this.height]);
  this.ball = new Ball(10, [this.width/2, this.height/2]);
  this.bricks = new Brick([50, 50], 0);
  this.bricksArray=[];
}

Game.prototype.renderField = function() {
  this.context.fillStyle = '#000';
  this.context.fillRect(0,0, this.width, this.height);
}

Game.prototype.renderFieldPenalty = function() {
  this.context.fillStyle = '#ff0000';
  this.context.fillRect(0,0, this.width, this.height);
}

Game.prototype.createWall = function(){
  for (var raw=1; raw<5; raw++){
    for (var column=1; column<11; column++){
      var position = [12+(this.bricks.size[0]+5)*column, this.bricks.position[1]+(this.bricks.size[1]+5)*raw];
      var color = Math.round(Math.random()*(this.bricks.colorArray.length-1));
      this.bricksArray.push(new Brick(position, color));
    }
  }
}

Game.prototype.drawBrick = function(){
  var that = this;
  this.bricksArray.forEach(function(brick){
    brick.renderBrick(that.context);
  });
}

Game.prototype.play = function (){
  var that = this;
  this.paddle.movementCheck();
  that.createWall();
  setInterval(function(){
    that.paddle.movePaddle(that.width);
    that.ball.moveBall(that.width, that.height, that.paddle, that.bricksArray);
    that.renderField();
    that.drawBrick(that.context);
    that.paddle.renderPaddle(that.context);
    that.ball.renderBall(that.context);
  }, 16.7);
}

var game = new Game ();
game.play();
