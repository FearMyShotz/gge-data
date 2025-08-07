Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./60.js");
var c = function (e) {
  function PrivateOfferFailedStandardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, new (a.getDefinitionByName("CastleStandardOk"))()) || this;
  }
  n.__extends(PrivateOfferFailedStandardDialog, e);
  PrivateOfferFailedStandardDialog.prototype.applyProperties = function () {
    if (this.offerProperties && this.offerProperties.offerVO) {
      var t;
      var i;
      var n = this.offerProperties.offerVO.getVisualComponentByName(l.ClientConstOffer.OFFER_VISUAL_FAILED_DIALOG);
      t = !n.dialogCustomization.T || n.dialogCustomization.T.length <= 0 ? r.Localize.text("dialog_privateOffer_whaleChest_offerend") : r.Localize.text(n.dialogCustomization.T);
      i = !n.dialogCustomization.C || n.dialogCustomization.C.length <= 0 ? r.Localize.text("dialog_privateOffer_whaleChest_offerend_description") : r.Localize.text(n.dialogCustomization.C);
      this.properties = new o.BasicStandardOkDialogProperties(t, i);
    }
    e.prototype.applyProperties.call(this);
  };
  Object.defineProperty(PrivateOfferFailedStandardDialog.prototype, "offerProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  PrivateOfferFailedStandardDialog.NAME = "PrivateOfferFailedStandardDialog";
  return PrivateOfferFailedStandardDialog;
}(require("./38.js").CastleStandardOkDialog);
exports.PrivateOfferFailedStandardDialog = c;
s.classImplementsInterfaces(c, "ICollectableRendererList");