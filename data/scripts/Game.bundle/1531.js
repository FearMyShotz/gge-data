Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = function (e) {
  function BuilderBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BuilderBuildingVO, e);
  BuilderBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BuildingCostReduction, {
      t: "dialog_buyArchitect_infoIcon",
      p: [String(this.buildingCostReduction)]
    }, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [String(this.buildingCostReduction)]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return BuilderBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.BuilderBuildingVO = c;
a.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");