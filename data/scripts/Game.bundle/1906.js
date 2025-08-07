Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleFactionArmorerEventBuyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionArmorerEventBuyDialog.NAME) || this;
  }
  n.__extends(CastleFactionArmorerEventBuyDialog, e);
  CastleFactionArmorerEventBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.setDescriptionText("dialog_faction_armorerBuy_desc");
  };
  CastleFactionArmorerEventBuyDialog.__initialize_static_members = function () {
    CastleFactionArmorerEventBuyDialog.NAME = "CastleFactionArmorerEventBuyExternal";
  };
  return CastleFactionArmorerEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleFactionArmorerEventBuyDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();