Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleFactionChooseFactionRedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionChooseFactionRedDialog.NAME) || this;
  }
  n.__extends(CastleFactionChooseFactionRedDialog, e);
  CastleFactionChooseFactionRedDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_joinFactionRed_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_joinFactionRed_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copyFat, new a.LocalizedTextVO("dialog_choose_faction_copy_red2"));
  };
  CastleFactionChooseFactionRedDialog.__initialize_static_members = function () {
    CastleFactionChooseFactionRedDialog.NAME = "CastleFactionChooseFactionRed";
  };
  return CastleFactionChooseFactionRedDialog;
}(require("./1938.js").ACastleFactionChooseFactionDialog);
exports.CastleFactionChooseFactionRedDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();