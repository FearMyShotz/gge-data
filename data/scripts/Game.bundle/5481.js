Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = function (e) {
  function CastleResetMonumentDialogProperties() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleResetMonumentDialogProperties, e);
  Object.defineProperty(CastleResetMonumentDialogProperties.prototype, "areaType", {
    get: function () {
      return s.WorldConst.AREA_TYPE_MONUMENT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResetMonumentDialogProperties.prototype, "titleTextID", {
    get: function () {
      return "dialog_monument_resetMessage_title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResetMonumentDialogProperties.prototype, "copyTextID", {
    get: function () {
      return "dialog_monument_resetMessage_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResetMonumentDialogProperties.prototype, "helpTextID", {
    get: function () {
      return "help_monument_resetMessage";
    },
    enumerable: true,
    configurable: true
  });
  return CastleResetMonumentDialogProperties;
}(o.BasicProperties);
exports.CastleResetMonumentDialogProperties = r;
a.classImplementsInterfaces(r, "ICastleResetLandmarkDialogProperties");