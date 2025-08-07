Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./28.js");
var p = require("./103.js");
var h = require("./30.js");
var g = require("./4.js");
var C = require("./422.js");
var _ = require("./64.js");
var m = require("./345.js");
var f = require("./245.js");
var O = require("./205.js");
var E = function (e) {
  function DaimyoTownshipMapObjectVO() {
    var t = this;
    t._totalCooldownTime = 0;
    t._skipCosts = 0;
    t._eventAutoScalingCampID = -1;
    t._baseMoatBonus = 0;
    t._baseGateBonus = 0;
    t._baseWallBonus = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "DaimyoTownship";
    t.type = "-";
    return t;
  }
  n.__extends(DaimyoTownshipMapObjectVO, e);
  DaimyoTownshipMapObjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n;
    var o = new I.CastleDisplayObjectClipContainer();
    if (this.ownerInfo && e) {
      (n = this.getCastleFlagClip(this.ownerInfo)).scaleX = n.scaleY *= b.CastleWorldmapCamera.ZOOM_MAX;
      o.addItem(n);
    }
    var a = "DaimyoTownship_Mapobject_Rank" + this._daimyoXmlVO.rank;
    var s = this.getAsExternalClip(a);
    o.addItem(s);
    if (s && n) {
      C.WorldmapObjectFlagHelper.watchAndFix(s, n);
    }
    return o;
  };
  DaimyoTownshipMapObjectVO.prototype.parseAreaInfo = function (e) {
    this.areaType = e[0];
    this.absAreaPosX = e[1];
    this.absAreaPosY = e[2];
    if (e.length > 3) {
      this.secondsSinceEspionage = e[3];
      this._attackCooldownEndTimestamp = h.CachedTimer.getCachedTimer() + e[5] * d.ClientConstTime.SEC_2_MILLISEC;
      this._totalCooldownTime = u.int(e[6]);
      this._skipCosts = u.int(e[7]);
      this._eventAutoScalingCampID = u.int(e[8]);
      this._daimyoXmlVO = g.CastleModel.daimyoTownshipXmlData.getDaimyoTownshipByID(e[4], this._eventAutoScalingCampID);
      this._ownerInfo = g.CastleModel.otherPlayerData.getOwnInfoVO();
      this._isVisibleOnMap = true;
      this._baseWallBonus = e[9];
      this._baseGateBonus = e[10];
      this._baseMoatBonus = e[11];
    } else {
      this._isVisibleOnMap = false;
    }
    var t = u.int(l.CombatConst.getWallOrGateWodIdForVillages(s.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, true));
    var i = u.int(l.CombatConst.getWallOrGateWodIdForVillages(s.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, false));
    this._wallLevel = g.CastleModel.wodData.voSubList(y.CastleWodData.TYPE_BUILDING).get(t).level;
    this._gateLevel = g.CastleModel.wodData.voSubList(y.CastleWodData.TYPE_BUILDING).get(i).level;
    this._moatLevel = 0;
    this._keepLevel = 5;
    this.dispatchEvent(p.EventInstanceMapper.getEvent(_.VisualVOEvent, _.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  DaimyoTownshipMapObjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    e.prototype.parseAreaInfoBattleLog.call(this, t);
    this._ownerInfo = g.CastleModel.otherPlayerData.getOwnInfoVO();
    this._daimyoXmlVO = g.CastleModel.daimyoTownshipXmlData.getDaimyoTownship(t.DAR, -1, t.DDCID);
  };
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!g.CastleModel.specialEventData.isEventActive(r.EventConst.EVENTTYPE_SAMURAI_INVASION) && this._isVisibleOnMap;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.ContainerBuilderMapobjectVO.prototype, "cooldownCanBeSkipped").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DaimyoTownshipMapObjectVO.prototype.canBeSupported = function () {
    return true;
  };
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.ContainerBuilderMapobjectVO.prototype, "canChangeDefenceOnWorldmap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.ContainerBuilderMapobjectVO.prototype, "isOwnMapobject").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      var e = this._skipCosts;
      var t = u.int(this.totalCooldownTime);
      return e * this.remainingCooldownTimeInSeconds / t;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.ContainerBuilderMapobjectVO.prototype, "skipCooldownCostC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.ContainerBuilderMapobjectVO.prototype, "baseGateBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.ContainerBuilderMapobjectVO.prototype, "baseWallBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.ContainerBuilderMapobjectVO.prototype, "baseMoatBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "eventAutoScalingCampID", {
    get: function () {
      return this._eventAutoScalingCampID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return this._totalCooldownTime;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.ContainerBuilderMapobjectVO.prototype, "totalCooldownTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "areaNameString", {
    get: function () {
      if (this.daimyoXmlVO) {
        return c.Localize.text(a.GenericTextIds.VALUE_DASH_SPLIT, [c.Localize.text("township"), c.Localize.text("rank_value", [this.daimyoXmlVO.rank])]);
      } else {
        return c.Localize.text("township");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(D.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "daimyoXmlVO", {
    get: function () {
      return this._daimyoXmlVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return m.UnitBaseLocationEnum.HOME_CASTLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.ContainerBuilderMapobjectVO.prototype, "unitBaseLocation").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "supportCapacity", {
    get: function () {
      return this.daimyoXmlVO.unitCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "supportCapacityToolTipID", {
    get: function () {
      return "dialog_townshipSupport_limit_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "supportCapacityReachedToolTipID", {
    get: function () {
      return "dialog_townshipSupport_limit_warning_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "defenceCapacityToolTipID", {
    get: function () {
      return "dialog_townshipDefense_limit_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "defenceCapacityReachedToolTipID", {
    get: function () {
      return "dialog_townshipDefense_limit_warning_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "supportOverviewToolTip", {
    get: function () {
      return "dialog_townshipDefense_supportOverview_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapObjectVO.prototype, "supportOverviewNoTroopsToolTipID", {
    get: function () {
      return "dialog_campEconomy_noTroopsStationed";
    },
    enumerable: true,
    configurable: true
  });
  return DaimyoTownshipMapObjectVO;
}(O.ContainerBuilderMapobjectVO);
exports.DaimyoTownshipMapObjectVO = E;
o.classImplementsInterfaces(E, "IDetailViewAble", "IWorldmapObjectVO", "ISupportCapacityVO");
var y = require("./56.js");
var b = require("./1236.js");
var D = require("./101.js");
var I = require("./109.js");