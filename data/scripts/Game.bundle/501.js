Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./18.js");
var h = require("./44.js");
var g = require("./4.js");
var C = require("./108.js");
var _ = require("./422.js");
var m = require("./275.js");
var f = require("./205.js");
var O = function (e) {
  function OutpostMapobjectVO() {
    var t = this;
    t._woodAmount = 0;
    t._stoneAmount = 0;
    t._fieldAmount = 0;
    t._useFlag = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "Outpost";
    t.group = "Mapobject";
    t._isVisibleOnMap = true;
    t._secondsSinceEspionage = -1;
    t._areaType = c.WorldConst.AREA_TYPE_OUTPOST;
    t._keepLevel = -1;
    return t;
  }
  n.__extends(OutpostMapobjectVO, e);
  OutpostMapobjectVO.prototype.getEmptyOutpostContainer = function () {
    var e = new C.CastleDisplayObjectClipContainer();
    var t = "Outpost_Mapobject_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount + "_" + h.SpecialServerHelper.skinName;
    var i = "Outpost_Mapobject_EventSkin_" + h.SpecialServerHelper.skinName;
    if (h.SpecialServerHelper.useSkin && o.BasicModel.basicLoaderData.isItemAssetVersioned(t)) {
      e.addItem(this.getAsExternalClip(t));
    } else if (h.SpecialServerHelper.useSkin && o.BasicModel.basicLoaderData.isItemAssetVersioned(i)) {
      e.addItem(this.getAsExternalClip(i));
    } else {
      var n = "Outpost_Mapobject_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount;
      e.addItem(this.getAsExternalClip(n));
      e.addItem(this.getAsExternalClip("Outpost_Empty"));
    }
    return e;
  };
  OutpostMapobjectVO.prototype.getPlayerOwnedOutpostContainer = function (e) {
    var t;
    if (e === undefined) {
      e = true;
    }
    var i;
    var n;
    var a = new C.CastleDisplayObjectClipContainer();
    var s = "Outpost_Mapobject_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount + "_" + h.SpecialServerHelper.skinName;
    if (!h.SpecialServerHelper.useSkin || !o.BasicModel.basicLoaderData.isItemAssetVersioned(s)) {
      a.addItem(this.getBackgroundClip());
    }
    if (e) {
      t = this.getOutpostFlagClip(this.ownerInfo);
      if (this.ownerInfo.hasVIPFlag) {
        t.scaleX = t.scaleY *= m.CastleWorldmapConst.ZOOM_MAX;
      } else {
        t.scaleX = t.scaleY = m.CastleWorldmapConst.ZOOM_MAX;
      }
      a.addItem(t);
    }
    var r = this.equipmentUniqueIdSkin > 0 ? g.CastleModel.equipData.getEquipmentByUniqueID(this.equipmentUniqueIdSkin) : null;
    if (r) {
      i = "Outpost_Mapobject_Special_" + r.skinAssetID;
      n = r.skinDefinesOutpostResourceAssets ? "Outpost_Mapobject_Special_" + r.skinAssetID + "_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount + "_Icon" : "Outpost_Mapobject_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount + "_Icon";
    } else {
      i = "Outpost_Mapobject_Level" + (this.outpostLevel > 0 ? this.outpostLevel : 1);
      n = "Outpost_Mapobject_" + this.fieldAmount + "_" + this.woodAmount + "_" + this.stoneAmount + "_Icon";
    }
    if (h.SpecialServerHelper.useSkin && o.BasicModel.basicLoaderData.isItemAssetVersioned(s)) {
      n = s;
      a.addItem(this.getAsExternalClip(n));
    }
    var l = "Outpost_Mapobject_EventSkin_" + h.SpecialServerHelper.skinName;
    if (h.SpecialServerHelper.useSkin && o.BasicModel.basicLoaderData.isItemAssetVersioned(l)) {
      i = l;
    } else {
      a.addItem(this.getAsExternalClip(n));
    }
    var c = this.getAsExternalClip(i);
    a.addItem(c);
    if (c && t) {
      _.WorldmapObjectFlagHelper.watchAndFix(c, t);
    }
    return a;
  };
  OutpostMapobjectVO.prototype.getOutpostFlagClip = function (e) {
    return this.getFlagClip(e, "Outpost");
  };
  OutpostMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    if (!this.ownerInfo || this.ownerInfo && this.ownerInfo.playerID == 0 || this.ownerInfo && this.ownerInfo.isOutpostOwner) {
      if (s.instanceOfClass(this, "CapitalMapobjectVO")) {
        return this.getEmptyCapitalContainer();
      } else if (s.instanceOfClass(this, "MetropolMapobjectVO")) {
        return this.getEmptyMetropolisContainer();
      } else {
        return this.getEmptyOutpostContainer();
      }
    } else if (s.instanceOfClass(this, "CapitalMapobjectVO")) {
      return this.getPlayerOwnedCapitalContainer(e);
    } else if (s.instanceOfClass(this, "MetropolMapobjectVO")) {
      return this.getPlayerOwnedMetropolisContainer(e);
    } else {
      return this.getPlayerOwnedOutpostContainer(e);
    }
  };
  OutpostMapobjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    e.prototype.parseAreaInfoBattleLog.call(this, t);
    this.outpostType = t.RT;
  };
  Object.defineProperty(OutpostMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString == "" || this._areaNameString == null) {
        return u.Localize.text(h.SpecialServerHelper.checkTextIDForSkinText("outpost"));
      } else {
        return this._areaNameString;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "outpostLevel", {
    get: function () {
      return this._keepLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "outpostType", {
    get: function () {
      return Object.getOwnPropertyDescriptor(E.InteractiveMapobjectVO.prototype, "outpostType").get.call(this);
    },
    set: function (e) {
      this._outpostType = e;
      if (!(e < 0)) {
        this._woodAmount = d.int(c.WorldConst.OUTPOST_TYPE_LIST[this._outpostType][3]);
        this._stoneAmount = d.int(c.WorldConst.OUTPOST_TYPE_LIST[this._outpostType][4]);
        this._fieldAmount = d.int(c.WorldConst.OUTPOST_TYPE_LIST[this._outpostType][5]);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "resAmountString", {
    get: function () {
      var e = "";
      if (this._fieldAmount > this._woodAmount && this._fieldAmount > this._stoneAmount) {
        if (this._fieldAmount > 0) {
          e += String(u.Localize.text("resAmount_food", [this._fieldAmount]) + " ");
        }
        if (this._woodAmount > 0) {
          e += String(u.Localize.text("resAmount_wood", [this._woodAmount]) + " ");
        }
        if (this._stoneAmount > 0) {
          e += String(u.Localize.text("resAmount_stone", [this._stoneAmount]));
        }
      } else {
        if (this._woodAmount > 0) {
          e += String(u.Localize.text("resAmount_wood", [this._woodAmount]) + " ");
        }
        if (this._stoneAmount > 0) {
          e += String(u.Localize.text("resAmount_stone", [this._stoneAmount]) + " ");
        }
        if (this._fieldAmount > 0) {
          e += String(u.Localize.text("resAmount_food", [this._fieldAmount]));
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "woodAmount", {
    get: function () {
      return this._woodAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "stoneAmount", {
    get: function () {
      return this._stoneAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "fieldAmount", {
    get: function () {
      return this._fieldAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "isUnderConquerControl", {
    get: function () {
      return this._occupierID > 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "isUnderConquerControl").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "isConqueredByMe", {
    get: function () {
      var e = this.controllerWorldMapOwnerInfoVO;
      return !!e && e.playerID == g.CastleModel.userData.playerID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "isConqueredByMe").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "isConqueredByAllianceMember", {
    get: function () {
      var e = this.controllerWorldMapOwnerInfoVO;
      return !!e && g.CastleModel.userData.isUserInMyAlliance(e);
    },
    enumerable: true,
    configurable: true
  });
  OutpostMapobjectVO.prototype.canBeConquered = function () {
    var e = this.ownerInfo;
    var t = this.isOwnMapobject && this.isUnderConquerControl;
    return (!e || !!e.isOutpostOwner || !(this.ownerInfo.playerID > 0)) && !t && !this.isConqueredByAllianceMember;
  };
  OutpostMapobjectVO.prototype.canBeAttackedAndConquered = function () {
    var e = this.ownerInfo;
    var t = this.isOwnMapobject;
    var i = g.CastleModel.userData.isUserInMyAlliance(e);
    var n = !!e && g.CastleModel.allianceData.getStatusByAlliance(e.allianceID) == r.AllianceConst.DIPLOMACY_REAL_ALLIED;
    var o = !!e && !e.isOutpostOwner && this.ownerInfo.playerID > 0;
    return !t && !i && !this.isConqueredByAllianceMember && !this.isConqueredByMe && o && !n;
  };
  OutpostMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.isOwnMapobject && g.CastleModel.userData.hasOutpostsInKingdom(this.kingdomID) && !this.isUnderConquerControl;
  };
  OutpostMapobjectVO.prototype.canBeSupported = function () {
    return !!this.ownerInfo && !!(this.ownerInfo.playerID > 0) && (this.isOwnMapobject ? !this.isUnderConquerControl && !this.canBeTroupsSended() : this.isConqueredByAllianceMember || this.isConqueredByMe || g.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isUnderConquerControl);
  };
  OutpostMapobjectVO.prototype.canBePlagueAttacked = function () {
    return !!this.ownerInfo && !!(this.ownerInfo.playerID > 0) && (!this.isOwnMapobject && !this.isConqueredByMe && !this.ownerInfo.isOutpostOwner || this.isOwnMapobject && this.isUnderConquerControl);
  };
  OutpostMapobjectVO.prototype.canBeAttacked = function () {
    if (this.ownerInfo && !this.ownerInfo.isOutpostOwner && this.ownerInfo.playerID > 0) {
      var e = this.isOwnMapobject;
      var t = g.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
      var i = !this.isConqueredByAllianceMember && !this.isConqueredByMe;
      var n = this.ownerInfo.remainingPeaceTime < 1;
      var o = g.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != r.AllianceConst.DIPLOMACY_REAL_ALLIED;
      var a = (e || t || !o) && this.isUnderConquerControl && this.remainingCooldownTimeInSeconds < 1;
      return !e && !t && i && n && o || a;
    }
    return false;
  };
  OutpostMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && (!this.isOwnMapobject && !g.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && !this.isConqueredByAllianceMember && !this.isConqueredByMe && this.ownerInfo.remainingPeaceTime > 1 && g.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != r.AllianceConst.DIPLOMACY_REAL_ALLIED || this.isOwnMapobject && this.isUnderConquerControl || !this.isOwnMapobject && g.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && this.isUnderConquerControl);
  };
  Object.defineProperty(OutpostMapobjectVO.prototype, "canBeTraded", {
    get: function () {
      return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && !this.ownerInfo.isRuin && this.ownerInfo.playerID > 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "canBeTraded").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "canBeVisited").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      if (this.isOwnMapobject) {
        return this.isUnderConquerControl;
      } else {
        return !this.isConqueredByMe;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return !this.isOwnMapobject && this._ownerInfo != null && !y.ABGHelper.isOnABGServer;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "canBeSabotaged").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return this.ownerInfo != null && !this.isOwnMapobject && (!this.ownerInfo || !this.ownerInfo.isOutpostOwner);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "ownerInfo", {
    get: function () {
      var e = Object.getOwnPropertyDescriptor(E.InteractiveMapobjectVO.prototype, "ownerInfo").get.call(this);
      e ||= g.CastleModel.otherPlayerData.getOwnerInfoVO(l.OutpostConst.OUTPOST_DEFAULT_OWNER_ID);
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.InteractiveMapobjectVO.prototype, "ownerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO", {
    get: function () {
      if (this.isUnderConquerControl) {
        return g.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierID);
      } else {
        return this.ownerInfo;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "isConqueredByRealAlliedAlliance", {
    get: function () {
      return !!this.controllerWorldMapOwnerInfoVO && g.CastleModel.allianceData.getStatusByAlliance(this.controllerWorldMapOwnerInfoVO.allianceID) == r.AllianceConst.DIPLOMACY_REAL_ALLIED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "attackType", {
    get: function () {
      return p.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isConqueredByMe || this.isOwnMapobject && !this.isUnderConquerControl;
    },
    enumerable: true,
    configurable: true
  });
  return OutpostMapobjectVO;
}(f.ContainerBuilderMapobjectVO);
exports.OutpostMapobjectVO = O;
a.classImplementsInterfaces(O, "IDetailViewAble", "IWorldmapObjectVO");
var E = require("./101.js");
var y = require("./53.js");