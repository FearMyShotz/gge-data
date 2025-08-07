Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function FightPresetVO() {
    this.index = 0;
    this.unlocked = false;
  }
  FightPresetVO.prototype.update = function (e) {
    this.name = e.SN || this.defaultName;
    if (e.A) {
      this.deserialize(e.A);
    }
  };
  FightPresetVO.prototype.reset = function () {
    this.name = this.defaultName;
    this.unlocked = false;
    this._units = [];
  };
  Object.defineProperty(FightPresetVO.prototype, "defaultName", {
    get: function () {
      return o.Localize.text("playerTitle_composition_prefix", ["dialog_troopPreset_preset_tt", this.humanReadableIndex]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetVO.prototype, "humanReadableIndex", {
    get: function () {
      return this.index + 1;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetVO.prototype.deserialize = function (e) {
    try {
      this._units = JSON.parse(e);
    } catch (e) {}
  };
  Object.defineProperty(FightPresetVO.prototype, "label", {
    get: function () {
      return o.Localize.text("commander_index", [this.humanReadableIndex, this.unlocked ? new a.TextVO(this.name) : FightPresetVO.TEXT_LOCKED]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetVO.prototype, "data", {
    get: function () {
      return this;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetVO.prototype, "unitsAsString", {
    get: function () {
      return JSON.stringify(this._units) || "";
    },
    enumerable: true,
    configurable: true
  });
  FightPresetVO.prototype.getUnitWodId = function (e, t) {
    var i = t << 1;
    if (this._units && this._units[e] && this._units[e][i] != null) {
      return s.int(this._units[e][i]);
    } else {
      return -1;
    }
  };
  FightPresetVO.prototype.getSupportTools = function () {
    if (this._units && this._units.length == 7) {
      return this._units[6];
    } else {
      return [-1, -1, -1];
    }
  };
  FightPresetVO.prototype.getUnitCount = function (e, t) {
    var i = 1 + (t << 1);
    if (this._units && this._units[e] && this._units[e][i] != null) {
      return s.int(this._units[e][i]);
    } else {
      return 0;
    }
  };
  FightPresetVO.prototype.setContentFromWave = function (e, t) {
    this._units = [];
    if (e) {
      for (var i = 0; i < e.flanks.length; i++) {
        for (var n = e.flanks[i], o = [], a = 0; a < n.items.length; a++) {
          var s = n.items[a];
          if (s.getWodId() != -1) {
            o.push(s.getWodId(), s.getAmount());
          }
        }
        this._units.push(o);
      }
    }
  };
  Object.defineProperty(FightPresetVO.prototype, "hasContent", {
    get: function () {
      return this._units != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetVO.prototype, "locked", {
    get: function () {
      return !this.unlocked;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetVO.TEXT_LOCKED = "dialog_troopPreset_presetLocked_tt";
  return FightPresetVO;
}();
exports.FightPresetVO = n;
var o = require("./3.js");
var a = require("./3.js");
var s = require("./6.js");