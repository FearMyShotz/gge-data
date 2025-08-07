Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleAquamarineShopBuyDialog(t = CastleAquamarineShopBuyDialog.NAME) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CastleAquamarineShopBuyDialog, e);
  CastleAquamarineShopBuyDialog.__initialize_static_members = function () {
    CastleAquamarineShopBuyDialog.NAME = "CastleAquamarinShopBuyExternal";
  };
  return CastleAquamarineShopBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleAquamarineShopBuyDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();