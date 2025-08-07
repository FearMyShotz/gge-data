Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = require("./38.js");
var r = require("./9.js");
var o = require("./4.js");
var l = require("./121.js");
var u = require("./6.js");
var c = require("./56.js");
var _ = require("./2.js").getLogger("BasicJoinedRoomCommand");
var d = function (e) {
  function BasicJoinedRoomCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicJoinedRoomCommand, e);
  BasicJoinedRoomCommand.prototype.execute = function (e = null) {
    var t = e;
    if (t.params[0] === l.BasicSmartfoxClient.LOBBY_ROOM_NAME) {
      c.ClientFunnelTrackingController.getInstance().trackState(s.ClientFunnelGameStates.VERSION_CHECK_SEND);
      o.BasicModel.smartfoxClient.sendMessage(r.BasicSmartfoxConstants.C2S_VERSION_CHECK, [a.EnvGlobalsHandler.globals.buildNumberGame, "web-html5", "", a.EnvGlobalsHandler.globals.sessionId]);
    } else {
      _.error("Joined room name != " + l.BasicSmartfoxClient.LOBBY_ROOM_NAME + " : " + t.params[0]);
    }
  };
  return BasicJoinedRoomCommand;
}(u.SimpleCommand);
exports.BasicJoinedRoomCommand = d;