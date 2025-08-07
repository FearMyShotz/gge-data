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
  function GloryMemorialBuildingVO() {
    var t = this;
    t._kingdomFameBoost = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(GloryMemorialBuildingVO, e);
  GloryMemorialBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._kingdomFameBoost = l.int(u.CastleXMLUtils.getIntAttribute("kingdomFameBoost", t, 0));
  };
  GloryMemorialBuildingVO.prototype.getVisualClassName = function () {
    return "GloryMemorial_Building_Level1";
  };
  GloryMemorialBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GloryBooster, "gloryMemorial_info_glory", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.kingdomFameBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  GloryMemorialBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GloryBooster, "gloryMemorial_info_glory", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.kingdomFameBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(GloryMemorialBuildingVO.prototype, "kingdomFameBoost", {
    get: function () {
      return this._kingdomFameBoost;
    },
    enumerable: true,
    configurable: true
  });
  return GloryMemorialBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.GloryMemorialBuildingVO = d;
a.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO");