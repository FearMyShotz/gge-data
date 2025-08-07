Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1048.js");
var s = function (e) {
  function CastleDessertSlumPackageBuyDialog() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleDessertSlumPackageBuyDialog, e);
  Object.defineProperty(CastleDessertSlumPackageBuyDialog.prototype, "titleTextColor", {
    get: function () {
      return CastleDessertSlumPackageBuyDialog.TITLE_TEXT_COLOR;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageBuyDialog.prototype, "titleTextColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDessertSlumPackageBuyDialog.prototype, "titleBackgroundFrame", {
    get: function () {
      return CastleDessertSlumPackageBuyDialog.TITLE_BACKGROUND_FRAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageBuyDialog.prototype, "titleBackgroundFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleDessertSlumPackageBuyDialog.__initialize_static_members = function () {
    CastleDessertSlumPackageBuyDialog.NAME = "CastleDessertSlumPackageBuy";
    CastleDessertSlumPackageBuyDialog.TITLE_TEXT_COLOR = 212797;
    CastleDessertSlumPackageBuyDialog.TITLE_BACKGROUND_FRAME = 1;
  };
  return CastleDessertSlumPackageBuyDialog;
}(a.CastleSlumPackageBuyDialog);
exports.CastleDessertSlumPackageBuyDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");