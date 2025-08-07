Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./65.js");
var l = require("./22.js");
var c = function (e) {
  function AquamarineRelicBuildingVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._aquamarineHideout = 0;
    return t;
  }
  n.__extends(AquamarineRelicBuildingVO, e);
  AquamarineRelicBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._aquamarineHideout = l.CastleXMLUtils.getIntAttribute("aquamarineHideout", t);
  };
  AquamarineRelicBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AquamarineHideout, "saveStorage", new a.LocalizedNumberVO(this.aquamarineHideout), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_islandAlliancePoints, "aquamarin_points_alliance_tooltip", new a.LocalizedNumberVO(this.islandAlliancePoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(AquamarineRelicBuildingVO.prototype, "aquamarineHideout", {
    get: function () {
      return this._aquamarineHideout;
    },
    enumerable: true,
    configurable: true
  });
  return AquamarineRelicBuildingVO;
}(r.AEffectBuildingVO);
exports.AquamarineRelicBuildingVO = c;
o.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");