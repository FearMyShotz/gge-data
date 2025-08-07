Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SubscriptionEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(SubscriptionEvent, e);
  SubscriptionEvent.ON_SUBSCRIPTION_CHANGED = "onSubscriptionChanged";
  SubscriptionEvent.ON_SHOP_PACKAGES_RECEIVED = "onShopPackagesReceived";
  SubscriptionEvent.ON_AUTO_SELL_CONFIG_UPDATED = "onAutoSellConfigUpdated";
  return SubscriptionEvent;
}(createjs.Event);
exports.SubscriptionEvent = o;