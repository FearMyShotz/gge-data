Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleRelocateDialogProperties(t, i) {
    var n = this;
    n.posX = 0;
    n.posY = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).posX = t;
    n.posY = i;
    return n;
  }
  n.__extends(CastleRelocateDialogProperties, e);
  return CastleRelocateDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleRelocateDialogProperties = o;