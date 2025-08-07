Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./103.js");
var r = require("./69.js");
var l = require("./4.js");
var c = require("./64.js");
var u = require("./345.js");
var d = require("./205.js");
var p = function (e) {
  function UpgradableLandmarkMapobjectVO() {
    var t = this;
    t._occupierPId = 0;
    t._level = -1;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).init();
    return t;
  }
  n.__extends(UpgradableLandmarkMapobjectVO, e);
  UpgradableLandmarkMapobjectVO.prototype.init = function () {};
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "hasReachedMaxLevel", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "dataModel", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  UpgradableLandmarkMapobjectVO.prototype.reset = function () {
    this.init();
    this.dispatchEvent(s.EventInstanceMapper.getEvent(c.VisualVOEvent, c.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  UpgradableLandmarkMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !this.isOwnMapobject && !l.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && l.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != a.AllianceConst.DIPLOMACY_REAL_ALLIED;
  };
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return this._occupierPId == l.CastleModel.userData.playerID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ContainerBuilderMapobjectVO.prototype, "isOwnMapobject").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "occupierPId", {
    get: function () {
      return this._occupierPId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "isPlayerOwned", {
    get: function () {
      return this._occupierPId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  UpgradableLandmarkMapobjectVO.prototype.canBeUpgradedByMe = function () {
    return this.ownerInfo != null && this.ownerInfo.playerID === l.CastleModel.userData.playerID || l.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
  };
  UpgradableLandmarkMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.ownerInfo != null && this.ownerInfo.playerID === l.CastleModel.userData.playerID;
  };
  UpgradableLandmarkMapobjectVO.prototype.canBeSupported = function () {
    return !this.isOwnMapobject && l.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
  };
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return !!this.ownerInfo && !this.isOwnMapobject && !this.ownerInfo.isDungeonOwner;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isOwnMapobject;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ContainerBuilderMapobjectVO.prototype, "canChangeDefenceOnWorldmap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ContainerBuilderMapobjectVO.prototype, "ignoresPeaceMode").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "landmarkBonus", {
    get: function () {
      var e = 0;
      if (this._levelInfo) {
        e = this._levelInfo.landmarkBonus;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  UpgradableLandmarkMapobjectVO.prototype.updateProgress = function (e, t) {
    if (e == this._objectId) {
      this._levelInfo = this.dataModel.getLevelInfoByPointsAchieved(t, this.kingdomID);
      this._level = this._levelInfo.level;
    }
  };
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "pointsRequiredForNextLevel", {
    get: function () {
      var e = this._levelInfo.level;
      return this.dataModel.getLevelInfoByLevel(e + 1, this.kingdomID).requiredPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return u.UnitBaseLocationEnum.KINGDOM_CASTLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ContainerBuilderMapobjectVO.prototype, "unitBaseLocation").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return UpgradableLandmarkMapobjectVO;
}(d.ContainerBuilderMapobjectVO);
exports.UpgradableLandmarkMapobjectVO = p;
o.classImplementsInterfaces(p, "IDetailViewAble", "IWorldmapObjectVO");