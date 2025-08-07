Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./105.js");
var c = require("./1552.js");
var u = createjs.Point;
var d = function (e) {
  function HarborFixedPositionBuildingVO() {
    var t = e.call(this) || this;
    t._posOrigin = l.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset = new u(35, 10);
    return t;
  }
  n.__extends(HarborFixedPositionBuildingVO, e);
  HarborFixedPositionBuildingVO.prototype.createInfoPanelItems = function (e) {
    if (this.level >= 2) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Harbor, "effect", new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.shownTravelBoost]), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return HarborFixedPositionBuildingVO;
}(c.AFixedPositionBuildingVO);
exports.HarborFixedPositionBuildingVO = d;
a.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO", "IRelativeGridBuildingVO");