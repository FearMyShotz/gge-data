Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./18.js");
var p = require("./28.js");
var h = require("./103.js");
var g = require("./580.js");
var C = require("./30.js");
var _ = require("./4.js");
var m = require("./108.js");
var f = require("./576.js");
var O = require("./64.js");
var E = require("./1225.js");
var y = function (e) {
  function MonumentMapobjectVO() {
    var t = this;
    t._monumentType = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MonumentMapobjectVO, e);
  MonumentMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i) {
    var n = this;
    if (i === undefined) {
      i = false;
    }
    var o = "Monument_Mapobject_" + T.WorldmapObjectIconHelper.MONUMENT_FILE_NAME_SUFFIXES[this.monumentType];
    this._graphicClassName = o;
    return f.mapObjectsPool.obtain(o, function (e) {
      var t = new m.CastleDisplayObjectClipContainer();
      t.addItem(n.getAsExternalClip(e));
      return t;
    });
  };
  MonumentMapobjectVO.prototype.init = function () {
    this.name = "Monument";
    this._areaType = l.WorldConst.AREA_TYPE_MONUMENT;
    this._isVisibleOnMap = false;
    this._secondsSinceEspionage = -1;
    this._occupierPId = s.OutpostConst.MONUMENT_DEFAULT_OWNER_ID;
    this._areaNameString = c.Localize.text("monument");
    this._level = this._level == -1 ? 1 : this._level;
    this._kingdomID = r.WorldClassic.KINGDOM_ID;
    this._levelInfo = this.dataModel.getLevelInfoByLevel(this._level, 0);
  };
  MonumentMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._objectId = e[3];
    this._occupierPId = e[4];
    this._ownerInfo = _.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierPId);
    this._monumentType = u.int(e[5]);
    this._level = e[6];
    this._levelInfo = this._level > 0 ? this.dataModel.getLevelInfoByLevel(this._level, 0) : this.dataModel.getLevelInfoByLevel(1, 0);
    this._kingdomID = e[7];
    this._secondsSinceEspionage = e[8];
    this._spyInfoReceivingTime = C.CachedTimer.getCachedTimer() * p.ClientConstTime.MILLISEC_2_SEC;
    this._areaNameString = e[9];
    this._isVisibleOnMap = true;
    this.dispatchEvent(h.EventInstanceMapper.getEvent(O.VisualVOEvent, O.VisualVOEvent.VALUEOBJECT_CHANGE));
    this.dispatchEvent(new g.MonumentEvent(g.MonumentEvent.MONUMENT_UPDATED));
    var t = u.int(a.CombatConst.getWallOrGateWodIdForVillages(s.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, true));
    var i = u.int(a.CombatConst.getWallOrGateWodIdForVillages(s.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, false));
    this._wallLevel = _.CastleModel.wodData.voSubList(D.CastleWodData.TYPE_BUILDING).get(t).level;
    this._gateLevel = _.CastleModel.wodData.voSubList(D.CastleWodData.TYPE_BUILDING).get(i).level;
    this._moatLevel = 0;
    this._keepLevel = 0;
    this.dataModel.addToShownList(this);
  };
  MonumentMapobjectVO.prototype.parseGML = function (e) {
    this.parseAreaInfo(e[0]);
    this._unitInventory = new I.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(e[1]);
  };
  MonumentMapobjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    e.prototype.parseAreaInfoBattleLog.call(this, t);
    this._monumentType = u.int(t.RT);
  };
  Object.defineProperty(MonumentMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString && this._areaNameString != "") {
        return this._areaNameString;
      } else {
        return c.Localize.text("monument");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(v.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobjectVO.prototype, "monumentType", {
    get: function () {
      return this._monumentType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobjectVO.prototype, "hasReachedMaxLevel", {
    get: function () {
      return this._level >= b.CastleMonumentData.MONUMENT_MAX_LEVELS[this._monumentType];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.UpgradableLandmarkMapobjectVO.prototype, "hasReachedMaxLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobjectVO.prototype, "dataModel", {
    get: function () {
      return _.CastleModel.monumentsData;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.UpgradableLandmarkMapobjectVO.prototype, "dataModel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobjectVO.prototype, "attackType", {
    get: function () {
      return d.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.UpgradableLandmarkMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return s.OutpostConst.MONUMENT_DEFAULT_LEVEL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.UpgradableLandmarkMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MonumentMapobjectVO;
}(E.UpgradableLandmarkMapobjectVO);
exports.MonumentMapobjectVO = y;
var b = require("./1226.js");
var D = require("./56.js");
var I = require("./156.js");
var T = require("./70.js");
var v = require("./101.js");
o.classImplementsInterfaces(y, "IDetailViewAble", "IWorldmapObjectVO");