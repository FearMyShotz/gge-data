Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = function (e) {
  function CastleStandardPayYesNoDialogProperties(t, i = null, n = null, o = null, a = "") {
    var s = [];
    for (var r = 5; r < arguments.length; r++) {
      s[r - 5] = arguments[r];
    }
    var l = this;
    l.copy = "";
    l.title = "";
    CONSTRUCTOR_HACK;
    (l = e.call(this) || this).functionClose = o;
    l.functionYes = i;
    l.functionNo = n;
    l.copy = t;
    l.args = s;
    l.characterName = a;
    return l;
  }
  n.__extends(CastleStandardPayYesNoDialogProperties, e);
  CastleStandardPayYesNoDialogProperties.prototype.delegateText = function (e) {
    return a.Localize.text(e);
  };
  return CastleStandardPayYesNoDialogProperties;
}(o.BasicProperties);
exports.CastleStandardPayYesNoDialogProperties = s;