Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = function (e) {
  function CastleCancelCraftingDialog() {
    return e.call(this, CastleCancelCraftingDialog.NAME) || this;
  }
  n.__extends(CastleCancelCraftingDialog, e);
  CastleCancelCraftingDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.btn_close]);
  };
  CastleCancelCraftingDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.slotVO.isProductionSlot ? "dialog_crafting_cancel_productionSlot_desc" : "dialog_crafting_cancel_queueSlot_desc";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_crafting_cancel_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO(i));
    s.ButtonHelper.delayEnableButton(this.dialogDisp.btn_yes, true, 1000);
  };
  CastleCancelCraftingDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (s.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.confirmAction();
          this.hide();
      }
    }
  };
  CastleCancelCraftingDialog.prototype.confirmAction = function () {
    this.dialogProperties.slotVO.cancel();
  };
  Object.defineProperty(CastleCancelCraftingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleCancelCraftingDialog.NAME = "CancelRecruitment";
  return CastleCancelCraftingDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleCancelCraftingDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");