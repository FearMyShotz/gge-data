Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./188.js");
var l = function (e) {
  function CastleTitleSublayerPropertiesFAME() {
    return e.call(this) || this;
  }
  n.__extends(CastleTitleSublayerPropertiesFAME, e);
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "titleSystem", {
    get: function () {
      return r.ClientConstTitle.GLORY_TITLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "copyTextID", {
    get: function () {
      return "dialog_gloryTitles_desc";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "headerTextID", {
    get: function () {
      return "dialog_gloryTitles_header";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "neededPointsTextID", {
    get: function () {
      return "dialog_gloryTitles_pointsNeeded";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "decayTextID", {
    get: function () {
      return "dialog_gloryTitles_dailyLoss";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayerPropertiesFAME.prototype, "helpText", {
    get: function () {
      return s.Localize.text("help_fame");
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleSublayerPropertiesFAME;
}(o.BasicProperties);
exports.CastleTitleSublayerPropertiesFAME = l;
a.classImplementsInterfaces(l, "ITitleSublayerProperties");