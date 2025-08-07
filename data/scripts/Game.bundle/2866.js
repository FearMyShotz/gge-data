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
var d = require("./97.js");
var p = function (e) {
  function ImperialCouncilHallBuildingVO() {
    var t = this;
    t._offensiveToolsSpeedBoost = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ImperialCouncilHallBuildingVO, e);
  ImperialCouncilHallBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._offensiveToolsSpeedBoost = l.int(u.CastleXMLUtils.getIntAttribute("offensiveToolsSpeedBoost", t));
  };
  ImperialCouncilHallBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost, "toolbooster", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.offensiveToolsSpeedBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), this.getInfoItemTextColor(d.CastleEffectEnum.RECRUITSPEEDBOOST), true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  ImperialCouncilHallBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost, "toolbooster", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.offensiveToolsSpeedBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), this.getInfoItemTextColor(d.CastleEffectEnum.RECRUITSPEEDBOOST), true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(ImperialCouncilHallBuildingVO.prototype, "offensiveToolsSpeedBoost", {
    get: function () {
      return this._offensiveToolsSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  return ImperialCouncilHallBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.ImperialCouncilHallBuildingVO = p;
a.classImplementsInterfaces(p, "IShopVO", "ICostVO", "IInventoryVO");