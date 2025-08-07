Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./4.js");
var s = require("./165.js");
var r = function () {
  function GlobalEffectVO() {
    this.id = 0;
    this.globalEffectID = 0;
    this.minLevel = 0;
    this.maxLevel = 0;
    this.rawBonus = new s.BonusVO();
    this.displayEventIDs = [];
    this.displayKingdomIDs = [];
    this.buffStrength = 0;
  }
  GlobalEffectVO.prototype.parseXml = function (e) {
    this.id = n.int(o.CastleXMLUtils.getIntAttribute("ID", e, -1));
    this.name = o.CastleXMLUtils.getStringAttribute("name", e);
    this.globalEffectID = n.int(o.CastleXMLUtils.getIntAttribute("globalEffectID", e, -1));
    this.minLevel = n.int(o.CastleXMLUtils.getIntAttribute("minLevel", e, -1));
    this.maxLevel = n.int(o.CastleXMLUtils.getIntAttribute("maxLevel", e, -1));
    this.displayEventIDs = o.CastleXMLUtils.getStringAttribute("displayEventIDs", e).split(",");
    this.displayKingdomIDs = o.CastleXMLUtils.getStringAttribute("displayKingdomIDs", e).split(",");
    for (var t = 0; t < this.displayKingdomIDs.length; t++) {
      this.displayKingdomIDs[t] = parseInt(this.displayKingdomIDs[t]);
    }
    for (t = 0; t < this.displayEventIDs.length; t++) {
      this.displayEventIDs[t] = parseInt(this.displayEventIDs[t]);
    }
    var i = o.CastleXMLUtils.getStringAttribute("effects", e);
    if (i != "" && i.length > 0) {
      var r = i.split("&");
      var c = a.CastleModel.effectsData.getEffectByID(parseInt(r[0]));
      var u = new s.BonusVO().parseFromValueString(c, r[1]);
      if (l.instanceOfClass(u.effectValue, "EffectValueMap")) {
        var d = r[1].split("#");
        var p = "";
        if (d != null) {
          for (var h = 0, g = d; h < g.length; h++) {
            var C = g[h];
            if (C !== undefined) {
              var _ = C.split("+");
              if (p.length > 0) {
                p += ",";
              }
              p += _[0] + "," + _[1];
            }
          }
        }
        u.parseFromValueString(c, p);
      }
      this.rawBonus = u;
    }
  };
  Object.defineProperty(GlobalEffectVO.prototype, "canBeUsed", {
    get: function () {
      return a.CastleModel.userData.userLevel >= this.minLevel && a.CastleModel.userData.userLevel <= this.maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectVO.prototype.addBuffStrengthValue = function (e) {
    this.buffStrength = e;
    this.buffedBonus = this.rawBonus.clone();
    this.setEffectStrength(this.buffedBonus.strength + e, this.buffedBonus);
  };
  Object.defineProperty(GlobalEffectVO.prototype, "bonus", {
    get: function () {
      if (a.CastleModel.globalEffectData.isEffectBoosted(this.globalEffectID)) {
        return this.buffedBonus;
      } else {
        return this.rawBonus;
      }
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectVO.prototype.setEffectStrength = function (e, t) {
    var i = "";
    if (l.instanceOfClass(t.effectValue, "EffectValueMap")) {
      for (var n = t.effectValue.getWodIds(), o = 0; o < n.length; o++) {
        i += n[o];
        i += "," + e;
        if (o + 1 < n.length) {
          i += ",";
        }
      }
    } else {
      i += e;
    }
    t.parseFromValueString(t.effect, i);
  };
  return GlobalEffectVO;
}();
exports.GlobalEffectVO = r;
var l = require("./1.js");