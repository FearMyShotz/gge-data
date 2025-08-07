Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./97.js");
var u = require("./452.js");
var d = function (e) {
  function StonemasonBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StonemasonBuildingVO, e);
  Object.defineProperty(StonemasonBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AProductionBuildingVO.prototype, "isBoostableBuilding").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StonemasonBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Boost_Stone, "stonebooster", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this._resourceBoosts.getAmountOrDefaultByType(p.CollectableEnum.STONE)]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(c.CastleEffectEnum.DECOPOINTS));
    }
  };
  return StonemasonBuildingVO;
}(u.AProductionBuildingVO);
exports.StonemasonBuildingVO = d;
var p = require("./12.js");
a.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO");