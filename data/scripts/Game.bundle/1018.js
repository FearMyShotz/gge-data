Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./65.js");
var l = function (e) {
  function MilitarycampBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MilitarycampBuildingVO, e);
  Object.defineProperty(MilitarycampBuildingVO.prototype, "usesLords", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AEffectBuildingVO.prototype, "usesLords").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MilitarycampBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Knights, "panel_multiinfo_generalLimit", new a.LocalizedNumberVO(this.commanders));
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  MilitarycampBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Knights, "panel_multiinfo_generalLimit", new a.LocalizedNumberVO(this.commanders), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return MilitarycampBuildingVO;
}(r.AEffectBuildingVO);
exports.MilitarycampBuildingVO = l;
o.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");