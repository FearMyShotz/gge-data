Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleFactionChooseFactionBlueDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionChooseFactionBlueDialog.NAME) || this;
  }
  n.__extends(CastleFactionChooseFactionBlueDialog, e);
  CastleFactionChooseFactionBlueDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_joinFactionBlue_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_joinFactionBlue_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copyFat, new a.LocalizedTextVO("dialog_choose_faction_copy_blue2"));
  };
  CastleFactionChooseFactionBlueDialog.__initialize_static_members = function () {
    CastleFactionChooseFactionBlueDialog.NAME = "CastleFactionChooseFactionBlue";
  };
  return CastleFactionChooseFactionBlueDialog;
}(require("./1938.js").ACastleFactionChooseFactionDialog);
exports.CastleFactionChooseFactionBlueDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();