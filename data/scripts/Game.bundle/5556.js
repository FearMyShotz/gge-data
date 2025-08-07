Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function FlankVO(e, t = null, i = false) {
    this.isPreOrPostWave = false;
    this._soldiers = [];
    this._tools = [];
    this._effects = [];
    if (t) {
      this.initAsSummary(t, i);
    } else {
      this.initByParams(e);
    }
    this.sortLists();
  }
  FlankVO.prototype.initAsSummary = function (e, t) {
    var i = new Map();
    var n = new Map();
    var o = new Map();
    if (e != null) {
      for (var s = 0, l = e; s < l.length; s++) {
        var c = l[s];
        if (c !== undefined) {
          FlankVO.addToMapByWodID(c.soldiers, i, c.isPreOrPostWave);
          FlankVO.addToMapByWodID(c.tools, n, c.isPreOrPostWave);
          for (var d = 0, p = c.effects; d < p.length; d++) {
            var h = p[d];
            if (h !== undefined) {
              var g = 0;
              if (o.get(h.effectType)) {
                g = r.int(o.get(h.effectType));
              }
              o.set(h.effectType, Math.max(h.inventoryAmount, g));
            }
          }
        }
      }
    }
    if (i != null) {
      for (var C = 0, _ = Array.from(i.values()); C < _.length; C++) {
        var m = _[C];
        if (m !== undefined) {
          this._soldiers.push(new u.LogUnitVO(null, m, t));
        }
      }
    }
    if (n != null) {
      for (var f = 0, O = Array.from(n.values()); f < O.length; f++) {
        var E = O[f];
        if (E !== undefined) {
          this._tools.push(new u.LogUnitVO(null, E));
        }
      }
    }
    if (o != null) {
      for (var y = 0, b = Array.from(o.keys()); y < b.length; y++) {
        var D = b[y];
        if (D !== undefined) {
          var I = r.int(o.get(D));
          this._effects.push(new a.EffectIconUnitVO(D, I));
        }
      }
    }
  };
  FlankVO.addToMapByWodID = function (e, t, i) {
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          a.isPreOrPostWave = i;
          if (!t.get(a.wodID)) {
            t.set(a.wodID, []);
          }
          t.get(a.wodID).push(a);
        }
      }
    }
  };
  FlankVO.prototype.initByParams = function (e) {
    if (e) {
      this.parseUnits(e[FlankVO.SOLDIERS]);
      this.parseTools(e[FlankVO.TOOLS]);
      if (e.length > FlankVO.EFFECTS && e[FlankVO.EFFECTS]) {
        this.parseEffects(e[FlankVO.EFFECTS]);
      }
    }
  };
  FlankVO.prototype.parseUnits = function (e) {
    for (var t = 0; t < e.length; t++) {
      var i = new u.LogUnitVO(e[t]);
      this._soldiers.push(i);
    }
  };
  FlankVO.prototype.parseTools = function (e) {
    for (var t = 0; t < e.length; t++) {
      var i = new u.LogUnitVO(e[t]);
      this._tools.push(i);
    }
  };
  FlankVO.prototype.parseEffects = function (e) {
    var t = r.int(e[FlankVO.BONUS_DEFENSE]);
    var i = r.int(e[FlankVO.BONUS_GATE]);
    var n = r.int(e[FlankVO.BONUS_MOAT]);
    this._effects.push(new a.EffectIconUnitVO(l.ToolEffectType.WALL_BONUS, t));
    this._effects.push(new a.EffectIconUnitVO(l.ToolEffectType.GATE_BONUS, i));
    this._effects.push(new a.EffectIconUnitVO(l.ToolEffectType.MOAT_BONUS, n));
  };
  FlankVO.prototype.sortLists = function () {
    this._soldiers.sort(o.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
    this._tools.sort(o.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
    this._effects.sort(o.ClientConstSort.sortByUnitSortOrder);
  };
  Object.defineProperty(FlankVO.prototype, "soldiers", {
    get: function () {
      return this._soldiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlankVO.prototype, "tools", {
    get: function () {
      return this._tools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlankVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  FlankVO.prototype.hasOnlyAuxiliariesOrNothing = function () {
    if (this._soldiers != null) {
      for (var e = 0, t = this._soldiers; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && !c.CastleModel.wodData.createVObyWOD(i.wodID, s.CastleWodData.TYPE_UNIT).isAuxiliary) {
          return false;
        }
      }
    }
    return true;
  };
  FlankVO.__initialize_static_members = function () {
    FlankVO.SOLDIERS = 0;
    FlankVO.TOOLS = 1;
    FlankVO.EFFECTS = 2;
    FlankVO.BONUS_DEFENSE = 0;
    FlankVO.BONUS_GATE = 1;
    FlankVO.BONUS_MOAT = 2;
  };
  return FlankVO;
}();
exports.FlankVO = n;
var o = require("./75.js");
var a = require("./895.js");
var s = require("./56.js");
var r = require("./6.js");
var l = require("./318.js");
var c = require("./4.js");
var u = require("./1960.js");
n.__initialize_static_members();