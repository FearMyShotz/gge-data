Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./88.js");
exports.convertHexToRgba = function (e, t = 1) {
  var n = i.ColorTransform.colorNumToString(e);
  var a = i.ColorTransform.hexToRgb(n);
  return createjs.Graphics.getRGB(a.r, a.g, a.b, t);
};