Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./11.js");
var a = function () {
  function UrlUtil() {}
  UrlUtil.getCleanReferrer = function (e) {
    return UrlUtil.getProtocol(e) + "://" + UrlUtil.getServerName(e);
  };
  UrlUtil.getServerNameWithPort = function (e) {
    var t = e.indexOf("/") + 2;
    var n = e.indexOf("/", t);
    if (n == -1) {
      return e.substring(t);
    } else {
      return e.substring(t, n);
    }
  };
  UrlUtil.getServerName = function (e) {
    var t = UrlUtil.getServerNameWithPort(e);
    var n = t.indexOf("]");
    if ((n = n > -1 ? t.indexOf(":", n) : t.indexOf(":")) > 0) {
      t = t.substring(0, n);
    }
    return t;
  };
  UrlUtil.getProtocol = function (e) {
    var t = e.indexOf("/");
    var n = e.indexOf(":/");
    if (n > -1 && n < t) {
      return e.substring(0, n);
    } else if ((n = e.indexOf("::")) > -1 && n < t) {
      return e.substring(0, n);
    } else {
      return "";
    }
  };
  UrlUtil.isLocal = function (e) {
    return !!e && e.indexOf(UrlUtil.FILE_PROTOCOL) != -1;
  };
  UrlUtil.isTestServer = function (e) {
    return !!e && e.indexOf(UrlUtil.TEST_SERVER_FLAG) != -1;
  };
  UrlUtil.isLocaTest = function (e) {
    return !!e && e.indexOf(UrlUtil.LOCATEST_FLAG) != -1;
  };
  UrlUtil.isLiveTest = function (e) {
    return !!e && e.indexOf(UrlUtil.LIVETEST_FLAG) != -1;
  };
  UrlUtil.isPreClient = function (e) {
    return !!e && e.indexOf(UrlUtil.PRECLIENT_FLAG) != -1;
  };
  UrlUtil.isProduction = function (e) {
    return !!e && e.indexOf(UrlUtil.PRODUCTION_FLAG) != -1;
  };
  UrlUtil.FILE_PROTOCOL = "file:";
  UrlUtil.LOCATEST_FLAG = "-locatest";
  UrlUtil.LIVETEST_FLAG = "-livetest";
  UrlUtil.PRECLIENT_FLAG = "-preClient";
  UrlUtil.PRODUCTION_FLAG = "goodgamestudios.com";
  UrlUtil.TEST_SERVER_FLAG = i.BasicConstants.DOMAIN_INTERNAL_DNS;
  return UrlUtil;
}();
exports.UrlUtil = a;