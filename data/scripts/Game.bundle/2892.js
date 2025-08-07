Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./16.js");
var l = function (e) {
  function RubbleBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RubbleBuildingVO, e);
  RubbleBuildingVO.prototype.getUpgradeInfoString = function () {
    return "";
  };
  RubbleBuildingVO.prototype.getInfoTooltipLine2 = function () {
    return a.Localize.text("rubble_removeTip");
  };
  RubbleBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return RubbleBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.RubbleBuildingVO = l;
o.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");