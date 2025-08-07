Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./16.js");
var s = function () {
  function BlitMask(e, t = 0, n = 0, s = 100, r = 100, o = false, l = false, u = 0, c = false) {
    this.logger = i.getLogger(a.CREATEJS_UTILITIES_LOGGER);
    this.autoUpdate = false;
    this.bitmapMode = false;
    this.fillColor = 0;
    this.width = 0;
    this.height = 0;
    this.rotation = 0;
    this.scaleX = 0;
    this.scaleY = 0;
    this.scrollX = 0;
    this.smoothing = false;
    this.wrap = false;
    this.wrapOffsetX = 0;
    this.wrapOffsetY = 0;
    this.x = 0;
    this.y = 0;
    this.logger.debug("BlitMask not implemented yet");
  }
  BlitMask.prototype.disableBitmapMode = function (e = null) {
    this.logger.debug("BlitMask.disableBitmapMode not implemented yet");
  };
  BlitMask.prototype.dispose = function () {
    this.logger.debug("BlitMask.dispose not implemented yet");
  };
  BlitMask.prototype.enableBitmapMode = function (e = null) {
    this.logger.debug("BlitMask.enableBitmapMode not implemented yet");
  };
  BlitMask.prototype.normalizePosition = function () {
    this.logger.debug("BlitMask.normalizePosition not implemented yet");
  };
  BlitMask.prototype.update = function (e = null, t = false) {
    this.logger.debug("BlitMask.update not implemented yet");
  };
  return BlitMask;
}();
exports.BlitMask = s;