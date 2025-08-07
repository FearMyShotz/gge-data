Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./95.js");
var s = require("./52.js");
var r = require("./4.js");
var o = require("./17.js");
var l = require("./15.js");
var u = require("./5.js");
var c = function (e) {
  function BasicPaymentShopClickTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicPaymentShopClickTrackingCommand, e);
  BasicPaymentShopClickTrackingCommand.prototype.execute = function (e = null) {
    if (this.commandIsAllowed) {
      var t = e;
      var n = o.TrackingCache.getInstance().getEvent(l.TrackingEventIds.GAME_PAYMENT_SHOP_CLICK);
      n.sessionId = t.sessionId.toString();
      n.date = (t.sessionId / 1000).toFixed();
      n.clickSourceId = t.clickSourceId;
      n.playerId = r.BasicModel.userData.playerID;
      n.deviceId = a.DeviceId.DESKTOP;
      n.storeId = u.EnvGlobalsHandler.globals.storeId;
      o.TrackingCache.getInstance().sendEvent(l.TrackingEventIds.GAME_PAYMENT_SHOP_CLICK);
    }
  };
  return BasicPaymentShopClickTrackingCommand;
}(s.BasicTrackingCommand);
exports.BasicPaymentShopClickTrackingCommand = c;