var n = createjs.Rectangle;
createjs.Shape.prototype.updateBounds = function () {
  var e = this.getBounds();
  e ||= new n(0, 0, 0, 0);
  var t = this.graphics.bounds;
  this.setBounds(e.x, e.y, Math.max(e.width, t.width), Math.max(e.height, t.height));
};