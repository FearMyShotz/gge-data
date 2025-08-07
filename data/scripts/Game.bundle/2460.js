Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ModernYesNoBiggerDialog() {
    return e.call(this, ModernYesNoBiggerDialog.NAME) || this;
  }
  n.__extends(ModernYesNoBiggerDialog, e);
  ModernYesNoBiggerDialog.NAME = "ModernYesNoBigger";
  return ModernYesNoBiggerDialog;
}(require("./282.js").ModernYesNoDialog);
exports.ModernYesNoBiggerDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");