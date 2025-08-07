Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = createjs.Bitmap;
var s = createjs.Shape;
var r = function (e) {
  function CastleWorldmapBitmap(t = null, i = "auto", n = false) {
    var o = this;
    o.sectorX = 0;
    o.sectorY = 0;
    CONSTRUCTOR_HACK;
    o = e.call(this, t, i, n) || this;
    var a = new s();
    a.graphics.beginFill("#ff0000").drawRect(0, 0, o.width, o.height);
    o.hitArea = a;
    return o;
  }
  n.__extends(CastleWorldmapBitmap, e);
  return CastleWorldmapBitmap;
}(a);
exports.CastleWorldmapBitmap = r;
o.classImplementsInterfaces(r, "Bitmap");