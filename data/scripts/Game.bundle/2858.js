Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./16.js");
var u = require("./22.js");
var d = function (e) {
  function ForgeBuildingVO() {
    var t = this;
    t._toolProductionSpeedBoost = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ForgeBuildingVO, e);
  ForgeBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._toolProductionSpeedBoost = l.int(u.CastleXMLUtils.getIntAttribute("offensiveToolsSpeedBoost", t));
  };
  ForgeBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost, "toolbooster", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.toolProductionSpeedBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  ForgeBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost, "toolbooster", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.toolProductionSpeedBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(ForgeBuildingVO.prototype, "toolProductionSpeedBoost", {
    get: function () {
      return this._toolProductionSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  return ForgeBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.ForgeBuildingVO = d;
a.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO");