Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./116.js");
var s = require("./6.js");
var r = require("./7.js");
var l = a.getLogger("C2SRegisterWithNameVO");
var c = function (e) {
  function C2SRegisterWithNameVO() {
    var t = this;
    t.DID = 0;
    t.CONM = 0;
    t.RTM = 0;
    t.campainPId = 0;
    t.campainCr = 0;
    t.campainLP = 0;
    t.adID = 0;
    t.timeZone = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(C2SRegisterWithNameVO, e);
  C2SRegisterWithNameVO.prototype.getCmdId = function () {
    return r.ClientConstSF.C2S_REGISTER;
  };
  C2SRegisterWithNameVO.prototype.initialize = function () {
    this.PN = this.username;
    this.PW = this.password;
    this.REF = this.referrer;
    this.LANG = this.ggsLanguageCode;
    this.DID = s.int(this.distributorId);
    this.CONM = this.connectionTime;
    this.RTM = this.roundTripTime;
    this.AID = this.accountId;
    this.GCI = o.EnvGlobalsHandler.globals.urlVariables.urlParams.get("gci") || "";
    this.SID = o.EnvGlobalsHandler.globals.storeId;
    this.PLFID = o.EnvGlobalsHandler.globals.platformId;
    this.NID = o.EnvGlobalsHandler.globals.networkId;
    this.campainPId = Number(this.campaignVars_partnerId);
    this.campainCr = Number(this.campaignVars_creative);
    this.campainLP = Number(this.campaignVars_lp);
    this.adID = parseInt(this.campaignVars_adid);
    this.timeZone = s.int(this.timezone);
    l.debug("___C2SRegisterWithNameVO___");
    l.debug("PN: " + this.PN);
    l.debug("PW: " + this.PW);
    l.debug("REF: " + this.REF);
    l.debug("LANG: " + this.LANG);
    l.debug("DID: " + this.DID);
    l.debug("CONM: " + this.CONM);
    l.debug("RTM: " + this.RTM);
    l.debug("AID: " + this.AID);
    l.debug("campaignVars: " + this.campaignVars);
    l.debug("campainPId: " + this.campainPId);
    l.debug("campainCr: " + this.campainCr);
    l.debug("campainLP: " + this.campainLP);
    l.debug("adID: " + this.adID);
    l.debug("timeZone: " + this.timeZone);
    l.debug("______");
  };
  return C2SRegisterWithNameVO;
}(o.BasicC2SRegisterUserVO);
exports.C2SRegisterWithNameVO = c;