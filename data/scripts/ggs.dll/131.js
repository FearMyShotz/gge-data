Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./217.js");
var a = require("./132.js");
exports.GLOBAL_LOGGER = "__GLOBAL_LOGGER__";
exports.CoreLoggerConfigurator = {
  useDefaults: function () {
    a.useDefaults({
      logLevel: a.DEBUG,
      formatter: function (e, n) {
        e.unshift("[" + (n.name || exports.GLOBAL_LOGGER) + "] ");
      }
    });
    return this;
  },
  setFormatter: function (e) {
    a.setHandler(a.createDefaultHandler({
      formatter: e
    }));
  },
  setLevel: function (e) {
    a.setLevel(i.LoggingLevelMapper.get(e));
  }
};