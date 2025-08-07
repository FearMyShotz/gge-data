Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1048.js");
var s = function (e) {
  function CastleVolcanoSlumPackageBuyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleVolcanoSlumPackageBuyDialog, e);
  Object.defineProperty(CastleVolcanoSlumPackageBuyDialog.prototype, "titleTextColor", {
    get: function () {
      return CastleVolcanoSlumPackageBuyDialog.TITLE_TEXT_COLOR;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageBuyDialog.prototype, "titleTextColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVolcanoSlumPackageBuyDialog.prototype, "titleBackgroundFrame", {
    get: function () {
      return CastleVolcanoSlumPackageBuyDialog.TITLE_BACKGROUND_FRAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageBuyDialog.prototype, "titleBackgroundFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleVolcanoSlumPackageBuyDialog.__initialize_static_members = function () {
    CastleVolcanoSlumPackageBuyDialog.NAME = "CastleVolcanoSlumPackageBuy";
    CastleVolcanoSlumPackageBuyDialog.TITLE_TEXT_COLOR = 5263178;
    CastleVolcanoSlumPackageBuyDialog.TITLE_BACKGROUND_FRAME = 3;
  };
  return CastleVolcanoSlumPackageBuyDialog;
}(a.CastleSlumPackageBuyDialog);
exports.CastleVolcanoSlumPackageBuyDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");