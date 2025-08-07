Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./28.js");
var p = require("./103.js");
var h = require("./423.js");
var g = require("./30.js");
var C = require("./4.js");
var _ = require("./108.js");
var m = require("./64.js");
var f = require("./1225.js");
var O = function (e) {
  function LaboratoryMapobjectVO() {
    return e.call(this) || this;
  }
  n.__extends(LaboratoryMapobjectVO, e);
  LaboratoryMapobjectVO.prototype.getBackgroundClip = function () {
    var e;
    e = "LaboratoryBackground_" + C.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    return this.getAsExternalClip(e);
  };
  LaboratoryMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new _.CastleDisplayObjectClipContainer();
    n.addItem(this.getAsExternalClip("Laboratory_Mapobject"));
    return n;
  };
  LaboratoryMapobjectVO.prototype.init = function () {
    this.name = "Laboratory";
    this._areaType = a.WorldConst.AREA_TYPE_LABORATORY;
    this._isVisibleOnMap = false;
    this._secondsSinceEspionage = -1;
    this._occupierPId = s.OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID;
    this._areaNameString = l.Localize.text("laboratory");
    this._level = this._level == -1 ? 1 : this._level;
    this._levelInfo = this.dataModel.getLevelInfoByLevel(this._level, this.kingdomID);
  };
  LaboratoryMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._objectId = e[3];
    this._occupierPId = e[4];
    this._ownerInfo = C.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierPId);
    this._level = e[5];
    this._kingdomID = e[6];
    this._levelInfo = this._level > 0 ? this.dataModel.getLevelInfoByLevel(this._level, this.kingdomID) : this.dataModel.getLevelInfoByLevel(1, this.kingdomID);
    this._secondsSinceEspionage = e[7];
    this._spyInfoReceivingTime = g.CachedTimer.getCachedTimer() * d.ClientConstTime.MILLISEC_2_SEC;
    this._areaNameString = e[8];
    this._isVisibleOnMap = true;
    this.dispatchEvent(p.EventInstanceMapper.getEvent(m.VisualVOEvent, m.VisualVOEvent.VALUEOBJECT_CHANGE));
    this.dispatchEvent(new h.LaboratoryEvent(h.LaboratoryEvent.LABORATORY_UPDATED));
    var t = c.int(r.CombatConst.getWallOrGateWodIdForVillages(s.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, true));
    var i = c.int(r.CombatConst.getWallOrGateWodIdForVillages(s.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, false));
    this._wallLevel = C.CastleModel.wodData.voSubList(E.CastleWodData.TYPE_BUILDING).get(t).level;
    this._gateLevel = C.CastleModel.wodData.voSubList(E.CastleWodData.TYPE_BUILDING).get(i).level;
    this._moatLevel = 0;
    this._keepLevel = 0;
    this.dataModel.addToShownList(this);
  };
  LaboratoryMapobjectVO.prototype.parseGLL = function (e) {
    this.parseAreaInfo(e[0]);
    this._unitInventory = new y.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(e[1]);
  };
  Object.defineProperty(LaboratoryMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString && this._areaNameString != "") {
        return this._areaNameString;
      } else {
        return l.Localize.text("laboratory");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobjectVO.prototype, "hasReachedMaxLevel", {
    get: function () {
      return this.dataModel.getLevelInfoByLevel(this.level + 1, this.kingdomID) == null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.UpgradableLandmarkMapobjectVO.prototype, "hasReachedMaxLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobjectVO.prototype, "dataModel", {
    get: function () {
      return C.CastleModel.laboratoryData;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.UpgradableLandmarkMapobjectVO.prototype, "dataModel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobjectVO.prototype, "attackType", {
    get: function () {
      return u.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.UpgradableLandmarkMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return s.OutpostConst.LABORATORY_DEFAULT_LEVEL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.UpgradableLandmarkMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return LaboratoryMapobjectVO;
}(f.UpgradableLandmarkMapobjectVO);
exports.LaboratoryMapobjectVO = O;
var E = require("./56.js");
var y = require("./156.js");
var b = require("./101.js");
o.classImplementsInterfaces(O, "IDetailViewAble", "IWorldmapObjectVO");