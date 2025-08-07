Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpperLeftCorner = function getUpperLeftCorner(e) {
  var t = e.getBounds();
  if (!t) {
    throw new Error("Could not calculate bounds for target objects " + e);
  }
  var n = e.localToGlobal(t.x, t.y);
  var i = 1;
  var a = 1;
  for (var s = e; s.parent;) {
    i *= s.scaleX || 1;
    a *= s.scaleY || 1;
    s = s.parent;
  }
  return {
    x: i === -1 ? n.x - t.width : n.x,
    y: a === -1 ? n.y - t.height : n.y
  };
};