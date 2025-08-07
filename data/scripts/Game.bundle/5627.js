Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./5628.js");
var r = function (e) {
  function FightPresetData(t) {
    var i = this;
    i.onChange = new p.Signal();
    i._unlockedPresetsCount = 0;
    i.prices = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseXML(t);
    return i;
  }
  n.__extends(FightPresetData, e);
  FightPresetData.prototype.reset = function () {
    this._unlockedPresetsCount = 0;
    if (this.presets != null) {
      for (var e = 0, t = this.presets; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.reset();
        }
      }
    }
  };
  FightPresetData.prototype.parseXML = function (e) {
    for (var t = 0, i = e.attackSetupSlots; t < i.length; t++) {
      var n = i[t];
      if (n != undefined) {
        var o = parseInt(n.slotID || "");
        this.prices[o] = FightPresetData.parsePrice(n);
      }
    }
    this.resetPresetList();
  };
  FightPresetData.prototype.resetPresetList = function () {
    this._presets = [];
    for (var e = 0; e < this.prices.length; e++) {
      var t = new m.FightPresetVO();
      t.index = e;
      t.unlockPrice = this.prices[e];
      t.unlocked = false;
      this._presets[e] = t;
    }
  };
  FightPresetData.parsePrice = function (e) {
    var t = new u.CollectableList();
    for (var i = 0, n = l.ClientConstCollectable.GROUP_LIST_GOODS; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        var a = "cost" + c.CollectableHelper.getGoodsKeySuffix(o);
        var s = parseInt(C.CastleXMLUtils.getValueOrDefault(a, e, "0"));
        if (s > 0) {
          t.addItem(c.CollectableHelper.createVO(o, s));
        }
      }
    }
    return t;
  };
  Object.defineProperty(FightPresetData.prototype, "unlockedPresetsCount", {
    get: function () {
      return this._unlockedPresetsCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetData.prototype, "presets", {
    get: function () {
      return this._presets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetData.prototype, "totalPresetsCount", {
    get: function () {
      return this._presets.length;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetData.prototype.parsePresets = function (e) {
    var t = 0;
    for (var i = 0, n = e.S; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        var s = a.int(o.S);
        var r = this._presets[s];
        r.update(o);
        r.unlocked = true;
        t++;
      }
    }
    this._unlockedPresetsCount = t;
    this.onChange.dispatch();
  };
  Object.defineProperty(FightPresetData.prototype, "multiWaveUnlocked", {
    get: function () {
      return this._presets.length > 0 && !!this._presets[0].unlocked;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetData.prototype.loadDataFromServer = function () {
    _.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetPreDefinedAttackSetupVO());
  };
  FightPresetData.prototype.savePresetArmy = function (e) {
    _.CastleModel.smartfoxClient.sendCommandVO(new g.C2SUpdatePreDefinedAttackSetupVO(e));
  };
  FightPresetData.prototype.savePresetName = function (e) {
    _.CastleModel.smartfoxClient.sendCommandVO(new s.C2SUpdatePresetNameVO(e));
  };
  FightPresetData.prototype.handlePresetUpdated = function () {
    this.onChange.dispatch();
  };
  FightPresetData.prototype.unlockPreset = function (e) {
    _.CastleModel.smartfoxClient.sendCommandVO(new h.C2SUnlockPreDefinedAttackSetupVO(e.index));
  };
  FightPresetData.prototype.handleSuccessfullyUnlocked = function () {
    var e = this._presets[this._unlockedPresetsCount];
    e.unlocked = true;
    e.name = e.defaultName;
    this._unlockedPresetsCount++;
    this.onChange.dispatch();
  };
  return FightPresetData;
}(require("./54.js").CastleBasicData);
exports.FightPresetData = r;
var l = require("./86.js");
var c = require("./45.js");
var u = require("./48.js");
var d = require("./5629.js");
var p = require("./57.js");
var h = require("./5630.js");
var g = require("./5631.js");
var C = require("./22.js");
var _ = require("./4.js");
var m = require("./5632.js");
o.classImplementsInterfaces(r, "IUpdatable", "ICastleBasicData");