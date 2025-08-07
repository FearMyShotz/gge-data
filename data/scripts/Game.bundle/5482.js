Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = function (e) {
  function CastleResetLaboratoryDialogProperties() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleResetLaboratoryDialogProperties, e);
  Object.defineProperty(CastleResetLaboratoryDialogProperties.prototype, "areaType", {
    get: function () {
      return s.WorldConst.AREA_TYPE_LABORATORY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResetLaboratoryDialogProperties.prototype, "titleTextID", {
    get: function () {
      return "dialog_laboratory_resetMessage_title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResetLaboratoryDialogProperties.prototype, "copyTextID", {
    get: function () {
      return "dialog_laboratory_resetMessage_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResetLaboratoryDialogProperties.prototype, "helpTextID", {
    get: function () {
      return "help_laboratory_resetMessage";
    },
    enumerable: true,
    configurable: true
  });
  return CastleResetLaboratoryDialogProperties;
}(o.BasicProperties);
exports.CastleResetLaboratoryDialogProperties = r;
a.classImplementsInterfaces(r, "ICastleResetLandmarkDialogProperties");