Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./760.js");
var r = require("./622.js");
var l = require("./1032.js");
var c = require("./30.js");
var u = require("./15.js");
var d = require("./4.js");
var p = function (e) {
  function UnitPackageList(t) {
    var i = this;
    i._listId = 0;
    i._checkRemaingSlotTime = false;
    i._activeSlotIndex = 0;
    i._lockedSlots = 0;
    i._recruitmentMode = 0;
    i._remainingSecondsForProduction = 0;
    i.isNotKeepingCurrentRecruitmentTrack = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._listId = t;
    return i;
  }
  n.__extends(UnitPackageList, e);
  UnitPackageList.prototype.parseList = function (e, t = 1) {
    this._waitForUpdate = false;
    this._slots = [];
    if (e) {
      this._freeSlots = 0;
      this._useableSlots = 0;
      this._lockedSlots = 0;
      this._checkRemaingSlotTime = false;
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        var o = this.createSlotVO();
        o.fillFromParamArray(n);
        o.pos = i;
        if (o.isFree) {
          this._freeSlots++;
        }
        if (o.isLocked) {
          this._lockedSlots++;
        } else {
          this._useableSlots++;
        }
        if (o.timeTillLocked > 0) {
          this._checkRemaingSlotTime = true;
          this._nextUpdateInterval = c.CachedTimer.getCachedTimer() + this._updateInterval;
        }
        this._slots.push(o);
      }
      this._slotsInUse = this._useableSlots - this._freeSlots;
      u.CastleBasicController.getInstance().dispatchEvent(new l.UnitPackageListEvent(l.UnitPackageListEvent.PACKAGE_UPDATE));
    }
  };
  UnitPackageList.prototype.parseCurrentProductionSlot = function (e) {
    this._currentProductionSlot = this.createSlotVO();
    this._currentProductionSlot.initProductionSlot();
    this._currentProductionSlot.fillFromParamObject(e);
  };
  UnitPackageList.prototype.parseMilitaryList = function (e) {
    this._waitForUpdate = false;
    this._slots = [];
    if (e) {
      this._freeSlots = 0;
      this._useableSlots = 0;
      this._lockedSlots = 0;
      this._checkRemaingSlotTime = false;
      for (var t = 0; t < e.length; t++) {
        var i = e[t];
        var n = this.createSlotVO();
        n.fillFromParamObject(i);
        n.pos = t;
        n.isCurrentlyRecruiting = false;
        if (n.isFree) {
          this._freeSlots++;
        }
        if (n.isLocked) {
          this._lockedSlots++;
        } else {
          this._useableSlots++;
        }
        if (n.timeTillLocked > 0) {
          this._checkRemaingSlotTime = true;
          this._nextUpdateInterval = c.CachedTimer.getCachedTimer() + this._updateInterval;
        }
        this._slots.push(n);
      }
      this._slotsInUse = this._useableSlots - this._freeSlots;
      u.CastleBasicController.getInstance().dispatchEvent(new l.UnitPackageListEvent(l.UnitPackageListEvent.PACKAGE_UPDATE));
    }
  };
  UnitPackageList.prototype.createSlotVO = function () {
    if (this.listId == a.UnitProductionConst.HOSPITAL_LIST) {
      return new h.UnitHealPackageSlotVO();
    } else {
      return new g.UnitPackageSlotVO();
    }
  };
  UnitPackageList.prototype.playerCanBuyNextSlot = function () {
    return d.CastleModel.currencyData.c2Amount >= d.CastleModel.costsData.getFinalCostsC2(a.UnitProductionConst.UNLOCK_C2);
  };
  UnitPackageList.prototype.allSlotsBought = function () {
    return this._useableSlots >= a.UnitProductionConst.MAX_SLOTS;
  };
  UnitPackageList.prototype.executeUpdate = function (e) {
    if (this._slots != null) {
      for (var t = 0, i = this._slots; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (e > n.lockTimestamp && n.isFree) {
            this.getFreshBuildListFromServer();
            this._checkRemaingSlotTime = false;
            return;
          }
          if (n.isCurrentlyRecruiting && !this._waitForUpdate) {
            n.update();
          }
        }
      }
    }
  };
  UnitPackageList.prototype.getFreshBuildListFromServer = function () {
    d.CastleModel.smartfoxClient.sendCommandVO(new r.C2SShowPackageListVO(this._listId));
    d.CastleModel.smartfoxClient.sendCommandVO(new s.C2SBoosterInfoVO());
  };
  Object.defineProperty(UnitPackageList.prototype, "listId", {
    get: function () {
      return this._listId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageList.prototype, "activeSlotIndex", {
    get: function () {
      return this._activeSlotIndex;
    },
    set: function (e) {
      this._activeSlotIndex = e;
      this.updateSlotState();
    },
    enumerable: true,
    configurable: true
  });
  UnitPackageList.prototype.updateSlotState = function () {
    if (!this.isNotKeepingCurrentRecruitmentTrack) {
      for (var e = 0; e < this._slots.length; e++) {
        this._slots[e].isCurrentlyRecruiting = e == this._activeSlotIndex;
      }
    }
  };
  Object.defineProperty(UnitPackageList.prototype, "numFreeSlots", {
    get: function () {
      return this._freeSlots;
    },
    enumerable: true,
    configurable: true
  });
  UnitPackageList.prototype.meetsLoopingRequirements = function () {
    if (this.slotsInUse == 0) {
      return false;
    }
    var e = true;
    if (this._slots != null) {
      for (var t = 0, i = this._slots; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (n.isLocked || n.isFree || !e) {
            break;
          }
          e = n.hasLoopableUnitAmount;
        }
      }
    }
    return e;
  };
  Object.defineProperty(UnitPackageList.prototype, "lockedSlots", {
    get: function () {
      return this._lockedSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageList.prototype, "currentProductionSlot", {
    get: function () {
      return this._currentProductionSlot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageList.prototype, "recruitmentMode", {
    get: function () {
      return this._recruitmentMode;
    },
    set: function (e) {
      this._recruitmentMode = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageList.prototype, "remainingSecondsForProduction", {
    get: function () {
      return this._remainingSecondsForProduction;
    },
    set: function (e) {
      this._remainingSecondsForProduction = e;
    },
    enumerable: true,
    configurable: true
  });
  return UnitPackageList;
}(require("./1948.js").BasicBuildList);
exports.UnitPackageList = p;
var h = require("./5563.js");
var g = require("./1962.js");
o.classImplementsInterfaces(p, "IUpdatable", "IBuildList");