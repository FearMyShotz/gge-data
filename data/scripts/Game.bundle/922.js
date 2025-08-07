Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleForumHelper() {}
  CastleForumHelper.isForumVisible = function () {
    return !u.GoodgamePartners.isSpilNetwork(CastleForumHelper.env.networkId) && CastleForumHelper.env.networkId != u.GoodgamePartners.NETWORK_KANOBU && (!!CastleForumHelper.env.networkNewsByJS || !!CastleForumHelper.env.useexternallinks);
  };
  CastleForumHelper.assignForumButtonTooltip = function (e) {
    if (CastleForumHelper.env.networkNewsByJS) {
      e.toolTipText = "generic_group";
    } else {
      e.toolTipText = "generic_forum";
    }
  };
  CastleForumHelper.goToWiki = function () {
    if (CastleForumHelper.env.loginIsKeyBased && !CastleForumHelper.env.useexternallinks) {
      l.ExternalInterfaceController.instance.executeJavaScriptFunction(d.JavascriptFunctionName.REQUEST_GROUP);
    } else if (c.GGSCountryController.instance.currentCountry.ggsLanguageCode == "de") {
      a.BrowserUtil.executeNavigateToURL(new p.URLRequest(h.ClientConstURL.URL_WIKI_DE));
    } else {
      s.CommandController.instance.executeCommand(o.BasicController.COMMAND_OPEN_FORUM);
    }
  };
  Object.defineProperty(CastleForumHelper, "env", {
    get: function () {
      return r.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleForumHelper;
}();
exports.CastleForumHelper = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./1.js");
var h = require("./729.js");