Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./77.js");
var s = require("./5.js");
var r = require("./450.js");
var o = require("./4.js");
var l = require("./451.js");
var u = require("./6.js");
var c = require("./44.js");
var _ = require("./31.js");
var d = function (e) {
  function BasicRegisterUserCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicRegisterUserCommand, e);
  BasicRegisterUserCommand.prototype.execute = function (e = null) {
    var t = this.parseCommandVariables(e);
    this.saveDataInCookie();
    this.saveAccountInUserData(t.username, t.password);
    var n = this.composeRegisterUserVO(t);
    this.sendRegisterUserCommand(n);
  };
  Object.defineProperty(BasicRegisterUserCommand.prototype, "registrationVOClass", {
    get: function () {
      return r.BasicC2SRegisterUserVO;
    },
    enumerable: true,
    configurable: true
  });
  BasicRegisterUserCommand.prototype.parseCommandVariables = function (e = null) {
    throw new Error("You must implement parseCommandVariables()");
  };
  BasicRegisterUserCommand.prototype.composeRegisterUserVO = function (e) {
    var t;
    try {
      t = new this.registrationVOClass();
    } catch (e) {
      c.error("TypeError");
    }
    t.username = e.username;
    t.email = e.email;
    t.password = e.password;
    t.accountId = this.env.accountId;
    t.ggsLanguageCode = _.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    t.referrer = this.env.cleanReferrer;
    t.distributorId = Number(this.env.distributorId);
    t.connectionTime = o.BasicModel.smartfoxClient.connectionTime;
    t.roundTripTime = o.BasicModel.smartfoxClient.roundTripTime;
    t.campaignVars = l.BasicTrackingStringComposer.composeVarDataForRegistration(e.email, this.env.referrer);
    t.campaignVars_adid = this.env.campainVars.aid;
    t.campaignVars_lp = this.env.campainVars.lp;
    t.campaignVars_creative = this.env.campainVars.creative;
    t.campaignVars_partnerId = this.env.campainVars.partnerId;
    t.campaignVars_websiteId = this.env.urlVariables.websiteId;
    t.timezone = a.TimezoneUtil.getTrackingTimezone();
    t.initialize();
    return t;
  };
  BasicRegisterUserCommand.prototype.sendRegisterUserCommand = function (e) {
    throw new Error("You must implement sendRegisterUserCommand()");
  };
  BasicRegisterUserCommand.prototype.saveDataInCookie = function () {
    this.saveCurrentCountryInNetworkCookie();
    this.saveGameDataInCookie();
  };
  BasicRegisterUserCommand.prototype.saveCurrentCountryInNetworkCookie = function () {};
  BasicRegisterUserCommand.prototype.saveGameDataInCookie = function () {};
  BasicRegisterUserCommand.prototype.saveAccountInUserData = function (e, t) {
    o.BasicModel.userData.userName = e;
    o.BasicModel.userData.loginPwd = t;
  };
  Object.defineProperty(BasicRegisterUserCommand.prototype, "env", {
    get: function () {
      return s.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicRegisterUserCommand;
}(u.SimpleCommand);
exports.BasicRegisterUserCommand = d;