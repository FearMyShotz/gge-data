Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./159.js");
var l = function (e) {
  function JoinCastleWithoutPositionSaveCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(JoinCastleWithoutPositionSaveCommand, e);
  JoinCastleWithoutPositionSaveCommand.prototype.execute = function (e = null) {
    var t = u.castAs(e, "IWorldmapObjectVO");
    if (t) {
      if (!c.FlashBlockHelper.checkFlashBlock(t.spaceID)) {
        s.CastleModel.worldmapCameraData.savedMapPosition = null;
        if (s.CastleModel.worldmapData) {
          s.CastleModel.worldmapData.allowGAARequests = false;
        }
        s.CastleModel.smartfoxClient.sendCommandVO(new r.C2SJoinCastleVO(t.objectId, t.kingdomID));
      }
    }
  };
  return JoinCastleWithoutPositionSaveCommand;
}(o.SimpleCommand);
exports.JoinCastleWithoutPositionSaveCommand = l;
a.classImplementsInterfaces(l, "ISimpleCommand");
var c = require("./160.js");
var u = require("./1.js");