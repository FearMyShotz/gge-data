Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./32.js");
var s = require("./4.js");
var r = function (e) {
  function ADecorationForgeSelectionListItemCatalystVE(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ADecorationForgeSelectionListItemCatalystVE, e);
  ADecorationForgeSelectionListItemCatalystVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    l.CastleComponent.controller.addEventListener(a.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  ADecorationForgeSelectionListItemCatalystVE.prototype.removeEventListener = function () {
    l.CastleComponent.controller.removeEventListener(a.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    e.prototype.removeEventListener.call(this);
  };
  ADecorationForgeSelectionListItemCatalystVE.prototype.getCurrencyVO = function () {
    if (this.itemVO) {
      return this.itemVO.data;
    } else {
      return null;
    }
  };
  ADecorationForgeSelectionListItemCatalystVE.prototype.onCurrenciesUpdated = function (e) {
    var t = this.getCurrencyVO();
    if (t) {
      t.amount = s.CastleModel.currencyData.getAmountById(t.id);
    }
    this.update();
  };
  return ADecorationForgeSelectionListItemCatalystVE;
}(require("./1446.js").ADecorationForgeSelectionListItemVE);
exports.ADecorationForgeSelectionListItemCatalystVE = r;
var l = require("./14.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");