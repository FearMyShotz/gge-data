Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1049.js");
var s = function (e) {
  function CastleIcecreamSlumPackageBuyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleIcecreamSlumPackageBuyDialog, e);
  Object.defineProperty(CastleIcecreamSlumPackageBuyDialog.prototype, "titleTextColor", {
    get: function () {
      return CastleIcecreamSlumPackageBuyDialog.TITLE_TEXT_COLOR;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageBuyDialog.prototype, "titleTextColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIcecreamSlumPackageBuyDialog.prototype, "titleBackgroundFrame", {
    get: function () {
      return CastleIcecreamSlumPackageBuyDialog.TITLE_BACKGROUND_FRAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageBuyDialog.prototype, "titleBackgroundFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleIcecreamSlumPackageBuyDialog.__initialize_static_members = function () {
    CastleIcecreamSlumPackageBuyDialog.NAME = "CastleIcecreamSlumPackageBuy";
    CastleIcecreamSlumPackageBuyDialog.TITLE_TEXT_COLOR = 4001052;
    CastleIcecreamSlumPackageBuyDialog.TITLE_BACKGROUND_FRAME = 2;
  };
  return CastleIcecreamSlumPackageBuyDialog;
}(a.CastleSlumPackageBuyDialog);
exports.CastleIcecreamSlumPackageBuyDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");