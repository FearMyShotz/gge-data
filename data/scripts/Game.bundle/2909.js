Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./456.js");
var a = function (e) {
  function FarmerMovementVO() {
    var t = e.call(this) || this;
    t._name = "Farmer";
    return t;
  }
  n.__extends(FarmerMovementVO, e);
  FarmerMovementVO.prototype.getWaypoints = function () {
    return new o.IsoMovementWaypointClassesVO([l.FarmBuildingVO, c.KeepBuildingVO, r.BakeryBuildingVO, d.MillBuildingVO, g.TavernBuildingVO, u.MarketBuildingVO, h.StorehouseBuildingVO, p.StableBuildingVO, s.AHunterBuildingVO]);
  };
  return FarmerMovementVO;
}(require("./537.js").AIsoMovementVO);
exports.FarmerMovementVO = a;
var s = require("./412.js");
var r = require("./1013.js");
var l = require("./634.js");
var c = require("./399.js");
var u = require("./536.js");
var d = require("./1546.js");
var p = require("./788.js");
var h = require("./791.js");
var g = require("./455.js");