Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleThornkingEventBuyDialog() {
    return e.call(this, CastleThornkingEventBuyDialog.NAME) || this;
  }
  n.__extends(CastleThornkingEventBuyDialog, e);
  CastleThornkingEventBuyDialog.__initialize_static_members = function () {
    CastleThornkingEventBuyDialog.NAME = "CastleThornkingEventBuy";
  };
  return CastleThornkingEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleThornkingEventBuyDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();