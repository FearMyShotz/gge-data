Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./30.js");
var a = require("./692.js");
var s = require("./866.js");
var r = createjs.Point;
var l = function (e) {
  function IsoMovementActionStand(t, i, n = -1, o = false, a = false, s = 1000) {
    var l = this;
    l._standPos = new r();
    l._duration = 0;
    l._rotation = 0;
    l._startTime = NaN;
    l._fadeDuration = NaN;
    CONSTRUCTOR_HACK;
    (l = e.call(this, o, a) || this)._standPos.x = t.x;
    l._standPos.y = t.y;
    l._rotation = n;
    l._duration = i;
    l._fadeDuration = s;
    return l;
  }
  n.__extends(IsoMovementActionStand, e);
  IsoMovementActionStand.prototype.start = function () {
    this.movementVO.changePos(this.standPos.x, this.standPos.y);
    if (this.rotation >= 0) {
      this.movementVO.rotation = this.rotation;
    }
    this._startTime = o.CachedTimer.getCachedTimer();
    this.updateFading();
  };
  IsoMovementActionStand.prototype.update = function (t) {
    e.prototype.update.call(this, t);
    if (t >= this.startTime + this.duration) {
      this.onActionDone();
    }
  };
  Object.defineProperty(IsoMovementActionStand.prototype, "actionType", {
    get: function () {
      return a.IsoMovementActionEnum.STAND;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AIsoMovementAction.prototype, "actionType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionStand.prototype, "standPos", {
    get: function () {
      return this._standPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionStand.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionStand.prototype, "startTime", {
    get: function () {
      return this._startTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionStand.prototype, "rotation", {
    get: function () {
      return this._rotation;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionStand.prototype, "fadeDuration", {
    get: function () {
      return this._fadeDuration;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementActionStand;
}(s.AIsoMovementAction);
exports.IsoMovementActionStand = l;