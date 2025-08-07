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
var u = require("./10.js");
var d = require("./660.js");
var p = require("./659.js");
var h = function (e) {
  function UPTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(UPTCommand, e);
  Object.defineProperty(UPTCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_GET_UNSENT_PRICE_TRACKING;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UPTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case l.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        this.trackEvent("purchase", i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  UPTCommand.prototype.trackEvent = function (e, t) {
    var i = t.PD;
    if (i && i != null) {
      for (var n = 0, r = i; n < r.length; n++) {
        var l = r[n];
        if (l !== undefined) {
          var c = l[0] / 100;
          var u = l[1];
          var h = {
            userid: a.EnvGlobalsHandler.globals.gameId + "-" + a.EnvGlobalsHandler.globals.networkId + "-" + o.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + o.BasicModel.userData.playerID,
            value: c,
            currency: u
          };
          if (s.ExternalInterface.available) {
            s.ExternalInterface.call("ggsTrackEvent", e, h);
            var g = new d.GameSightPayloadVO(p.GamesightEventConstants.PURCHASE);
            g.additionalInfo = h;
            o.CommandController.instance.executeCommand(o.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, g);
          }
        }
      }
    }
  };
  return UPTCommand;
}(u.CastleCommand);
exports.UPTCommand = h;
r.classImplementsInterfaces(h, "IExecCommand");