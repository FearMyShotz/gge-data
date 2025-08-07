Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./4.js");
var l = require("./1788.js");
var c = require("./159.js");
var u = function (e) {
  function JoinAreaAndSavePositionCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(JoinAreaAndSavePositionCommand, e);
  JoinAreaAndSavePositionCommand.prototype.execute = function (e = null) {
    var t = e || e.worldmapObjectVO;
    if (!d.FlashBlockHelper.checkFlashBlock(t.spaceID)) {
      var i;
      h.TooltipManagerFacade.hideAllTooltips();
      var n;
      var o = 0;
      if (p.CastleLayoutManager.getInstance().worldmapScreen) {
        n = p.CastleLayoutManager.getInstance().worldmapScreen.renderer;
      }
      if (n) {
        i = n.camera.viewPortCenter;
        o = n.camera.viewPortZoom;
        r.CastleModel.worldmapCameraData.saveCameraPosition(i, o);
      } else {
        i = t.absAreaPos;
        r.CastleModel.worldmapCameraData.saveCameraPosition(i);
      }
      if (r.CastleModel.worldmapData) {
        r.CastleModel.worldmapData.allowGAARequests = false;
      }
      if (s.instanceOfClass(t, "CastleMapobjectVO")) {
        r.CastleModel.smartfoxClient.sendCommandVO(new c.C2SJoinCastleVO(t.objectId, t.kingdomID));
      } else {
        r.CastleModel.smartfoxClient.sendCommandVO(new l.C2SJoinAreaVO(t.absAreaPosX, t.absAreaPosY, t.kingdomID));
      }
    }
  };
  return JoinAreaAndSavePositionCommand;
}(o.SimpleCommand);
exports.JoinAreaAndSavePositionCommand = u;
var d = require("./160.js");
var p = require("./17.js");
var h = require("./200.js");
a.classImplementsInterfaces(u, "ISimpleCommand");