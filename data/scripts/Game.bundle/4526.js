Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleSeaQueenEventBuyDialog() {
    return e.call(this, CastleSeaQueenEventBuyDialog.NAME) || this;
  }
  n.__extends(CastleSeaQueenEventBuyDialog, e);
  CastleSeaQueenEventBuyDialog.__initialize_static_members = function () {
    CastleSeaQueenEventBuyDialog.NAME = "CastleSeaqueenEventBuy";
  };
  return CastleSeaQueenEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleSeaQueenEventBuyDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();