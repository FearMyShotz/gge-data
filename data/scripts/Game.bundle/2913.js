Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./456.js");
var a = function (e) {
  function StonecutterMovementVO() {
    var t = e.call(this) || this;
    t._name = "Stonecutter";
    return t;
  }
  n.__extends(StonecutterMovementVO, e);
  StonecutterMovementVO.prototype.getWaypoints = function () {
    return new o.IsoMovementWaypointClassesVO([c.QuarryBuildingVO, r.KeepBuildingVO, u.StonemasonBuildingVO, p.TavernBuildingVO, l.MarketBuildingVO, d.StorehouseBuildingVO, s.AHunterBuildingVO]);
  };
  return StonecutterMovementVO;
}(require("./538.js").AIsoMovementVO);
exports.StonecutterMovementVO = a;
var s = require("./412.js");
var r = require("./399.js");
var l = require("./537.js");
var c = require("./638.js");
var u = require("./1551.js");
var d = require("./793.js");
var p = require("./455.js");