Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./521.js");
var c = require("./4.js");
var u = function (e) {
  function CastleSlumDonateUpdateDialog() {
    return e.call(this, CastleSlumDonateUpdateDialog.NAME) || this;
  }
  n.__extends(CastleSlumDonateUpdateDialog, e);
  CastleSlumDonateUpdateDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._castleInfos ||= new p.CastleCastleCrestComponent(this.dialogDisp.mc_castleInfos);
    this._woodSelector ||= new h.CastleResourceCollectorComponent(this.dialogDisp.mc_selectWood);
    this._stoneSelector ||= new h.CastleResourceCollectorComponent(this.dialogDisp.mc_selectStone);
    this._c1Selector ||= new h.CastleResourceCollectorComponent(this.dialogDisp.mc_selectC1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_village_unlock_payin_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_village_unlock_payin_copy"));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok]);
  };
  CastleSlumDonateUpdateDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = r.int(this.partpaypriceVO.costsList.getAmountOrDefaultByType(d.CollectableEnum.WOOD));
    var n = r.int(this.partpaypriceVO.costsList.getAmountOrDefaultByType(d.CollectableEnum.STONE));
    var a = r.int(this.partpaypriceVO.costsList.getAmountOrDefaultByType(d.CollectableEnum.C1));
    var l = r.int(this.payedGoods.getAmountOrDefaultByType(d.CollectableEnum.WOOD));
    var u = r.int(this.payedGoods.getAmountOrDefaultByType(d.CollectableEnum.STONE));
    var p = r.int(this.payedGoods.getAmountOrDefaultByType(d.CollectableEnum.C1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_villageLevelTitle, new s.LocalizedTextVO("dialog_village_level", [""]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_villageLevel, new s.LocalizedTextVO((this.kingdomVO.activeSlumLevel + 1).toString()));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_wood, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [l, i])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stone, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [u, n])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_c1, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [p, a])).autoFitToBounds = true;
    this._castleInfos.initComponent();
    this._c1Selector.initComponent(Math.min(c.CastleModel.currencyData.c1Amount, a - p), h.CastleResourceCollectorComponent.C1, 154);
    this._woodSelector.initComponent(Math.min(c.CastleModel.areaData.getActiveStorageItem(d.CollectableEnum.WOOD).amount, i - l), h.CastleResourceCollectorComponent.WOOD, 151);
    this._stoneSelector.initComponent(Math.min(c.CastleModel.areaData.getActiveStorageItem(d.CollectableEnum.STONE).amount, n - u), h.CastleResourceCollectorComponent.STONE, 152);
  };
  CastleSlumDonateUpdateDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        var t = c.CastleModel.areaData.activeAreaInfo;
        c.CastleModel.smartfoxClient.sendCommandVO(new l.C2SUnlockEventVO(t.objectId, t.kingdomID, this._woodSelector.getSelectedAmount(), this._stoneSelector.getSelectedAmount(), 0, this._c1Selector.getSelectedAmount(), this.partpaypriceVO.id, 0));
        this.hide();
    }
  };
  CastleSlumDonateUpdateDialog.prototype.hideLoaded = function (t = null) {
    this._c1Selector.resetValue();
    this._stoneSelector.resetValue();
    this._woodSelector.resetValue();
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleSlumDonateUpdateDialog.prototype, "payedGoods", {
    get: function () {
      return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).payedGoods;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateUpdateDialog.prototype, "partpaypriceVO", {
    get: function () {
      return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).partpaypriceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateUpdateDialog.prototype, "kingdomVO", {
    get: function () {
      return c.CastleModel.kingdomData.activeKingdomVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumDonateUpdateDialog.NAME = "CastleSlumDonateUpdate";
  return CastleSlumDonateUpdateDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSlumDonateUpdateDialog = u;
var d = require("./12.js");
var p = require("./741.js");
var h = require("./319.js");
a.classImplementsInterfaces(u, "ICollectableRendererList");