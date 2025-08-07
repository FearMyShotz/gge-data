Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./621.js");
var u = require("./644.js");
var d = require("./4.js");
var p = require("./8.js");
var h = function (e) {
  function AutoRecruitmentBuyRecruitmentSlots() {
    CONSTRUCTOR_HACK;
    return e.call(this, AutoRecruitmentBuyRecruitmentSlots.NAME) || this;
  }
  n.__extends(AutoRecruitmentBuyRecruitmentSlots, e);
  AutoRecruitmentBuyRecruitmentSlots.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
  };
  AutoRecruitmentBuyRecruitmentSlots.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.dialogProperties) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO(this.dialogProperties.listId == a.UnitProductionConst.TOOLS_LIST ? "dialog_copyQueue_tools_slotsNeeded" : "dialog_copyQueue_units_slotsNeeded"));
      this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new l.TextVO(this.dialogProperties.unlockDurationStr));
      var i = this.dialogProperties.slotCount == 1 ? "dialog_copyQueue_slots_singular" : "dialog_copyQueue_slots";
      this.textFieldManager.registerTextField(this.dialogDisp.info_slots_amount.txt_value, new r.LocalizedTextVO(i, [this.dialogProperties.slotCount]));
      this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new r.LocalizedTextVO(""));
      this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new s.LocalizedNumberVO(this.dialogProperties.c2Costs));
      this.dialogDisp.info_costs.mc_discount.visible = d.CastleModel.boosterSaleData.hideDiscount();
    }
  };
  AutoRecruitmentBuyRecruitmentSlots.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.controller.dispatchEvent(new u.AutoRecruitmentEvent(u.AutoRecruitmentEvent.ON_PURCHASE_DENY));
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.buySlots();
          this.hide();
      }
    }
  };
  AutoRecruitmentBuyRecruitmentSlots.prototype.buySlots = function () {
    d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SUnlockPackageSlotVO(this.dialogProperties.listId));
  };
  AutoRecruitmentBuyRecruitmentSlots.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(AutoRecruitmentBuyRecruitmentSlots.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentBuyRecruitmentSlots.__initialize_static_members = function () {
    AutoRecruitmentBuyRecruitmentSlots.NAME = "AutoRecruitmentUnlockSlots";
  };
  return AutoRecruitmentBuyRecruitmentSlots;
}(require("./11.js").CastleExternalDialog);
exports.AutoRecruitmentBuyRecruitmentSlots = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();