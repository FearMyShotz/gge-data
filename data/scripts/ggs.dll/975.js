Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = function () {
  function LogMeister() {}
  LogMeister.addLogger = function (e) {
    i.CoreLoggerConfigurator.useDefaults();
    i.getLogger("LogMeister").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
  };
  LogMeister.clearLoggers = function () {
    i.getLogger("LogMeister").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
  };
  return LogMeister;
}();
exports.LogMeister = a;
var s = function () {
  function MonsterDebuggerConnector(e) {}
  Object.defineProperty(MonsterDebuggerConnector.prototype, "format", {
    get: function () {
      i.getLogger("ConsoleConnector").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
      return "";
    },
    set: function (e) {
      i.getLogger("ConsoleConnector").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
    },
    enumerable: true,
    configurable: true
  });
  return MonsterDebuggerConnector;
}();
exports.MonsterDebuggerConnector = s;
var r = function () {
  function ConsoleConnector(e) {}
  Object.defineProperty(ConsoleConnector.prototype, "format", {
    get: function () {
      i.getLogger("ConsoleConnector").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
      return "";
    },
    set: function (e) {
      i.getLogger("ConsoleConnector").debug("empty implementation just to satisfy current api - behaviour is redirected to LoggingModule");
    },
    enumerable: true,
    configurable: true
  });
  return ConsoleConnector;
}();
exports.ConsoleConnector = r;
var o = function () {
  function LoggingConstants() {}
  LoggingConstants.FORMAT_DEFAULT_UNIT = "{message}";
  LoggingConstants.FORMAT_DEFAULT_SOS = "{sender.full}: {message}";
  LoggingConstants.FORMAT_DEFAULT_TRACE = "{level} | {sender.full}: {message}";
  LoggingConstants.FORMAT_DEFAULT_SOS_TIME = "{time.ms} [{sender}] {message}";
  LoggingConstants.FORMAT_DEFAULT_TRACE_TIME = "{time.ms} {level}\t[{sender.full}] {message}";
  return LoggingConstants;
}();
exports.LoggingConstants = o;