Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./520.js");
var c = require("./217.js");
var u = require("./218.js");
var d = require("./4.js");
var p = function (e) {
  function CastleTreasureMapDonateDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTreasureMapDonateDialog.NAME) || this;
  }
  n.__extends(CastleTreasureMapDonateDialog, e);
  CastleTreasureMapDonateDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
    this._woodSelector = new g.CastleResourceCollectorComponent(this.dialogDisp.mc_selectWood);
    this._stoneSelector = new g.CastleResourceCollectorComponent(this.dialogDisp.mc_selectStone);
    this._coinSelector = new g.CastleResourceCollectorComponent(this.dialogDisp.mc_selectCoin);
  };
  CastleTreasureMapDonateDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(u.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListUpdate));
  };
  CastleTreasureMapDonateDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(u.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListUpdate));
  };
  CastleTreasureMapDonateDialog.prototype.applyPropertiesLoaded = function (e = null) {
    var t = this.dialogProperties.tMapNodeVO.isBridge ? "Bridge" : "Swamp";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_repair" + t + "_payNormal"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_repair" + t + "_payNormal_copy"));
    this.lockDialog();
    this.getCastleResourceData();
  };
  CastleTreasureMapDonateDialog.prototype.getCastleResourceData = function () {
    d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGetDetailedCastleListVO());
  };
  CastleTreasureMapDonateDialog.prototype.onDetailedCastleListUpdate = function (e) {
    var t = this.dialogProperties.tMapNodeVO.partpaypriceVO.costsList;
    if (this.dialogProperties.tMapNodeVO.isBridge) {
      var i = d.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(a.WorldClassic.KINGDOM_ID);
      this.dialogDisp.mc_selectWood.visible = true;
      this.dialogDisp.mc_selectStone.visible = true;
      this.dialogDisp.mc_selectCoin.visible = false;
      var n = r.int(t.getAmountOrDefaultByType(h.CollectableEnum.WOOD));
      var o = r.int(t.getAmountOrDefaultByType(h.CollectableEnum.STONE));
      var s = r.int(this.dialogProperties.tMapNodeVO.payedGoods.getAmountOrDefaultByType(h.CollectableEnum.WOOD));
      var l = r.int(this.dialogProperties.tMapNodeVO.payedGoods.getAmountOrDefaultByType(h.CollectableEnum.STONE));
      var c = r.int(i.getResource(h.CollectableEnum.WOOD));
      var u = r.int(i.getResource(h.CollectableEnum.STONE));
      this._woodSelector.initComponent(Math.min(n - s, c), g.CastleResourceCollectorComponent.WOOD, 0);
      this._stoneSelector.initComponent(Math.min(o - l, u), g.CastleResourceCollectorComponent.STONE, 0);
      this._coinSelector.initComponent(0, g.CastleResourceCollectorComponent.C1, 0);
    } else {
      this.dialogDisp.mc_selectWood.visible = false;
      this.dialogDisp.mc_selectStone.visible = false;
      this.dialogDisp.mc_selectCoin.visible = true;
      var p = r.int(t.getAmountOrDefaultByType(h.CollectableEnum.C1));
      var C = r.int(this.dialogProperties.tMapNodeVO.payedGoods.getAmountOrDefaultByType(h.CollectableEnum.C1));
      this._coinSelector.initComponent(Math.min(p - C, d.CastleModel.currencyData.c1Amount), g.CastleResourceCollectorComponent.C1, 0);
      this._woodSelector.initComponent(0, g.CastleResourceCollectorComponent.WOOD, 1);
      this._stoneSelector.initComponent(0, g.CastleResourceCollectorComponent.STONE, 2);
    }
    this.unLockDialog();
  };
  CastleTreasureMapDonateDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_ok:
        var t = r.int(d.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID);
        var i = d.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(t);
        d.CastleModel.smartfoxClient.sendCommandVO(new l.C2SUnlockEventVO(i.areaID, t, this._woodSelector.selectionSlider.selectedIndex, this._stoneSelector.selectionSlider.selectedIndex, 0, this._coinSelector.selectionSlider.selectedIndex, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 0));
        this.hide();
        break;
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleTreasureMapDonateDialog.prototype.hideLoaded = function (t = null) {
    this._stoneSelector.destroy();
    this._woodSelector.destroy();
    this._coinSelector.destroy();
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleTreasureMapDonateDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapDonateDialog.__initialize_static_members = function () {
    CastleTreasureMapDonateDialog.NAME = "CastleTreasureMapDonate";
  };
  return CastleTreasureMapDonateDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleTreasureMapDonateDialog = p;
var h = require("./12.js");
var g = require("./319.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();