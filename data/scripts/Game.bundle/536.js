Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./97.js");
var l = function (e) {
  function MarketBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MarketBuildingVO, e);
  MarketBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MarketCarrige, "marketCarriges", new a.LocalizedNumberVO(this.marketCarriages), this.getInfoItemTextColor(r.CastleEffectEnum.MARKETCARRIAGES));
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(r.CastleEffectEnum.DECOPOINTS));
    }
  };
  MarketBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MarketCarrige, "dialog_marketMovement_title", new a.LocalizedNumberVO(Math.ceil(this._marketCarriages)), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return MarketBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.MarketBuildingVO = l;
o.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");