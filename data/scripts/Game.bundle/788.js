Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = function (e) {
  function FactionHuntertentBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionHuntertentBuildingVO, e);
  FactionHuntertentBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_FoodConsumption, "foodwastage", new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.foodReduction]), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return FactionHuntertentBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.FactionHuntertentBuildingVO = l;
a.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");