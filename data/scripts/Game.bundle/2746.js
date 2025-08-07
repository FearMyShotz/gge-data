Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./42.js");
var r = require("./256.js");
var l = function (e) {
  function CastleEilandUnitDealerEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleEilandUnitDealerEventDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleEilandUnitDealerEventDialog, e);
  Object.defineProperty(CastleEilandUnitDealerEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return c.CastleEilandUnitDealerEventScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandUnitDealerEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new a.LocalizedTextVO("dialog_eiland_toolShop_copy")).verticalAlign = s.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_unitLimit.visible = false;
  };
  CastleEilandUnitDealerEventDialog.__initialize_static_members = function () {
    CastleEilandUnitDealerEventDialog.NAME = "CastleEilandUnitDealerEventExternal";
    CastleEilandUnitDealerEventDialog.ASSET_NAME = "CastleUnitEvent";
  };
  return CastleEilandUnitDealerEventDialog;
}(r.CastleGenericMerchantDialog);
exports.CastleEilandUnitDealerEventDialog = l;
var c = require("./2747.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();