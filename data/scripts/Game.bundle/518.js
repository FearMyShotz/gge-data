Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./28.js");
var u = require("./480.js");
var d = require("./30.js");
var p = require("./4.js");
var h = require("./202.js");
var g = require("./729.js");
var C = require("./147.js");
var _ = require("./222.js");
var m = require("./1323.js");
var f = function (e) {
  function BasicMapmovementVO() {
    var t = e.call(this) || this;
    t._passedTime = 0;
    t._passedTimeMs = 0;
    t._totalTime = 0;
    t._totalTimeMs = 0;
    t._arivalTimeStamp = 0;
    t._direction = 0;
    t._sourceOwnerID = 0;
    t._targetOwnerID = 0;
    t._movementOwnerID = 0;
    t._passedWaitDuration = 0;
    t._totalWaitDuration = 0;
    t._endWaitTimeStamp = 0;
    t._isNPCMovement = false;
    t._horseBoosterWod = 0;
    t._kingdomID = 0;
    t._advisorType = 0;
    t._advisorMovementCount = 0;
    t._advisorMovementNumber = 0;
    t._advisorIsLastAttack = false;
    return t;
  }
  n.__extends(BasicMapmovementVO, e);
  BasicMapmovementVO.prototype.loadFromParamObject = function (e) {
    var t = e.M;
    this._objectId = t.MID;
    this._passedTime = l.int(t.PT);
    this._passedTimeMs = t.PT * c.ClientConstTime.SEC_2_MILLISEC;
    this._totalTimeMs = t.TT * c.ClientConstTime.SEC_2_MILLISEC;
    this._totalTime = l.int(t.TT);
    this._arivalTimeStamp = d.CachedTimer.getCachedTimer() + (this._totalTime - this._passedTime) * c.ClientConstTime.SEC_2_MILLISEC;
    this._direction = l.int(t.D);
    this._sourceArea = C.WorldmapObjectFactory.parseWorldMapArea(t.SA);
    this._sourceOwnerID = l.int(this._sourceArea && this._sourceArea.ownerInfo ? this._sourceArea.ownerInfo.playerID : t.SID);
    this._targetOwnerID = l.int(t.TID);
    this._movementOwnerID = l.int(t.OID);
    this._sourceOwnerInfo = p.CastleModel.otherPlayerData.getOwnerInfoVO(this._sourceOwnerID);
    this._targetOwnerInfo = p.CastleModel.otherPlayerData.getOwnerInfoVO(this._targetOwnerID);
    this._movementOwnerInfo = p.CastleModel.otherPlayerData.getOwnerInfoVO(this._movementOwnerID);
    this._kingdomID = l.int(t.KID);
    if (this._sourceArea) {
      this._sourceArea.ownerInfo = this._sourceOwnerInfo;
    } else {
      this._sourceArea = new m.DummyMapobjectVO();
    }
    this._targetArea = C.WorldmapObjectFactory.parseWorldMapArea(t.TA);
    if (this._targetArea) {
      if (this._targetArea.areaType != s.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
        this._targetArea.ownerInfo = this._targetOwnerInfo;
      }
    } else {
      this._targetArea = new m.DummyMapobjectVO();
    }
    this._horseBoosterWod = l.int(t.HBW);
    if (e.UM) {
      this.parseUnitMovement(e.UM);
    }
    if (this._sourceArea && this._sourceArea.ownerInfo) {
      this._isNPCMovement = this._sourceArea.ownerInfo.isDungeonOwner;
    }
  };
  BasicMapmovementVO.prototype.updateOwnerInfos = function (e) {
    if (this._sourceOwnerInfo && e.playerID == this._sourceOwnerInfo.playerID) {
      this._sourceOwnerInfo = e;
    }
    if (this._targetOwnerInfo && e.playerID == this._targetOwnerInfo.playerID) {
      this._targetOwnerInfo = e;
    }
    if (this._movementOwnerInfo && e.playerID == this._movementOwnerInfo.playerID) {
      this._movementOwnerInfo = e;
    }
  };
  BasicMapmovementVO.prototype.parseUnitMovement = function (e) {
    this._passedWaitDuration = l.int(e.PWD);
    this._totalWaitDuration = l.int(e.TWD);
    this._endWaitTimeStamp = l.int(this.getTimeUntiMovmentReachTargetInMilliSeconds() + d.CachedTimer.getCachedTimer() + (this._totalWaitDuration - this._passedWaitDuration) * c.ClientConstTime.SEC_2_MILLISEC);
    if (e.L) {
      this._lordVO = g.LordFactory.createLord(e.L, true);
    }
    if (e.AAT) {
      this._advisorType = e.AAT;
    }
    if (e.AAC) {
      this._advisorMovementCount = e.AAC;
    }
    if (e.AAN) {
      this._advisorMovementNumber = e.AAN;
    }
    if (e.AAL == 1) {
      this._advisorIsLastAttack = true;
    }
  };
  Object.defineProperty(BasicMapmovementVO.prototype, "isVisibleOnWorldMap", {
    get: function () {
      return this.kingdomID == p.CastleModel.kingdomData.activeKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "currentProgress", {
    get: function () {
      if (this._totalWaitDuration > 0 && this.movementProgress == 1) {
        return this.waitProgress;
      } else {
        return this.movementProgress;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovementVO.prototype.shouldBeShown = function () {
    if (this._totalWaitDuration > 0 && this.movementProgress == 1) {
      return this.getTimeUntilWaitOverInSeconds() > 0;
    } else {
      return this.getTimeUnitMovmentReachTargetInSeconds() > 0;
    }
  };
  BasicMapmovementVO.prototype.currentEndTimeInSeconds = function () {
    if (this._totalWaitDuration > 0 && this.movementProgress == 1) {
      return this.getTimeUntilWaitOverInSeconds();
    } else {
      return this.getTimeUnitMovmentReachTargetInSeconds();
    }
  };
  Object.defineProperty(BasicMapmovementVO.prototype, "movementProgress", {
    get: function () {
      var e = this.getPassedTimeInMiliSeconds() / this.getTotalTimeInMiliSeconds();
      if (e > 1) {
        return 1;
      } else {
        return e;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovementVO.prototype.getTimeUntiMovmentReachTargetInMilliSeconds = function () {
    return Math.max(0, this._arivalTimeStamp - d.CachedTimer.getCachedTimer());
  };
  BasicMapmovementVO.prototype.getTimeUnitMovmentReachTargetInSeconds = function () {
    return l.int(this.getTimeUntiMovmentReachTargetInMilliSeconds() * c.ClientConstTime.MILLISEC_2_SEC);
  };
  BasicMapmovementVO.prototype.getPassedTimeInSeconds = function () {
    return this.getTotalTimeInSeconds() - this.getTimeUnitMovmentReachTargetInSeconds();
  };
  BasicMapmovementVO.prototype.getPassedTimeInMiliSeconds = function () {
    return this.getTotalTimeInMiliSeconds() - this.getTimeUntiMovmentReachTargetInMilliSeconds();
  };
  BasicMapmovementVO.prototype.getTotalTimeInSeconds = function () {
    return Math.max(1, this._totalTime);
  };
  BasicMapmovementVO.prototype.getTotalTimeInMiliSeconds = function () {
    return l.int(Math.max(1, this._totalTimeMs));
  };
  Object.defineProperty(BasicMapmovementVO.prototype, "waitProgress", {
    get: function () {
      var e = this.getWaitedTimeInSeconds() / this._totalWaitDuration;
      if (e > 1) {
        return 1;
      } else {
        return e;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovementVO.prototype.getTimeUntiWaitOverInMilliSeconds = function () {
    return Math.max(0, this._endWaitTimeStamp - d.CachedTimer.getCachedTimer());
  };
  BasicMapmovementVO.prototype.getTimeUntilWaitOverInSeconds = function () {
    return l.int(this.getTimeUntiWaitOverInMilliSeconds() * c.ClientConstTime.MILLISEC_2_SEC);
  };
  BasicMapmovementVO.prototype.getWaitedTimeInSeconds = function () {
    return this._totalWaitDuration - this.getTimeUntilWaitOverInSeconds();
  };
  BasicMapmovementVO.prototype.getTotalWaitTimeInSeconds = function () {
    return this._totalWaitDuration;
  };
  Object.defineProperty(BasicMapmovementVO.prototype, "distance", {
    get: function () {
      return o.MathBase.round(_.MapHelper.getDistanceByMapobjects(this.sourceArea, this.targetArea), 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "targetAreaPos", {
    get: function () {
      return this._targetArea.absAreaPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "sourceAreaPos", {
    get: function () {
      return this._sourceArea.absAreaPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "sourceOwnerID", {
    get: function () {
      return this._sourceOwnerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "targetOwnerID", {
    get: function () {
      return this._targetOwnerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "movementOwnerID", {
    get: function () {
      return this._movementOwnerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "sourceOwnerInfo", {
    get: function () {
      return this._sourceOwnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "targetOwnerInfo", {
    get: function () {
      return this._targetOwnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "movementOwnerInfo", {
    get: function () {
      return this._movementOwnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "movementOwnerCrestVO", {
    get: function () {
      if (this._movementOwnerInfo) {
        if (this.kingdomID == r.FactionConst.KINGDOM_ID) {
          if (this._movementOwnerInfo.factionID == r.FactionConst.BLUE_FACTION) {
            return h.FactionEventVO.BLUE_CREST_VO;
          } else {
            return h.FactionEventVO.RED_CREST_VO;
          }
        } else {
          return this._movementOwnerInfo.crest;
        }
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "needGeneral", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return !this.isReturnHome || this.advisorType > 0 && !this.advisorIsLastAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "canBeSendHome", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "tooLateToBeRetreated", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isMyMovement", {
    get: function () {
      return this._movementOwnerID == p.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isAttackingMovement", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isAllyAttackingMovement", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "sourceArea", {
    get: function () {
      return this._sourceArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "targetArea", {
    get: function () {
      return this._targetArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "horseBoosterWod", {
    get: function () {
      return this._horseBoosterWod;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isNPCMovement", {
    get: function () {
      return this._isNPCMovement;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isReturnHome", {
    get: function () {
      return this._direction == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "lordVO", {
    get: function () {
      return this._lordVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "showAsAllianceAttackWarning", {
    get: function () {
      return !!this._movementOwnerInfo && !this._movementOwnerInfo.isDungeonOwner;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isStationed", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isSourceAreaStillMine", {
    get: function () {
      if (!this.sourceArea.isOwnMapobject) {
        return false;
      }
      var e = p.CastleModel.userData.getOwnMapObjects(this.sourceArea.areaType, this.sourceArea.kingdomID);
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n.absAreaPos.equals(this.sourceArea.absAreaPos)) {
            return true;
          }
        }
      }
      return this.sourceArea.areaType == s.WorldConst.AREA_TYPE_TREASURE_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovementVO.prototype.isSubscriptionBuffed = function () {
    return false;
  };
  Object.defineProperty(BasicMapmovementVO.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "advisorMovementCount", {
    get: function () {
      return this._advisorMovementCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "advisorMovementNumber", {
    get: function () {
      return this._advisorMovementNumber;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "advisorIsLastAttack", {
    get: function () {
      return this._advisorIsLastAttack;
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovementVO.TRAVELSTATE_MOVING_TO_TARGET = 0;
  BasicMapmovementVO.TRAVELSTATE_RETURN_HOME = 1;
  return BasicMapmovementVO;
}(u.AVisualVO);
exports.BasicMapmovementVO = f;
a.classImplementsInterfaces(f, "IMapMovementVO");