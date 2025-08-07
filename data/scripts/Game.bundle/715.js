Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = function () {
  function AutoFillOptions() {
    this._fillLeftFlank = true;
    this._fillMiddleFlank = true;
    this._fillRightFlank = true;
    this._fillCurrentWave = false;
    this._toolFilter = new Map();
    this._unitFilter = new Map();
    this._toolFilter = this.createNewToolFilter();
    this._unitFilter = this.createNewUnitFilter();
  }
  AutoFillOptions.prototype.setToolFilter = function (e, t) {
    if (n.DictionaryUtil.containsKey(this._toolFilter, e)) {
      this._toolFilter.set(e, t);
    }
  };
  AutoFillOptions.prototype.setUnitFilter = function (e, t) {
    if (n.DictionaryUtil.containsKey(this._unitFilter, e)) {
      this._unitFilter.set(e, t);
    }
  };
  AutoFillOptions.prototype.setAllToolFilters = function (e) {
    if (this._toolFilter != null) {
      for (var t = 0, i = Array.from(this._toolFilter.keys()); t < i.length; t++) {
        var n = i[t];
        this._toolFilter.set(n, e);
      }
    }
  };
  AutoFillOptions.prototype.setAllUnitFilters = function (e) {
    if (this._unitFilter != null) {
      for (var t = 0, i = Array.from(this._unitFilter.keys()); t < i.length; t++) {
        var n = i[t];
        this._unitFilter.set(n, e);
      }
    }
  };
  AutoFillOptions.prototype.isToolFilterActive = function (e) {
    return !!n.DictionaryUtil.containsKey(this._toolFilter, e) && !!this._toolFilter.get(e);
  };
  AutoFillOptions.prototype.isUnitFilterActive = function (e) {
    return !!n.DictionaryUtil.containsKey(this._unitFilter, e) && !!this._unitFilter.get(e);
  };
  AutoFillOptions.prototype.createNewToolFilter = function () {
    var e = new Map();
    if (AutoFillOptions.TOOL_FILTER_TYPES != null) {
      for (var t = 0, i = AutoFillOptions.TOOL_FILTER_TYPES; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.set(n, true);
        }
      }
    }
    return e;
  };
  AutoFillOptions.prototype.createNewUnitFilter = function () {
    var e = new Map();
    if (AutoFillOptions.UNIT_FILTER_TYPES != null) {
      for (var t = 0, i = AutoFillOptions.UNIT_FILTER_TYPES; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.set(n, true);
        }
      }
    }
    return e;
  };
  AutoFillOptions.prototype.isAnyToolFilterInactive = function () {
    if (this._toolFilter != null) {
      for (var e = 0, t = Array.from(this._toolFilter.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && !i) {
          return false;
        }
      }
    }
    return true;
  };
  AutoFillOptions.prototype.isAnyUnitFilterInactive = function () {
    if (this._unitFilter != null) {
      for (var e = 0, t = Array.from(this._unitFilter.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && !i) {
          return false;
        }
      }
    }
    return true;
  };
  AutoFillOptions.prototype.getActiveToolFilter = function () {
    var e = [];
    if (AutoFillOptions.TOOL_FILTER_TYPES != null) {
      for (var t = 0, i = AutoFillOptions.TOOL_FILTER_TYPES; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && this.isToolFilterActive(n)) {
          e.push(n);
        }
      }
    }
    return e;
  };
  AutoFillOptions.prototype.getActiveUnitFilter = function () {
    var e = [];
    if (AutoFillOptions.UNIT_FILTER_TYPES != null) {
      for (var t = 0, i = AutoFillOptions.UNIT_FILTER_TYPES; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && this.isUnitFilterActive(n)) {
          e.push(n);
        }
      }
    }
    return e;
  };
  AutoFillOptions.prototype.isAnyFlankActive = function () {
    return this.fillLeftFlank || this.fillMiddleFlank || this.fillRightFlank;
  };
  Object.defineProperty(AutoFillOptions.prototype, "fillLeftFlank", {
    get: function () {
      return this._fillLeftFlank;
    },
    set: function (e) {
      this._fillLeftFlank = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoFillOptions.prototype, "fillMiddleFlank", {
    get: function () {
      return this._fillMiddleFlank;
    },
    set: function (e) {
      this._fillMiddleFlank = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoFillOptions.prototype, "fillRightFlank", {
    get: function () {
      return this._fillRightFlank;
    },
    set: function (e) {
      this._fillRightFlank = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoFillOptions.prototype, "fillCurrentWave", {
    get: function () {
      return this._fillCurrentWave;
    },
    set: function (e) {
      this._fillCurrentWave = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoFillOptions.prototype, "toolFilter", {
    get: function () {
      return this._toolFilter;
    },
    set: function (e) {
      this._toolFilter = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoFillOptions.prototype, "unitFilter", {
    get: function () {
      return this._unitFilter;
    },
    set: function (e) {
      this._unitFilter = e;
    },
    enumerable: true,
    configurable: true
  });
  AutoFillOptions.TOOL_FILTER_BASIC = "basic";
  AutoFillOptions.TOOL_FILTER_PREMIUM = "premium";
  AutoFillOptions.TOOL_FILTER_ELITE = "elite";
  AutoFillOptions.TOOL_FILTER_EVENT = "event";
  AutoFillOptions.TOOL_FILTER_COMBO = "combo";
  AutoFillOptions.UNIT_FILTER_MELEE = "melee";
  AutoFillOptions.UNIT_FILTER_RANGE = "range";
  AutoFillOptions.UNIT_FILTER_C1 = "c1";
  AutoFillOptions.UNIT_FILTER_C2 = "c2";
  AutoFillOptions.UNIT_FILTER_MEAD = "mead";
  AutoFillOptions.UNIT_FILTER_BEEF = "beef";
  AutoFillOptions.UNIT_FILTER_TYPES = [AutoFillOptions.UNIT_FILTER_MELEE, AutoFillOptions.UNIT_FILTER_RANGE, AutoFillOptions.UNIT_FILTER_C1, AutoFillOptions.UNIT_FILTER_C2, AutoFillOptions.UNIT_FILTER_MEAD, AutoFillOptions.UNIT_FILTER_BEEF];
  AutoFillOptions.TOOL_FILTER_TYPES = [AutoFillOptions.TOOL_FILTER_BASIC, AutoFillOptions.TOOL_FILTER_PREMIUM, AutoFillOptions.TOOL_FILTER_ELITE, AutoFillOptions.TOOL_FILTER_EVENT, AutoFillOptions.TOOL_FILTER_COMBO];
  return AutoFillOptions;
}();
exports.AutoFillOptions = o;