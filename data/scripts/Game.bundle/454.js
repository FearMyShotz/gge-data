Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = function (e) {
  function UnittentBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(UnittentBuildingVO, e);
  UnittentBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_UnitsNoshadow, "unitCapacity", new a.LocalizedNumberVO(this.unitCapacity), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Morality, "morality", new a.LocalizedNumberVO(this.morality), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return UnittentBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.UnittentBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");