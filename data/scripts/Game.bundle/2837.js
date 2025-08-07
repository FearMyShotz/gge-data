Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./97.js");
var r = function (e) {
  function ConstructorBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ConstructorBuildingVO, e);
  ConstructorBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(s.CastleEffectEnum.DECOPOINTS), true);
  };
  return ConstructorBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.ConstructorBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");