Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./55.js");
var r = require("./409.js");
var l = function () {
  function EffectValueWodID() {
    this._firstWodID = -1;
    this._wodIdToValueDict = new Map();
  }
  EffectValueWodID.prototype.parseFromValueString = function (e) {
    this._wodIdToValueDict = new Map();
    var t;
    var i = e.split("#");
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if ((t = a.split(",")).length < 2) {
            t = a.split("+");
          }
          var s = isNaN(parseInt(t[EffectValueWodID.VALUE_POSITION])) || parseFloat(t[EffectValueWodID.VALUE_POSITION]) == undefined ? t[EffectValueWodID.VALUE_POSITION] : parseFloat(t[EffectValueWodID.VALUE_POSITION]);
          this._wodIdToValueDict.set(parseInt(t[EffectValueWodID.WOD_ID_POSITION]), s);
          if (this._firstWodID == -1) {
            this._firstWodID = parseInt(t[EffectValueWodID.WOD_ID_POSITION]);
          }
        }
      }
    }
    return this;
  };
  EffectValueWodID.prototype.parseFromValueArray = function (e) {
    this._wodIdToValueDict = new Map();
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._wodIdToValueDict.set(parseInt(n[EffectValueWodID.WOD_ID_POSITION]), parseInt(n[EffectValueWodID.VALUE_POSITION]));
          if (this._firstWodID == -1 || isNaN(this._firstWodID)) {
            this._firstWodID = parseInt(n[EffectValueWodID.WOD_ID_POSITION]);
          }
        }
      }
    }
    return this;
  };
  EffectValueWodID.prototype.hasWodId = function (e) {
    return this._wodIdToValueDict.get(e) !== undefined;
  };
  EffectValueWodID.prototype.getValueforWodId = function (e) {
    if (this._wodIdToValueDict.get(e)) {
      return this._wodIdToValueDict.get(e);
    } else {
      return 0;
    }
  };
  EffectValueWodID.prototype.clone = function () {
    return new r.EffectValueSimple().parseFromValueArray(this.rawValues);
  };
  Object.defineProperty(EffectValueWodID.prototype, "strength", {
    get: function () {
      return this._wodIdToValueDict.get(this.firstWodID) || 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueWodID.prototype, "isNegative", {
    get: function () {
      return this._wodIdToValueDict.get(this.firstWodID) < 0;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueWodID.prototype.add = function (e, t) {
    if (e.rawValues.length == 0) {
      return this;
    }
    for (var i = 0, n = e.rawValues; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined && o.length == 2) {
        if (this._wodIdToValueDict.get(o[EffectValueWodID.WOD_ID_POSITION])) {
          this._wodIdToValueDict.set(parseInt(o[EffectValueWodID.WOD_ID_POSITION]), this._wodIdToValueDict.get(o[EffectValueWodID.WOD_ID_POSITION]) + o[EffectValueWodID.VALUE_POSITION]);
        } else {
          this._wodIdToValueDict.set(parseInt(o[EffectValueWodID.WOD_ID_POSITION]), o[EffectValueWodID.VALUE_POSITION]);
          if (this._firstWodID == -1) {
            this._firstWodID = a.int(o[EffectValueWodID.WOD_ID_POSITION]);
          }
        }
      }
    }
    if (e.rawValues.length == 1 && typeof e.rawValues[0] == "number" && this._firstWodID > -1) {
      this._wodIdToValueDict.set(this._firstWodID, this._wodIdToValueDict.get(this._firstWodID) + e.rawValues[0]);
    }
    if (this._firstWodID <= 0) {
      throw new Error("added wodID is invalid " + s.ClientConstUtils.map2String(this._wodIdToValueDict));
    }
    return this;
  };
  Object.defineProperty(EffectValueWodID.prototype, "textReplacements", {
    get: function () {
      return [n.MathBase.round(Math.abs(this._wodIdToValueDict.get(this.firstWodID)), 1)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueWodID.prototype, "rawValues", {
    get: function () {
      var e = [];
      if (this._wodIdToValueDict != null) {
        for (var t = 0, i = Array.from(this._wodIdToValueDict.keys()); t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e.push([n, this._wodIdToValueDict.get(n)]);
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueWodID.prototype, "firstWodID", {
    get: function () {
      return this._firstWodID;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueWodID.prototype.getContextTextReplacements = function (e) {
    return this.textReplacements;
  };
  EffectValueWodID.WOD_ID_POSITION = 0;
  EffectValueWodID.VALUE_POSITION = 1;
  return EffectValueWodID;
}();
exports.EffectValueWodID = l;
o.classImplementsInterfaces(l, "IEffectValue");