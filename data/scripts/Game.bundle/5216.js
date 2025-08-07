Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./7.js");
var u = require("./4.js");
var d = require("./10.js");
var p = require("./660.js");
var h = require("./661.js");
var g = function (e) {
  function UPICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(UPICommand, e);
  Object.defineProperty(UPICommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_GET_PAYMENT_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UPICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case l.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i.PU == 0) {
          this.trackEvent("firstingamepurchase", i);
        } else {
          this.trackEvent("purchase", i);
        }
        u.CastleModel.userData.parse_UPI(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  UPICommand.prototype.trackEvent = function (e, t) {
    if (t.A && t.CC) {
      var i = t.A / 100;
      var n = {
        userid: a.EnvGlobalsHandler.globals.gameId + "-" + a.EnvGlobalsHandler.globals.networkId + "-" + o.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + o.BasicModel.userData.playerID,
        value: i,
        currency: t.CC
      };
      if (s.ExternalInterface.available) {
        s.ExternalInterface.call("ggsTrackEvent", e, n);
        var r = new h.GameSightPayloadVO(p.GamesightEventConstants.PURCHASE);
        r.additionalInfo = n;
        o.CommandController.instance.executeCommand(o.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, r);
      }
    }
  };
  return UPICommand;
}(d.CastleCommand);
exports.UPICommand = g;
r.classImplementsInterfaces(g, "IExecCommand");