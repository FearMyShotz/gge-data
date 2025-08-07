Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./30.js");
var a = require("./692.js");
var s = require("./866.js");
var r = createjs.Point;
var l = function (e) {
  function IsoMovementActionWork(t, i, n, o) {
    var a = this;
    a._workPos = new r();
    a._duration = 0;
    a._startTime = NaN;
    CONSTRUCTOR_HACK;
    (a = e.call(this, n, o) || this)._workPos.x = t.x;
    a._workPos.y = t.y;
    a._duration = i;
    return a;
  }
  n.__extends(IsoMovementActionWork, e);
  IsoMovementActionWork.prototype.start = function () {
    this.movementVO.changePos(this.workPos.x, this.workPos.y);
    this.movementVO.rotation = 0;
    this._startTime = o.CachedTimer.getCachedTimer();
    if (this.willFadeIn) {
      this.fadeIn();
    }
  };
  IsoMovementActionWork.prototype.update = function (t) {
    e.prototype.update.call(this, t);
    if (t >= this.startTime + this.duration) {
      this.onActionDone();
    }
  };
  Object.defineProperty(IsoMovementActionWork.prototype, "actionType", {
    get: function () {
      return a.IsoMovementActionEnum.WORK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AIsoMovementAction.prototype, "actionType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWork.prototype, "workPos", {
    get: function () {
      return this._workPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWork.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWork.prototype, "startTime", {
    get: function () {
      return this._startTime;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementActionWork;
}(s.AIsoMovementAction);
exports.IsoMovementActionWork = l;