Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = function (e) {
  function MayaEmporiumBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MayaEmporiumBuildingVO, e);
  MayaEmporiumBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  MayaEmporiumBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return MayaEmporiumBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.MayaEmporiumBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");