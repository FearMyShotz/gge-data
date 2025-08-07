Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./421.js");
var u = require("./28.js");
var d = require("./103.js");
var p = require("./53.js");
var h = require("./30.js");
var g = require("./44.js");
var C = require("./4.js");
var _ = require("./109.js");
var m = require("./112.js");
var f = require("./422.js");
var O = require("./64.js");
var E = require("./500.js");
var y = function (e) {
  function CapitalMapobjectVO() {
    var t = e.call(this) || this;
    t._objectsWithSpecialFlagsPosition = ["Capital_Mapobject_Special_BaronDucky", "Capital_Mapobject_Special_BaronCthulhu", "Capital_Mapobject_Special_WinterBaron", "Capital_Mapobject_Special_BaronCarnival"];
    t.name = "Capital";
    t.group = "Mapobject";
    t._isVisibleOnMap = false;
    t._secondsSinceEspionage = -1;
    t._areaType = s.WorldConst.AREA_TYPE_CAPITAL;
    return t;
  }
  n.__extends(CapitalMapobjectVO, e);
  CapitalMapobjectVO.prototype.getBackgroundClip = function () {
    var e = "CapitalBackground_" + C.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    return this.getAsExternalClip(e);
  };
  CapitalMapobjectVO.prototype.getEmptyCapitalContainer = function () {
    var e = new _.CastleDisplayObjectClipContainer();
    if (p.ABGHelper.isOnABGServer) {
      e.addItem(this.getAsExternalClip("Capital_Mapobject_EventSkin_" + c.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(true, false)));
    } else {
      e.addItem(this.getBackgroundClip());
      e.addItem(this.getAsExternalClip("Capital_Mapobject_Basic"));
    }
    return e;
  };
  CapitalMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    if (!this.ownerInfo || this.ownerInfo && this.ownerInfo.isOutpostOwner) {
      return this.getEmptyCapitalContainer();
    } else {
      return this.getPlayerOwnedCapitalContainer(e);
    }
  };
  CapitalMapobjectVO.prototype.getPlayerOwnedCapitalContainer = function (e = true) {
    var t;
    var i;
    var n = new _.CastleDisplayObjectClipContainer();
    n.addItem(this.getBackgroundClip());
    if (e) {
      i = this.getCapitalFlagClip(this.ownerInfo);
      n.addItem(i);
    }
    var o = "Capital_Mapobject_EventSkin_" + c.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(true, false);
    var s = this.equipmentUniqueIdSkin > 0 ? C.CastleModel.equipData.getEquipmentByUniqueID(this.equipmentUniqueIdSkin) : null;
    if (g.SpecialServerHelper.isOnSpecialServer && a.BasicModel.basicLoaderData.isItemAssetVersioned(o)) {
      t = this.getAsExternalClip(o);
      n.addItem(t);
    } else if (s) {
      o = "Capital_Mapobject_Special_" + s.skinAssetID;
      t = this.getAsExternalClip(o);
      n.addItem(t);
    } else {
      t = this.getAsExternalClip("Capital_Mapobject_Basic");
      n.addItem(t);
    }
    if (t && i) {
      f.WorldmapObjectFlagHelper.watchAndFix(t, i, this.shouldHandleInnerFlag(o));
    }
    return n;
  };
  CapitalMapobjectVO.prototype.shouldHandleInnerFlag = function (e) {
    return this._objectsWithSpecialFlagsPosition.indexOf(e) != -1;
  };
  CapitalMapobjectVO.prototype.getCapitalFlagClip = function (e) {
    return this.getFlagClip(e, "Castle");
  };
  CapitalMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._objectId = e[3];
    var t = l.int(e[4]);
    this._ownerInfo = C.CastleModel.otherPlayerData.getOwnerInfoVO(t);
    this._keepLevel = e[5];
    this._wallLevel = e[6];
    this._gateLevel = e[7];
    this._towerLevel = e[8];
    this._moatLevel = e[9];
    this._areaNameString = e[10];
    var i = l.int(e[11]);
    this._attackCooldownEndTimestamp = h.CachedTimer.getCachedTimer() + i * u.ClientConstTime.SEC_2_MILLISEC;
    var n = l.int(e[12]);
    this._sabotageCooldownEndTimestamp = h.CachedTimer.getCachedTimer() + n * u.ClientConstTime.SEC_2_MILLISEC;
    this._secondsSinceEspionage = e[13];
    this._spyInfoReceivingTime = h.CachedTimer.getCachedTimer() * u.ClientConstTime.MILLISEC_2_SEC;
    this._occupierID = e[14];
    this._equipmentUniqueIdSkin = e[15];
    this._kingdomID = e[16];
    this._temporarySabotageProtection = l.int(e.length > 19 ? e[19] : 0) == 1;
    this.dispatchEvent(d.EventInstanceMapper.getEvent(O.VisualVOEvent, O.VisualVOEvent.VALUEOBJECT_CHANGE));
    this._isVisibleOnMap = true;
  };
  Object.defineProperty(CapitalMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString == "" || this._areaNameString == null) {
        var e = "";
        if (p.ABGHelper.isOnABGServer) {
          e = "_" + c.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(true, false);
        }
        return r.Localize.text("capital" + e);
      }
      return this._areaNameString;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CapitalMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && (!this.isOwnMapobject && !C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && !this.isConqueredByRealAlliedAlliance || this.isOwnMapobject && this.isUnderConquerControl || !this.isOwnMapobject && C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && this.isUnderConquerControl);
  };
  CapitalMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && (!this.isOwnMapobject && !C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && !this.isConqueredByRealAlliedAlliance || this.isOwnMapobject && this.isUnderConquerControl || !this.isOwnMapobject && C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && this.isUnderConquerControl);
  };
  CapitalMapobjectVO.prototype.canBeAttackedAndConquered = function () {
    return !p.ABGHelper.isOnABGServer && !this.isOwnMapobject && !C.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && !!this.ownerInfo && (!this.ownerInfo || !this.ownerInfo.isOutpostOwner) && !this.isConqueredByRealAlliedAlliance;
  };
  Object.defineProperty(CapitalMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "canBeSabotaged").get.call(this) && !m.PlayerHelper.isCapitalPlayer(this.ownerInfo.playerID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "canBeSabotaged").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "ignoresPeaceMode").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobjectVO.prototype, "hasNameLabel", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "hasNameLabel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return C.CastleModel.landmark.capitalLandmark.minDefenseLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobjectVO.prototype, "isNpcCapital", {
    get: function () {
      return m.PlayerHelper.isNPCPlayer(this._ownerInfo.playerID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.OutpostMapobjectVO.prototype, "isNpcCapital").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CapitalMapobjectVO;
}(E.OutpostMapobjectVO);
exports.CapitalMapobjectVO = y;
var b = require("./101.js");
o.classImplementsInterfaces(y, "IDetailViewAble", "IWorldmapObjectVO");