Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./18.js");
var u = require("./22.js");
var d = require("./4.js");
var p = require("./97.js");
var h = require("./35.js");
var g = function (e) {
  function HospitalBuildingVO() {
    var t = this;
    t._hospitalCapacity = 0;
    t._hospitalSlots = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(HospitalBuildingVO, e);
  HospitalBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._hospitalCapacity = parseInt(u.CastleXMLUtils.getValueOrDefault("hospitalCapacity", t, "0"));
    this._hospitalSlots = parseInt(u.CastleXMLUtils.getValueOrDefault("hospitalSlots", t, "0"));
  };
  Object.defineProperty(HospitalBuildingVO.prototype, "healCategory", {
    get: function () {
      return c.ClientConstCastle.CATEGORY_HOSPITAL;
    },
    enumerable: true,
    configurable: true
  });
  HospitalBuildingVO.prototype.isReviving = function () {
    return d.CastleModel.militaryData.getPackageListByCategory(c.ClientConstCastle.CATEGORY_HOSPITAL).slotsInUse != 0;
  };
  HospitalBuildingVO.prototype.hasFreeSlots = function () {
    return d.CastleModel.militaryData.getPackageListByCategory(c.ClientConstCastle.CATEGORY_HOSPITAL).hasFreeSlots();
  };
  HospitalBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Hospital, "hospital_info_capacity", new s.LocalizedNumberVO(this.hospitalCapacity), this.getInfoItemTextColor(p.CastleEffectEnum.HOSPITALCAPACITY), true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_HospitalSlots, "hospital_info_slots", new s.LocalizedNumberVO(this.hospitalSlots), this.getInfoItemTextColor(p.CastleEffectEnum.HOSPITALSLOTS), true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_SurviveBoost, "hospital_info_defSurvivors", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.surviveBoost]), this.getInfoItemTextColor(p.CastleEffectEnum.SURVIVEBOOST), true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(p.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  Object.defineProperty(HospitalBuildingVO.prototype, "hospitalCapacity", {
    get: function () {
      var e = l.int(d.CastleModel.researchData.getResearchEffectValue(h.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS, d.CastleModel.areaData.activeAreaInfo.areaType, d.CastleModel.areaData.activeArea.spaceId).strength);
      var t = d.CastleModel.lordData.getBaronByCastleMapObjectVO(this.isoData.areaData.areaInfo);
      var i = l.int(t ? t.getEffectValue(h.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS) : 0);
      return this._hospitalCapacity + this.getConstructionItemEffectValue(p.CastleEffectEnum.HOSPITALCAPACITY) + e + i;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HospitalBuildingVO.prototype, "baseHospitalCapacity", {
    get: function () {
      return this._hospitalCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HospitalBuildingVO.prototype, "hospitalSlots", {
    get: function () {
      return this._hospitalSlots;
    },
    enumerable: true,
    configurable: true
  });
  return HospitalBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.HospitalBuildingVO = g;
a.classImplementsInterfaces(g, "IShopVO", "ICostVO", "IInventoryVO");