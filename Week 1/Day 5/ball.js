function Ball (radious, positionArr) {
  this.radious = radious;
  this.position = positionArr;
  this.velocity = [4, 4];
  this.collisionPaddle=false;
  this.lifes = 5;
}

Ball.prototype.renderBall = function(context) {
  context.beginPath();
  context.fillStyle = '#fff';
  context.arc(this.position[0], this.position[1], this.radious, 0, 2 * Math.PI,false);
  context.fill();
}

Ball.prototype.bounceLateral = function() {
  this.velocity[0] = -this.velocity[0];
}

Ball.prototype.bounceVertical = function() {
  this.velocity[1] = -this.velocity[1];
}

Ball.prototype.moveBall = function(width, height, paddle, brick){
  this.penalty = false;
  this.position[0] += this.velocity[0];
  this.position[1] += this.velocity[1];
  if ((this.position[0]+this.radious>width)||(this.position[0]-this.radious<0)) this.bounceLateral();
  if (this.position[1]-this.radious<0) this.bounceVertical();
  if (this.position[1]+this.radious>height) {
    this.velocity[1] = -this.velocity[1];//this.position=[400, 300];
    this.penalty = true;
    this.lifes--;
  }
}
