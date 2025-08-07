Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./1.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./801.js");
var _ = require("./4.js");
var m = require("./9.js");
var f = require("./38.js");
var O = require("./1634.js");
var E = function (e) {
  function CastleRegisterUserWithFacebookCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleRegisterUserWithFacebookCommand, e);
  CastleRegisterUserWithFacebookCommand.prototype.execute = function (e = null) {
    d.debug("-------------------- gonna register in with " + JSON.stringify(e));
    var t = new O.C2SRegisterWithNameVO();
    t.username = e.pn;
    t.accountId = this.env.accountId;
    t.ggsLanguageCode = l.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    t.referrer = this.env.referrer;
    t.distributorId = g.int(this.env.distributorId);
    t.connectionTime = a.BasicModel.smartfoxClient.connectionTime;
    t.roundTripTime = a.BasicModel.smartfoxClient.roundTripTime;
    t.campaignVars = s.BasicTrackingStringComposer.composeVarDataForRegistration("", this.env.referrer);
    t.campaignVars_adid = this.env.campainVars.aid;
    t.campaignVars_lp = this.env.campainVars.lp;
    t.campaignVars_creative = this.env.campainVars.creative;
    t.campaignVars_partnerId = this.env.campainVars.partnerId;
    t.campaignVars_websiteId = this.env.urlVariables.websiteId;
    t.timezone = u.TimezoneUtil.getTrackingTimezone();
    t.FID = e.fid;
    t.FTK = e.ftk;
    t.FAID = y.CastleFacebookModule.appID;
    t.initialize();
    try {
      window.grecaptcha.ready(function () {
        var e = C.ClientConstReCaptcha.getSiteKey();
        window.grecaptcha.execute(e, {
          action: "submit"
        }).then(function (e) {
          t.RCT = e;
          _.CastleModel.smartfoxClient.sendCommandVO(t);
        }).catch(function (e) {
          m.CastleDialogHandler.getInstance().registerDialogs(f.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(h.Localize.text("generic_alert_watchout"), h.Localize.text("errorCode_1")));
        });
      });
    } catch (e) {
      m.CastleDialogHandler.getInstance().registerDialogs(f.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(h.Localize.text("generic_alert_watchout"), h.Localize.text("errorCode_1")));
    }
  };
  Object.defineProperty(CastleRegisterUserWithFacebookCommand.prototype, "env", {
    get: function () {
      return r.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRegisterUserWithFacebookCommand;
}(c.SimpleCommand);
exports.CastleRegisterUserWithFacebookCommand = E;
var y = require("./193.js");
p.classImplementsInterfaces(E, "ISimpleCommand");