Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = function (e) {
  function CastleJoinedRoomCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleJoinedRoomCommand, e);
  CastleJoinedRoomCommand.prototype.execute = function (t = null) {
    if (t.params[0] == a.BasicSmartfoxClient.LOBBY_ROOM_NAME) {
      r.ClientFunnelTrackingController.getInstance().trackState(s.ClientFunnelGameStates.VERSION_CHECK_SEND);
    }
    e.prototype.execute.call(this, t);
  };
  return CastleJoinedRoomCommand;
}(o.BasicJoinedRoomCommand);
exports.CastleJoinedRoomCommand = c;
l.classImplementsInterfaces(c, "ISimpleCommand");