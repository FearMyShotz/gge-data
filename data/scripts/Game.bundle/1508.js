Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./105.js");
var d = function (e) {
  function MercenarySurroundingsVO() {
    var t = e.call(this) || this;
    t._name = "Mercenary";
    t._width = 4;
    t._height = 4;
    t._posOrigin = u.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset.x = 11;
    t._posOffset.y = -29;
    t._minLevel = s.PlayerConst.MERCENARY_EVENT_MIN_LEVEL;
    return t;
  }
  n.__extends(MercenarySurroundingsVO, e);
  MercenarySurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    var e = l.int(c.CastleModel.mercenaryData.readyMissionsCount);
    if (c.CastleModel.mercenaryData.activeMission && c.CastleModel.mercenaryData.currentMissionState == p.CastleMercenaryData.MISSION_STATE_STARTED) {
      return r.Localize.text("countdown_restTime", [o.TimeStringHelper.getShortTimeStringBySeconds(c.CastleModel.mercenaryData.activeMission.remainingTime)]);
    } else if (e > 1) {
      return r.Localize.text("dialog_mission_ready_multi", [e]);
    } else if (e > 0) {
      return r.Localize.text("dialog_mission_ready_single");
    } else {
      return r.Localize.text("dialog_mission_ready_time", [o.TimeStringHelper.getShortTimeString(c.CastleModel.mercenaryData.remainingNextPackageTime)]);
    }
  };
  return MercenarySurroundingsVO;
}(require("./209.js").ASurroundingBuildingVO);
exports.MercenarySurroundingsVO = d;
var p = require("./775.js");
a.classImplementsInterfaces(d, "IRelativeGridBuildingVO");