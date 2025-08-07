Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = require("./4.js");
var a = require("./165.js");
var s = function () {
  function GeneralAbilityEffectXmlVO(e = null) {
    if (e) {
      this.fillFromParamXml(e);
    }
  }
  GeneralAbilityEffectXmlVO.prototype.fillFromParamXml = function (e) {
    this._abilityEffectID = parseInt(e.abilityEffectID || "0");
    this._priority = parseInt(e.priority || "0");
    this.parseBoni(e);
  };
  GeneralAbilityEffectXmlVO.prototype.parseBoni = function (e) {
    this._boni = [];
    var t = n.CastleXMLUtils.getValueOrDefault("effect", e, "") || n.CastleXMLUtils.getValueOrDefault("effects", e, "");
    if (t != "") {
      for (var i = 0, s = t.split(","); i < s.length; i++) {
        var r = s[i];
        if (r.length > 0) {
          var l = r.split("&");
          var c = o.CastleModel.effectsData.getEffectByID(parseInt(l[0]));
          var u = new a.BonusVO().parseFromValueString(c, l[1]);
          this._boni.push(u);
        }
      }
      if (this._boni.length > 1) {
        this._boni[0].effectValue.parseFromValueArray([this._boni[0].effectValue.strength, this._boni[1].effectValue.strength]);
      }
    }
  };
  GeneralAbilityEffectXmlVO.prototype.getEffectValueByType = function (e, t = -1, i = -1, n = -1, o = null) {
    var a = new e.valueClass();
    if (this._boni != null) {
      for (var s = 0, r = this._boni; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined && l.matchesConditions(e, t, i, n, o)) {
          a.add(l.effectValue, null);
        }
      }
    }
    return a;
  };
  Object.defineProperty(GeneralAbilityEffectXmlVO.prototype, "amountOfBoni", {
    get: function () {
      return this._boni.length;
    },
    enumerable: true,
    configurable: true
  });
  GeneralAbilityEffectXmlVO.prototype.getEffect = function (e) {
    return this._boni[e];
  };
  GeneralAbilityEffectXmlVO.prototype.getCurrentEffectValue = function (e) {
    return this._boni[e].effectValue;
  };
  GeneralAbilityEffectXmlVO.prototype.getCurrentEffectTypeId = function (e) {
    return this._boni[e].effect.effectTypeID;
  };
  Object.defineProperty(GeneralAbilityEffectXmlVO.prototype, "abilityEffectID", {
    get: function () {
      return this._abilityEffectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralAbilityEffectXmlVO.prototype, "priority", {
    get: function () {
      return this._priority;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralAbilityEffectXmlVO;
}();
exports.GeneralAbilityEffectXmlVO = s;