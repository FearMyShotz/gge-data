Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./1393.js");
var u = require("./5.js");
var d = require("./12.js");
var p = require("./25.js");
var h = require("./31.js");
var g = require("./19.js");
var C = createjs.Point;
var _ = require("./16.js");
var m = require("./5.js");
var f = require("./67.js");
var O = function (e) {
  function CastleTempServerCostConfirmationDialog() {
    return e.call(this, CastleTempServerCostConfirmationDialog.NAME) || this;
  }
  n.__extends(CastleTempServerCostConfirmationDialog, e);
  CastleTempServerCostConfirmationDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.cost_4.x = -212;
    if (this.dialogProps.preBuildCastle) {
      if (this.dialogProps.globalServerID == u.GlobalServerConst.TEMP_SERVER) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_tempServer_preBuiltCastle_buyConfirmationPremium_desc"));
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_chooseCastleConfirm_desc"));
      }
      this.textFieldManager.registerTextField(this.dialogDisp.cost_1.txt_copy1, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("costs")));
      var i = l.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(m.WorldClassic.KINGDOM_ID);
      var n = new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_COST_LIST, new C(30, 30));
      n.costTextfield.useOtherResourceStorage = i.getResourcesAsCollectableList();
      n.tooltip.useAmount = false;
      var o = this.dialogProps.preBuildCastle.costs;
      if (o.length <= 1) {
        p.CollectableRenderHelper.displaySingleItemComplete(this, new h.CollectableRenderClips(this.dialogDisp.cost_1.icon_ruby).addIconMc(this.dialogDisp.cost_1.icon_ruby).addTextfield(this.dialogDisp.cost_1.txt_cost), o.list[0], n);
        this.textFieldManager.registerTextField(this.dialogDisp.cost_1.txt_cost, new a.LocalizedTextVO("value_proportional_value", [o.list[0].amount, this.getAvailableCurrency(o.list[0])])).color = o.list[0].amount > this.getAvailableCurrency(o.list[0]) ? _.ClientConstColor.FONT_INSUFFICIENT_COLOR : _.ClientConstColor.FONT_DEFAULT_COLOR;
        this.dialogDisp.cost_1.visible = true;
        this.dialogDisp.cost_4.visible = false;
        this.dialogDisp.cost_1.mc_discount.visible = false;
      } else {
        p.CollectableRenderHelper.displayMultipleItemsComplete(this, new f.CollectableRenderClipsList().createByParentMc(this.dialogDisp.cost_4, "cost"), o, n);
        this.dialogDisp.cost_1.visible = false;
        this.dialogDisp.cost_4.visible = true;
      }
    }
  };
  CastleTempServerCostConfirmationDialog.prototype.getAvailableCurrency = function (e) {
    switch (e.itemType) {
      case d.CollectableEnum.C2:
        return l.CastleModel.currencyData.c2Amount;
      case d.CollectableEnum.GENERIC_CURRENCY:
        return l.CastleModel.currencyData.getCurrencyById(e.id).amount;
    }
    return 0;
  };
  CastleTempServerCostConfirmationDialog.NAME = "PreBuiltCastleCostConfirmation";
  return CastleTempServerCostConfirmationDialog;
}(c.CastleTempServerConfirmationDialog);
exports.CastleTempServerCostConfirmationDialog = O;
o.classImplementsInterfaces(O, "ICollectableRendererList");