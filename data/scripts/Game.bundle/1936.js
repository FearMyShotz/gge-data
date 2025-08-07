Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleRelocateRuinDialogProperties(t, i, n, o = false) {
    var a = this;
    a.posX = 0;
    a.posY = 0;
    a.remainingTime = 0;
    a.showButton = false;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).posX = t;
    a.posY = i;
    a.showButton = o;
    a.remainingTime = n;
    return a;
  }
  n.__extends(CastleRelocateRuinDialogProperties, e);
  return CastleRelocateRuinDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleRelocateRuinDialogProperties = o;