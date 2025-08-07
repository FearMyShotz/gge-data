Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./39.js");
var g = require("./4.js");
var C = function (e) {
  function CastleBuySlotAndUnitDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBuySlotAndUnitDialog.NAME) || this;
  }
  n.__extends(CastleBuySlotAndUnitDialog, e);
  CastleBuySlotAndUnitDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initBasicButtons([this.dialogDisp.btn_cancle, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new c.LocalizedNumberVO(this.buySlotDialogProperties.cost));
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new u.LocalizedTextVO("costs"));
    var t = "dialog_buyslotTool_copy";
    if (s.instanceOfClass(this.buySlotDialogProperties.buyItemVO, "SoldierUnitVO")) {
      t = "dialog_buyslotUnit_copy";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new u.LocalizedTextVO(t));
    this.dialogDisp.info_bonus.visible = false;
    var i = p.int(r.UnitProductionConst.UNLOCK_DURATION);
    var n = o.TimeStringHelper.getTimeToString(i, o.TimeStringHelper.TWO_TIME_FORMAT, l.Localize.text);
    this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new d.TextVO(n));
    this.dialogDisp.info_time.toolTipText = "rentduration";
    this.dialogDisp.info_costs.toolTipText = h.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mc_discount.visible = g.CastleModel.boosterSaleData.hideDiscount();
  };
  CastleBuySlotAndUnitDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.hide();
        if (this.buySlotDialogProperties.functionOk != null) {
          this.buySlotDialogProperties.functionOk(this.buySlotDialogProperties.buyItemVO, this.buySlotDialogProperties.listId, this.buySlotDialogProperties.amount);
        }
        break;
      case this.dialogDisp.btn_help:
        _.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_recuit_slot"));
    }
  };
  Object.defineProperty(CastleBuySlotAndUnitDialog.prototype, "buySlotDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuySlotAndUnitDialog.__initialize_static_members = function () {
    CastleBuySlotAndUnitDialog.NAME = "CastleCostInfoEx";
  };
  return CastleBuySlotAndUnitDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleBuySlotAndUnitDialog = C;
var _ = require("./9.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();