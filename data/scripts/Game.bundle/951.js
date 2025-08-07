Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./28.js");
var c = require("./188.js");
var u = function (e) {
  function CastleTitleSublayerFactionProperties() {
    return e.call(this) || this;
  }
  n.__extends(CastleTitleSublayerFactionProperties, e);
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "titleSystem", {
    get: function () {
      return c.ClientConstTitle.BRAVERY_TITLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "copyTextID", {
    get: function () {
      return "dialog_factionTitles_noDecay_info";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "headerTextID", {
    get: function () {
      return "dialog_factionTitles_header";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "neededPointsTextID", {
    get: function () {
      return "dialog_factionTitles_pointsNeeded";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "decayTextID", {
    get: function () {
      return "dialog_factionTitles_dailyLoss";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerFactionProperties.prototype, "helpText", {
    get: function () {
      return r.Localize.text("help_berimond_titles", [s.FactionConst.TITLE_RESET_INTERVAL_SECONDS / l.ClientConstTime.HOURES_2_SEC]);
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleSublayerFactionProperties;
}(o.BasicProperties);
exports.CastleTitleSublayerFactionProperties = u;
a.classImplementsInterfaces(u, "ITitleSublayerProperties");