Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1867.js");
var l = require("./334.js");
var c = function (e) {
  function CastleLayoutStartScreen() {
    var t = this;
    t.oldAgeGateActive = false;
    t.oldAgeGateValidationSuccessful = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleLayoutStartScreen, e);
  CastleLayoutStartScreen.prototype.setLayout = function (e, t) {
    var i = a.BasicModel.ageGateData.isAgeGateActive;
    var n = !!a.BasicModel.ageGateData.validationSucceeded;
    if (t != o.BasicLayoutManager.STATE_STARTSCREEN || this.env.isFacebook || this.oldAgeGateActive != i || this.oldAgeGateValidationSuccessful != n) {
      e.hideAllDialogs();
      e.hideAllPanels();
      e.removeAllIngameUIComponents();
      e.hideAllScreens();
      this.oldAgeGateActive = i;
      this.oldAgeGateValidationSuccessful = n;
      if (this.oldAgeGateActive && !this.oldAgeGateValidationSuccessful) {
        e.showDialogRedirecter(u.CastleAgeGateCheckDialog, null, null);
      } else {
        this.setStartScreenPanel(e);
      }
    }
  };
  CastleLayoutStartScreen.prototype.setStartScreenPanel = function (e) {
    if (s.ExternalInterface.available) {
      s.ExternalInterface.call("ggsRedirectToLandingPage");
    }
    if (this.env.loginIsKeyBased || this.env.isFacebook) {
      e.showPanelRedirecter(d.CastleSocialStartscreenPanel, null, false);
    } else if (l.StartscreenHelper.usesModernStartscreen()) {
      e.showPanelRedirecter(r.ModernStartscreenPanel, null, false);
    } else {
      e.showPanelRedirecter(p.CastleStartscreenPanel, null, false);
    }
  };
  return CastleLayoutStartScreen;
}(require("./555.js").ACastleLayoutStrategy);
exports.CastleLayoutStartScreen = c;
var u = require("./4168.js");
var d = require("./4170.js");
var p = require("./1137.js");