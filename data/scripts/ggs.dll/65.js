Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./79.js");
var s = require("./18.js");
var r = function (e) {
  function BasicStandardOkDialogProperties(t, n, i = null, a = "", s = null) {
    var r = e.call(this) || this;
    r.buttonLabel_ok = "Okay";
    r.title = "";
    r.copy = "";
    r.functionOk = i;
    r.functionCancel = s;
    if (a.length > 0) {
      r.buttonLabel_ok = a;
    } else {
      r.buttonLabel_ok = r.delegateText("generic_btn_okay");
    }
    r.title = t;
    r.copy = n;
    return r;
  }
  i.__extends(BasicStandardOkDialogProperties, e);
  BasicStandardOkDialogProperties.prototype.delegateText = function (e) {
    return s.Localize.text(e);
  };
  return BasicStandardOkDialogProperties;
}(a.BasicProperties);
exports.BasicStandardOkDialogProperties = r;