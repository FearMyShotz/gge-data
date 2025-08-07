Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AllianceLanguageSelectionDialogProperties(t, i, n = false) {
    var o = e.call(this) || this;
    o.preselectedLanguage = t;
    o.onConfirmCallBack = i;
    o.includeAllLanguageSelection = n;
    return o;
  }
  n.__extends(AllianceLanguageSelectionDialogProperties, e);
  return AllianceLanguageSelectionDialogProperties;
}(require("./2.js").BasicProperties);
exports.AllianceLanguageSelectionDialogProperties = o;