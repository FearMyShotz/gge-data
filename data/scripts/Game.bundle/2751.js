Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./32.js");
var r = require("./4.js");
var l = require("./52.js");
var c = require("./1485.js");
var u = function (e) {
  function CastlePrivateUnitDealerEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateUnitDealerEventDialog.ASSET_NAME_0) || this;
  }
  n.__extends(CastlePrivateUnitDealerEventDialog, e);
  CastlePrivateUnitDealerEventDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(s.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChange));
  };
  CastlePrivateUnitDealerEventDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(s.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChange));
  };
  Object.defineProperty(CastlePrivateUnitDealerEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return h.CastlePrivateUnitDealerEventScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleUnitDealerEventDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateUnitDealerEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.itxt_currency = this.textFieldManager.registerTextField(this.dialogDisp.mc_currency.txt_amount, new a.LocalizedNumberVO(CastlePrivateUnitDealerEventDialog.currencyAmount));
    var i = p.CollectableHelper.createVO(d.CollectableEnum.GENERIC_CURRENCY, 0, l.ClientConstCurrency.ID_SILVER_RUNE);
    this.dialogDisp.mc_currency.toolTipText = i.getTooltipTextId();
    this.dialogDisp.mc_currency.mouseChildren = false;
  };
  CastlePrivateUnitDealerEventDialog.prototype.onCurrencyChange = function (e) {
    this.itxt_currency.textContentVO.numberValue = CastlePrivateUnitDealerEventDialog.currencyAmount;
  };
  Object.defineProperty(CastlePrivateUnitDealerEventDialog, "currencyAmount", {
    get: function () {
      return r.CastleModel.currencyData.getAmountById(l.ClientConstCurrency.ID_SILVER_RUNE);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateUnitDealerEventDialog.prototype.sortPackagesByHighlightOrder = function (e) {};
  CastlePrivateUnitDealerEventDialog.__initialize_static_members = function () {
    CastlePrivateUnitDealerEventDialog.NAME = "CastlePrivateUnitDealer";
    CastlePrivateUnitDealerEventDialog.ASSET_NAME_0 = "CastlePrivateUnitDealer";
  };
  return CastlePrivateUnitDealerEventDialog;
}(c.CastleUnitDealerEventDialog);
exports.CastlePrivateUnitDealerEventDialog = u;
var d = require("./12.js");
var p = require("./45.js");
var h = require("./2752.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");