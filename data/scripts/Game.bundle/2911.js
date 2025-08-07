Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./456.js");
var a = function (e) {
  function SoldierRangedMovementVO() {
    var t = e.call(this) || this;
    t._name = "SoldierRanged";
    return t;
  }
  n.__extends(SoldierRangedMovementVO, e);
  SoldierRangedMovementVO.prototype.getWaypoints = function () {
    return new o.IsoMovementWaypointClassesVO([p.KeepBuildingVO, C.PalaceBuildingVO, c.EmporiumBuildingVO, f.TavernBuildingVO, E.WorkshopBuildingVO, l.DworkshopBuildingVO, g.MilitarycampBuildingVO, r.BarracksBuildingVO, O.UnittentBuildingVO, _.PUnittentBuildingVO, h.MaintentBuildingVO, u.FactionHuntertentBuildingVO, d.FactionMaintentBuildingVO, m.StrongholdBuildingVO, s.AMineBuildingVO]);
  };
  return SoldierRangedMovementVO;
}(require("./1554.js").ASoldierMovementVO);
exports.SoldierRangedMovementVO = a;
var s = require("./535.js");
var r = require("./782.js");
var l = require("./1015.js");
var c = require("./785.js");
var u = require("./786.js");
var d = require("./787.js");
var p = require("./399.js");
var h = require("./789.js");
var g = require("./1017.js");
var C = require("./790.js");
var _ = require("./642.js");
var m = require("./767.js");
var f = require("./455.js");
var O = require("./454.js");
var E = require("./1019.js");