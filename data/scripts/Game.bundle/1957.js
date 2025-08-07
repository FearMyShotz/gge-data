Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSpyLogDialogProperties(t, i) {
    var n = this;
    n.setRead = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).messageVO = t;
    n.setRead = i;
    return n;
  }
  n.__extends(CastleSpyLogDialogProperties, e);
  return CastleSpyLogDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSpyLogDialogProperties = o;