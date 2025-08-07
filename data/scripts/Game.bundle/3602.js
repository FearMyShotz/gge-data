Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./521.js");
var c = require("./272.js");
var u = require("./4.js");
var d = function (e) {
  function CastleSeasonDonateRepairDialog() {
    return e.call(this, CastleSeasonDonateRepairDialog.NAME) || this;
  }
  n.__extends(CastleSeasonDonateRepairDialog, e);
  CastleSeasonDonateRepairDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle, this.dialogDisp.btn_close]);
    this._woodSelector = new h.CastleResourceCollectorComponent(this.dialogDisp.mc_selectWood);
    this._stoneSelector = new h.CastleResourceCollectorComponent(this.dialogDisp.mc_selectStone);
    var t = r.int(this.dialogProperties.tmapNodeVO.partpaypriceVO.costsList.getAmountOrDefaultByType(p.CollectableEnum.WOOD));
    var i = r.int(this.dialogProperties.tmapNodeVO.partpaypriceVO.costsList.getAmountOrDefaultByType(p.CollectableEnum.STONE));
    var n = r.int(this.dialogProperties.tmapNodeVO.payedGoods.getAmountOrDefaultByType(p.CollectableEnum.WOOD));
    var o = r.int(this.dialogProperties.tmapNodeVO.payedGoods.getAmountOrDefaultByType(p.CollectableEnum.STONE));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(this.dialogProperties.dialogTextPrefix + "_payNormal")).autoFitToBounds = true;
    var a = c.TMapHelper.isSeaQueenMap(this.dialogProperties.tmapNodeVO.mapID) ? "dialog_upgradeShip_payNormal_copy" : this.dialogProperties.dialogTextPrefix + "_payNormal_EventCamp";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO(a));
    this._woodSelector.initComponent(Math.min(t - n, u.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageWood), h.CastleResourceCollectorComponent.WOOD, 0);
    this._stoneSelector.initComponent(Math.min(i - o, u.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageStone), h.CastleResourceCollectorComponent.STONE, 0);
  };
  CastleSeasonDonateRepairDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_ok:
        u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SUnlockEventVO(-1, a.WorldClassic.KINGDOM_ID, this._woodSelector.selectionSlider.selectedIndex, this._stoneSelector.selectionSlider.selectedIndex, 0, 0, this.dialogProperties.tmapNodeVO.partpaypriceVO.id, 0));
        this.hide();
        break;
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleSeasonDonateRepairDialog.prototype.hideLoaded = function (t = null) {
    this._stoneSelector.resetValue();
    this._woodSelector.resetValue();
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleSeasonDonateRepairDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonDonateRepairDialog.NAME = "CastleSeasonDonateRepairEx";
  return CastleSeasonDonateRepairDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSeasonDonateRepairDialog = d;
var p = require("./12.js");
var h = require("./319.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");