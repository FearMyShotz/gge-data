Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./520.js");
var r = require("./4.js");
var l = function (e) {
  function CastleSlumDonateDialog() {
    return e.call(this, CastleSlumDonateDialog.NAME) || this;
  }
  n.__extends(CastleSlumDonateDialog, e);
  Object.defineProperty(CastleSlumDonateDialog.prototype, "payedGoods", {
    get: function () {
      return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).payedGoods;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateDialog.prototype, "partpaypriceVO", {
    get: function () {
      return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).partpaypriceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateDialog.prototype, "kingdomVO", {
    get: function () {
      return r.CastleModel.kingdomData.activeKingdomVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumDonateDialog.prototype.initLoaded = function (t = null) {
    this._woodSelector ||= new d.CastleResourceCollectorComponent(this.dialogDisp.mc_selectWood);
    this._stoneSelector ||= new d.CastleResourceCollectorComponent(this.dialogDisp.mc_selectStone);
    this._c1Selector ||= new d.CastleResourceCollectorComponent(this.dialogDisp.mc_selectC1);
    this._castleInfos ||= new u.CastleCastleCrestComponent(this.dialogDisp.mc_sourceCastle);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_village_unlock_payin_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_village_unlock_payin_copy"));
    this.initBasicButtons([this.dialogDisp.btn_cancle, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleSlumDonateDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._castleInfos.initComponent();
    this._castleInfos.show();
    this._c1Selector.initComponent(Math.min(r.CastleModel.currencyData.c1Amount, this.getRemainingValueToPay(c.CollectableEnum.C1)), d.CastleResourceCollectorComponent.C1, 154);
    this._woodSelector.initComponent(Math.min(r.CastleModel.areaData.getActiveStorageItem(c.CollectableEnum.WOOD).amount, this.getRemainingValueToPay(c.CollectableEnum.WOOD)), d.CastleResourceCollectorComponent.WOOD, 151);
    this._stoneSelector.initComponent(Math.min(r.CastleModel.areaData.getActiveStorageItem(c.CollectableEnum.STONE).amount, this.getRemainingValueToPay(c.CollectableEnum.STONE)), d.CastleResourceCollectorComponent.STONE, 152);
  };
  CastleSlumDonateDialog.prototype.getRemainingValueToPay = function (e) {
    return this.partpaypriceVO.costsList.getAmountOrDefaultByType(e) - this.payedGoods.getAmountOrDefaultByType(e);
  };
  CastleSlumDonateDialog.prototype.hideLoaded = function (t = null) {
    this._castleInfos.hide();
    this._woodSelector.resetValue();
    this._stoneSelector.resetValue();
    this._c1Selector.resetValue();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleSlumDonateDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        var t = r.CastleModel.areaData.activeAreaInfo;
        r.CastleModel.smartfoxClient.sendCommandVO(new s.C2SUnlockEventVO(t.objectId, t.kingdomID, this._woodSelector.getSelectedAmount(), this._stoneSelector.getSelectedAmount(), 0, this._c1Selector.getSelectedAmount(), this.partpaypriceVO.id, 0));
        this.hide();
    }
  };
  CastleSlumDonateDialog.NAME = "CastleSlumDonate";
  return CastleSlumDonateDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSlumDonateDialog = l;
var c = require("./12.js");
var u = require("./739.js");
var d = require("./319.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");