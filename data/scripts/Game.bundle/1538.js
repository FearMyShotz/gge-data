Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./97.js");
var l = require("./65.js");
var c = function (e) {
  function EstateBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EstateBuildingVO, e);
  Object.defineProperty(EstateBuildingVO.prototype, "usesLords", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AEffectBuildingVO.prototype, "usesLords").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EstateBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Baron, "dialog_startAttack_availableBarons", new a.LocalizedNumberVO(this.barons), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(r.CastleEffectEnum.DECOPOINTS));
    }
  };
  return EstateBuildingVO;
}(l.AEffectBuildingVO);
exports.EstateBuildingVO = c;
o.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");