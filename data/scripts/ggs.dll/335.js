Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./38.js");
var s = require("./769.js");
i.getLogger("Tracking.ClientFunnelPlayTimeController");
var r = [new s.ClientFunnelPlayTimeStateVO(0.5, a.ClientFunnelGameStates.PLAYTIME_0_5_MINUTES), new s.ClientFunnelPlayTimeStateVO(1, a.ClientFunnelGameStates.PLAYTIME_X_MINUTES_1), new s.ClientFunnelPlayTimeStateVO(2, a.ClientFunnelGameStates.PLAYTIME_X_MINUTES_2), new s.ClientFunnelPlayTimeStateVO(5, a.ClientFunnelGameStates.PLAYTIME_X_MINUTES_5), new s.ClientFunnelPlayTimeStateVO(10, a.ClientFunnelGameStates.PLAYTIME_X_MINUTES_10), new s.ClientFunnelPlayTimeStateVO(15, a.ClientFunnelGameStates.PLAYTIME_X_MINUTES_15), new s.ClientFunnelPlayTimeStateVO(30, a.ClientFunnelGameStates.PLAYTIME_X_MINUTES_30), new s.ClientFunnelPlayTimeStateVO(45, a.ClientFunnelGameStates.PLAYTIME_X_MINUTES_45), new s.ClientFunnelPlayTimeStateVO(60, a.ClientFunnelGameStates.PLAYTIME_X_MINUTES_60)];
var o = function () {
  function ClientFunnelPlayTimeController(e, t) {
    var n = this;
    this._stage = e;
    this._trackStateHandler = t;
    this._timeoutId = undefined;
    this._currentPlayTimeIndex = 0;
    this._startTime = 0;
    this._elapsedTime = 0;
    this._pauseTime = 0;
    this._resumeTime = 0;
    this.timerHandler = function () {
      if (n._currentPlayTimeIndex < r.length) {
        n._elapsedTime = r[n._currentPlayTimeIndex].timeDelayMilliseconds;
        n._trackStateHandler(r[n._currentPlayTimeIndex].eventState);
      }
      n._currentPlayTimeIndex++;
      if (n._currentPlayTimeIndex >= r.length) {
        n.dispose();
      } else {
        n._startTime = Date.now();
        n._timeoutId = window.setTimeout(n.timerHandler, n.currentDelay);
      }
    };
    this.visibilityHandler = function () {
      if (document[n._hiddenFlag]) {
        n.pausePlaytimeTracking();
      } else {
        n.resumePlaytimeTracking();
      }
    };
    if (!this._stage) {
      throw new Error("[ClientFunnelPlayTimeController] Stage must be defined");
    }
  }
  ClientFunnelPlayTimeController.prototype.start = function () {
    if (!this._timeoutId) {
      this._startTime = Date.now();
      this._elapsedTime = 0;
      this._currentPlayTimeIndex = 0;
      this._timeoutId = window.setTimeout(this.timerHandler, this.currentDelay);
      this.monitorVisibility();
    }
  };
  ClientFunnelPlayTimeController.prototype.monitorVisibility = function () {
    if (document.hidden !== undefined) {
      this._hiddenFlag = "hidden";
      this._visibilityChangeEvent = "visibilitychange";
    } else if (document.msHidden !== undefined) {
      this._hiddenFlag = "msHidden";
      this._visibilityChangeEvent = "msvisibilitychange";
    } else if (document.webkitHidden !== undefined) {
      this._hiddenFlag = "webkitHidden";
      this._visibilityChangeEvent = "webkitvisibilitychange";
    }
    document.addEventListener(this._visibilityChangeEvent, this.visibilityHandler, false);
  };
  ClientFunnelPlayTimeController.prototype.pausePlaytimeTracking = function () {
    this._pauseTime = Date.now();
    window.clearTimeout(this._timeoutId);
    this._timeoutId = undefined;
  };
  ClientFunnelPlayTimeController.prototype.resumePlaytimeTracking = function () {
    this._resumeTime = Date.now();
    this._timeoutId = window.setTimeout(this.timerHandler, this.currentDelay - (this._pauseTime - this._startTime));
    this._startTime += this._resumeTime - this._pauseTime;
  };
  ClientFunnelPlayTimeController.prototype.dispose = function () {
    if (this._timeoutId) {
      window.clearTimeout(this._timeoutId);
      this._timeoutId = undefined;
    }
    document.removeEventListener(this._visibilityChangeEvent, this.visibilityHandler);
  };
  Object.defineProperty(ClientFunnelPlayTimeController.prototype, "currentDelay", {
    get: function () {
      var e = 0;
      if (this._currentPlayTimeIndex < r.length) {
        e = r[this._currentPlayTimeIndex].timeDelayMilliseconds - this._elapsedTime;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  return ClientFunnelPlayTimeController;
}();
exports.ClientFunnelPlayTimeController = o;