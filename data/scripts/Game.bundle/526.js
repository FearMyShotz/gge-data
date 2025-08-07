Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSpyDialogProperties(t, i = 0, n = false, o = false) {
    var a = this;
    a.tabOpenAtStart = 0;
    a.fromTryAgainButton = false;
    a.wasEcoSpy = false;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).worldmapObjectVO = t;
    a.tabOpenAtStart = i;
    a.fromTryAgainButton = n;
    a.wasEcoSpy = o;
    return a;
  }
  n.__extends(CastleSpyDialogProperties, e);
  return CastleSpyDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSpyDialogProperties = o;