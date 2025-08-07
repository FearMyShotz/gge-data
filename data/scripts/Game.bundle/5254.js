Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./1948.js");
var d = require("./5255.js");
var p = require("./142.js");
var h = require("./5256.js");
var g = require("./111.js");
var C = require("./71.js");
var _ = function (e) {
  function AreaDataConstructionList() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._numConstructionSlots = 1;
    return t;
  }
  n.__extends(AreaDataConstructionList, e);
  Object.defineProperty(AreaDataConstructionList.prototype, "areaData", {
    get: function () {
      return this._areaData;
    },
    enumerable: true,
    configurable: true
  });
  AreaDataConstructionList.prototype.init = function (e) {
    this._areaData = this.areaData;
  };
  AreaDataConstructionList.prototype.parseList = function (e, t = 1) {
    this._waitForUpdate = false;
    this._slots = [];
    this._numConstructionSlots = t;
    if (e) {
      this._freeSlots = 0;
      this._useableSlots = 0;
      for (var i = 0; i < e.length; i++) {
        var n = new d.ConstructionSlotVO();
        n.objectId = s.int(e[i]);
        n.pos = i;
        if (n.isFree) {
          this._freeSlots++;
        }
        if (!n.isLocked) {
          this._useableSlots++;
        }
        if (n.isLocked && n.pos < t) {
          n.isLockedProductionSlot = true;
        }
        this._slots.push(n);
      }
      this._slotsInUse = this._useableSlots - this._freeSlots;
    }
  };
  AreaDataConstructionList.prototype.parseSCL = function (e) {
    this.parseList(e.OIDL, e.SSC ? e.SSC : 1);
    l.CastleBasicController.getInstance().dispatchEvent(new C.AreaDataEvent(C.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED));
    this.executeQueuedCommand();
  };
  AreaDataConstructionList.prototype.executeQueuedCommand = function () {
    if (this._queuedCommandVO) {
      c.CastleModel.smartfoxClient.sendCommandVO(this._queuedCommandVO.command);
      this._queuedCommandVO = null;
    } else if (this._storedQueuedCommandVO) {
      this.setQueuedBuildingConstructionCommand();
    }
  };
  AreaDataConstructionList.prototype.setQueuedBuildingConstructionCommand = function (e = null, t = 0) {
    this._queuedCommandVO = new h.QueuedBuildingConstructionCommandVO(e, t);
  };
  Object.defineProperty(AreaDataConstructionList.prototype, "craneBuilding", {
    get: function () {
      if (c.CastleModel.areaData.activeArea.isMyArea && this.areaCraneBuildingVO) {
        return O.Iso.renderer.objects.provider.getObjectById(this.areaCraneBuildingVO.objectId);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "numBuildingsInWaitingQueue", {
    get: function () {
      var e = 0;
      for (var t = 0; t < this._slots.length; t++) {
        if (t > this._numConstructionSlots && this._slots[t].objectId > 0) {
          e++;
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "buildersBuilding", {
    get: function () {
      if (c.CastleModel.areaData.activeArea.isMyArea && this.areaBuildersBuildingVO) {
        return O.Iso.renderer.objects.provider.getObjectById(this.areaBuildersBuildingVO.objectId);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "isCraneBuilt", {
    get: function () {
      return this.areaCraneBuildingVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "isBuildersQuartersBuilt", {
    get: function () {
      return this.areaBuildersBuildingVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "isCraneUnderConstruction", {
    get: function () {
      var e = this.areaCraneBuildingVO;
      return !!e && e.buildingState.isUnderConstruction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "isBuildersQuartersUnderConstruction", {
    get: function () {
      var e = this.areaBuildersBuildingVO;
      return !!e && e.buildingState.isUnderConstruction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "numConstructionSlots", {
    get: function () {
      return this._numConstructionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "isDiscountActive", {
    get: function () {
      return c.CastleModel.wodData.getBuildingVOById(r.ClientConstCastle.CRANE_BUILDING_WOD_LEVEL1).isLowLevelMainCastleCost2Boosted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "discount", {
    get: function () {
      return c.CastleModel.wodData.getBuildingVOById(r.ClientConstCastle.CRANE_BUILDING_WOD_LEVEL1).lowLevelMainCastleCost2Discount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "lastDiscountLevel", {
    get: function () {
      return c.CastleModel.wodData.getBuildingVOById(r.ClientConstCastle.CRANE_BUILDING_WOD_LEVEL1).lastLowLevelMainCastleCost2Level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "nextAllowedCraneLevelRequirement", {
    get: function () {
      var e = this.areaCraneBuildingVO;
      if (e) {
        if (e.buildingState.isFunctionally) {
          var t = e.getUpgradeVO();
          if (t) {
            return t.requiredLevel;
          } else {
            return -1;
          }
        }
        return e.requiredLevel;
      }
      var i = c.CastleModel.wodData.voSubList(m.CastleWodData.TYPE_BUILDING).get(r.ClientConstCastle.BUILDERS_QUARTERS_BUILDING_WOD_LEVEL1);
      if (i) {
        return i.requiredLevel;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "nextAllowedBuildersLevelRequirement", {
    get: function () {
      var e = this.areaBuildersBuildingVO;
      if (e) {
        if (e.buildingState.isFunctionally) {
          var t = e.getUpgradeVO();
          if (t) {
            return t.requiredLevel;
          } else {
            return -1;
          }
        }
        return e.requiredLevel;
      }
      var i = c.CastleModel.wodData.voSubList(m.CastleWodData.TYPE_BUILDING).get(r.ClientConstCastle.BUILDERS_QUARTERS_BUILDING_WOD_LEVEL1);
      if (i) {
        return i.requiredLevel;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  AreaDataConstructionList.prototype.getEffectValue = function (e, t) {
    t = t || p.CastleEffectConditionVO.NULL_CONDITION;
    var i = g.CastleEffectsHelper.getTotalEffectValue(this.getBonusVOsByType(e, t));
    return i || new e.valueClass();
  };
  AreaDataConstructionList.prototype.getBonusVOsByType = function (e, t) {
    t = t || p.CastleEffectConditionVO.NULL_CONDITION;
    var i = [];
    var n = O.Iso.data.areaData.isoData.objects.getCompleteObjectsList();
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          var r = s;
          if (r && (r.hasConstructionItemSlots || r.hasModernEffects)) {
            i = i.concat(r.getBonusVOsByType(e, t, false));
          }
        }
      }
    }
    return i;
  };
  Object.defineProperty(AreaDataConstructionList.prototype, "areaCraneBuildingVO", {
    get: function () {
      return O.Iso.data.objects.provider.getObjectByType(f.IsoObjectEnum.CRANE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataConstructionList.prototype, "areaBuildersBuildingVO", {
    get: function () {
      return O.Iso.data.objects.provider.getObjectByType(f.IsoObjectEnum.BUILDERS_QUARTERS);
    },
    enumerable: true,
    configurable: true
  });
  AreaDataConstructionList.prototype.allSlotsBought = function () {
    return this._useableSlots == a.ConstructionConst.MAX_SLOTS;
  };
  return AreaDataConstructionList;
}(u.BasicBuildList);
exports.AreaDataConstructionList = _;
var m = require("./56.js");
var f = require("./80.js");
var O = require("./33.js");
o.classImplementsInterfaces(_, "IUpdatable", "IBuildList", "IAreaDataComponent");