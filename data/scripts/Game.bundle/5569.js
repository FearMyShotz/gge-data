Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleUnitsVO() {
    this._unlockedSoldiers = [];
    this._lockedSoldiers = [];
    this._unlockedTools = [];
    this._lockedTools = [];
    this._eventTools = [];
    this._eventPackages = [];
    this._bufferedFighscreenTools = [];
  }
  CastleUnitsVO.prototype.parseParamObject = function (e) {
    this._unlockedSoldiers = [];
    this._unlockedAuxiliaries = [];
    this._unlockedTools = [];
    this._lockedSoldiers = [];
    this._lockedAuxiliaries = [];
    this._lockedTools = [];
    if (e) {
      var t;
      var i;
      for (var n = 0, s = e.U; n < s.length; n++) {
        var c = s[n];
        if (c !== undefined) {
          t = r.castAs(h.CastleModel.wodData.voSubList(a.CastleWodData.TYPE_UNIT).get(c), "BasicUnitVO");
          if (l.instanceOfClass(t, "SoldierUnitVO")) {
            if (t.isAuxiliary) {
              this._unlockedAuxiliaries.push(t);
            } else {
              this._unlockedSoldiers.push(t);
            }
          } else if (l.instanceOfClass(t, "ToolUnitVO")) {
            this._unlockedTools.push(t);
          }
        }
      }
      for (var u = 0, g = e.L; u < g.length; u++) {
        var C = g[u];
        if (C !== undefined) {
          i = r.castAs(h.CastleModel.wodData.voSubList(a.CastleWodData.TYPE_UNIT).get(C), "BasicUnitVO");
          if (l.instanceOfClass(i, "SoldierUnitVO")) {
            if (i.isAuxiliary) {
              this._lockedAuxiliaries.push(i);
            } else {
              this._lockedSoldiers.push(i);
            }
          }
          if (l.instanceOfClass(i, "ToolUnitVO")) {
            this._lockedTools.push(i);
          }
        }
      }
      this._unlockedSoldiers.sort(o.ClientConstSort.sortByUnitSortOrderRecruit);
      this._unlockedAuxiliaries.sort(o.ClientConstSort.sortByUnitSortOrderRecruit);
      this._lockedSoldiers.sort(o.ClientConstSort.sortByUnitSortOrderRecruit);
      this._lockedAuxiliaries.sort(o.ClientConstSort.sortByUnitSortOrderRecruit);
      this._unlockedTools.sort(o.ClientConstSort.sortByUnitSortOrderRecruit);
      this._lockedTools.sort(o.ClientConstSort.sortByUnitSortOrderRecruit);
      p.CastleBasicController.getInstance().dispatchEvent(new d.CastleMilitaryDataEvent(d.CastleMilitaryDataEvent.INVENTORY_UPDATED));
      this.updateEventTools();
    }
  };
  CastleUnitsVO.prototype.updateEventTools = function () {
    this._eventTools = [];
    this._eventPackages = [];
    for (var e = [c.EventConst.EVENTTYPE_ARMORER, c.EventConst.EVENTTYPE_UNITDEALER_BERIMOND, c.EventConst.EVENTTYPE_UNITDEALER_FACTION_INVASION, c.EventConst.EVENTTYPE_NOMADHUNTER, c.EventConst.EVENTTYPE_UNITDEALER_SAMURAI, c.EventConst.EVENTTYPE_UNITDEALER_ISLAND], t = 0; t < e.length; ++t) {
      this.addRunningPackageEventToEventToolsList(e[t]);
    }
    this.invalidateFighscreenToolsList();
  };
  CastleUnitsVO.prototype.addRunningPackageEventToEventToolsList = function (e) {
    var t = r.castAs(h.CastleModel.specialEventData.getActiveEventByEventId(e), "BuyPackagesEventVO");
    if (t) {
      var i = t.getVisiblePackages(h.CastleModel.userData.userLevel, h.CastleModel.userData.userLegendLevel, 0);
      if (i != null) {
        for (var n = 0, o = i; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined) {
            for (var s = 0, c = a.rewards.list; s < c.length; s++) {
              var u = c[s];
              if (u !== undefined) {
                var d = l.instanceOfClass(u, "CollectableItemUnitVO") ? u.unitVO : null;
                if (d) {
                  this._eventTools.push(d);
                  this._eventPackages.push(a);
                }
              }
            }
          }
        }
      }
    }
  };
  CastleUnitsVO.prototype.invalidateFighscreenToolsList = function () {
    this._bufferedFighscreenTools = null;
  };
  CastleUnitsVO.prototype.createFightscreenToolsList = function () {
    var e = [].concat(this._unlockedTools);
    var t = false;
    var i = 0;
    for (var n = 0; n < this._eventTools.length; ++n) {
      i = u.int(this._eventTools[n].wodId);
      t = false;
      for (var o = 0; o < e.length; ++o) {
        if (i == e[o].wodId) {
          t = true;
          break;
        }
      }
      if (!t) {
        e.push(this._eventTools[n]);
      }
    }
    return e;
  };
  CastleUnitsVO.prototype.isLocked = function (e) {
    return this._lockedSoldiers.indexOf(e) > -1 || this._lockedTools.indexOf(e) > -1;
  };
  CastleUnitsVO.prototype.isLockedByWodId = function (e) {
    for (var t = 0, i = this._lockedSoldiers; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.wodId == e) {
        return true;
      }
    }
    for (var o = 0, a = this._lockedTools; o < a.length; o++) {
      var s = a[o];
      if (s !== undefined && s.wodId == e) {
        return true;
      }
    }
    return false;
  };
  CastleUnitsVO.prototype.isUnlocked = function (e) {
    return this._unlockedSoldiers.indexOf(e) > -1 || this._unlockedTools.indexOf(e) > -1;
  };
  CastleUnitsVO.prototype.getUnlockedSoldiersByUnitType = function (e, t = true, i = false, n = false) {
    return this.getFilteredListByUnitType(this._unlockedSoldiers, e, t, i, n);
  };
  CastleUnitsVO.prototype.getLockedSoldiersByUnitType = function (e, t = true, i = false, n = false) {
    return this.getFilteredListByUnitType(this._lockedSoldiers, e, t, i, n);
  };
  CastleUnitsVO.prototype.getUnlockedToolsByUnitType = function (e) {
    return this.getFilteredListByUnitType(this._unlockedTools, e, true, false);
  };
  CastleUnitsVO.prototype.getLockedToolsByUnitType = function (e) {
    return this.getFilteredListByUnitType(this._lockedTools, e, true, false);
  };
  CastleUnitsVO.prototype.getWorkshopToolsByUnitType = function (e) {
    var t = this.unlockedTools.concat(this.lockedTools);
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (a.unitType == e && (a.unitBuildingType == s.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP || a.unitBuildingType == s.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP)) {
            i.push(a);
          }
        }
      }
    }
    return i;
  };
  CastleUnitsVO.prototype.getFightscreenToolsByUnitType = function (e) {
    return this.getFilteredListByUnitType(this.getFightscreenTools(), e, true, false);
  };
  CastleUnitsVO.prototype.getFilteredListByUnitType = function (e, t, i = true, n = false, o = false) {
    var a = [];
    if (e != null) {
      for (var s = 0, r = e; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined && l.unitType == t) {
          if (l) {
            if (i || n && l.meadSupply > 0 || !n && l.foodSupply) {
              a.push(l);
            } else if (i || o && l.beefSupply > 0 || !o && l.foodSupply) {
              a.push(l);
            }
          } else {
            a.push(l);
          }
        }
      }
    }
    return a;
  };
  Object.defineProperty(CastleUnitsVO.prototype, "eventTools", {
    get: function () {
      return this._eventTools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "unlockedSoldiers", {
    get: function () {
      return this._unlockedSoldiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "unlockedAuxiliaries", {
    get: function () {
      return this._unlockedAuxiliaries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "lockedSoldiers", {
    get: function () {
      return this._lockedSoldiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "lockedAuxiliaries", {
    get: function () {
      return this._lockedSoldiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "unlockedTools", {
    get: function () {
      return this._unlockedTools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitsVO.prototype, "lockedTools", {
    get: function () {
      return this._lockedTools;
    },
    enumerable: true,
    configurable: true
  });
  CastleUnitsVO.prototype.getFightscreenTools = function () {
    if (h.CastleModel.userData.level == 6) {
      this.updateEventTools();
    }
    if (!this._bufferedFighscreenTools || h.CastleModel.userData.level == 6) {
      this._bufferedFighscreenTools = this.createFightscreenToolsList();
    }
    return this._bufferedFighscreenTools;
  };
  CastleUnitsVO.prototype.getAssociatedEventPackage = function (e) {
    if (this._eventPackages != null) {
      for (var t = 0, i = this._eventPackages; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          for (var o = 0, a = n.rewards.list; o < a.length; o++) {
            var s = a[o];
            if (s !== undefined && l.instanceOfClass(s, "CollectableItemUnitVO") && s.unitVO && e == s.unitVO.wodId) {
              return n;
            }
          }
        }
      }
    }
    return null;
  };
  CastleUnitsVO.prototype.onSpecialEventUpdated = function () {
    this.updateEventTools();
  };
  return CastleUnitsVO;
}();
exports.CastleUnitsVO = n;
var o = require("./75.js");
var a = require("./56.js");
var s = require("./18.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./6.js");
var d = require("./129.js");
var p = require("./15.js");
var h = require("./4.js");