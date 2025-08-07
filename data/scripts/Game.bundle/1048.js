Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./69.js");
var s = require("./8.js");
var r = function (e) {
  function CastleSlumPackageBuyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSlumPackageBuyDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleSlumPackageBuyDialog, e);
  CastleSlumPackageBuyDialog.prototype.handleBuyButton = function () {
    var t = this.slumBuyDialogProperties;
    if (t.activeSlumLevel < t.level) {
      s.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      this.dialogDisp.btn_ok.toolTipText = {
        t: "dialog_village_buy_levellock",
        p: [t.level]
      };
    } else {
      e.prototype.handleBuyButton.call(this);
    }
  };
  Object.defineProperty(CastleSlumPackageBuyDialog.prototype, "titleTextColor", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumPackageBuyDialog.prototype, "titleBackgroundFrame", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumPackageBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.setTitleTextColor(this.titleTextColor);
    this.dialogDisp.mc_titleBG.gotoAndStop(this.titleBackgroundFrame);
    this.dialogProperties.eventPackageVO;
    this.dialogDisp.mc_ring.visible = false;
  };
  Object.defineProperty(CastleSlumPackageBuyDialog.prototype, "slumBuyDialogProperties", {
    get: function () {
      return this.dialogProperties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumPackageBuyDialog.__initialize_static_members = function () {
    CastleSlumPackageBuyDialog.ASSET_NAME = "CastleSlumPackageBuy";
  };
  return CastleSlumPackageBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleSlumPackageBuyDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();