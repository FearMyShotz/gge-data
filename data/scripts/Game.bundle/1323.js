Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./345.js");
var r = function (e) {
  function DummyMapobjectVO() {
    return e.call(this) || this;
  }
  n.__extends(DummyMapobjectVO, e);
  DummyMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "areaNameStringShort", {
    get: function () {
      return this.areaNameString;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "keepLevel", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "towerLevel", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "moatLevel", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.parseAreaInfoBattleLog = function (e) {};
  Object.defineProperty(DummyMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return a.Localize.text("kingdom_emptyTile");
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "ownerInfo", {
    get: function () {
      return null;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingCooldownTimeInSeconds", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "secondsSinceEspionage", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingSpyInfoTime", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingOpenGateTime", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "openGateCounter", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingAbandonOutpostTime", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingCancelAbandonOutpostTime", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingCooldownAbandonOutpostTime", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "outpostType", {
    get: function () {
      return 0;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.canBeAttacked = function () {
    return false;
  };
  DummyMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return false;
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "isCoolingDown", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.canBePlagueAttacked = function () {
    return false;
  };
  DummyMapobjectVO.prototype.canBeConquered = function () {
    return false;
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "isConqueredByMe", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.canBeAttackedAndConquered = function () {
    return false;
  };
  DummyMapobjectVO.prototype.canBeSupported = function () {
    return false;
  };
  DummyMapobjectVO.prototype.canBeTroupsSended = function () {
    return false;
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "canBeTraded", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "isUnderConquerControl", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingCooldownSabotageTimeInSeconds", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.equalsOtherWMO = function (e, t) {
    return false;
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "bookmark", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "hasNameLabel", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "attackType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return s.UnitBaseLocationEnum.DEFAULT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "spaceID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "isInSpyLevelRange", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "isNpcCapital", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    return null;
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "chargeRank", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "customConnections", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "temporarySabotageProtection", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return DummyMapobjectVO;
}(require("./701.js").EmptyMapobjectVO);
exports.DummyMapobjectVO = r;
o.classImplementsInterfaces(r, "IWorldmapObjectVO");