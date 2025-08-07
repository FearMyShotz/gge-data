Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function VIPLevelInfoVO() {
    this.levelID = 0;
    this.minVIPPoints = 0;
    this.maxVIPPoints = 0;
    this.bonusLoginKeys = 0;
    this.attackSpeedBonus = 0;
    this.attackFameBonus = 0;
    this.taxBonus = 0;
    this.magicFindBonus = 0;
    this.productionBonusSlots = 0;
    this.recruitmentBonusSlots = 0;
    this.freePremiumCommandersPerDay = 0;
    this.taxCollector12HoursNoRubies = false;
    this.taxCollector24HoursNoRubies = false;
    this._resourceBoosts = new Map();
  }
  VIPLevelInfoVO.prototype.parseConfigXML = function (e) {
    this.levelID = parseInt(a.CastleXMLUtils.getValueOrDefault("vipLevelID", e, "-1", true));
    this.minVIPPoints = parseInt(a.CastleXMLUtils.getValueOrDefault("thresholdMin", e, "0", true));
    this.maxVIPPoints = parseInt(a.CastleXMLUtils.getValueOrDefault("thresholdMax", e, "0", true));
    this._resourceBoosts = new Map();
    this.parseResourceBoost(o.CollectableEnum.WOOD, a.CastleXMLUtils.getValueOrDefault("woodBoosts", e, "").split(VIPLevelInfoVO.BOOST_SEPERATOR));
    this.parseResourceBoost(o.CollectableEnum.STONE, a.CastleXMLUtils.getValueOrDefault("stoneBoosts", e, "").split(VIPLevelInfoVO.BOOST_SEPERATOR));
    this.parseResourceBoost(o.CollectableEnum.FOOD, a.CastleXMLUtils.getValueOrDefault("foodBoosts", e, "").split(VIPLevelInfoVO.BOOST_SEPERATOR));
    this.bonusLoginKeys = parseInt(a.CastleXMLUtils.getValueOrDefault("bonusLoginKeys", e, "0"));
    this.productionBonusSlots = parseInt(a.CastleXMLUtils.getValueOrDefault("productionBonusSlots", e, "0"));
    this.recruitmentBonusSlots = parseInt(a.CastleXMLUtils.getValueOrDefault("recruitmentBonusSlots", e, "0"));
    this.freePremiumCommandersPerDay = parseInt(a.CastleXMLUtils.getValueOrDefault("freePremiumGeneralsPerDay", e, "0"));
    this.attackSpeedBonus = parseInt(a.CastleXMLUtils.getValueOrDefault("attackSpeedBoost", e, "0"));
    this.attackFameBonus = s.int(parseFloat(a.CastleXMLUtils.getValueOrDefault("attackFameBoost", e, "0")));
    this.taxBonus = s.int(parseFloat(a.CastleXMLUtils.getValueOrDefault("taxCollectorBoost", e, "0")));
    this.magicFindBonus = s.int(parseFloat(a.CastleXMLUtils.getValueOrDefault("magicFindBoost", e, "0")));
    this.taxCollector12HoursNoRubies = parseInt(a.CastleXMLUtils.getValueOrDefault("taxCollectorNoRubies12", e, "0")) == 1;
    this.taxCollector24HoursNoRubies = parseInt(a.CastleXMLUtils.getValueOrDefault("taxCollectorNoRubies24", e, "0")) == 1;
  };
  VIPLevelInfoVO.prototype.parseResourceBoost = function (e, t) {
    if (t.length != 0 && t[0] != "") {
      var i = [];
      if (t != null) {
        for (var n = 0, o = t; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined) {
            var s = a.split("+");
            var l = new r.ResourceProductionBoostVO();
            l.areaType = parseInt(s[0]);
            l.boostValue = parseFloat(s[1]);
            i.push(l);
          }
        }
      }
      this._resourceBoosts.set(e, i);
    }
  };
  VIPLevelInfoVO.prototype.getResourceBoostForArea = function (e, t) {
    var i = this._resourceBoosts.get(e);
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.areaType == t) {
          return s.int(a.boostValue);
        }
      }
    }
    return 0;
  };
  VIPLevelInfoVO.prototype.inPointRange = function (e) {
    return this.minVIPPoints <= e && e <= this.maxVIPPoints;
  };
  VIPLevelInfoVO.__initialize_static_members = function () {
    VIPLevelInfoVO.BOOST_SEPERATOR = "#";
  };
  return VIPLevelInfoVO;
}();
exports.VIPLevelInfoVO = n;
var o = require("./12.js");
var a = require("./22.js");
var s = require("./6.js");
var r = require("./2615.js");
n.__initialize_static_members();