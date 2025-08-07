Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./30.js");
var s = require("./72.js");
var r = createjs.Event;
var l = createjs.TimerEvent;
var c = function (e) {
  function CastleLuckyWheelComponent(t) {
    var i = e.call(this) || this;
    i.currentDegrees = 0;
    i.lastUpdateTime = -1;
    i.acceleration = 0;
    i._wantedSpeed = 0;
    i.isAccelerating = false;
    i.accelerationDistance = NaN;
    i.accelerationTime = NaN;
    i._currentSpeedInDegrees = 0;
    i.disp = t;
    return i;
  }
  n.__extends(CastleLuckyWheelComponent, e);
  CastleLuckyWheelComponent.prototype.changeWheel = function (e) {
    this.disp = e;
  };
  Object.defineProperty(CastleLuckyWheelComponent.prototype, "currentSpeedInDegrees", {
    get: function () {
      return this._currentSpeedInDegrees;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelComponent.prototype, "wheelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelComponent.prototype.accelerateWheel = function (e, t) {
    this._wantedSpeed = e * CastleLuckyWheelComponent.SPIN_TIMES_ONE;
    if (this._wantedSpeed != this._currentSpeedInDegrees) {
      this.currentDegrees = this.currentDegrees % CastleLuckyWheelComponent.SPIN_TIMES_ONE;
      this.isAccelerating = true;
      var i = t - this.currentDegrees;
      if (i <= CastleLuckyWheelComponent.SPIN_TIMES_HALF && i >= -CastleLuckyWheelComponent.SPIN_TIMES_HALF) {
        i += CastleLuckyWheelComponent.SPIN_TIMES_ONE;
      } else if (i < -CastleLuckyWheelComponent.SPIN_TIMES_HALF) {
        i += CastleLuckyWheelComponent.SPIN_TIMES_TWO;
      }
      this.acceleration = (this._wantedSpeed - this._currentSpeedInDegrees) / (i * 2);
      this.accelerationDistance = t;
      this.accelerationTime = (this._wantedSpeed - this._currentSpeedInDegrees) / (this.acceleration * CastleLuckyWheelComponent.SPIN_TIMES_ONE);
      this.lastUpdateTime = a.CachedTimer.getCachedTimer();
      if (!this.wheelUpdateTimer) {
        this.wheelUpdateTimer = new o.Timer(1000 / 30);
        this.wheelUpdateTimer.addEventListener(l.TIMER, this.bindFunction(this.onUpdateWheel));
        this.wheelUpdateTimer.start();
      }
    }
  };
  CastleLuckyWheelComponent.prototype.launchWheelWithCountDown = function (e, t, i) {
    this._wantedSpeed = e * CastleLuckyWheelComponent.SPIN_TIMES_ONE;
    this.currentDegrees = this.currentDegrees == 0 ? t : this.currentDegrees;
    this.isAccelerating = false;
    this.lastUpdateTime = a.CachedTimer.getCachedTimer();
    this._currentSpeedInDegrees = this._wantedSpeed;
    if (!this.buttonEnabledTimer) {
      this.buttonEnabledTimer = new o.Timer(i, 0);
      this.buttonEnabledTimer.addEventListener(l.TIMER, this.bindFunction(this.onEnabledCountDownFinished));
      this.buttonEnabledTimer.start();
    }
    if (!this.wheelUpdateTimer) {
      this.wheelUpdateTimer = new o.Timer(1000 / 30);
      this.wheelUpdateTimer.addEventListener(l.TIMER, this.bindFunction(this.onUpdateWheel));
      this.wheelUpdateTimer.start();
    }
  };
  CastleLuckyWheelComponent.prototype.updateMovement = function () {
    var e = a.CachedTimer.getCachedTimer();
    var t = (e - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = e;
    var i = this._currentSpeedInDegrees * t;
    this.currentDegrees += i;
    this.currentDegrees = this.currentDegrees % CastleLuckyWheelComponent.SPIN_TIMES_ONE;
    this.wheelDisp.rotation = this.currentDegrees;
    if (this._currentSpeedInDegrees == 0) {
      this.destroyUpdateTimer();
    }
  };
  CastleLuckyWheelComponent.prototype.destroyUpdateTimer = function () {
    if (this.wheelUpdateTimer) {
      this.wheelUpdateTimer.stop();
      this.wheelUpdateTimer.removeEventListener(l.TIMER, this.bindFunction(this.onUpdateWheel));
      this.wheelUpdateTimer = null;
    }
  };
  CastleLuckyWheelComponent.prototype.updateAcceleratedMovement = function () {
    var e = a.CachedTimer.getCachedTimer();
    var t = (e - this.lastUpdateTime) / 1000;
    var i = this._currentSpeedInDegrees * t + this.currentDegrees + this.acceleration * 0.5 * CastleLuckyWheelComponent.SPIN_TIMES_ONE * (t * t);
    if (t > this.accelerationTime) {
      this.currentDegrees = this.accelerationDistance;
      this.isAccelerating = false;
      this.lastUpdateTime = e;
      this._currentSpeedInDegrees = this._wantedSpeed;
      this.dispatchEvent(new r(CastleLuckyWheelComponent.SPEED_REACHED, false, false));
    }
    this.wheelDisp.rotation = i;
  };
  CastleLuckyWheelComponent.prototype.onEnabledCountDownFinished = function (e) {
    this.dispatchEvent(new r(CastleLuckyWheelComponent.SPEED_REACHED, false, false));
    if (this.buttonEnabledTimer) {
      this.buttonEnabledTimer.stop();
      this.buttonEnabledTimer.removeEventListener(l.TIMER, this.bindFunction(this.onEnabledCountDownFinished));
      this.buttonEnabledTimer = null;
    }
  };
  CastleLuckyWheelComponent.prototype.onUpdateWheel = function (e) {
    if (this.isAccelerating) {
      this.updateAcceleratedMovement();
    } else {
      this.updateMovement();
    }
  };
  CastleLuckyWheelComponent.prototype.destroy = function () {
    this.destroyUpdateTimer();
  };
  CastleLuckyWheelComponent.__initialize_static_members = function () {
    CastleLuckyWheelComponent.SPEED_REACHED = "speed_reached";
    CastleLuckyWheelComponent.SPIN_TIMES_HALF = 180;
    CastleLuckyWheelComponent.SPIN_TIMES_ONE = 360;
    CastleLuckyWheelComponent.SPIN_TIMES_TWO = 720;
  };
  return CastleLuckyWheelComponent;
}(s.CastleEventDispatcher);
exports.CastleLuckyWheelComponent = c;
c.__initialize_static_members();