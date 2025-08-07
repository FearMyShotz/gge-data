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
var d = require("./4.js");
var p = function (e) {
  function OakOfWisdomBuildingVO() {
    var t = this;
    t._xpBoostPercentage = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(OakOfWisdomBuildingVO, e);
  OakOfWisdomBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._xpBoostPercentage = l.int(u.CastleXMLUtils.getIntAttribute("xpBoostPercentage", t));
  };
  OakOfWisdomBuildingVO.prototype.getVisualClassName = function () {
    return "OakOfWisdom_Building";
  };
  OakOfWisdomBuildingVO.prototype.getUpgradeInfoString = function () {
    return "xpBoosterBuilding_upgrade_info";
  };
  OakOfWisdomBuildingVO.prototype.getNameString = function () {
    return "xpBoosterBuilding_name";
  };
  OakOfWisdomBuildingVO.prototype.getShortInfoString = function () {
    return "xpBoosterBuilding_short_info";
  };
  Object.defineProperty(OakOfWisdomBuildingVO.prototype, "xpBoostPercentage", {
    get: function () {
      return this._xpBoostPercentage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OakOfWisdomBuildingVO, "xpBoosterIconClass", {
    get: function () {
      if (d.CastleModel.userData.isLegend) {
        return Library.CastleInterfaceElements_Icons.Icon_OakOfWisdom_Legend;
      } else {
        return Library.CastleInterfaceElements_Icons.Icon_OakOfWisdom;
      }
    },
    enumerable: true,
    configurable: true
  });
  OakOfWisdomBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this._xpBoostPercentage > 0) {
      e.addInfoItem(OakOfWisdomBuildingVO.xpBoosterIconClass, "xpBoosterBuilding_info_xp", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.xpBoostPercentage]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return OakOfWisdomBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.OakOfWisdomBuildingVO = p;
a.classImplementsInterfaces(p, "IShopVO", "ICostVO", "IInventoryVO");