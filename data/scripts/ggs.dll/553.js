Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./88.js");
var s = require("./16.js");
var r = i.getLogger(s.CREATEJS_UTILITIES_LOGGER + ".BitmapData");
var o = createjs.BitmapData.prototype;
var l = createjs.BitmapData.prototype.constructor;
var u = createjs.BitmapData.getBitmapData;
createjs.BitmapData = function (e, t, n, i) {
  if (typeof i == "number") {
    i = a.ColorTransform.colorNumToString(i);
  }
  l.apply(this, [e, t, n, i]);
};
createjs.BitmapData.prototype = o;
createjs.BitmapData.getBitmapData = u;
createjs.BitmapData.prototype.lock = function () {
  r.debug("lock  not implemented yet");
};
createjs.BitmapData.prototype.unlock = function () {
  r.debug("unlock  not implemented yet");
};