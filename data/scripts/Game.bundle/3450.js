Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleColossusEventFinishedDialogProperties(t, i, n, o) {
    var a = this;
    a.rank = 0;
    a.decoPoints = 0;
    a.points = 0;
    a.wodID = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).points = t;
    a.rank = i;
    a.decoPoints = n;
    a.wodID = o;
    return a;
  }
  n.__extends(CastleColossusEventFinishedDialogProperties, e);
  return CastleColossusEventFinishedDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleColossusEventFinishedDialogProperties = o;