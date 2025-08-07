Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./16.js");
var u = require("./771.js");
var d = function (e) {
  function FactionLookoutTowerVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionLookoutTowerVO, e);
  FactionLookoutTowerVO.prototype.getShopIconURL = function (e) {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Event3Lib");
  };
  Object.defineProperty(FactionLookoutTowerVO.prototype, "isSelectionEnabled", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ATowerVO.prototype, "isSelectionEnabled").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionLookoutTowerVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_DefendingTroops, "unitCapacity", new l.LocalizedTextVO(a.GenericTextIds.VALUE_NOMINAL_ADD, [this.unitWallCount]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "protection_tt", new r.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return FactionLookoutTowerVO;
}(u.ATowerVO);
exports.FactionLookoutTowerVO = d;
s.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO");