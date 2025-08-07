Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = function (e) {
  function CastleLargeYesNoDialogProperties(t, i, n = null, o = null, a = null, r = "", l = "", c = true) {
    var u = this;
    u.buttonLabel_yes = "Yes";
    u.buttonLabel_no = "No";
    u.copy = "";
    u.title = "";
    u.hasNoButton = false;
    CONSTRUCTOR_HACK;
    (u = e.call(this) || this).functionClose = a;
    u.functionYes = n;
    u.functionNo = o;
    if (r.length > 0) {
      u.buttonLabel_yes = r;
    } else {
      u.buttonLabel_yes = u.delegateText(s.GenericTextIds.BUTTON_YES);
    }
    if (l.length > 0) {
      u.buttonLabel_no = l;
    } else {
      u.buttonLabel_no = u.delegateText(s.GenericTextIds.BUTTON_NO);
    }
    u.title = t;
    u.copy = i;
    u.hasNoButton = c;
    return u;
  }
  n.__extends(CastleLargeYesNoDialogProperties, e);
  CastleLargeYesNoDialogProperties.prototype.delegateText = function (e) {
    return o.BasicModel.languageData.getTextById(e);
  };
  return CastleLargeYesNoDialogProperties;
}(a.BasicProperties);
exports.CastleLargeYesNoDialogProperties = r;