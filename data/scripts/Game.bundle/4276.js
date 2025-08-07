Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function CastleEffectsData(e) {
    this.parseXML(e);
  }
  CastleEffectsData.prototype.parseXML = function (e) {
    this.configXML = e;
    this._effectTypes = new Map();
    this._effectTypes.set(-1, new r.CastleEffectTypeVO());
    var t = e.effecttypes;
    if (t != null) {
      for (var i = 0, o = t; i < o.length; i++) {
        var l = o[i];
        if (l !== undefined) {
          var c = parseInt(l.effectTypeID || "");
          var u = new r.CastleEffectTypeVO(l);
          this._effectTypes.set(c, u);
        }
      }
    }
    this._effects = new Map();
    var d = e.effects;
    if (d != null) {
      for (var p = 0, h = d; p < h.length; p++) {
        var g = h[p];
        if (g !== undefined) {
          var C = new s.EffectVO(g);
          this._effects.set(parseInt(g.effectID || ""), C);
        }
      }
    }
    this._effectCaps = n.CastleXMLUtils.createDicFromXmlNode(e, "effectCaps", a.EffectCapVO);
  };
  CastleEffectsData.prototype.isAttackEffect = function (e) {
    return this.effectTypes.get(e.id).combatType == 1 || this.effectTypes.get(e.id).combatType == 3;
  };
  CastleEffectsData.prototype.isDefenseEffect = function (e) {
    return this.effectTypes.get(e.id).combatType == 2 || this.effectTypes.get(e.id).combatType == 3;
  };
  CastleEffectsData.prototype.getEffectByID = function (e) {
    return this._effects.get(e);
  };
  CastleEffectsData.prototype.getEffectTypeByID = function (e) {
    return this._effectTypes.get(e);
  };
  CastleEffectsData.prototype.getEffectCap = function (e) {
    return this._effectCaps.get(e);
  };
  Object.defineProperty(CastleEffectsData.prototype, "effectCaps", {
    get: function () {
      return this._effectCaps;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectsData.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectsData.prototype, "effectTypes", {
    get: function () {
      return this._effectTypes;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEffectsData;
}();
exports.CastleEffectsData = o;
var a = require("./4277.js");
var s = require("./1250.js");
var r = require("./4278.js");