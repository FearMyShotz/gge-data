Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./4.js");
var l = require("./1177.js");
var c = require("./563.js");
var u = createjs.Point;
var d = function (e) {
  function AlienLordHeroVO() {
    return e.call(this) || this;
  }
  n.__extends(AlienLordHeroVO, e);
  AlienLordHeroVO.prototype.parseAlienBoniData = function (e) {
    var t = "";
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          t += t ? "," : "";
          t += a[0] + "&" + Math.round(a[1][0]);
          var l = new c.EquipmentBonusVO().parseEquipmentFromValueArray(a[0], a[1]);
          this._boni.push(l);
        }
      }
    }
    o.debug(t);
    var u = r.CastleModel.equipData.getUniqueHerosByAlienString(t);
    if (u.length > 0) {
      this._uniqueID = u[0].uniqueID;
      this.rareID = s.EquipmentConst.RARENESS_UNIQUE;
    } else {
      this._itemGroupID = r.CastleModel.equipData.equipmentXml.getEffectGroupIdByEffectId(e[0][0]);
      if (this._itemGroupID > 0) {
        this._graphicString = "" + r.CastleModel.equipData.equipmentXml.getEquipmentGroup(this._itemGroupID).picId;
      }
      this.setRareIDFromEffectStrength(e[0][1]);
    }
  };
  AlienLordHeroVO.prototype.setRareIDFromEffectStrength = function (e) {
    if (e >= AlienLordHeroVO.RARENESS_STRENGTHS_LEGEND.x) {
      this.rareID = s.EquipmentConst.RARENESS_HERO_LEGENDARY;
    } else if (e >= AlienLordHeroVO.RARENESS_STRENGTHS_EPIC.x) {
      this.rareID = s.EquipmentConst.RARENESS_HERO_EPIC;
    } else if (e >= AlienLordHeroVO.RARENESS_STRENGTHS_RARE.x) {
      this.rareID = s.EquipmentConst.RARENESS_HERO_RARE;
    } else {
      this.rareID = s.EquipmentConst.RARENESS_HERO_COMMON;
    }
  };
  Object.defineProperty(AlienLordHeroVO.prototype, "visClassName", {
    get: function () {
      return this.setVisClassName();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleHeroVO.prototype, "visClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AlienLordHeroVO.__initialize_static_members = function () {
    AlienLordHeroVO.RARENESS_STRENGTHS_COMMON = new u(20, 40);
    AlienLordHeroVO.RARENESS_STRENGTHS_RARE = new u(41, 50);
    AlienLordHeroVO.RARENESS_STRENGTHS_EPIC = new u(51, 70);
    AlienLordHeroVO.RARENESS_STRENGTHS_LEGEND = new u(71, 100);
  };
  return AlienLordHeroVO;
}(l.CastleHeroVO);
exports.AlienLordHeroVO = d;
d.__initialize_static_members();
a.classImplementsInterfaces(d, "IEquippableVO");