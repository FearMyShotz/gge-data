Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleEilandUnitDealerEventBuyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleEilandUnitDealerEventBuyDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleEilandUnitDealerEventBuyDialog, e);
  CastleEilandUnitDealerEventBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.dialogDisp.mc_titleBG.gotoAndStop(3);
  };
  CastleEilandUnitDealerEventBuyDialog.__initialize_static_members = function () {
    CastleEilandUnitDealerEventBuyDialog.NAME = "CastleEilandUnitDealerEventBuy";
    CastleEilandUnitDealerEventBuyDialog.ASSET_NAME = "CastleResourceMerchantEventBuyExternal";
  };
  return CastleEilandUnitDealerEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleEilandUnitDealerEventBuyDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();