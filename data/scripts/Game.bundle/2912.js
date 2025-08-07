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
var s = require("./536.js");
var r = require("./784.js");
var l = require("./1016.js");
var c = require("./787.js");
var u = require("./788.js");
var d = require("./789.js");
var p = require("./399.js");
var h = require("./791.js");
var g = require("./1018.js");
var C = require("./792.js");
var _ = require("./643.js");
var m = require("./769.js");
var f = require("./455.js");
var O = require("./454.js");
var E = require("./1020.js");