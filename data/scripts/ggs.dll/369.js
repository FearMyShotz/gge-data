Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./79.js");
var s = require("./18.js");
var r = function (e) {
  function BasicMissingIDCheckDialogProperties(t, n, i = null, a = "", s = null) {
    var r = e.call(this) || this;
    r.buttonLabel_IDckeck = "ID-Check";
    r.title = "";
    r.copy = "";
    r.functionCheckID = i;
    r.functionCancel = s;
    if (a.length > 0) {
      r.buttonLabel_IDckeck = a;
    } else {
      r.buttonLabel_IDckeck = r.delegateText("generic_btn_korea_idcheck");
    }
    r.title = t;
    r.copy = n;
    return r;
  }
  i.__extends(BasicMissingIDCheckDialogProperties, e);
  BasicMissingIDCheckDialogProperties.prototype.delegateText = function (e) {
    return s.Localize.text(e);
  };
  return BasicMissingIDCheckDialogProperties;
}(a.BasicProperties);
exports.BasicMissingIDCheckDialogProperties = r;