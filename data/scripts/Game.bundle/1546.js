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
  function MillBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MillBuildingVO, e);
  Object.defineProperty(MillBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AProductionBuildingVO.prototype, "isBoostableBuilding").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MillBuildingVO.prototype.createInfoPanelItems = function (e) {
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Boost_Food, "foodbooster", new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.resourceBoosts.getAmountOrDefaultByType(u.CollectableEnum.FOOD)]), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return MillBuildingVO;
}(l.AProductionBuildingVO);
exports.MillBuildingVO = c;
var u = require("./12.js");
a.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");