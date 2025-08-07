Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function AutoRecruitmentPurchaseToolsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, AutoRecruitmentPurchaseToolsDialog.NAME) || this;
  }
  n.__extends(AutoRecruitmentPurchaseToolsDialog, e);
  AutoRecruitmentPurchaseToolsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_info.txt_value, new a.LocalizedTextVO("dialog_purchaseLoop_tools_desc"));
    this.dialogDisp.mc_time.toolTipText = "dialog_purchaseLoop_time_tools";
  };
  AutoRecruitmentPurchaseToolsDialog.__initialize_static_members = function () {
    AutoRecruitmentPurchaseToolsDialog.NAME = "AutoRecruitmentPurchaseTools";
  };
  return AutoRecruitmentPurchaseToolsDialog;
}(require("./1936.js").AAutoRecruitmentPurchaseDialog);
exports.AutoRecruitmentPurchaseToolsDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();