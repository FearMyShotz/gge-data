Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./224.js");
exports.getGraphicsInstructions = function getGraphicsInstructions(e) {
  if (e instanceof createjs.Shape) {
    return e.graphics._instructions.filter(function (e) {
      return function isDrawingInstruction(e) {
        return Object.keys(e).length > 0 && e.x !== undefined && e.y !== undefined;
      }(e);
    });
  } else {
    return function getRoundRectInstructions(e) {
      var t = i.getDisplayObjectBounds(e);
      var n = isNaN(e.useAsMaskCornerRadius) ? 7 : e.useAsMaskCornerRadius;
      var a = e.parent ? e.parent.scaleX * e.width : e.width;
      var s = e.parent ? e.parent.scaleY * e.height : e.height;
      return [new createjs.Graphics.RoundRect(t.x + e.x, t.y + e.y, a, s, n, n, n, n)];
    }(e);
  }
};