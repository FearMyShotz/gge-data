Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./18.js");
var h = require("./28.js");
var g = require("./103.js");
var C = require("./30.js");
var _ = require("./44.js");
var m = require("./4.js");
var f = require("./109.js");
var O = require("./64.js");
var E = require("./345.js");
var y = require("./205.js");
var b = function (e) {
  function KingstowerMapobjectVO() {
    var t = this;
    t._occupierPId = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "Kingstower";
    t._areaType = s.WorldConst.AREA_TYPE_KINGS_TOWER;
    t._isVisibleOnMap = false;
    t._secondsSinceEspionage = -1;
    t._occupierPId = -1;
    t._areaNameString = _.SpecialServerHelper.checkTextIDForSkinText("kingstower");
    return t;
  }
  n.__extends(KingstowerMapobjectVO, e);
  KingstowerMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new f.CastleDisplayObjectClipContainer();
    var o = "Kingstower_Mapobject";
    var s = "Kingstower_Mapobject_EventSkin_" + _.SpecialServerHelper.skinName;
    if (_.SpecialServerHelper.useSkin && a.BasicModel.basicLoaderData.isItemAssetVersioned(s)) {
      o = s;
    }
    var r = this.getAsExternalClip(o);
    if (e && this.ownerInfo && !this.ownerInfo.isDungeonOwner) {
      n.addItem(this.getKingstowerFlagClip(this.ownerInfo));
    }
    n.addItem(r);
    return n;
  };
  KingstowerMapobjectVO.prototype.getKingstowerFlagClip = function (e) {
    return this.getFlagClip(e, "Kingstower");
  };
  KingstowerMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._objectId = e[3];
    this._occupierPId = d.int(e[4]);
    this._ownerInfo = m.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierPId);
    this._kingdomID = e[5];
    this._secondsSinceEspionage = e[6];
    this._spyInfoReceivingTime = C.CachedTimer.getCachedTimer() * h.ClientConstTime.MILLISEC_2_SEC;
    this._areaNameString = e[7];
    this._isVisibleOnMap = true;
    this.dispatchEvent(g.EventInstanceMapper.getEvent(O.VisualVOEvent, O.VisualVOEvent.VALUEOBJECT_CHANGE));
    var t = d.int(l.CombatConst.getWallOrGateWodIdForVillages(r.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, true));
    var i = d.int(l.CombatConst.getWallOrGateWodIdForVillages(r.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, false));
    this._wallLevel = m.CastleModel.wodData.voSubList(D.CastleWodData.TYPE_BUILDING).get(t).level;
    this._gateLevel = m.CastleModel.wodData.voSubList(D.CastleWodData.TYPE_BUILDING).get(i).level;
    this._moatLevel = 0;
    this._keepLevel = 0;
  };
  KingstowerMapobjectVO.prototype.parseGKL = function (e) {
    this.parseAreaInfo(e[0]);
    this._unitInventory = new I.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(e[1]);
  };
  Object.defineProperty(KingstowerMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString == "" || this._areaNameString == null) {
        return u.Localize.text(_.SpecialServerHelper.checkTextIDForSkinText("kingstower"));
      } else {
        return this._areaNameString;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(T.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "worldmapToolTipDescription", {
    get: function () {
      return u.Localize.text(_.SpecialServerHelper.checkTextIDForSkinText("kingstower_worldmap_tooltip_2"));
    },
    enumerable: true,
    configurable: true
  });
  KingstowerMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !this.isOwnMapobject && !m.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && m.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != c.AllianceConst.DIPLOMACY_REAL_ALLIED;
  };
  Object.defineProperty(KingstowerMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return this._occupierPId == m.CastleModel.userData.playerID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "isOwnMapobject").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "occupierPId", {
    get: function () {
      return this._occupierPId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "isPlayerOwned", {
    get: function () {
      return this._occupierPId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  KingstowerMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.ownerInfo != null && this.ownerInfo.playerID === m.CastleModel.userData.playerID;
  };
  KingstowerMapobjectVO.prototype.canBeSupported = function () {
    return !this.isOwnMapobject && m.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
  };
  Object.defineProperty(KingstowerMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return !!this.ownerInfo && !this.isOwnMapobject && !this.ownerInfo.isDungeonOwner;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isOwnMapobject;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "canChangeDefenceOnWorldmap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "ignoresPeaceMode").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "attackType", {
    get: function () {
      return p.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return r.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return E.UnitBaseLocationEnum.KINGDOM_CASTLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "unitBaseLocation").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return KingstowerMapobjectVO;
}(y.ContainerBuilderMapobjectVO);
exports.KingstowerMapobjectVO = b;
o.classImplementsInterfaces(b, "IDetailViewAble", "IWorldmapObjectVO");
var D = require("./56.js");
var I = require("./156.js");
var T = require("./101.js");