Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./133.js");
var a = require("./2.js");
var s = function () {
  function CoreLoggerUtil() {}
  CoreLoggerUtil.init = function (e = new i.LoggerFactory(a.Loggers)) {
    CoreLoggerUtil._factory = e;
  };
  CoreLoggerUtil.getLogger = function (e) {
    if (typeof e == "string") {
      return CoreLoggerUtil._factory.getLoggerFor(e);
    } else {
      return CoreLoggerUtil._factory.getLoggerForObject(e);
    }
  };
  return CoreLoggerUtil;
}();
exports.CoreLoggerUtil = s;