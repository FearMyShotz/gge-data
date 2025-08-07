Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./54.js");
var r = require("./4299.js");
var l = require("./4300.js");
var c = require("./1890.js");
var u = require("./4301.js");
var d = function (e) {
  function CastleLootBoxDataXML(t) {
    var i = e.call(this) || this;
    i._lootBoxes = new Map();
    i._lootBoxTypes = new Map();
    i._lootBoxTombolas = new Map();
    i._lootBoxKeyTombolas = new Map();
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleLootBoxDataXML, e);
  CastleLootBoxDataXML.prototype.parseXML = function (e) {
    for (var t = 0, i = e.lootBoxTypes; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = new c.LootBoxTypeVO();
        o.parseXML(n);
        this._lootBoxTypes.set(o.lootBoxTypeID, o);
      }
    }
    for (var a = 0, s = e.lootBoxes; a < s.length; a++) {
      var d = s[a];
      if (d !== undefined) {
        var p = new u.LootBoxVO();
        p.parseXML(d);
        this._lootBoxes.set(p.lootBoxID, p);
      }
    }
    for (var h = 0, g = e.lootBoxTombolas; h < g.length; h++) {
      var C = g[h];
      if (C !== undefined) {
        var _ = new l.LootBoxTombolaVO();
        _.parseXML(C);
        this._lootBoxTombolas.set(_.ID, _);
      }
    }
    for (var m = 0, f = e.lootBoxKeyTombolas; m < f.length; m++) {
      var O = f[m];
      if (O !== undefined) {
        var E = new r.LootBoxKeyTombolaVO();
        E.parseXML(O);
        this._lootBoxKeyTombolas.set(E.ID, E);
      }
    }
  };
  CastleLootBoxDataXML.prototype.getLootBoxByID = function (e) {
    return this._lootBoxes.get(e);
  };
  CastleLootBoxDataXML.prototype.getLootBoxTombolasByTombolaID = function (e) {
    var t = [];
    this._lootBoxTombolas.forEach(function (i) {
      if (i.lootBoxTombolaID == e) {
        t.push(i);
      }
    });
    return t;
  };
  CastleLootBoxDataXML.prototype.getLootBoxKeyTombolasByKeyTombolaID = function (e) {
    var t = [];
    this._lootBoxKeyTombolas.forEach(function (i) {
      if (i.lootBoxKeyTombolaID == e) {
        t.push(i);
      }
    });
    return t;
  };
  CastleLootBoxDataXML.prototype.getLootBoxTypeByID = function (e) {
    return this._lootBoxTypes.get(e);
  };
  CastleLootBoxDataXML.prototype.resetLootBoxTypeKeyProgress = function () {
    this._lootBoxTypes.forEach(function (e) {
      e.keyProgress = 0;
    });
  };
  CastleLootBoxDataXML.prototype.getMysteryBoxesByType = function (e) {
    var t = [];
    this._lootBoxes.forEach(function (i) {
      if (i.lootBoxTypeID == e) {
        t.push(i);
      }
    });
    return t;
  };
  CastleLootBoxDataXML.prototype.getHighestCategoryForRewards = function (e, t) {
    var i = this.getLootBoxTombolasByTombolaID(e);
    var n = new Map();
    n.set("Common", 1);
    n.set("Rare", 2);
    n.set("Epic", 3);
    n.set("Legendary", 4);
    var a;
    var s = 1;
    var r = "Common";
    i.forEach(function (e) {
      a = e;
      for (var i = 0; i < a.rewardIDs.length; i++) {
        for (var l = 0; l < t.length; l++) {
          if (a.rewardIDs[i] == t[l] && s < n.get(a.rewardCategory)) {
            s = n.get(a.rewardCategory);
            r = o.DictionaryUtil.getKeyForValue(n, s);
            break;
          }
        }
      }
    });
    return r;
  };
  return CastleLootBoxDataXML;
}(s.CastleBasicData);
exports.CastleLootBoxDataXML = d;
a.classImplementsInterfaces(d, "IUpdatable", "ICastleBasicData");