Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleUnitDealerEventBuyDialog() {
    return e.call(this, CastleUnitDealerEventBuyDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleUnitDealerEventBuyDialog, e);
  CastleUnitDealerEventBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.dialogDisp.mc_titleBG.gotoAndStop(3);
    this.dialogDisp.btn_info.visible = true;
  };
  CastleUnitDealerEventBuyDialog.__initialize_static_members = function () {
    CastleUnitDealerEventBuyDialog.NAME = "CastleUnitDealerEventBuy";
    CastleUnitDealerEventBuyDialog.ASSET_NAME = "CastleResourceMerchantEventBuyExternal";
  };
  return CastleUnitDealerEventBuyDialog;
}(require("./168.js").CastleGenericSliderBuyDialog);
exports.CastleUnitDealerEventBuyDialog = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
a.__initialize_static_members();