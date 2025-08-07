Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./73.js");
var a = require("./11.js");
var s = require("./4.js");
var r = require("./25.js");
var o = require("./40.js");
var l = require("./65.js");
var u = require("./3.js");
var c = createjs.TimerEvent;
var _ = function () {
  function BasicSessionData() {
    this._currentEvents = [0];
  }
  Object.defineProperty(BasicSessionData.prototype, "currentEvents", {
    get: function () {
      return this._currentEvents;
    },
    set: function (e) {
      this._currentEvents = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicSessionData.prototype.isEventActive = function (e) {
    for (var t = 0, n = this._currentEvents; t < n.length; t++) {
      if (n[t] == e) {
        return true;
      }
    }
    return false;
  };
  BasicSessionData.prototype.initLoggedinTime = function (e, t = 0) {
    if (t == 0) {
      t = a.BasicConstants.LOGGEDIN_MESSAGE_TIME_INTERVAL;
    }
    this._loggedinTime = e;
    this._loggedinTimeMsgId = this._loggedinTime * 60000 / t;
    this.resetLoggedinTimer();
    this._loggedinTimer = new u.Timer(t, 1);
    this._loggedinTimer.addEventListener(c.TIMER_COMPLETE, this.bindFunction(this.onLoggedinMessageTimerComplete));
    this._loggedinTimer.start();
  };
  BasicSessionData.prototype.resetLoggedinTimer = function () {
    if (this._loggedinTimer) {
      this._loggedinTimer.removeEventListener(c.TIMER_COMPLETE, this.bindFunction(this.onLoggedinMessageTimerComplete));
    }
  };
  BasicSessionData.prototype.onLoggedinMessageTimerComplete = function (e) {
    this._loggedinTimer.reset();
    this._loggedinTime += a.BasicConstants.LOGGEDIN_MESSAGE_TIME_INTERVAL;
    this._loggedinTimeMsgId++;
    var t = s.BasicModel.languageData.getTextById("alert_logintimemsg_title_" + this._loggedinTimeMsgId);
    var n = s.BasicModel.languageData.getTextById("alert_logintimemsg_copy_" + this._loggedinTimeMsgId);
    if (t.length > 0 && n.length > 0) {
      this.showLoggedinTimeIntervalMessage(t, n);
    }
    this._loggedinTimer.start();
  };
  BasicSessionData.prototype.showLoggedinTimeIntervalMessage = function (e, t) {
    r.BasicLayoutManager.getInstance().showDialog(o.CommonDialogNames.StandardOkDialog_NAME, new l.BasicStandardOkDialogProperties(e, t));
  };
  BasicSessionData.prototype.initSessionTime = function (e, t) {
    if (this._sessionTimerDict == null) {
      this._sessionTimerDict = new Map();
    }
    var n = new u.Timer(e, 1);
    n.addEventListener(c.TIMER_COMPLETE, this.bindFunction(this.onSessionTimerComplete));
    this._sessionTimerDict.set(t, n);
    n.start();
  };
  BasicSessionData.prototype.resetSessionTimer = function () {
    if (this._sessionTimerDict) {
      for (var e in this._sessionTimerDict.values()) {
        this._sessionTimerDict[e].removeEventListener(c.TIMER_COMPLETE, this.bindFunction(this.onSessionTimerComplete));
      }
    }
  };
  BasicSessionData.prototype.isSessionTimerById = function (e, t) {
    return !!i.DictionaryUtil.containsKey(this._sessionTimerDict, e) && this._sessionTimerDict.get(e) == t;
  };
  BasicSessionData.prototype.onSessionTimerComplete = function (e) {
    e.target.reset();
  };
  Object.defineProperty(BasicSessionData.prototype, "loggedIn", {
    get: function () {
      return this._loggedIn;
    },
    set: function (e) {
      this._loggedIn = e;
    },
    enumerable: true,
    configurable: true
  });
  return BasicSessionData;
}();
exports.BasicSessionData = _;