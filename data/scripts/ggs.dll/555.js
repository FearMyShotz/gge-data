createjs.Filter.prototype.equals = function (e) {
  return e instanceof createjs.Filter && e.constructor.name === this.constructor.name;
};
createjs.BlurFilter.prototype.equals = function (e) {
  return e instanceof createjs.BlurFilter && this.blurX === e.blurX && this.blurY === e.blurY && this.quality === e.quality;
};
createjs.ColorFilter.prototype.equals = function (e) {
  return e instanceof createjs.ColorFilter && this.alphaMultiplier === e.alphaMultiplier && this.alphaOffset === e.alphaOffset && this.blueMultiplier === e.blueMultiplier && this.blueOffset === e.blueOffset && this.greenMultiplier === e.greenMultiplier && this.greenOffset === e.greenOffset && this.redMultiplier === e.redMultiplier && this.redOffset === e.redOffset;
};
createjs.ColorMatrixFilter.prototype.equals = function (e) {
  if (!(e instanceof createjs.ColorMatrixFilter)) {
    return false;
  }
  if (this.matrix instanceof createjs.ColorMatrix || e.matrix instanceof createjs.ColorMatrix) {
    return false;
  }
  for (var t = 0; t < this.matrix.length; t++) {
    if (this.matrix[t] !== e.matrix[t]) {
      return false;
    }
  }
  return true;
};
createjs.AlphaMapFilter.prototype.equals = function (e) {
  return false;
};
createjs.AlphaMaskFilter.prototype.equals = function (e) {
  return false;
};
createjs.DropShadowFilter.prototype.equals = function (e) {
  return e instanceof createjs.DropShadowFilter && this.angle === e.angle && this.blurX === e.blurX && this.blurY === e.blurY && this.color === e.color && this.quality === e.quality && this.distance === e.distance;
};
createjs.GlowFilter.prototype.equals = function (e) {
  return e instanceof createjs.GlowFilter && this.strength === e.strength && this.blurX === e.blurX && this.blurY === e.blurY && this.color === e.color && this.quality === e.quality;
};
Object.defineProperty(createjs.Filter.prototype, "isScaled", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});