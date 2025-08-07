Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./69.js");
var l = require("./32.js");
var c = require("./67.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./34.js");
var h = require("./244.js");
var g = createjs.Point;
var C = function (e) {
  function CastleAbstractInvasionMerchantSublayer(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(t.txt_detailedDescription, new a.LocalizedTextVO(i.getDescriptionText()));
    i.merchantComponent = new O.BuyEventPackagesComponent();
    i.merchantComponent.init(i.getMerchantScrollItem(), i.subLayerDisp.itemList, i.subLayerDisp);
    return i;
  }
  n.__extends(CastleAbstractInvasionMerchantSublayer, e);
  CastleAbstractInvasionMerchantSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.merchantComponent.show(this.bindFunction(this.getItemListVOs));
    this.controller.addEventListener(l.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    this.merchantComponent.update();
    this.updateCurrency();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.merchantComponent) {
      this.merchantComponent.hide();
    }
    this.controller.removeEventListener(l.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
  };
  CastleAbstractInvasionMerchantSublayer.prototype.updateCurrency = function () {
    var e = this.getCurrencies();
    var t = new m.CollectableList();
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t.addItem(_.CollectableHelper.createVO(o.type, d.CastleModel.currencyData.getAmountByType(o), o.id));
        }
      }
    }
    E.CollectableRenderHelper.displayMultipleItemsComplete(this, new c.CollectableRenderClipsList(this.subLayerDisp.mc_currency, "mc_item"), t, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_DEFAULT, this.getCurrencyIconSize()));
  };
  CastleAbstractInvasionMerchantSublayer.prototype.setPackagesData = function (e, t) {
    this.packageContainer = e;
    this.eventVO = t;
  };
  CastleAbstractInvasionMerchantSublayer.prototype.showHelp = function () {
    f.CastleDialogHandler.getInstance().showHelper("", s.Localize.text(this.getHelpText()));
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getItemListVOs = function () {
    var e;
    e = this.packageContainer ? this.packageContainer.getVisiblePackages(d.CastleModel.userData.userLevel, d.CastleModel.userData.userLegendLevel, d.CastleModel.areaData.activeAreaInfo.areaType) : [];
    var t = [];
    var i = this.getCurrencies();
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = a.getCostList();
          var r = false;
          if (i != null) {
            for (var l = 0, c = i; l < c.length; l++) {
              var u = c[l];
              if (u !== undefined) {
                for (var p = 0, g = s.list; p < g.length; p++) {
                  var C = g[p];
                  if (C !== undefined && u.hasType(C)) {
                    r = true;
                  }
                }
              }
            }
          }
          if (r) {
            var _ = new h.MerchantScrollItemVO();
            _.specialEventVO = this.eventVO;
            _.eventPackageVO = a;
            t.push(_);
          }
        }
      }
    }
    return t;
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getDescriptionText = function () {
    throw new r.AbstractMethodError();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getCurrencies = function () {
    throw new r.AbstractMethodError();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getCurrencyIconSize = function () {
    return new g();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getHelpText = function () {
    throw new r.AbstractMethodError();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.getMerchantScrollItem = function () {
    throw new r.AbstractMethodError();
  };
  CastleAbstractInvasionMerchantSublayer.prototype.onSpecialUserCurrencyUpdate = function (e = null) {
    this.merchantComponent.update();
    this.updateCurrency();
  };
  return CastleAbstractInvasionMerchantSublayer;
}(p.CastleDialogSubLayer);
exports.CastleAbstractInvasionMerchantSublayer = C;
var _ = require("./45.js");
var m = require("./48.js");
var f = require("./9.js");
var O = require("./1205.js");
var E = require("./25.js");
o.classImplementsInterfaces(C, "ICollectableRendererList", "ISublayer");