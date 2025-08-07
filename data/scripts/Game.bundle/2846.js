Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./18.js");
var c = require("./16.js");
var u = require("./4.js");
var d = require("./782.js");
var p = function (e) {
  function FactionBarracksBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionBarracksBuildingVO, e);
  Object.defineProperty(FactionBarracksBuildingVO.prototype, "unitCategory", {
    get: function () {
      return l.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BarracksBuildingVO.prototype, "unitCategory").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionBarracksBuildingVO.prototype, "isProductive", {
    get: function () {
      return u.CastleModel.militaryData.getPackageListByCategory(l.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES).slotsInUse != 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BarracksBuildingVO.prototype, "isProductive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionBarracksBuildingVO.prototype, "recruitCategory", {
    get: function () {
      return l.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BarracksBuildingVO.prototype, "recruitCategory").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionBarracksBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Berimond_Auxiliaries_Unit_Plus, "dialog_factionAuxiliaries_slotCapacity_tooltip", new s.LocalizedNumberVO(this.stackSize), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  FactionBarracksBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Berimond_Auxiliaries_Unit_Plus, "dialog_factionAuxiliaries_slotCapacity_tooltip", new s.LocalizedNumberVO(this.stackSize), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return FactionBarracksBuildingVO;
}(d.BarracksBuildingVO);
exports.FactionBarracksBuildingVO = p;
a.classImplementsInterfaces(p, "IShopVO", "ICostVO", "IInventoryVO");