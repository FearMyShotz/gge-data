Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./22.js");
var u = require("./4.js");
var d = require("./97.js");
var p = require("./33.js");
var h = function (e) {
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
    this._hospitalCapacity = parseInt(c.CastleXMLUtils.getValueOrDefault("hospitalCapacity", t, "0"));
    this._hospitalSlots = parseInt(c.CastleXMLUtils.getValueOrDefault("hospitalSlots", t, "0"));
  };
  Object.defineProperty(HospitalBuildingVO.prototype, "healCategory", {
    get: function () {
      return l.ClientConstCastle.CATEGORY_HOSPITAL;
    },
    enumerable: true,
    configurable: true
  });
  HospitalBuildingVO.prototype.isReviving = function () {
    return u.CastleModel.militaryData.getPackageListByCategory(l.ClientConstCastle.CATEGORY_HOSPITAL).slotsInUse != 0;
  };
  HospitalBuildingVO.prototype.hasFreeSlots = function () {
    return u.CastleModel.militaryData.getPackageListByCategory(l.ClientConstCastle.CATEGORY_HOSPITAL).hasFreeSlots();
  };
  HospitalBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Hospital, "hospital_info_capacity", new s.LocalizedNumberVO(this.hospitalCapacity), this.getInfoItemTextColor(d.CastleEffectEnum.HOSPITALCAPACITY), true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_HospitalSlots, "hospital_info_slots", new s.LocalizedNumberVO(this.hospitalSlots), this.getInfoItemTextColor(d.CastleEffectEnum.HOSPITALSLOTS), true);
    for (var t = 0, i = this.allShowableBuildingEffects; t < i.length; t++) {
      var n = i[t];
      if (n.effect.effectType.id == p.EffectTypeEnum.EFFECT_TYPE_SURVIVAL_BOOST.id) {
        e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_SurviveBoost, "hospital_info_defSurvivors", new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [n.strength]), this.getInfoItemTextColor(d.CastleEffectEnum.SURVIVEBOOST), true);
      }
    }
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(d.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  Object.defineProperty(HospitalBuildingVO.prototype, "hospitalCapacity", {
    get: function () {
      var e = r.int(u.CastleModel.researchData.getResearchEffectValue(p.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS, u.CastleModel.areaData.activeAreaInfo.areaType, u.CastleModel.areaData.activeArea.spaceId).strength);
      var t = u.CastleModel.lordData.getBaronByCastleMapObjectVO(this.isoData.areaData.areaInfo);
      var i = r.int(t ? t.getEffectValue(p.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS) : 0);
      return this._hospitalCapacity + this.getConstructionItemEffectValue(d.CastleEffectEnum.HOSPITALCAPACITY) + e + i;
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
exports.HospitalBuildingVO = h;
a.classImplementsInterfaces(h, "IShopVO", "ICostVO", "IInventoryVO");