Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  return function SimplePopoverConfig(e, t = null, i = null) {
    this.fadeInDuration = 0.5;
    this.fadeOutDuration = 1;
    this.waitDuration = 4;
    this.useClickArea = true;
    this.closeOnClick = true;
    this.assetPos = new n(0, 0);
    this.assetClipName = e;
    this.assetFileName = t && t != "" ? t : e;
    if (i) {
      this.assetPos = i;
    }
  };
}();
exports.SimplePopoverConfig = o;