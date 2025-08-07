Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./32.js");
var c = require("./12.js");
var u = require("./45.js");
var d = require("./4.js");
var p = require("./52.js");
var h = require("./42.js");
var g = require("./256.js");
var C = require("./4373.js");
var _ = function (e) {
  function CastleApprenticeSmithEventDialog() {
    return e.call(this, CastleApprenticeSmithEventDialog.NAME) || this;
  }
  n.__extends(CastleApprenticeSmithEventDialog, e);
  CastleApprenticeSmithEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new a.LocalizedTextVO("dialog_apprenticeSmith_desc")).verticalAlign = h.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_token.mouseChildren = false;
    this.dialogDisp.mc_token.toolTipText = u.CollectableHelper.createVO(c.CollectableEnum.GENERIC_CURRENCY, 0, p.ClientConstCurrency.ID_APPRENTICE_TOKEN).getTooltipTextId();
    this.updateTokens();
    this.controller.addEventListener(l.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateTokens));
  };
  CastleApprenticeSmithEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(l.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateTokens));
  };
  CastleApprenticeSmithEventDialog.prototype.updateTokens = function (e = null) {
    this.buyPackagesComponent.update();
    var t = r.int(d.CastleModel.currencyData.getAmountById(p.ClientConstCurrency.ID_APPRENTICE_TOKEN));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_token.txt_value, new s.LocalizedNumberVO(t));
  };
  Object.defineProperty(CastleApprenticeSmithEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return C.ApprenticeSmithScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleApprenticeSmithEventDialog.prototype.sortPackagesByHighlightOrder = function (e) {};
  CastleApprenticeSmithEventDialog.NAME = "CastleApprenticeSmithExternal";
  return CastleApprenticeSmithEventDialog;
}(g.CastleGenericMerchantDialog);
exports.CastleApprenticeSmithEventDialog = _;
o.classImplementsInterfaces(_, "ICollectableRendererList");