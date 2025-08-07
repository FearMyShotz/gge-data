Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./39.js");
var r = require("./542.js");
var l = require("./15.js");
var c = require("./11.js");
var u = require("./8.js");
var d = require("./20.js");
var p = require("./13.js");
var h = require("./27.js");
var g = require("./85.js");
var C = require("./66.js");
var _ = require("./4.js");
var m = function (e) {
  function CastleBuyTempProductionSlotDialog() {
    return e.call(this, CastleBuyTempProductionSlotDialog.NAME) || this;
  }
  n.__extends(CastleBuyTempProductionSlotDialog, e);
  CastleBuyTempProductionSlotDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    u.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel], d.ClickFeedbackButtonHover);
  };
  CastleBuyTempProductionSlotDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    u.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    var i = this.dialogProperties.slotVO.getUnlockCostC1();
    var n = [this.dialogProperties.slotVO.slotIndex];
    for (var r = this.dialogProperties.slotVO.previousSlot(); r && r.isLocked();) {
      n.unshift(r.slotIndex);
      r = r.previousSlot();
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_crafting_unlock_TempSlot_header")));
    if (this.dialogProperties.slotVO.isProductionSlot) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new o.LocalizedTextVO("dialog_crafting_unlock_tempProductionSlot_desc")).autoFitToBounds = true;
    } else if (n.length > 1) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new o.LocalizedTextVO("dialog_crafting_unlock_tempQueueSlotMultiple_desc")).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new o.LocalizedTextVO("dialog_crafting_unlock_tempQueueSlotNumber_desc", [n[0] + 1])).autoFitToBounds = true;
    }
    this.dialogDisp.mc_time.toolTipText = "rentduration";
    this.dialogDisp.mc_time.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new a.TextVO(h.CastleTimeStringHelper.getShortTimeString(this.dialogProperties.slotVO.getUnlockDuration())));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cost_title, new o.LocalizedTextVO("cost_simple"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new g.CastleLocalizedNumberVO(i));
    this.dialogDisp.icon_coin_gold.toolTipText = s.ClientConstTextIds.C1;
    this.dialogDisp.mc_discount.visible = false;
    C.CostHelper.setCostColor(this.dialogDisp.txt_amount, i > _.CastleModel.currencyData.c1Amount);
    u.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 1000);
  };
  CastleBuyTempProductionSlotDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    l.CastleBasicController.getInstance().dispatchEvent(new r.CraftingEvent(r.CraftingEvent.BRIEFLY_DISABLE_CRAFT_BUTTON));
  };
  CastleBuyTempProductionSlotDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          if (this.dialogProperties.confirmCallback != null) {
            this.dialogProperties.confirmCallback();
          }
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleBuyTempProductionSlotDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuyTempProductionSlotDialog.NAME = "CastleBuyTempProductionSlot";
  return CastleBuyTempProductionSlotDialog;
}(c.CastleExternalDialog);
exports.CastleBuyTempProductionSlotDialog = m;