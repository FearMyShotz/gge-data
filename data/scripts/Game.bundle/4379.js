Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./123.js");
var s = function (e) {
  function CastleArmorerEventBuyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleArmorerEventBuyDialog.NAME) || this;
  }
  n.__extends(CastleArmorerEventBuyDialog, e);
  CastleArmorerEventBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    if (this.dialogProperties.eventPackageVO.packageType != a.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM) {
      this.setDescriptionText("dialog_armorerEventBuy_desc");
    }
  };
  CastleArmorerEventBuyDialog.__initialize_static_members = function () {
    CastleArmorerEventBuyDialog.NAME = "CastleArmorerEventBuyExternal";
  };
  return CastleArmorerEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleArmorerEventBuyDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();