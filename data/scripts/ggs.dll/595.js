Object.defineProperty(exports, "__esModule", {
  value: true
});
var logger_1 = require("./2.js");
var logger = logger_1.getLogger("CreateJs.ExternalInterface");
var ExternalInterface = function () {
  function ExternalInterface() {}
  Object.defineProperty(ExternalInterface, "available", {
    get: function () {
      return window.parent != window.self;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ExternalInterface, "objectID", {
    get: function () {
      return ExternalInterface._objectID;
    },
    enumerable: true,
    configurable: true
  });
  ExternalInterface.setFlashObject = function () {
    logger.warn("WHERE / WHY ARE WE STILL SETTING THE FLASHOBJECT ??");
    ExternalInterface._flashObject = document.getElementById("flashObject");
  };
  ExternalInterface.getFlashObject = function () {
    logger.warn("WHO is asking for getFlashObject??");
    return ExternalInterface._flashObject;
  };
  ExternalInterface.addCallback = function (e, t) {
    logger.debug("adding callback to ", e);
    if (e.length > 0 && t !== undefined) {
      window.messageHandler.addEvent(e, t);
    }
  };
  ExternalInterface.call = function (functionName) {
    var params = [];
    for (var _i = 1, _a; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }
    if (!ExternalInterface.isNameOnly(functionName)) {
      if (params.length === 0) {
        return eval("(" + functionName + ")()");
      } else {
        return eval("(" + functionName + ")(" + params + ")");
      }
    }
    if (params.length > 0 && typeof params[params.length - 1] == "function") {
      logger.error("it seems a callback has been passed to ExternalInterface - please use ExternalInterface.asynCall  in order to be able to handle callbacks and promises - otherwise result might be unpredictable");
    } else {
      try {
        if (params.length === 0) {
          window.messageHandler.sendMessage(functionName);
        } else {
          (_a = window.messageHandler).sendMessage.apply(_a, [functionName].concat(params));
        }
      } catch (e) {
        logger.warn("Something went wrong with ExternalInterface SYNC call " + functionName + ":  " + e);
      }
    }
  };
  ExternalInterface.asyncCall = function (e) {
    var t = [];
    for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    if (ExternalInterface.available) {
      return new Promise(function (n, i) {
        var a;
        try {
          var s = t.length > 0 && typeof t[t.length - 1] == "function" ? t.pop() : null;
          t.push(function (t) {
            logger.debug("Message " + e + " went back and forth", t);
            if (s) {
              s(t);
            }
            n(t);
          });
          (a = window.messageHandler).sendMessage.apply(a, [e].concat(t));
        } catch (t) {
          i("Something went wrong with ExternalInterface ASYNC call " + e + ":  " + t);
        }
      });
    } else if (window && window.location && window.location.origin && (window.location.origin.includes("https://localhost") || window.location.origin.includes("https://127.0.0.1") || window.location.origin.includes(".local"))) {
      return Promise.resolve();
    } else {
      return Promise.reject("ExternalInterface not available");
    }
  };
  ExternalInterface.isNameOnly = function (e) {
    return e.search(/(\=\>\(|\)|\{|\})/i) === -1;
  };
  ExternalInterface.marshallExceptions = false;
  ExternalInterface._objectID = "flashObject";
  return ExternalInterface;
}();
exports.ExternalInterface = ExternalInterface;