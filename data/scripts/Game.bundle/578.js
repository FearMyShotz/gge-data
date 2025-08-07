Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./28.js");
var d = require("./103.js");
var p = require("./53.js");
var h = require("./30.js");
var g = require("./44.js");
var C = require("./4.js");
var _ = require("./108.js");
var m = require("./119.js");
var f = require("./422.js");
var O = require("./64.js");
var E = require("./501.js");
var y = function (e) {
  function MetropolMapobjectVO() {
    var t = this;
    t._objectsWithSpecialFlagsPosition = ["Metropol_Mapobject_Special_BaronDucky", "Metropol_Mapobject_Special_BaronCthulhu", "Metropol_Mapobject_Special_WinterBaron"];
    t._abgMineOutTime = 0;
    t._lastServerUpdate = 0;
    t.abgMaxInfluencePoints = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "Metropol";
    t.group = "Mapobject";
    t._isVisibleOnMap = false;
    t._secondsSinceEspionage = -1;
    t._areaType = s.WorldConst.AREA_TYPE_METROPOL;
    return t;
  }
  n.__extends(MetropolMapobjectVO, e);
  MetropolMapobjectVO.prototype.getBackgroundClip = function () {
    var e = "MetropolBackground_" + C.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    return this.getAsExternalClip(e);
  };
  MetropolMapobjectVO.prototype.getEmptyMetropolisContainer = function () {
    var e = new _.CastleDisplayObjectClipContainer();
    var t = "Metropol_Mapobject_EventSkin_" + g.SpecialServerHelper.skinName;
    if (g.SpecialServerHelper.useSkin && a.BasicModel.basicLoaderData.isItemAssetVersioned(t)) {
      e.addItem(this.getAsExternalClip(t));
    } else {
      e.addItem(this.getBackgroundClip());
      e.addItem(this.getAsExternalClip("Metropol_Mapobject_Basic"));
    }
    return e;
  };
  MetropolMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    if (!this.ownerInfo || this.ownerInfo && this.ownerInfo.isOutpostOwner) {
      return this.getEmptyMetropolisContainer();
    } else {
      return this.getPlayerOwnedMetropolisContainer(e);
    }
  };
  MetropolMapobjectVO.prototype.getPlayerOwnedMetropolisContainer = function (e = true) {
    var t;
    var i;
    var n = new _.CastleDisplayObjectClipContainer();
    n.addItem(this.getBackgroundClip());
    if (e) {
      t = this.getMetropolFlagClip(this.ownerInfo);
      n.addItem(t);
    }
    var o = this.equipmentUniqueIdSkin > 0 ? C.CastleModel.equipData.getEquipmentByUniqueID(this.equipmentUniqueIdSkin) : null;
    var s = "Metropol_Mapobject_EventSkin_" + g.SpecialServerHelper.skinName;
    if (g.SpecialServerHelper.useSkin && a.BasicModel.basicLoaderData.isItemAssetVersioned(s)) {
      i = this.getAsExternalClip(s);
      n.addItem(i);
    } else if (o) {
      s = "Metropol_Mapobject_Special_" + o.skinAssetID;
      i = this.getAsExternalClip(s);
      n.addItem(i);
    } else {
      i = this.getAsExternalClip("Metropol_Mapobject_Basic");
      n.addItem(i);
    }
    if (i && t) {
      f.WorldmapObjectFlagHelper.watchAndFix(i, t, this.shouldHandleInnerFlag(s));
    }
    return n;
  };
  MetropolMapobjectVO.prototype.shouldHandleInnerFlag = function (e) {
    return this._objectsWithSpecialFlagsPosition.indexOf(e) != -1;
  };
  MetropolMapobjectVO.prototype.getMetropolFlagClip = function (e) {
    if (p.ABGHelper.isOnABGServer) {
      return this.getFlagClip(e, "Castle");
    } else {
      return this.getFlagClip(e, "Metropol");
    }
  };
  MetropolMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._objectId = e[3];
    var t = c.int(e[4]);
    this._ownerInfo = C.CastleModel.otherPlayerData.getOwnerInfoVO(t);
    this._keepLevel = e[5];
    this._wallLevel = e[6];
    this._gateLevel = e[7];
    this._towerLevel = e[8];
    this._moatLevel = e[9];
    this._areaNameString = e[10];
    var i = c.int(e[11]);
    this._attackCooldownEndTimestamp = h.CachedTimer.getCachedTimer() + i * u.ClientConstTime.SEC_2_MILLISEC;
    var n = c.int(e[12]);
    this._sabotageCooldownEndTimestamp = h.CachedTimer.getCachedTimer() + n * u.ClientConstTime.SEC_2_MILLISEC;
    this._secondsSinceEspionage = e[13];
    this._spyInfoReceivingTime = h.CachedTimer.getCachedTimer() * u.ClientConstTime.MILLISEC_2_SEC;
    this._occupierID = e[14];
    this._equipmentUniqueIdSkin = e[15];
    this._kingdomID = e[16];
    if (e.length > 17) {
      this._abgMineOutTime = c.int(e[17]);
      this._lastServerUpdate = h.CachedTimer.getCachedTimer();
      this.abgMaxInfluencePoints = c.int(e[18]);
    }
    this._temporarySabotageProtection = c.int(e.length > 19 ? e[19] : 0) == 1;
    this.dispatchEvent(d.EventInstanceMapper.getEvent(O.VisualVOEvent, O.VisualVOEvent.VALUEOBJECT_CHANGE));
    this._isVisibleOnMap = true;
  };
  Object.defineProperty(MetropolMapobjectVO.prototype, "abgMineOutRemainingSeconds", {
    get: function () {
      return Math.max(0, this._abgMineOutTime - (h.CachedTimer.getCachedTimer() - this._lastServerUpdate) * u.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString == "" || this._areaNameString == null) {
        return l.Localize.text(g.SpecialServerHelper.checkTextIDForSkinText("metropol"));
      } else {
        return this._areaNameString;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MetropolMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && (!this.isOwnMapobject && !C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && C.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != r.AllianceConst.DIPLOMACY_REAL_ALLIED || this.isOwnMapobject && this.isUnderConquerControl || !this.isOwnMapobject && C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && this.isUnderConquerControl);
  };
  MetropolMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && (!this.isOwnMapobject && !C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && C.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != r.AllianceConst.DIPLOMACY_REAL_ALLIED || this.isOwnMapobject && this.isUnderConquerControl || !this.isOwnMapobject && C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && this.isUnderConquerControl);
  };
  MetropolMapobjectVO.prototype.canBeAttackedAndConquered = function () {
    return !this.isOwnMapobject && !C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && !!this.ownerInfo && (!this.ownerInfo || !this.ownerInfo.isOutpostOwner) && (!this.ownerInfo || C.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != r.AllianceConst.DIPLOMACY_REAL_ALLIED);
  };
  Object.defineProperty(MetropolMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "canBeSabotaged").get.call(this) && !m.PlayerHelper.isMetropolPlayer(this.ownerInfo.playerID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "canBeSabotaged").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "ignoresPeaceMode").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobjectVO.prototype, "hasNameLabel", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "hasNameLabel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return C.CastleModel.landmark.metroLandmark.minDefenseLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MetropolMapobjectVO;
}(E.OutpostMapobjectVO);
exports.MetropolMapobjectVO = y;
o.classImplementsInterfaces(y, "IDetailViewAble", "IWorldmapObjectVO");
var b = require("./101.js");