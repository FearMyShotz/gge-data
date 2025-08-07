Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./48.js");
var s = require("./92.js");
var r = require("./3.js");
var o = require("./11.js");
var l = function () {
  function SupportUtil() {}
  SupportUtil.navigateToSupport = function (e, t, n, i, o, l) {
    try {
      var u = new r.URLRequest(SupportUtil.GGS_SUPPORT_URL);
      SupportUtil.supportData.versionText = t;
      var c = SupportUtil.supportData.createUrlVars(e, n, i, o, l);
      u.data = c;
      s.BrowserUtil.executeNavigateToURL(u, "_blank");
    } catch (e) {
      a.fatal("cannot navigate to support form");
    }
  };
  SupportUtil.setRegistrationNetworkId = function (e) {
    SupportUtil.supportData.networkId = e;
  };
  SupportUtil.initForWeb = function (e, t, n, i, a, s) {
    SupportUtil.supportData = new c(e, t, n, i, a, s);
  };
  SupportUtil.initForMobile = function (e, t, n, i, a, s) {
    SupportUtil.supportData = new _(e, t, n, i, a, s);
  };
  SupportUtil.GGS_SUPPORT_URL = o.BasicConstants.DOMAIN_PROTOCOL + "://support.goodgamestudios.com/";
  return SupportUtil;
}();
exports.SupportUtil = l;
var u = function () {
  function ASupportData(e, t, n, i) {
    this.gameId = e;
    this.sessionId = t;
    this.networkId = n;
    this.os = i;
  }
  ASupportData.prototype.createUrlVars = function (e, t, n, i, a) {
    var s = {
      g: this.gameId,
      n: this.networkId,
      i: e,
      sid: this.sessionId
    };
    if (n > 0) {
      s.pid = n;
    }
    s.uid = i;
    s.lang = a;
    if (t !== null && t !== "-") {
      s.uname = t;
    }
    return s;
  };
  ASupportData.prototype.toString = function () {
    return "";
  };
  Object.defineProperty(ASupportData.prototype, "gameId", {
    get: function () {
      return this._gameId;
    },
    set: function (e) {
      this._gameId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "sessionId", {
    get: function () {
      return this._sessionId;
    },
    set: function (e) {
      this._sessionId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "networkId", {
    get: function () {
      return this._networkId;
    },
    set: function (e) {
      this._networkId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "versionText", {
    get: function () {
      return this._versionText;
    },
    set: function (e) {
      this._versionText = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "os", {
    get: function () {
      return this._os;
    },
    set: function (e) {
      this._os = e;
    },
    enumerable: true,
    configurable: true
  });
  return ASupportData;
}();
exports.ASupportData = u;
var c = function (e) {
  function WebSupportData(t, n, i, a, s, r) {
    var o = e.call(this, n, i, a, r) || this;
    o.referrer = t;
    o.playerVersion = s;
    return o;
  }
  i.__extends(WebSupportData, e);
  WebSupportData.prototype.createUrlVars = function (t, n, i, a, s) {
    var r = e.prototype.createUrlVars.call(this, t, n, i, a, s);
    r.ref = this.referrer;
    return r;
  };
  WebSupportData.prototype.toString = function () {
    var t = e.prototype.toString.call(this);
    return t += "Game-Version: " + this.versionText + "\nFlash Player - Version:" + this.playerVersion + "\nOS:" + r.Capabilities.os;
  };
  Object.defineProperty(WebSupportData.prototype, "referrer", {
    get: function () {
      return this._referrer;
    },
    set: function (e) {
      this._referrer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WebSupportData.prototype, "playerVersion", {
    get: function () {
      return this._playerVersion;
    },
    set: function (e) {
      this._playerVersion = e;
    },
    enumerable: true,
    configurable: true
  });
  return WebSupportData;
}(u);
exports.WebSupportData = c;
var _ = function (e) {
  function MobileSupportData(t, n, i, a, s, r) {
    var o = e.call(this, t, n, i, r) || this;
    o.sourceStore = a;
    o.deviceType = s;
    return o;
  }
  i.__extends(MobileSupportData, e);
  MobileSupportData.prototype.toString = function () {
    return e.prototype.toString.call(this);
  };
  Object.defineProperty(MobileSupportData.prototype, "sourceStore", {
    get: function () {
      return this._sourceStore;
    },
    set: function (e) {
      this._sourceStore = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MobileSupportData.prototype, "deviceType", {
    get: function () {
      return this._deviceType;
    },
    set: function (e) {
      this._deviceType = e;
    },
    enumerable: true,
    configurable: true
  });
  return MobileSupportData;
}(u);
exports.MobileSupportData = _;