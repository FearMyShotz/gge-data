Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./97.js");
var c = require("./452.js");
var u = function (e) {
  function BakeryBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BakeryBuildingVO, e);
  Object.defineProperty(BakeryBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AProductionBuildingVO.prototype, "isBoostableBuilding").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BakeryBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_FoodConsumption, "foodwastage", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.foodReduction]), this.getInfoItemTextColor(l.CastleEffectEnum.FOODREDUCTION), true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(l.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  return BakeryBuildingVO;
}(c.AProductionBuildingVO);
exports.BakeryBuildingVO = u;
a.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");