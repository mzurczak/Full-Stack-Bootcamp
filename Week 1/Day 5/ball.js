function Ball (radious, positionArr) {
  this.radious = radious;
  this.position = positionArr;
  this.velocity = [5, 5]
  this.collisionPaddle=false;
}

Ball.prototype.renderBall = function(context) {
  context.beginPath();
  context.fillStyle = '#fff';
  context.arc(this.position[0], this.position[1], this.radious, 0, 2 * Math.PI,false);
  context.fill();
}

Ball.prototype.checkCollision = function(block){
  if (((this.position[0]+this.radious)>=block.position[0]&&
      (this.position[0]-this.radious)<=(block.position[0]+block.size[0]))&&
      ((this.position[1]+this.radious>=block.position[1])&&(this.position[1]-this.radious<=block.position[1]+block.size[1])))
  return true;
  return false;
}

Ball.prototype.checkCollisionWithPaddle = function (paddle){
  // if (this.checkCollision(paddle)){
    if ((this.position[0]+this.radious>=paddle.position[0])&&(this.position[0]-this.radious<=(paddle.position[0]+paddle.size[0]))&&(this.position[1]+this.radious>=paddle.position[1]))
    this.velocity[1] = -this.velocity[1];
  // }
}
//
Ball.prototype.checkCollisionWithBrick = function (bricksArray){
  var that = this;
  bricksArray.forEach(function(brick){
    if (that.checkCollision(brick)){
      //bottom
      if ((that.position[1]-that.radious>brick.position[1])&&(that.position[0]+that.radious>=brick.position[0])&&(that.position[0]-that.radious<=brick.position[0]+brick.size[0])) that.velocity[1] = -that.velocity[1];

      //top
      if ((that.position[1]+that.radious<brick.position[1]+brick.size[1])&&(that.position[0]+that.radious>=brick.position[0])&&(that.position[0]-that.radious<=brick.position[0]+brick.size[0])) that.velocity[1] = -that.velocity[1];

      //left
      if((that.position[0]+that.radious<brick.position[0]+brick.size[0])&&(that.position[1]+that.radious>=brick.position[1])&&(that.position[1]-that.radious<=brick.position[1]+brick.size[1])) that.velocity[0] = -that.velocity[0];

      //right
      if((that.position[0]-that.radious>brick.position[0])&&(that.position[1]+that.radious>=brick.position[1])&&(that.position[1]-that.radious<=brick.position[1]+brick.size[1])) that.velocity[0] = -that.velocity[0];
    }
  });
}

Ball.prototype.moveBall = function(width, height, paddle, brick){
  this.checkCollisionWithPaddle(paddle);
  this.position[0] += this.velocity[0];
  this.position[1] += this.velocity[1];
  if ((this.position[0]+this.radious>width)||(this.position[0]-this.radious<0)) this.velocity[0] = -this.velocity[0];
  if (this.position[1]-this.radious<0) this.velocity[1] = -this.velocity[1];
  if (this.position[1]+this.radious>height) this.velocity[1] = -this.velocity[1];//this.position=[400, 300];
  this.checkCollisionWithBrick(brick);
}
