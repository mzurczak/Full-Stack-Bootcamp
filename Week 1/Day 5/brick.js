

function Brick(positionArr, num){
  this.position=positionArr;
  this.size=[60, 30];
  this.colorArray=["#00cc00", "#00ff00", "#006600", "yellow", "blue", "pink"];
  this.color=this.colorArray[num]
}

Brick.prototype.renderBrick = function(context) {
  context.fillStyle = this.color;
  context.fillRect(this.position[0],this.position[1],this.size[0],this.size[1]);
}
