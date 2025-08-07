Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./159.js");
var c = function (e) {
  function JoinMyMainCastleCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(JoinMyMainCastleCommand, e);
  JoinMyMainCastleCommand.prototype.execute = function (e = null) {
    var t = s.int(r.CastleModel.userData.castleList.getHomeCastle().objectId);
    if (r.CastleModel.worldmapData) {
      r.CastleModel.worldmapData.allowGAARequests = false;
    }
    r.CastleModel.smartfoxClient.sendCommandVO(new l.C2SJoinCastleVO(t, 0));
  };
  return JoinMyMainCastleCommand;
}(o.SimpleCommand);
exports.JoinMyMainCastleCommand = c;
a.classImplementsInterfaces(c, "ISimpleCommand");