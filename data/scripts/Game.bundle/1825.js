Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./32.js");
var a = require("./155.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./4.js");
var c = require("./14.js");
var u = require("./25.js");
var d = require("./362.js");
var p = createjs.Point;
var h = function (e) {
  function GachaComponentCurrency(t) {
    return e.call(this, t) || this;
  }
  n.__extends(GachaComponentCurrency, e);
  GachaComponentCurrency.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.updateCurrency();
  };
  GachaComponentCurrency.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.destroyCollectableRenderList();
  };
  GachaComponentCurrency.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleComponent.controller.addEventListener(o.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyUpdate));
  };
  GachaComponentCurrency.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    c.CastleComponent.controller.removeEventListener(o.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyUpdate));
  };
  GachaComponentCurrency.prototype.onCurrencyUpdate = function (e) {
    this.updateCurrency();
  };
  GachaComponentCurrency.prototype.updateCurrency = function () {
    var e = this.getEventVO().getCurrentGachaVO().costs.list[0];
    if (e instanceof a.CollectableItemGenericCurrencyVO) {
      var t = e.id;
      var i = new a.CollectableItemGenericCurrencyVO(t, l.CastleModel.currencyData.getAmountById(t));
      var n = new s.CollectableRenderClips(this.disp);
      var o = new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_DEFAULT, new p(20, 20));
      o.tooltip.useAmount = false;
      u.CollectableRenderHelper.displaySingleItemComplete(this, n, i, o);
    }
  };
  GachaComponentCurrency.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentCurrency;
}(d.AGachaComponent);
exports.GachaComponentCurrency = h;