Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./58.js");
var s = require("./32.js");
var r = require("./161.js");
var l = require("./4.js");
var c = require("./354.js");
var u = require("./435.js");
var d = function (e) {
  function StatusIconMailGiftComponent() {
    return e.call(this, "Btn_email_Hub", null, h.AOfferHubBaseStatusIcon.PRIORITY_MAIL_GIFT) || this;
  }
  n.__extends(StatusIconMailGiftComponent, e);
  StatusIconMailGiftComponent.prototype.setVisibilityLoaded = function () {
    if (this.mailReminderActive) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconMailGiftComponent.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTooltip("dialog_mailGiftReminder_title");
  };
  StatusIconMailGiftComponent.prototype.onClick = function () {
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(c.OptionsDialog, new u.OptionsDialogProperties(c.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
  };
  StatusIconMailGiftComponent.prototype.addEventListenerForVisibility = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.controller.addEventListener(s.CastleUserDataEvent.VALIDATED_EMAIL, this.bindFunction(this.onValidatedEmail));
    this.controller.addEventListener(r.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onValidatedEmail));
    this.controller.addEventListener(s.CastleUserDataEvent.MAIL_VERIFICATION_SENT, this.bindFunction(this.hideMailButton));
  };
  StatusIconMailGiftComponent.prototype.removeEventListenerForVisibility = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.controller.removeEventListener(s.CastleUserDataEvent.VALIDATED_EMAIL, this.bindFunction(this.onValidatedEmail));
    this.controller.removeEventListener(s.CastleUserDataEvent.MAIL_VERIFICATION_SENT, this.bindFunction(this.hideMailButton));
    this.controller.removeEventListener(r.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onValidatedEmail));
  };
  Object.defineProperty(StatusIconMailGiftComponent.prototype, "mailReminderActive", {
    get: function () {
      return !l.CastleModel.userData.hasSentMailVerification && !l.CastleModel.userData.hasValidatedEmail && l.CastleModel.userData.userLevel >= a.ClientConstLevelRestrictions.MIN_LEVEL_WELCOME_GIFT && !o.EnvGlobalsHandler.globals.loginIsKeyBased && !o.EnvGlobalsHandler.globals.isOnSpecialServer;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconMailGiftComponent.prototype.onValidatedEmail = function (e) {
    this.setVisibility();
  };
  StatusIconMailGiftComponent.prototype.hideMailButton = function (e) {
    l.CastleModel.userData.hasSentMailVerification = true;
    this.setVisibility();
  };
  return StatusIconMailGiftComponent;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconMailGiftComponent = d;
var p = require("./9.js");
var h = require("./175.js");