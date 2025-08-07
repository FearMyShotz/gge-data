Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./16.js");
var u = require("./4.js");
var d = require("./570.js");
var p = require("./87.js");
var h = require("./105.js");
var g = require("./1552.js");
var C = function (e) {
  function RubyWishingWellFixedPositionBuildingVO() {
    var t = e.call(this) || this;
    t._posOrigin = h.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset.x = 21;
    t._posOffset.y = -19;
    t._hitPoints = 100;
    t._buildingState = p.IsoBuildingStateEnum.BUILD_COMPLETED;
    return t;
  }
  n.__extends(RubyWishingWellFixedPositionBuildingVO, e);
  RubyWishingWellFixedPositionBuildingVO.prototype.getUpgradeInfoString = function () {
    if (this.level < 1) {
      return this.name.toLowerCase() + "_build_info";
    } else {
      return e.prototype.getUpgradeInfoString.call(this);
    }
  };
  Object.defineProperty(RubyWishingWellFixedPositionBuildingVO.prototype, "wodDataType", {
    get: function () {
      return _.CastleWodData.TYPE_RUBY_WISHING_WELL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AFixedPositionBuildingVO.prototype, "wodDataType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RubyWishingWellFixedPositionBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._costs.removeByItem(this._costs.getItemByType(m.CollectableEnum.GENERIC_CURRENCY));
  };
  Object.defineProperty(RubyWishingWellFixedPositionBuildingVO.prototype, "builderMultiplier", {
    get: function () {
      return 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AFixedPositionBuildingVO.prototype, "builderMultiplier").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RubyWishingWellFixedPositionBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return u.CastleModel.rubyWishingWellData.isReadyToCollect();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AFixedPositionBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RubyWishingWellFixedPositionBuildingVO.prototype.createInfoPanelItems = function (e) {
    if (this.level >= 1) {
      var t = u.CastleModel.rubyWishingWellData.getNode(this.level);
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Time, "rubyWishingWell_waitingtime", new l.TextVO(o.TimeStringHelper.getTimeToString(t.waitingTime, o.TimeStringHelper.ONE_TIME_HOURS_FORMAT, s.Localize.text, false, true)), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_C2, "rubyWishingWell_totalamount", new r.LocalizedNumberVO(t.entryCosts * d.CastleRubyWishingWellData.MULTIPLIER), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return RubyWishingWellFixedPositionBuildingVO;
}(g.AFixedPositionBuildingVO);
exports.RubyWishingWellFixedPositionBuildingVO = C;
var _ = require("./56.js");
var m = require("./12.js");
a.classImplementsInterfaces(C, "IShopVO", "ICostVO", "IInventoryVO", "IRelativeGridBuildingVO");