Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleUnderworldEventBuyDialog() {
    return e.call(this, CastleUnderworldEventBuyDialog.NAME) || this;
  }
  n.__extends(CastleUnderworldEventBuyDialog, e);
  CastleUnderworldEventBuyDialog.__initialize_static_members = function () {
    CastleUnderworldEventBuyDialog.NAME = "CastleUnderworldEventBuy";
  };
  return CastleUnderworldEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleUnderworldEventBuyDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();