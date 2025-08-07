Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./36.js");
var s = require("./4.js");
var r = require("./3.js");
var o = function (e) {
  function BasicReloadPageWithZoneIdCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicReloadPageWithZoneIdCommand, e);
  BasicReloadPageWithZoneIdCommand.prototype.execute = function (e = null) {
    var t = e;
    if (t) {
      s.BasicModel.networkCookie.instanceId = t.instanceId;
      s.BasicModel.networkCookie.zoneId = t.zoneId + "";
      if (r.ExternalInterface.available) {
        r.ExternalInterface.call("ggsReloadGameClient");
      } else {
        location.reload();
      }
    }
  };
  return BasicReloadPageWithZoneIdCommand;
}(a.BasicClientCommand);
exports.BasicReloadPageWithZoneIdCommand = o;