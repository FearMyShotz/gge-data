Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./133.js");
var a = require("./2.js");
var s = new i.LoggerFactory(a.Loggers);
exports.getLogger = function getLogger(e) {
  return s.getLoggerFor(e);
};
exports.setLoggerFormatter = function setLoggerFormatter(e) {
  a.LoggerConfigurator.setFormatter(e);
};
exports.cascadeLogLevelFor = function cascadeLogLevelFor(e, t) {
  i.getLoggerHierarchyFor(e).forEach(function (e) {
    e.setLevel(t);
  });
};