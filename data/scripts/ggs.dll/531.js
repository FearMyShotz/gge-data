createjs.ColorFilter.prototype.applyFilter = function (e, t, n, i, a, s, r, o) {
  s = s || e;
  if (r == null) {
    r = t;
  }
  if (o == null) {
    o = n;
  }
  if (this.redMultiplier === 0 && this.blueMultiplier === 0 && this.greenMultiplier === 0 && this.alphaMultiplier === 1) {
    e.save();
    e.globalCompositeOperation = "xor";
    e.fillStyle = "rgb(" + this.redOffset + ", " + this.greenOffset + ", " + this.blueOffset + ")";
    e.fillRect(e._cacheOffsetX, e._cacheOffsetY, i, a);
    e.fillRect(e._cacheOffsetX, e._cacheOffsetY, i, a);
    e.restore();
    return true;
  }
  try {
    var l = e.getImageData(t, n, i, a);
    return !!this._applyFilter(l) && (s.putImageData(l, r, o), true);
  } catch (e) {
    return false;
  }
};