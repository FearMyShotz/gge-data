Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./185.js");
var a = require("./5.js");
var s = function () {
  function BasicTrackingStringComposer() {}
  BasicTrackingStringComposer.composeVarDataForRegistration = function (e, t) {
    var n = BasicTrackingStringComposer.env.campainVars;
    var a = this.env.urlVariables.urlParams.get("gci") || "";
    var s = [];
    s[0] = e;
    s[1] = t;
    s[2] = n.placement;
    s[3] = n.keyword;
    s[4] = n.network;
    s[5] = n.channelId;
    s[6] = n.trafficSource;
    s[7] = n.camp;
    s[8] = n.adgr;
    s[9] = n.matchtype;
    s[10] = BasicTrackingStringComposer.env.jsVariables.journeyHash;
    s[11] = BasicTrackingStringComposer.env.urlVariables.websiteId;
    s[12] = "";
    s[13] = "";
    s[14] = "";
    s[15] = a;
    s[16] = n.ad_click_id;
    return s.join(i.CampaignVars.DEFAULT_DELIMITER);
  };
  Object.defineProperty(BasicTrackingStringComposer, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicTrackingStringComposer;
}();
exports.BasicTrackingStringComposer = s;