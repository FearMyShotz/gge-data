Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./55.js");
var r = require("./4.js");
var l = require("./336.js");
var c = require("./456.js");
var u = require("./567.js");
var d = createjs.Point;
var p = function (e) {
  function AIsoMovementVO() {
    var t = this;
    t._currentActionIndex = 0;
    t._isMale = true;
    t._precisePos = new d();
    t._usesWorkIndex = -1;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._group = "Movement";
    t._type = "";
    t._rotationType = l.IsoObjectRotationEnum._2FramesFor4Dir;
    t._isMale = t.objectType != h.IsoObjectEnum.MOVEMENT_CITIZEN || s.ClientConstUtils.getRandomInt(0, 1) == 1;
    return t;
  }
  n.__extends(AIsoMovementVO, e);
  AIsoMovementVO.prototype.destroy = function () {
    if (r.CastleModel.resourcePoolData.ownerMovementVO == this) {
      r.CastleModel.resourcePoolData.registerNewMovementAsOwner(null);
    }
    e.prototype.destroy.call(this);
  };
  AIsoMovementVO.prototype.startWithNewActionList = function (e, t = -1) {
    this._actionList = e;
    this._usesWorkIndex = t;
    this._currentActionIndex = 0;
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.init(this);
        }
      }
    }
    this.startCurrentAction();
  };
  AIsoMovementVO.prototype.startCurrentAction = function () {
    if (this.actionList.length <= 0 || this.currentActionIndex >= this.actionList.length) {
      this.isoData.updater.removeObjectByVO(this);
    } else {
      this.currentAction.start();
    }
  };
  AIsoMovementVO.prototype.update = function (e) {
    if (g.IsoHelper.view.isInIsoScreen && !_.Iso.renderer.mouse.isWorldDragging) {
      if (this.actionList.length <= 0 || this.currentActionIndex < 0 || this.currentActionIndex >= this.actionList.length) {
        this.isoData.updater.removeObjectByVO(this);
      } else {
        this.currentAction.update(e);
      }
    }
  };
  AIsoMovementVO.prototype.changePos = function (e, t, i = true) {
    this._x = (this._precisePos.x = e) | 0;
    this._y = (this._precisePos.y = t) | 0;
    if (i) {
      this.updateBounds();
    }
  };
  AIsoMovementVO.prototype.onCurrentActionDone = function () {
    if (this.isoData) {
      if (this._currentActionIndex + 1 >= this.actionList.length) {
        if (this.usesWorkIndex >= 0) {
          this.isoData.objects.movements.workPlaces.markWorkPlace(this.objectType, this.usesWorkIndex, false);
        }
        this.isoData.updater.removeObjectByVO(this);
      } else {
        this._currentActionIndex++;
        this.startCurrentAction();
      }
    }
  };
  Object.defineProperty(AIsoMovementVO.prototype, "currentAction", {
    get: function () {
      return this.actionList[this.currentActionIndex];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "currentActionType", {
    get: function () {
      return this.currentAction.actionType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "isMovable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AIsoObjectVO.prototype, "isMovable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AIsoMovementVO.prototype.getAreaKingdomName = function () {
    if (this.isoData.areaData.areaInfo.areaType == a.WorldConst.AREA_TYPE_TREASURE_CAMP || this.isoData.areaData.areaInfo.areaType == a.WorldConst.AREA_TYPE_FACTION_CAMP) {
      return g.IsoHelper.data.getAreaKingdomName(o.WorldClassic.KINGDOM_ID, a.WorldConst.AREA_TYPE_CASTLE);
    } else {
      return e.prototype.getAreaKingdomName.call(this);
    }
  };
  AIsoMovementVO.prototype.getWaypoints = function () {
    return new c.IsoMovementWaypointClassesVO([]);
  };
  Object.defineProperty(AIsoMovementVO.prototype, "isClickAvailable", {
    get: function () {
      return this.hasResourceItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "hasResourceItem", {
    get: function () {
      return r.CastleModel.resourcePoolData.ownerMovementVO == this;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "isMale", {
    get: function () {
      return this._isMale;
    },
    set: function (e) {
      this._isMale = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "actionList", {
    get: function () {
      return this._actionList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "currentActionIndex", {
    get: function () {
      return this._currentActionIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "precisePos", {
    get: function () {
      return this._precisePos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVO.prototype, "usesWorkIndex", {
    get: function () {
      return this._usesWorkIndex;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoMovementVO;
}(u.AInteractiveIsoObjectVO);
exports.AIsoMovementVO = p;
var h = require("./80.js");
var g = require("./46.js");
var C = require("./309.js");
var _ = require("./34.js");