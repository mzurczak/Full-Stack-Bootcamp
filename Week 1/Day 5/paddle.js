function Paddle (fieldSize){
  this.size = [100,8];      //  [width, hight]
  this.position=[fieldSize[0]/2-this.size[0]/2,fieldSize[1]-this.size[1]-5];
  this.movementUp=false;
  this.movementDown=false;
  this.speed=10;
}

Paddle.prototype.renderPaddle = function(context) {
  context.fillStyle = "yellow";
  context.fillRect(this.position[0],this.position[1],this.size[0],this.size[1]);
}

Paddle.prototype.movePaddle = function(width){
  if (this.movementLeft===true){
    if (this.position[0]<=0) this.position[0]=0;
    else this.position[0] -= this.speed;
  }
  if (this.movementRight===true){
    if (this.position[0]>=width-this.size[0]) this.position[0] = width-this.size[0];
    else this.position[0] += this.speed;
  }
}

Paddle.prototype.movementCheck = function() {
  var that = this;
  document.addEventListener('keydown', function(event) {
    if (event.keyCode===37) that.movementLeft=true;
    if (event.keyCode===39) that.movementRight=true;
    });
  document.addEventListener('keyup', function(event) {
    if (event.keyCode===37) that.movementLeft=false;
    if (event.keyCode===39) that.movementRight=false;
  });
}
