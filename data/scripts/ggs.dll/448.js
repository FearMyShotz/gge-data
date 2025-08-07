Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./419.js");
var s = require("./79.js");
var r = require("./18.js");
var o = function (e) {
  function BasicStandardYesNoDialogProperties(t, n, i = null, s = null, r = null, o = "", l = "") {
    var u = e.call(this) || this;
    u.buttonLabel_yes = "Yes";
    u.buttonLabel_no = "No";
    u.copy = "";
    u.title = "";
    u.functionClose = r;
    u.functionYes = i;
    u.functionNo = s;
    if (o.length > 0) {
      u.buttonLabel_yes = o;
    } else {
      u.buttonLabel_yes = u.delegateText(a.GenericTextIds.BUTTON_YES);
    }
    if (l.length > 0) {
      u.buttonLabel_no = l;
    } else {
      u.buttonLabel_no = u.delegateText(a.GenericTextIds.BUTTON_NO);
    }
    u.title = t;
    u.copy = n;
    return u;
  }
  i.__extends(BasicStandardYesNoDialogProperties, e);
  BasicStandardYesNoDialogProperties.prototype.delegateText = function (e) {
    return r.Localize.text(e);
  };
  return BasicStandardYesNoDialogProperties;
}(s.BasicProperties);
exports.BasicStandardYesNoDialogProperties = o;