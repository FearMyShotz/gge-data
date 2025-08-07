Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./33.js");
var c = function (e) {
  function BuildersQuartersBuildingVO() {
    var t = this;
    t._additionalConstructionSlotCount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(BuildersQuartersBuildingVO, e);
  BuildersQuartersBuildingVO.prototype.parseXmlNode = function (t) {
    var i = this;
    e.prototype.parseXmlNode.call(this, t);
    this.allShowableBuildingEffects.forEach(function (e) {
      if (e.effect.effectType.type == l.EffectTypeEnum.EFFECT_TYPE_SIMULTANEOUS_CONSTRUCTION) {
        i._additionalConstructionSlotCount = e.strength;
      }
    });
  };
  BuildersQuartersBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_SimultaneousConstruction, "buildersQuarters_slot_number", new s.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [this.additionalConstructionSlotCount]), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(BuildersQuartersBuildingVO.prototype, "additionalConstructionSlotCount", {
    get: function () {
      return this._additionalConstructionSlotCount;
    },
    enumerable: true,
    configurable: true
  });
  return BuildersQuartersBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.BuildersQuartersBuildingVO = c;
a.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");