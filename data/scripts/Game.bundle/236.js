Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleCharacterYesNoOKDialogProperties(t, i, n = 0, o = null, a = null, s = true, r = null) {
    var l = this;
    l.showCancleButton = true;
    l.character = 0;
    CONSTRUCTOR_HACK;
    (l = e.call(this) || this).title = t;
    l.copy = i;
    l.functionYes = o;
    l.functionNo = a;
    l.showCancleButton = s;
    l.character = n;
    l.params = r;
    return l;
  }
  n.__extends(CastleCharacterYesNoOKDialogProperties, e);
  return CastleCharacterYesNoOKDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleCharacterYesNoOKDialogProperties = o;