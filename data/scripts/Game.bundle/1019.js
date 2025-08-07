Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./18.js");
var u = require("./16.js");
var d = require("./4.js");
var p = require("./97.js");
var h = require("./1014.js");
var g = function (e) {
  function WorkshopBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(WorkshopBuildingVO, e);
  Object.defineProperty(WorkshopBuildingVO.prototype, "unitCategory", {
    get: function () {
      return c.ClientConstCastle.UNIT_CATEGORY_TOOLS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AUnitProductionBuildingVO.prototype, "unitCategory").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorkshopBuildingVO.prototype, "recruitCategory", {
    get: function () {
      return c.ClientConstCastle.UNIT_CATEGORY_TOOLS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AUnitProductionBuildingVO.prototype, "recruitCategory").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorkshopBuildingVO.prototype, "recruitFilter", {
    get: function () {
      return c.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AUnitProductionBuildingVO.prototype, "recruitFilter").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorkshopBuildingVO.prototype, "isProductive", {
    get: function () {
      return C.RecruitmentHelper.isProducingTools(this.recruitFilter);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AUnitProductionBuildingVO.prototype, "isProductive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  WorkshopBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [d.CastleModel.militaryData.getBuildingProductionSpeed(this.name)]), this.getInfoItemTextColor(p.CastleEffectEnum.REDUCEOFFENSIVETOOLSTIME));
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new r.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(p.CastleEffectEnum.DECOPOINTS));
    }
  };
  WorkshopBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productionspeed", new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [s.ConstructionConst.UPGRADE_RECRUITSPEED_BOOST * (this.level - 1)]), u.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return WorkshopBuildingVO;
}(h.AUnitProductionBuildingVO);
exports.WorkshopBuildingVO = g;
var C = require("./628.js");
a.classImplementsInterfaces(g, "IShopVO", "ICostVO", "IInventoryVO");