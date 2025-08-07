Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = function (e) {
  function StableBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StableBuildingVO, e);
  StableBuildingVO.prototype.createInfoPanelItems = function (e) {
    if (this.level >= 2) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_Horse_Boost, "effect", new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.shownTravelBoost]), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return StableBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.StableBuildingVO = l;
a.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");