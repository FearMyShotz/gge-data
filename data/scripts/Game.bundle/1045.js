Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./69.js");
var u = require("./21.js");
var d = require("./32.js");
var p = require("./4.js");
var h = require("./27.js");
var g = function (e) {
  function CastleSpecialCurrencyMerchantDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSpecialCurrencyMerchantDialog, e);
  Object.defineProperty(CastleSpecialCurrencyMerchantDialog.prototype, "descriptionText", {
    get: function () {
      throw new c.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialCurrencyMerchantDialog.prototype, "detailedDescriptionText", {
    get: function () {
      throw new c.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialCurrencyMerchantDialog.prototype, "userSpecialCurrencies", {
    get: function () {
      throw new c.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialCurrencyMerchantDialog.prototype, "isEvent", {
    get: function () {
      throw new c.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialCurrencyMerchantDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(this.descriptionText));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_detailedDescription, new r.LocalizedTextVO(this.detailedDescriptionText));
    this.specialCurrencyTextFields = [];
    for (var i = 0; i < this.userSpecialCurrencies.length; i++) {
      var n = this.userSpecialCurrencies[i];
      var a = i == 0 ? "" : String(i + 1);
      var c = C.CollectableHelper.createVO(n.type, 0, n.id);
      this.dialogDisp["mcSpecialCurrency" + a].toolTipText = c.getTooltipTextId();
      this.dialogDisp["mcSpecialCurrency" + a].mouseChildren = false;
      var u = this.textFieldManager.registerTextField(this.dialogDisp["mcSpecialCurrency" + a].tfAmount, new s.LocalizedNumberVO(_.CostHelper.getAvailableGoods(n)));
      this.specialCurrencyTextFields.push(u);
    }
    if (this.isEvent) {
      this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new l.TextVO(""));
      this.itxt_time.textAlign = o.GGSTextAlign.CENTER;
    }
  };
  CastleSpecialCurrencyMerchantDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onSpecialUserCurrencyUpdate();
    if (this.isEvent) {
      this.onUpdateEventTime(null);
    }
  };
  CastleSpecialCurrencyMerchantDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    if (this.isEvent) {
      p.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    }
    this.controller.addEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
  };
  CastleSpecialCurrencyMerchantDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    if (this.isEvent) {
      p.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    }
    this.controller.removeEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
  };
  CastleSpecialCurrencyMerchantDialog.prototype.onSpecialUserCurrencyUpdate = function (e = null) {
    this.setCurrencyDisplay();
  };
  CastleSpecialCurrencyMerchantDialog.prototype.setCurrencyDisplay = function () {
    for (var e = 0; e < this.specialCurrencyTextFields.length; e++) {
      this.specialCurrencyTextFields[e].textContentVO.numberValue = _.CostHelper.getAvailableGoods(this.userSpecialCurrencies[e]);
    }
  };
  CastleSpecialCurrencyMerchantDialog.prototype.onUpdateEventTime = function (e) {
    if (this.dialogProperties && this.dialogProperties.buyPackageEventVO && this.itxt_time.textContentVO) {
      h.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, this.dialogProperties.buyPackageEventVO.remainingEventTimeInSeconds);
      h.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.dialogProperties.buyPackageEventVO.remainingEventTimeInSeconds);
    }
  };
  CastleSpecialCurrencyMerchantDialog.prototype.sortPackagesByHighlightOrder = function (e) {};
  return CastleSpecialCurrencyMerchantDialog;
}(require("./256.js").CastleGenericMerchantDialog);
exports.CastleSpecialCurrencyMerchantDialog = g;
var C = require("./45.js");
var _ = require("./66.js");
a.classImplementsInterfaces(g, "ICollectableRendererList");