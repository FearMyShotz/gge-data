Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./131.js");
exports.Loggers = window.Loggers ? window.Loggers : new Map();
exports.LoggerConfigurator = window.LoggerConfigurator ? window.LoggerConfigurator : i.CoreLoggerConfigurator;
if (typeof window != "undefined") {
  window.LoggerConfigurator ||= exports.LoggerConfigurator;
  window.Loggers ||= exports.Loggers;
}
var a = require("./219.js");
exports.cascadeLogLevelFor = a.cascadeLogLevelFor;
var s = require("./131.js");
exports.CoreLoggerConfigurator = s.CoreLoggerConfigurator;
exports.GLOBAL_LOGGER = s.GLOBAL_LOGGER;
var r = require("./528.js");
exports.CoreLoggerUtil = r.CoreLoggerUtil;
var o = require("./218.js");
exports.LoggingLevel = o.LoggingLevel;
var l = require("./133.js");
exports.LoggerFactory = l.LoggerFactory;
var u = require("./219.js");
exports.getLogger = u.getLogger;
exports.setLoggerFormatter = u.setLoggerFormatter;
i.CoreLoggerConfigurator.useDefaults();