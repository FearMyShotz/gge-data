Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ModernYesNoBlueDialog(t = null) {
    return e.call(this, t || ModernYesNoBlueDialog.NAME) || this;
  }
  n.__extends(ModernYesNoBlueDialog, e);
  ModernYesNoBlueDialog.NAME = "ModernYesNoBlue";
  return ModernYesNoBlueDialog;
}(require("./283.js").ModernYesNoDialog);
exports.ModernYesNoBlueDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");