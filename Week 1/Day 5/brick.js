function Brick(positionArr, num){
  this.position=positionArr;
  this.size=[45, 15];
  this.numOfHits = 0 + num;
  this.colorArray=["DarkBlue", "DeepSkyBlue", "LightBlue"];
  this.color=this.colorArray[this.numOfHits];
  this.isHitted=false;
}

Brick.prototype.renderBrick = function(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position[0],this.position[1],this.size[0],this.size[1]);
}
