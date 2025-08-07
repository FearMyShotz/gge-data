Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function JudgementVO() {
    this.id = 0;
  }
  JudgementVO.prototype.fillFromParamXML = function (e) {
    this.id = parseInt(r.CastleXMLUtils.getValueOrDefault("judgementID", e, "0", true));
    this.visualName = r.CastleXMLUtils.getValueOrDefault("visualName", e, "", true);
    this.spawnSpotType = s.JudgementSpotEnum.getTypeFromName(r.CastleXMLUtils.getValueOrDefault("spawnSpot", e, "", true));
    this.conditionA = [];
    this.parseConditionString(r.CastleXMLUtils.getValueOrDefault("conditionTypeA", e, ""), this.conditionA);
    this.conditionB = [];
    this.parseConditionString(r.CastleXMLUtils.getValueOrDefault("conditionTypeB", e, ""), this.conditionB);
    this.rewardA = [];
    this.parseRewardString(r.CastleXMLUtils.getValueOrDefault("rewardTypeA", e, ""), this.rewardA);
    this.rewardB = [];
    this.parseRewardString(r.CastleXMLUtils.getValueOrDefault("rewardTypeB", e, ""), this.rewardB);
  };
  JudgementVO.prototype.parseConditionString = function (e, t) {
    for (var i = e.split("#"), n = 0; n < i.length; ++n) {
      if (i[n] != "") {
        t.push(a.JudgementConditionEnum.getConditionTypeFromString(i[n]));
      }
    }
  };
  JudgementVO.prototype.parseRewardString = function (e, t) {
    for (var i = e.split("#"), n = 0; n < i.length; ++n) {
      if (i[n] != "") {
        var a = o.CollectableEnum.getTypeByName(i[n]);
        a ||= o.CollectableEnum.UNKNOWN;
        if (a == o.CollectableEnum.UNKNOWN) {
          switch (i[n]) {
            case "currency1":
              t.push(o.CollectableEnum.C1);
          }
        }
        if (a != o.CollectableEnum.UNKNOWN) {
          t.push(a);
        }
      }
    }
  };
  JudgementVO.prototype.toString = function () {
    var e = "JUDGEMENTVO: {id:" + this.id + "; visualName: " + this.visualName + "; spawnSpot: " + this.spawnSpotType.spawnType + "; ConditionA: [ ";
    if (this.conditionA != null) {
      for (var t = 0, i = this.conditionA; t < i.length; t++) {
        c = i[t];
        if (c !== undefined) {
          e += c.toString() + " ";
        }
      }
    }
    e += "]; ConditionB: [ ";
    if (this.conditionB != null) {
      for (var n = 0, o = this.conditionB; n < o.length; n++) {
        c = o[n];
        if (c !== undefined) {
          e += c.toString() + " ";
        }
      }
    }
    e += "]; RewardA:  [";
    if (this.rewardA != null) {
      for (var a = 0, s = this.rewardA; a < s.length; a++) {
        c = s[a];
        if (c !== undefined) {
          e += c.name + " ";
        }
      }
    }
    e += "]; RewardB: [ ";
    if (this.rewardB != null) {
      for (var r = 0, l = this.rewardB; r < l.length; r++) {
        var c;
        c = l[r];
        if (c !== undefined) {
          e += c.name + " ";
        }
      }
    }
    return e += "]}";
  };
  JudgementVO.prototype.dispose = function () {
    this.spawnSpotType = null;
    this.conditionA = null;
    this.conditionB = null;
    this.rewardA = null;
    this.rewardB = null;
  };
  return JudgementVO;
}();
exports.JudgementVO = n;
var o = require("./12.js");
var a = require("./1076.js");
var s = require("./773.js");
var r = require("./22.js");