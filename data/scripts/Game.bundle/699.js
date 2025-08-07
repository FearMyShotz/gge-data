Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./2093.js");
var c = function (e) {
  function CastleResourceMerchantEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleResourceMerchantEventDialog.NAME) || this;
  }
  n.__extends(CastleResourceMerchantEventDialog, e);
  Object.defineProperty(CastleResourceMerchantEventDialog.prototype, "packageBannerClassName", {
    get: function () {
      return "PackageBanner";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleGenericBannerMerchantDialog.prototype, "packageBannerClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceMerchantEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return p.CastleResourceMerchantEventScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleGenericBannerMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceMerchantEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.bannerBorder.tfSpecial, new r.LocalizedTextVO("dialog_merchantEvent_banner_copy")).autoFitToBounds = true;
    this.itxt_speechBubble = this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new r.LocalizedTextVO(""));
  };
  CastleResourceMerchantEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.itxt_speechBubble.textContentVO.textId = this.isPrivateOffer ? "dialog_lowLevelMerchant_speechBubble" : "dialog_merchantEvent_speechBubble";
  };
  CastleResourceMerchantEventDialog.prototype.handleUnbuyableAmount = function () {
    u.CastleExternalDialog.dialogHandler.registerDefaultDialogs(d.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("dialog_storageFull")));
  };
  CastleResourceMerchantEventDialog.__initialize_static_members = function () {
    CastleResourceMerchantEventDialog.NAME = "CastleResourceMerchantEventExternal";
  };
  return CastleResourceMerchantEventDialog;
}(l.CastleGenericBannerMerchantDialog);
exports.CastleResourceMerchantEventDialog = c;
var u = require("./11.js");
var d = require("./38.js");
var p = require("./2620.js");
a.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();