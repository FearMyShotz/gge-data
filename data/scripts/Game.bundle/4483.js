Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleNomadHunterEventBuyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleNomadHunterEventBuyDialog.NAME) || this;
  }
  n.__extends(CastleNomadHunterEventBuyDialog, e);
  CastleNomadHunterEventBuyDialog.__initialize_static_members = function () {
    CastleNomadHunterEventBuyDialog.NAME = "CastleNomadHunterEventBuy";
  };
  return CastleNomadHunterEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleNomadHunterEventBuyDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();