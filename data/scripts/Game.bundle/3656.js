Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./259.js");
var l = function (e) {
  function CastlePrivateOfferPremiumSmsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateOfferPremiumSmsDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferPremiumSmsDialog, e);
  CastlePrivateOfferPremiumSmsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.removeBackground();
    this.tfHeader = this.textFieldManager.registerTextField(this.dialogDisp.tfHeader, new s.TextVO("LoPremium IpSMSum"));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new s.TextVO("Dollar sit armet, consectetur adipiscing elit."));
    this.tfSmsText = this.textFieldManager.registerTextField(this.dialogDisp.tfSmsText, new s.TextVO(""));
    this.tfPrice = this.textFieldManager.registerTextField(this.dialogDisp.tfPrice, new s.TextVO(""));
    this.tfRemainingTime = this.textFieldManager.registerTextField(this.dialogDisp.tfRemainingTime, new s.TextVO("privateOffer_premiumSms_header"));
    this.timerComponent = new r.CastleTimerComponent(this.tfRemainingTime, this.bindFunction(this.getTimeString), 0);
  };
  CastlePrivateOfferPremiumSmsDialog.prototype.getTimeString = function (e) {
    return o.TimeStringHelper.getShortTimeStringBySeconds(e, o.TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT);
  };
  CastlePrivateOfferPremiumSmsDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    if (this.offerVO.premiumSmsVO) {
      this.tfSmsText.textContentVO.stringValue = "Send " + this.offerVO.premiumSmsVO.premiumSmsCode + " to " + this.offerVO.premiumSmsVO.callNumber;
      this.tfPrice.textContentVO.stringValue = this.offerVO.premiumSmsVO.price + " " + this.offerVO.premiumSmsVO.currency + "/SMS";
    } else {
      this.tfSmsText.textContentVO.stringValue = "no premiumSmsVO";
      this.tfPrice.textContentVO.stringValue = "no premiumSmsVO";
    }
    this.timerComponent.start(this.offerVO.remainingSeconds);
  };
  CastlePrivateOfferPremiumSmsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    this.hide();
  };
  Object.defineProperty(CastlePrivateOfferPremiumSmsDialog.prototype, "offerVO", {
    get: function () {
      return this.properties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferPremiumSmsDialog.__initialize_static_members = function () {
    CastlePrivateOfferPremiumSmsDialog.NAME = "CastlePrivateOfferPremiumSmsExternal";
  };
  return CastlePrivateOfferPremiumSmsDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePrivateOfferPremiumSmsDialog = l;
a.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();