Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function MouseCursor() {}
  MouseCursor.AUTO = "auto";
  MouseCursor.ARROW = "arrow";
  MouseCursor.HAND = "hand";
  MouseCursor.CLICK = "click";
  MouseCursor.DRAG = "drag";
  return MouseCursor;
}();
exports.MouseCursor = i;
(function (e) {
  e.AUTO = "auto";
  e.TEXT = "text";
  e.NONE = "none";
})(exports.CSSMouseCursor ||= {});