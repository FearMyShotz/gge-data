Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = require("./336.js");
var l = function (e) {
  function GuardTowerVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GuardTowerVO, e);
  GuardTowerVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this.rotationType = r.IsoObjectRotationEnum.NONE;
  };
  GuardTowerVO.prototype.getNameString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_name";
  };
  GuardTowerVO.prototype.getShortInfoString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_short_info";
  };
  GuardTowerVO.prototype.getUpgradeInfoString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_upgrade_info";
  };
  Object.defineProperty(GuardTowerVO.prototype, "hasTowerBase", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  GuardTowerVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_DefendingTroops, "unitCapacity", new a.LocalizedNumberVO(this.unitWallCount), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "protection_tt", new a.LocalizedNumberVO(this.decoPoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return GuardTowerVO;
}(require("./773.js").ATowerVO);
exports.GuardTowerVO = l;
o.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");