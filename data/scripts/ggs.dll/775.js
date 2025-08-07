Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./2.js");
var s = require("./6.js");
var r = require("./3.js");
var o = require("./5.js");
var l = require("./29.js");
var u = a.getLogger(l.CORE_LOGGER);
var c = function (e) {
  function GamesightTrackEventCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(GamesightTrackEventCommand, e);
  GamesightTrackEventCommand.prototype.execute = function (e = null) {
    if (o.EnvGlobalsHandler.globals.urlVariables.nativeStore == l.BasicConstants.NATIVE_STORE_MICROSOFT && e && r.ExternalInterface.available) {
      var t = {
        userId: o.EnvGlobalsHandler.globals.gameId + "-" + o.EnvGlobalsHandler.globals.networkId + "-" + l.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + l.BasicModel.userData.playerID
      };
      var n = e;
      if (n) {
        n.userId = t.userId;
        if (n.additionalInfo) {
          n.additionalInfo.platform = "microsoft_store";
        } else {
          n.additionalInfo = {
            platform: "microsoft_store"
          };
        }
        r.ExternalInterface.call("gsghtTrackEvent", n.eventName, n);
        u.debug("Gamesight tracking: " + n.eventName + " " + JSON.stringify(n));
      }
    }
  };
  return GamesightTrackEventCommand;
}(s.SimpleCommand);
exports.GamesightTrackEventCommand = c;