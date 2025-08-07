Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./496.js");
var p = require("./54.js");
var h = require("./4.js");
var g = createjs.TimerEvent;
var C = function (e) {
  function ConstructionItemData(t = null) {
    var i = this;
    i._constructionItems = new Map();
    i._ciEnabledBuildings = new Map();
    i._effectGroupLimits = new Map();
    i._constructionItemGroups = new Map();
    i._craftingSeconds = 0;
    i._inventorySpaceLeft = 0;
    i._dissassemblingTombolas = new Map();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._playerInventory = new _.CollectableList();
    i.parseFromXML(t);
    i._inventorySpaceLeft = c.int(r.ConstructionItemConst.INVENTORY_SOFTCAP);
    i._nextExpirationTimer = new s.Timer(0);
    return i;
  }
  n.__extends(ConstructionItemData, e);
  ConstructionItemData.prototype.reset = function () {
    if (this._nextExpirationTimer) {
      this._nextExpirationTimer.removeEventListener(g.TIMER_COMPLETE, this.bindFunction(this.onCIExpiration));
    }
  };
  ConstructionItemData.prototype.parseFromXML = function (e) {
    for (var t = 0, i = e.constructionItems; t < i.length; t++) {
      var n = i[t];
      if (n) {
        var o = new O.ConstructionItemVO(n);
        this._constructionItems.set(o.id, o);
        if (this._constructionItemGroups.get(o.groupId)) {
          this._constructionItemGroups.get(o.groupId).push(o);
        } else {
          this._constructionItemGroups.set(o.groupId, [o]);
        }
      }
    }
    this._ciEnabledBuildings.set(u.ClientConstCastle.BUILDINGGROUND_TYPE_NONE, new Map());
    this.createItemGroups();
    for (var a = 0, s = e.constructionItemsEffectGroups; a < s.length; a++) {
      var r = s[a];
      if (r != null) {
        var l = parseInt(r.constructionItemEffectGroupID || "");
        this._effectGroupLimits.set(l, parseInt(r.areaLimit || ""));
      }
    }
    for (var c = 0, d = e.constructionItemDisassemblingTombolas; c < d.length; c++) {
      var p = d[c];
      if (p) {
        var h = new D.ConstructionItemDisassemblingTombolaVO();
        h.parseXML(p);
        if (this._dissassemblingTombolas.get(h.tombolaID)) {
          this._dissassemblingTombolas.get(h.tombolaID).push(h);
        } else {
          this._dissassemblingTombolas.set(h.tombolaID, [h]);
        }
      }
    }
  };
  ConstructionItemData.prototype.createItemGroups = function () {
    var e = new Map();
    for (var t = 0, i = Array.from(h.CastleModel.wodData.voSubList(f.CastleWodData.TYPE_BUILDING).values()); t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var a = o.castAs(n, "ABasicBuildingVO");
        if (a && a.constructionItemGroupIds.length > 0) {
          for (var s = 0, r = a.constructionItemGroupIds; s < r.length; s++) {
            var l = r[s];
            if (l !== undefined) {
              var c = e.get(l);
              if (!c) {
                e.set(l, c = []);
              }
              c.push(a);
            }
          }
          if (!this._ciEnabledBuildings.get(a.buildingGroundType)) {
            this._ciEnabledBuildings.set(a.buildingGroundType, new Map());
          }
          if (!this._ciEnabledBuildings.get(a.buildingGroundType).has(a.name)) {
            this._ciEnabledBuildings.get(a.buildingGroundType).set(a.name, a);
          }
          if (!this._ciEnabledBuildings.get(u.ClientConstCastle.BUILDINGGROUND_TYPE_NONE).has(a.name)) {
            this._ciEnabledBuildings.get(u.ClientConstCastle.BUILDINGGROUND_TYPE_NONE).set(a.name, a);
          }
        }
      }
    }
    if (this._constructionItems != null) {
      for (var d = 0, p = Array.from(this._constructionItems.values()); d < p.length; d++) {
        var g = p[d];
        if (g !== undefined) {
          g.applicableBuildings = e.get(g.groupId);
        }
      }
    }
    if (this._ciEnabledBuildings != null) {
      for (var C = 0, _ = Array.from(this._ciEnabledBuildings.keys()); C < _.length; C++) {
        var m = _[C];
        if (m !== undefined) {
          var O = [];
          for (var E = 0, y = Array.from(this._ciEnabledBuildings.get(m).values()); E < y.length; E++) {
            var b = y[E];
            if (b !== undefined) {
              O.push(b);
            }
          }
          O.sort(ConstructionItemData.sortByName);
          this._ciEnabledBuildings.set(m, O);
        }
      }
    }
  };
  ConstructionItemData.sortByName = function (e, t) {
    var i = c.int(l.Localize.text(e.getNameString()).localeCompare(l.Localize.text(t.getNameString())));
    if (i != 0) {
      return i;
    } else {
      return 0;
    }
  };
  ConstructionItemData.prototype.getCIEnabledBuildings = function (e = u.ClientConstCastle.BUILDINGGROUND_TYPE_NONE) {
    return this._ciEnabledBuildings.get(e);
  };
  ConstructionItemData.prototype.getConstructionItemVO = function (e) {
    return this._constructionItems.get(e);
  };
  ConstructionItemData.prototype.getPlayerInventory = function (e = null) {
    if (e) {
      return this._playerInventory.filter(e);
    } else {
      return this._playerInventory;
    }
  };
  ConstructionItemData.prototype.hasConstructionItem = function (e) {
    for (var t = 0, i = this._playerInventory.list; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.id == e) {
        return true;
      }
    }
    return false;
  };
  ConstructionItemData.prototype.getConstructionItemVOById = function (e) {
    for (var t = 0, i = this._playerInventory.list; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.id == e) {
        return n;
      }
    }
    return null;
  };
  ConstructionItemData.prototype.getPlayerInventoryBySlotTypeAndBuilding = function (e = ConstructionItemData.ALL_SLOTS, t = null, i = "", n = 0, o = -1) {
    return this.getPlayerInventory(this.getItemFilterBySlotType(e, t, i, n, o));
  };
  ConstructionItemData.prototype.getItemFilterBySlotType = function (e, t = null, i = "", n = 0, o = -1) {
    return function (a) {
      var s = [];
      for (var r = 1; r < arguments.length; r++) {
        s[r - 1] = arguments[r];
      }
      var l = true;
      if (i != "") {
        l = false;
        for (var c = 0, u = a.constructionItemVO.applicableBuildings; c < u.length; c++) {
          var d = u[c];
          if (d !== undefined && d.buildingGroundType == i) {
            l = true;
          }
        }
      }
      return !!a && (a.constructionItemVO.slotType == e || e == ConstructionItemData.ALL_SLOTS) && (!t || t.constructionItemGroupIds.indexOf(a.constructionItemVO.groupId) > -1) && l && (n == 0 || a.constructionItemVO.effectsAmount == n) && (o == -1 || a.constructionItemVO.rarity == o);
    };
  };
  ConstructionItemData.prototype.updateInventory = function (e) {
    this._playerInventory.clear();
    var t = 0;
    for (var i = 0, n = e.CI; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        this._playerInventory.addItem(new m.CollectableItemConstructionItemVO(o[0], o[1]));
        t += o[1];
      }
    }
    this._inventorySpaceLeft = c.int(r.ConstructionItemConst.INVENTORY_SOFTCAP - t);
    this.dispatchEvent(new d.CastleConstructionItemsEvent(d.CastleConstructionItemsEvent.INVENTORY_UPDATED));
    this.dispatchEvent(new d.CastleConstructionItemsEvent(d.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED));
  };
  ConstructionItemData.prototype.parse_CSP = function (e) {
    if (e) {
      this._inventorySpaceLeft = parseInt(e.C);
      this.dispatchEvent(new d.CastleConstructionItemsEvent(d.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED));
    }
  };
  Object.defineProperty(ConstructionItemData.prototype, "isInventoryFull", {
    get: function () {
      return this._inventorySpaceLeft <= 0;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemData.prototype.getLimitByEffectGroup = function (e) {
    return c.int(this._effectGroupLimits.get(e) ? this._effectGroupLimits.get(e) : 0);
  };
  ConstructionItemData.prototype.getNextLevelItem = function (e) {
    return this.checkCandidates(e, 1);
  };
  ConstructionItemData.prototype.getPreviousLevelItem = function (e) {
    return this.checkCandidates(e, -1);
  };
  ConstructionItemData.prototype.checkCandidates = function (e, t) {
    if (!e) {
      return null;
    }
    var i = this._constructionItems.get(e.id + t);
    if (i && i.name == e.name && i.level == e.level + t) {
      return i;
    }
    if (!e.isAppearanceItem && this._constructionItems != null) {
      for (var n = 0, o = this.getConstructionItemGroup(e.groupId); n < o.length; n++) {
        if ((i = o[n]) !== undefined && i && i.name == e.name && i.level == e.level + t) {
          return i;
        }
      }
    }
    return null;
  };
  Object.defineProperty(ConstructionItemData.prototype, "totalCraftingTime", {
    get: function () {
      if (this._craftingRecipe) {
        return this._craftingRecipe.durationInSeconds;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemData.prototype, "craftingRecipe", {
    get: function () {
      return this._craftingRecipe;
    },
    set: function (e) {
      this._craftingRecipe = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemData.prototype, "craftingSeconds", {
    get: function () {
      if (this._craftingRecipe) {
        return this._craftingSeconds;
      } else {
        return -1;
      }
    },
    set: function (e) {
      this._craftingSeconds = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemData.prototype, "inventorySpaceLeft", {
    get: function () {
      return this._inventorySpaceLeft;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemData.prototype.parse_NEC = function (e) {
    this._nextExpirationTimer.stop();
    if (e.NCRS > -1) {
      this._nextExpirationTimestamp = y.CachedTimer.getCachedTimer() + e.NCRS * E.ClientConstTime.SEC_2_MILLISEC;
      this._nextExpirationTimer.delay = e.NCRS * E.ClientConstTime.SEC_2_MILLISEC;
      this._nextExpirationTimer.repeatCount = 1;
      this._nextExpirationTimer.start();
      this._nextExpirationTimer.addEventListener(g.TIMER_COMPLETE, this.bindFunction(this.onCIExpiration));
    }
    this._lastExpirationTimestamp = e.LECT;
    this.dispatchEvent(new d.CastleConstructionItemsEvent(d.CastleConstructionItemsEvent.NEC_RECEIVED));
  };
  ConstructionItemData.prototype.parse_AEC = function (e) {
    var t;
    this._expiredAreas = [];
    for (var i = 0; i < e.length; i++) {
      (t = new b.ConstructionItemExpiredAreaVO()).parseParams(e[i]);
      if (t.castleWMO) {
        this._expiredAreas.push(t);
      }
    }
    this.dispatchEvent(new d.CastleConstructionItemsEvent(d.CastleConstructionItemsEvent.AEC_RECEIVED));
  };
  ConstructionItemData.prototype.onCIExpiration = function (e) {
    h.CastleModel.smartfoxClient.sendCommandVO(new I.C2SGetNextExpiringConstructionItemVO());
    this._nextExpirationTimer.removeEventListener(g.TIMER_COMPLETE, this.bindFunction(this.onCIExpiration));
  };
  Object.defineProperty(ConstructionItemData.prototype, "expiredAreas", {
    get: function () {
      return this._expiredAreas || [];
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemData.prototype.getExpiredAreaVO = function (e) {
    if (this.expiredAreas) {
      for (var t = 0, i = this.expiredAreas; t < i.length; t++) {
        var n = i[t];
        if (n.castleWMO.equalsOtherWMO(e.objectId, e.kingdomID)) {
          return n;
        }
      }
    }
    return null;
  };
  ConstructionItemData.prototype.getDisassemblingTobola = function (e) {
    if (this._dissassemblingTombolas.get(e)) {
      return this._dissassemblingTombolas.get(e);
    } else {
      return [];
    }
  };
  ConstructionItemData.prototype.hasNewExpiredItems = function () {
    var e = h.CastleModel.localData.readPlayerValue(ConstructionItemData.LAST_EXPIRATION_TIMESTAMP_SEEN_KEY);
    return this._lastExpirationTimestamp > -1 && this._lastExpirationTimestamp > e;
  };
  ConstructionItemData.prototype.saveLastExpirationTimestampSeen = function () {
    h.CastleModel.localData.savePlayerValue(ConstructionItemData.LAST_EXPIRATION_TIMESTAMP_SEEN_KEY, this._lastExpirationTimestamp);
    this.dispatchEvent(new d.CastleConstructionItemsEvent(d.CastleConstructionItemsEvent.LAST_EXPIRATION_TIME_SAVED));
  };
  ConstructionItemData.prototype.getConstructionItemGroup = function (e) {
    if (this._constructionItemGroups.has(e)) {
      return this._constructionItemGroups.get(e);
    } else {
      return [];
    }
  };
  ConstructionItemData.ALL_SLOTS = -1;
  ConstructionItemData.LAST_EXPIRATION_TIMESTAMP_SEEN_KEY = "ciExpirationTimestamp_lastSeen";
  ConstructionItemData.MAX_EFFECTS_PER_CI = 3;
  return ConstructionItemData;
}(p.CastleBasicData);
exports.ConstructionItemData = C;
var _ = require("./48.js");
var m = require("./337.js");
var f = require("./56.js");
var O = require("./1435.js");
var E = require("./28.js");
var y = require("./30.js");
var b = require("./1436.js");
var D = require("./2624.js");
var I = require("./2625.js");
a.classImplementsInterfaces(C, "IUpdatable");