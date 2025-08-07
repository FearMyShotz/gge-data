Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./6.js");
var s = require("./3.js");
var r = require("./5.js");
var o = require("./4.js");
var l = function (e) {
  function GGSTrackEventCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(GGSTrackEventCommand, e);
  GGSTrackEventCommand.prototype.execute = function (e) {
    if (e) {
      var t = {
        userid: r.EnvGlobalsHandler.globals.gameId + "-" + r.EnvGlobalsHandler.globals.networkId + "-" + o.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + o.BasicModel.userData.playerID
      };
      if (s.ExternalInterface.available) {
        s.ExternalInterface.call("ggsTrackEvent", e, t);
      }
    }
  };
  return GGSTrackEventCommand;
}(a.SimpleCommand);
exports.GGSTrackEventCommand = l;