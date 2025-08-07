Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./45.js");
var s = require("./74.js");
var r = require("./66.js");
var l = require("./985.js");
var c = function (e) {
  function ModernPackageShopResourceTipDialogProperties(t = null, i = null) {
    var n = e.call(this) || this;
    n._relevantCurrencyTypes = [];
    n._eventPackageVO = t;
    n._currencyTypes = i;
    n._relevantCurrencyTypes = n.getRelevantCurrencyTypes();
    return n;
  }
  n.__extends(ModernPackageShopResourceTipDialogProperties, e);
  ModernPackageShopResourceTipDialogProperties.prototype.getRelevantCurrencyTypes = function () {
    var e = [];
    if (this.eventPackageVO) {
      for (var t = 0, i = this.eventPackageVO.getCostList().list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (!r.CostHelper.canAfford(a.CollectableHelper.createCostList([n]))) {
            e.push(new s.CollectableTypeVO().initByCollectable(n));
          }
        }
      }
    } else if (this.currencyTypes) {
      return this.currencyTypes;
    }
    return e;
  };
  ModernPackageShopResourceTipDialogProperties.prototype.isHandledByTipDialog = function () {
    if (this.relevantCurrencyTypes != null) {
      for (var e = 0, t = this.relevantCurrencyTypes; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && l.ModernPackageShopResourceTipEnum.getTypeByVO(i) != l.ModernPackageShopResourceTipEnum.NONE) {
          return true;
        }
      }
    }
    return false;
  };
  ModernPackageShopResourceTipDialogProperties.prototype.extractCurrencyIds = function () {
    var e = [];
    if (this.relevantCurrencyTypes != null) {
      for (var t = 0, i = this.relevantCurrencyTypes; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id >= 0) {
          e.push(n.id);
        }
      }
    }
    return e;
  };
  Object.defineProperty(ModernPackageShopResourceTipDialogProperties.prototype, "eventPackageVO", {
    get: function () {
      return this._eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopResourceTipDialogProperties.prototype, "currencyTypes", {
    get: function () {
      return this._currencyTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopResourceTipDialogProperties.prototype, "relevantCurrencyTypes", {
    get: function () {
      return this._relevantCurrencyTypes;
    },
    enumerable: true,
    configurable: true
  });
  return ModernPackageShopResourceTipDialogProperties;
}(o.BasicProperties);
exports.ModernPackageShopResourceTipDialogProperties = c;