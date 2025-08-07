Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./58.js");
var p = require("./103.js");
var h = require("./53.js");
var g = require("./44.js");
var C = require("./4.js");
var _ = require("./502.js");
var m = require("./699.js");
var f = require("./187.js");
var O = require("./422.js");
var E = require("./64.js");
var y = require("./245.js");
var b = require("./205.js");
var D = function (e) {
  function CastleMapobjectVO() {
    var t = e.call(this) || this;
    t._isABGTowerAttackable = false;
    t._abgPlayerTowerPoints = 0;
    t.name = "Castle";
    t.group = "Mapobject";
    t._areaType = s.WorldConst.AREA_TYPE_CASTLE;
    return t;
  }
  n.__extends(CastleMapobjectVO, e);
  CastleMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    if (this.ownerInfo && this.ownerInfo.isRuin) {
      return this.getRuinContainer();
    } else {
      return this.getCastleContainer(e);
    }
  };
  CastleMapobjectVO.prototype.getRuinContainer = function () {
    var e = new S.CastleDisplayObjectClipContainer();
    e.addItem(this.getBackgroundClip());
    e.addItem(this.getAsExternalClip(CastleMapobjectVO.MAPOBJECT_RUIN));
    return e;
  };
  CastleMapobjectVO.prototype.getBackgroundClip = function () {
    if (h.ABGHelper.isOnABGServer) {
      return null;
    } else {
      return e.prototype.getBackgroundClip.call(this);
    }
  };
  CastleMapobjectVO.prototype.getCastleContainer = function (e = true) {
    var t = new S.CastleDisplayObjectClipContainer();
    if (this.getBackgroundClip()) {
      t.addItem(this.getBackgroundClip());
    }
    var i = this.getMoatClip();
    if (i) {
      t.addItem(i);
    }
    var n = this.getKeepClip();
    t.addItem(n);
    if (this.ownerInfo && e) {
      A.renderScheduler.addTask(this.addFlagCallback.bind(this, t, n));
    }
    return t;
  };
  CastleMapobjectVO.prototype.addFlagCallback = function (e, t) {
    e.asDisplayObject();
    if (e.isDisposed) {
      return true;
    }
    var i = this.getCastleFlagClip(this.ownerInfo);
    i.scaleX = i.scaleY *= L.CastleWorldmapConst.ZOOM_MAX;
    e.addItem(i, 1);
    O.WorldmapObjectFlagHelper.watchAndFix(t, i);
    e.clipSizeComponent &&= e.clipSizeComponent;
    return false;
  };
  CastleMapobjectVO.prototype.getKeepClip = function () {
    var e = "Castle_Mapobject_EventSkin_" + g.SpecialServerHelper.skinName + "_" + Math.max(1, this.keepLevel);
    if (g.SpecialServerHelper.useSkin && a.BasicModel.basicLoaderData.isItemAssetVersioned(e)) {
      return this.getAsExternalClip(e);
    }
    var t = !!this.ownerInfo && (!!this.ownerInfo.playerPrefix && this.ownerInfo.playerPrefix.isIslandTitle || !!this.ownerInfo.playerSuffix && this.ownerInfo.playerSuffix.isIslandTitle);
    var i = this.equipmentUniqueIdSkin > 0 ? C.CastleModel.equipData.getEquipmentByUniqueID(this.equipmentUniqueIdSkin) : null;
    if (i) {
      var n = "";
      if (i.skinDefinesAssetForAllCastleLevels) {
        n = "_" + Math.max(1, this.keepLevel);
      }
      return this.getAsExternalClip("Castle_Mapobject_Special_" + i.skinAssetID + n);
    }
    if (t) {
      if (T.CastleTitleSystemHelper.isIslandKing(this.ownerInfo)) {
        return this.getAsExternalClip("Castle_Eiland_King");
      } else {
        return this.getAsExternalClip("Castle_Eiland_Pos_Title");
      }
    }
    if (P.TempServerHelper.isOnTempServer && this.kingdomID == r.WorldClassic.KINGDOM_ID && P.TempServerHelper.tmpServerEvent && P.TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
      return this.getAsExternalClip("Castle_Mapobject_EventSkin_CastleTransportation");
    }
    var o;
    var s = this.assetFileURL(v.WorldmapObjectIconHelper.FILE_NAME_CASTLE_PARTS);
    var l = -1;
    switch (this.keepLevel) {
      case 1:
        for (var u = (l = c.int(v.WorldmapObjectIconHelper.KEEP_LEVEL_1_STAGES.length)) - 1; u >= 0; u--) {
          if (this.ownerInfo.playerLevel < v.WorldmapObjectIconHelper.KEEP_LEVEL_1_STAGES[u]) {
            l = u > 0 && this.ownerInfo.playerLevel >= v.WorldmapObjectIconHelper.KEEP_LEVEL_1_STAGES[u - 1] ? u : 1;
          }
        }
        o = "Castlepart_Keep_" + this.keepLevel + "_stage_" + l;
        break;
      case 2:
        for (var d = (l = c.int(v.WorldmapObjectIconHelper.KEEP_LEVEL_2_STAGES.length)) - 1; d >= 0; d--) {
          if (this.ownerInfo.playerLevel < v.WorldmapObjectIconHelper.KEEP_LEVEL_2_STAGES[d]) {
            l = d > 0 && this.ownerInfo.playerLevel >= v.WorldmapObjectIconHelper.KEEP_LEVEL_2_STAGES[d - 1] ? d : d + 1;
          }
        }
        o = "Castlepart_Keep_" + this.keepLevel + "_stage_" + l;
        break;
      default:
        o = "Castlepart_Keep_" + this.keepLevel;
        o = "Castlepart_Keep_" + this.keepLevel;
    }
    return this.getAsExternalClip(o, s);
  };
  CastleMapobjectVO.prototype.colorizeFlag = function (e, t) {
    return function () {
      f.CastleAllianceCrestHelper.colorizeFlags(e.getChildAt(0), t);
    };
  };
  CastleMapobjectVO.prototype.getMoatClip = function () {
    var e = C.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var t = this.assetFileURL(v.WorldmapObjectIconHelper.FILE_NAME_CASTLE_PARTS);
    if (this.moatLevel > 0) {
      if (h.ABGHelper.isOnABGServer) {
        return null;
      }
      var i = this.equipmentUniqueIdSkin > 0 ? C.CastleModel.equipData.getEquipmentByUniqueID(this.equipmentUniqueIdSkin) : null;
      if (i) {
        if (i && i.skinDefinesIncreasedAsset) {
          return this.getAsExternalClip(CastleMapobjectVO.CASTLE_PART_MOAT + e + "_25", t);
        }
        if (i && i.skinDefinesAssetForMoat) {
          return this.getAsExternalClip(CastleMapobjectVO.CASTLE_PART_MOAT + e + CastleMapobjectVO.FILE_NAME_FLAG_SPECIAL + i.skinAssetID);
        }
      }
      return this.getAsExternalClip(CastleMapobjectVO.CASTLE_PART_MOAT + e, t);
    }
    return null;
  };
  CastleMapobjectVO.prototype.parseAreaInfo = function (t) {
    if (t.length <= 4) {
      this._areaType = t[0];
      this._absAreaPosX = t[1];
      this._absAreaPosY = t[2];
      this._occupierID = t[3];
      if (this.isOccupied) {
        C.CastleModel.worldmapData ||= C.CastleModel.addModel(new _.CastleWorldmapData());
        C.CastleModel.worldmapData.relocationObjects.push(this);
      }
      this._ownerInfo = null;
      this.dispatchEvent(p.EventInstanceMapper.getEvent(E.VisualVOEvent, E.VisualVOEvent.VALUEOBJECT_CHANGE));
    } else {
      e.prototype.parseAreaInfo.call(this, t);
      if (h.ABGHelper.isOnABGAndTower) {
        var i = new m.ABGTowerConnectionVO();
        var n = [t[18][0], t[18][1], this.ownerInfo.playerName, t[18][2] ? 1 : 0];
        i.fillFromConnectionValues(n);
        this._customConnections = [];
        this.customConnections.push(i);
        this._isABGTowerAttackable = t[18][2];
        this._abgPlayerTowerPoints = c.int(t[18][3]);
      }
    }
  };
  Object.defineProperty(CastleMapobjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      if (this._ownerInfo) {
        return this._ownerInfo.playerID > 0 && this._ownerInfo.playerLevel >= d.ClientConstLevelRestrictions.MIN_LEVEL_TO_THE_WORLD_MAP;
      } else {
        return this._occupierID > 0 || this.isUseAbleForRelocation && I.CastleLayoutManager.getInstance().currentState == I.CastleLayoutManager.STATE_WORLDMAP_RELOCATION;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.isOwnMapobject && (C.CastleModel.userData.hasOutpostsInKingdom(this.kingdomID) || C.CastleModel.userData.laboratoryList.hasLaboratoryInKingdom(this.kingdomID) || C.CastleModel.userData.villageList.getAmountInKingdomID(C.CastleModel.kingdomData.activeKingdomID) > 0 || C.CastleModel.kingdomData.activeKingdomID == r.WorldClassic.KINGDOM_ID && (C.CastleModel.userData.kingstowerList.kingstowerAmount > 0 || C.CastleModel.userData.monumentList.amount > 0));
  };
  CastleMapobjectVO.prototype.canBeSupported = function () {
    return !this.isOwnMapobject && C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
  };
  CastleMapobjectVO.prototype.canBePlagueAttacked = function () {
    return !!this.ownerInfo && !this.isOwnMapobject;
  };
  CastleMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !this.isOwnMapobject && !C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && C.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != l.AllianceConst.DIPLOMACY_REAL_ALLIED;
  };
  Object.defineProperty(CastleMapobjectVO.prototype, "canBeTraded", {
    get: function () {
      return this.isOwnMapobject && C.CastleModel.userData.hasOutpostsInKingdom(this.kingdomID) || !this.isOwnMapobject;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ContainerBuilderMapobjectVO.prototype, "canBeTraded").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ContainerBuilderMapobjectVO.prototype, "canBeVisited").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return !this.isOwnMapobject && this._ownerInfo != null && this._ownerInfo.playerLevel >= d.ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE && !h.ABGHelper.isOnABGServer;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ContainerBuilderMapobjectVO.prototype, "canBeSabotaged").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return !this.isOwnMapobject;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "isUseAbleForRelocation", {
    get: function () {
      return (!this.ownerInfo && !this.isOccupied || !!this.ownerInfo && this.ownerInfo.isRuin) && C.CastleModel.worldmapData.isSectorPopulated(this._absAreaPosX, this._absAreaPosY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "hasNameLabel", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ContainerBuilderMapobjectVO.prototype, "hasNameLabel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "attackType", {
    get: function () {
      return u.ClientConstCastle.ACTION_TYPE_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "isABGTowerAttackable", {
    get: function () {
      return this._isABGTowerAttackable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMapobjectVO.prototype, "abgPlayerTowerPoints", {
    get: function () {
      return this._abgPlayerTowerPoints;
    },
    enumerable: true,
    configurable: true
  });
  CastleMapobjectVO.prototype.getMinConnectionsAsABGTowerConnection = function () {
    return this._customConnections;
  };
  Object.defineProperty(CastleMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isOwnMapobject;
    },
    enumerable: true,
    configurable: true
  });
  CastleMapobjectVO.CASTLE_PART_MOAT = "Castlepart_Moat_";
  CastleMapobjectVO.MAPOBJECT_RUIN = "Ruin_Mapobject";
  CastleMapobjectVO.FILE_NAME_FLAG_SPECIAL = "_Special_";
  return CastleMapobjectVO;
}(b.ContainerBuilderMapobjectVO);
exports.CastleMapobjectVO = D;
o.classImplementsInterfaces(D, "IDetailViewAble", "IWorldmapObjectVO");
var I = require("./17.js");
var T = require("./106.js");
var v = require("./70.js");
var S = require("./109.js");
var A = require("./408.js");
var L = require("./276.js");
var P = require("./137.js");