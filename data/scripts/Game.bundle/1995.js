Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = function () {
  function EffectValueMap() {
    this._map = new Map();
  }
  EffectValueMap.prototype.parseFromValueString = function (e) {
    var t;
    var i = [];
    t = e.indexOf(",") > -1 ? e.split(",") : e.indexOf("+") > -1 ? e.split("+") : [e];
    for (var n = 0; n < t.length; ++n) {
      i.push(parseInt(t[n]));
    }
    return this.parseFromValueArray(i);
  };
  EffectValueMap.prototype.parseFromValueArray = function (e) {
    this._map = new Map();
    for (var t = 0; t < e.length; t += 2) {
      this._map.set(e[t], t + 1 < e.length ? e[t + 1] : 0);
    }
    return this;
  };
  EffectValueMap.prototype.add = function (e, t) {
    var i = e;
    if (!i || !i._map) {
      return this;
    }
    for (var n = 0, o = Array.from(i._map.keys()); n < o.length; n++) {
      var a = o[n];
      if (this._map.has(a)) {
        this._map.set(a, this._map.get(a) + i._map.get(a));
      } else {
        this._map.set(a, i._map.get(a));
      }
    }
    return null;
  };
  Object.defineProperty(EffectValueMap.prototype, "rawValues", {
    get: function () {
      var e = [];
      if (this._map != null) {
        for (var t = 0, i = Array.from(this._map.keys()); t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e.push(n);
            e.push(this._map.get(n));
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueMap.prototype.clone = function () {
    var e = new EffectValueMap();
    e.parseFromValueArray(this.rawValues);
    return e;
  };
  Object.defineProperty(EffectValueMap.prototype, "strength", {
    get: function () {
      var e = 0;
      if (this._map != null) {
        for (var t = 0, i = Array.from(this._map.values()); t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e = n;
            break;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueMap.prototype, "textReplacements", {
    get: function () {
      return [this.strength];
    },
    enumerable: true,
    configurable: true
  });
  EffectValueMap.prototype.hasWodId = function (e) {
    return this._map.has(e);
  };
  EffectValueMap.prototype.getValueforId = function (e) {
    if (this._map.get(e)) {
      return this._map.get(e);
    } else {
      return 0;
    }
  };
  EffectValueMap.prototype.getWodIds = function () {
    return n.DictionaryUtil.getKeys(this._map);
  };
  EffectValueMap.prototype.getContextTextReplacements = function (e) {
    return this.textReplacements;
  };
  return EffectValueMap;
}();
exports.EffectValueMap = a;
o.classImplementsInterfaces(a, "IEffectValue");