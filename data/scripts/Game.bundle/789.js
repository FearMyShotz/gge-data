Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./44.js");
var c = require("./97.js");
var u = require("./35.js");
var d = require("./286.js");
var p = function (e) {
  function MaintentBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MaintentBuildingVO, e);
  MaintentBuildingVO.prototype.getFinalProductionValue = function () {
    return this.getBaseProductionValue() * this.getFinalProductivityFactor();
  };
  MaintentBuildingVO.prototype.getBaseProductivityFactor = function () {
    return 1;
  };
  Object.defineProperty(MaintentBuildingVO.prototype, "resourceType", {
    get: function () {
      return h.CollectableEnum.FOOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AResourceProductionBuildingVO.prototype, "resourceType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MaintentBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "storage_capacity", new s.LocalizedNumberVO(this.maxStorageValue));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Food, {
      t: "xPerHour",
      p: [a.Localize.text("food")]
    }, new s.LocalizedNumberVO(this.getFinalProductionValue()), this.getInfoItemTextColor(c.CastleEffectEnum.UNBOOSTEDFOODPRODUCTION));
    if (!l.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new s.LocalizedNumberVO(this.getEffectValue(u.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength));
    }
  };
  MaintentBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "storage_capacity", new s.LocalizedNumberVO(this.maxStorageValue));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Food, "foodproduction", new s.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)));
    if (!l.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new s.LocalizedNumberVO(this.getEffectValue(u.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return MaintentBuildingVO;
}(d.AResourceProductionBuildingVO);
exports.MaintentBuildingVO = p;
var h = require("./12.js");
o.classImplementsInterfaces(p, "IShopVO", "ICostVO", "IInventoryVO");