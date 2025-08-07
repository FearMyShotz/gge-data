Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleNomadInvasionEventBuyDialog() {
    return e.call(this, CastleNomadInvasionEventBuyDialog.NAME) || this;
  }
  n.__extends(CastleNomadInvasionEventBuyDialog, e);
  CastleNomadInvasionEventBuyDialog.__initialize_static_members = function () {
    CastleNomadInvasionEventBuyDialog.NAME = "CastleNomadInvasionEventBuy";
  };
  return CastleNomadInvasionEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleNomadInvasionEventBuyDialog = a;
a.__initialize_static_members();
o.classImplementsInterfaces(a, "ICollectableRendererList");