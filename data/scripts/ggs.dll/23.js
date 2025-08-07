Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var o = require("./14.js");
var l = require("./703.js");
var u = i.getLogger("ExternalLog");
var c = require("./712.js");
var _ = function () {
  function ExternalLog() {
    this._isActive = true;
    this._facade = null;
    this.init();
    if (ExternalLog._logInstance) {
      throw new Error(ExternalLog.MESSAGE_SINGLETON);
    }
  }
  Object.defineProperty(ExternalLog, "logger", {
    get: function () {
      ExternalLog._logInstance ||= new ExternalLog();
      return ExternalLog._logInstance;
    },
    enumerable: true,
    configurable: true
  });
  ExternalLog.prototype.dispose = function () {
    this._dispatchedHashes = [];
  };
  ExternalLog.prototype.log = function (e, t = false) {
    if (this.isActive) {
      e.dataFacade = this._facade;
      var n = e.create();
      var i = this.takeHash(n);
      var s = a.getQualifiedClassName(e);
      if (!n.isEssentialFilled) {
        throw new Error(s + ": " + ExternalLog.MESSAGE_NO_ESSENTIALS);
      }
      if (!t) {
        if (this._dispatchedHashes.indexOf(i) >= 0) {
          u.debug(this.parseMessage(ExternalLog.MESSAGE_SKIP, s, n.subErrorId));
          return;
        }
        if (this._dispatchedHashes.length >= ExternalLog.DISPATCHED_HASHES_MAX_LENGTH) {
          this.cleanOlderHashes();
        }
        this._dispatchedHashes.push(i);
      }
      u.info(this.parseMessage(ExternalLog.MESSAGE_SEND, s, n.subErrorId, JSON.stringify(n.data)));
      this.send(n);
    } else {
      u.warn(this.parseMessage(ExternalLog.MESSAGE_NOT_ACTIVE, e));
    }
  };
  ExternalLog.prototype.init = function () {
    this._isActive = true;
    this._dispatchedHashes = [];
    this._facade = new l.LODataFacade();
  };
  ExternalLog.prototype.takeHash = function (e) {
    var t = [];
    e.logData.forEach(function (e, n) {
      if (ExternalLog.EXCLUDED_PARAMS_FROM_HASH.indexOf(n) < 0) {
        t.push(n + e);
      }
    });
    t.sort();
    return new c().update(t.join("")).digest("hex");
  };
  ExternalLog.prototype.cleanOlderHashes = function () {
    while (this._dispatchedHashes.length >= ExternalLog.DISPATCHED_HASHES_MAX_LENGTH) {
      this._dispatchedHashes.shift();
    }
  };
  ExternalLog.prototype.send = function (e) {
    var t = new r.URLRequest(o.ExternalLoggingConstants.LOG_API_URL, new URLSearchParams(e.data).toString(), "POST");
    var n = new s.URLLoaderService(t);
    n.load().then(function (e) {
      n.dispose();
    }).catch(function (e) {
      n.dispose();
      u.warn(e);
    });
  };
  ExternalLog.prototype.parseMessage = function (e) {
    var t = [];
    for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    var i = e;
    for (var a = 0; a < t.length; a++) {
      i = i.replace("{" + a + "}", t[a]);
    }
    return i;
  };
  Object.defineProperty(ExternalLog.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    set: function (e) {
      this._isActive = e;
      u.debug(this.parseMessage(ExternalLog.MESSAGE_STATUS_CHANGE, e));
    },
    enumerable: true,
    configurable: true
  });
  ExternalLog.MESSAGE_SINGLETON = "Calling constructor not allowed! logger instead.";
  ExternalLog.MESSAGE_STATUS_CHANGE = "Status: '{0}'";
  ExternalLog.MESSAGE_NO_ESSENTIALS = "You have to execute createEssentials in your '{0}' class.";
  ExternalLog.MESSAGE_NOT_ACTIVE = "ExternalLog is not active, but wants to log '{0}' event";
  ExternalLog.MESSAGE_SKIP = "Event '{0}' with subErrorID '{1}' was already sent. Skipping.";
  ExternalLog.MESSAGE_SEND = "Sending event '{0}' with subErrorID '{1}' and payload '{2}'";
  ExternalLog.EXCLUDED_PARAMS_FROM_HASH = [o.ExternalLoggingConstants.PARAM_UTC_TIME_STAMP, o.ExternalLoggingConstants.PARAM_SESSION_LENGTH];
  ExternalLog.DISPATCHED_HASHES_MAX_LENGTH = 25;
  return ExternalLog;
}();
exports.ExternalLog = _;