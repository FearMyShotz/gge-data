Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = function (e) {
  function CargoBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CargoBuildingVO, e);
  CargoBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_islandAlliancePoints, "aquamarin_points_alliance_tooltip", new a.LocalizedNumberVO(this.islandAlliancePoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return CargoBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.CargoBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");