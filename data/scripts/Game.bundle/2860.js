Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = function (e) {
  function HideoutBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HideoutBuildingVO, e);
  HideoutBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_SaveStorage, "saveStorage", new a.LocalizedNumberVO(this.hideout), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return HideoutBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.HideoutBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");