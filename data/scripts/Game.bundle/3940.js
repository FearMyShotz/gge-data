Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./21.js");
var s = require("./26.js");
var r = require("./15.js");
var l = require("./4.js");
var c = require("./27.js");
var u = require("./876.js");
var d = function (e) {
  function StatusIconShoppingCart() {
    var t = e.call(this, "Btn_ShoppingCart", null, g.AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_SHOPPINGCART) || this;
    t.setTooltip("dialog_specialOfferBrand_title");
    return t;
  }
  n.__extends(StatusIconShoppingCart, e);
  StatusIconShoppingCart.prototype.addEventListenerForVisibility = function () {
    r.CastleBasicController.getInstance().addEventListener(u.CastleShoppingCartPrimeDayEvent.SOLD_OUT, this.bindFunction(this.onSoldOut));
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventUpdate));
    l.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  StatusIconShoppingCart.prototype.removeEventListenerForVisibility = function () {
    r.CastleBasicController.getInstance().removeEventListener(u.CastleShoppingCartPrimeDayEvent.SOLD_OUT, this.bindFunction(this.onSoldOut));
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventUpdate));
    l.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  StatusIconShoppingCart.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    l.CastleModel.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconShoppingCart.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    l.CastleModel.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconShoppingCart.prototype.onTimerUpdate = function (e = null) {
    if (this.icon && this.icon.txt_label) {
      var t = l.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
      this.itxt_label.textContentVO.stringValue = t ? c.CastleTimeStringHelper.getEventTimeString(t.remainingEventTimeInSeconds) : "-";
    }
  };
  StatusIconShoppingCart.prototype.onSoldOut = function (e) {
    this.hide();
  };
  StatusIconShoppingCart.prototype.onEventUpdate = function (e) {
    this.setVisibilityLoaded();
  };
  StatusIconShoppingCart.prototype.onClick = function () {
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleShoppingCartPrimeDayDialog);
  };
  StatusIconShoppingCart.prototype.setVisibilityLoaded = function () {
    if (l.CastleModel.specialEventData.isEventActive(o.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY)) {
      this.show();
    } else {
      this.hide();
    }
  };
  return StatusIconShoppingCart;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconShoppingCart = d;
var p = require("./9.js");
var h = require("./493.js");
var g = require("./175.js");