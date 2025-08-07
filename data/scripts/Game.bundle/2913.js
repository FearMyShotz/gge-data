Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./456.js");
var a = function (e) {
  function WoodcutterMovementVO() {
    var t = e.call(this) || this;
    t._name = "Woodcutter";
    return t;
  }
  n.__extends(WoodcutterMovementVO, e);
  WoodcutterMovementVO.prototype.getWaypoints = function () {
    return new o.IsoMovementWaypointClassesVO([p.WoodcutterBuildingVO, r.KeepBuildingVO, l.LumbermillBuildingVO, d.TavernBuildingVO, c.MarketBuildingVO, u.StorehouseBuildingVO, s.AHunterBuildingVO]);
  };
  return WoodcutterMovementVO;
}(require("./537.js").AIsoMovementVO);
exports.WoodcutterMovementVO = a;
var s = require("./412.js");
var r = require("./399.js");
var l = require("./1545.js");
var c = require("./536.js");
var u = require("./791.js");
var d = require("./455.js");
var p = require("./533.js");