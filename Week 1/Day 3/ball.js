function Ball (radious, positionArr) {
  this.radious = radious;
  this.position = positionArr;
  this.moveX=3;
  this.moveY=3;
}

Ball.prototype.render = function(context) {
  context.beginPath();
  context.fillStyle = '#fff';
  context.arc(this.position[0], this.position[1], 5, 0, 2 * Math.PI,false);
  context.fill();
}

Ball.prototype.moveBall = function(width, height){
  this.position[0] += this.moveX;
  if ((this.position[0]+this.radious>width)||(this.position[0]-this.radious<0)) this.moveX = -this.moveX;
  this.position[1] += this.moveY;
  if ((this.position[1]+this.radious>height)||(this.position[1]-this.radious<0)) this.moveY = -this.moveY;
}
