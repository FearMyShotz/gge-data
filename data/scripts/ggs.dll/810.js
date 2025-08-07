Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./31.js");
var s = require("./5.js");
var r = require("./9.js");
var o = require("./4.js");
var l = function (e) {
  function BasicRegisterJsonCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicRegisterJsonCommand, e);
  BasicRegisterJsonCommand.prototype.execute = function (e = null) {
    var t = e;
    var n = t.shift();
    var i = t.shift();
    var l = t.shift();
    l.mail = n;
    l.pw = i;
    l.referrer = s.EnvGlobalsHandler.globals.cleanReferrer;
    l.lang = a.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    l.did = s.EnvGlobalsHandler.globals.distributorId;
    l.connectTime = o.BasicModel.smartfoxClient.connectionTime;
    l.ping = o.BasicModel.smartfoxClient.roundTripTime;
    l.accountId = s.EnvGlobalsHandler.globals.accountId;
    l.campainPId = parseInt(s.EnvGlobalsHandler.globals.campainVars.partnerId);
    l.campainCr = parseInt(s.EnvGlobalsHandler.globals.campainVars.creative);
    l.campainPl = s.EnvGlobalsHandler.globals.campainVars.placement;
    l.campainKey = s.EnvGlobalsHandler.globals.campainVars.keyword;
    l.campainNW = s.EnvGlobalsHandler.globals.campainVars.network;
    l.campainLP = parseInt(s.EnvGlobalsHandler.globals.campainVars.lp);
    l.campainCId = s.EnvGlobalsHandler.globals.campainVars.channelId;
    l.campainTS = s.EnvGlobalsHandler.globals.campainVars.trafficSource;
    l.adid = parseInt(s.EnvGlobalsHandler.globals.campainVars.aid);
    l.camp = s.EnvGlobalsHandler.globals.campainVars.camp;
    l.adgr = s.EnvGlobalsHandler.globals.campainVars.adgr;
    l.matchtype = s.EnvGlobalsHandler.globals.campainVars.matchtype;
    o.BasicModel.smartfoxClient.sendMessage(r.BasicSmartfoxConstants.C2S_REGISTER, [JSON.stringify(l)]);
    o.BasicModel.userData.loginPwd = i;
  };
  return BasicRegisterJsonCommand;
}(require("./6.js").SimpleCommand);
exports.BasicRegisterJsonCommand = l;