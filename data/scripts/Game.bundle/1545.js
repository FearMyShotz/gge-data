Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./452.js");
var c = function (e) {
  function LumbermillBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LumbermillBuildingVO, e);
  Object.defineProperty(LumbermillBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AProductionBuildingVO.prototype, "isBoostableBuilding").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LumbermillBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Boost_Wood, "woodbooster", new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this._resourceBoosts.getAmountOrDefaultByType(u.CollectableEnum.WOOD)]), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return LumbermillBuildingVO;
}(l.AProductionBuildingVO);
exports.LumbermillBuildingVO = c;
var u = require("./12.js");
a.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");