Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./118.js");
var a = require("./452.js");
var s = require("./453.js");
var r = require("./2.js").getLogger("CampaignVars");
var o = function () {
  function CampaignVars() {
    this._isInitialized = false;
  }
  CampaignVars.prototype.initialize = function (e) {
    var t = e.data;
    r.debug("Client:" + e.clientObjectClassName + ", context: " + e.contextDescription + ", vars: " + e.data + ", initialized: " + this._isInitialized);
    if (t) {
      if (!this._isInitialized) {
        try {
          this._partnerId = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.PARTNER_ID), "-1"));
          this._lpPartnerId = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.LP_PARTNER_ID), "-1"));
          this._channelId = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.CHANNEL_ID)));
          this._trafficSource = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.TRAFFIC_SOURCE)));
          var n = i.paramToNum(t.get(s.CampaignConstants.CREATIVE), -1);
          this._creative = n > 0 ? this.parseAttribute(n.toString()) : "-1";
          this._placement = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.PLACEMENT)));
          this._keyword = this.convertToHexString(this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.KEYWORD))));
          this._network = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.NETWORK)));
          var a = i.paramToNum(t.get(s.CampaignConstants.LP), -1);
          this._lp = a > 0 ? this.parseAttribute(a.toString()) : "-1";
          var o = i.paramToNum(t.get(s.CampaignConstants.AID), -1);
          this._aid = o > 0 ? this.parseAttribute(o.toString()) : "-1";
          this._camp = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.CAMP), "-1"));
          this._adgr = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.ADGR), "-1"));
          this._ad_click_id = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.AD_CLICK_ID)));
          this._matchtype = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.MATCHTYPE)));
          this._lang = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.LANGUAGE)));
          this._country = this.parseAttribute(i.paramToString(t.get(s.CampaignConstants.COUNTRY)));
          if (this.isValid()) {
            this._isInitialized = true;
          }
          r.debug("initialization done. Vars:" + toString());
        } catch (e) {
          r.warn("Failed constructing campaign vars.");
        }
      }
    } else {
      r.debug("CampaignVars, initialize(): vars are null");
    }
  };
  CampaignVars.prototype.convertToHexString = function (e) {
    var t = "";
    for (var n = 0; n < e.length; n++) {
      t += e.charCodeAt(n).toString(16);
    }
    return t;
  };
  CampaignVars.prototype.parseAttribute = function (e) {
    if (e && e !== "") {
      return a.HTMLEscaper.unescape(e);
    } else {
      return "";
    }
  };
  CampaignVars.prototype.toObject = function () {
    var e = {
      [s.CampaignConstants.PARTNER_ID]: this._partnerId,
      [s.CampaignConstants.LP_PARTNER_ID]: this._lpPartnerId,
      [s.CampaignConstants.CHANNEL_ID]: this._channelId,
      [s.CampaignConstants.TRAFFIC_SOURCE]: this._trafficSource,
      [s.CampaignConstants.CREATIVE]: this._creative,
      [s.CampaignConstants.PLACEMENT]: this._placement,
      [s.CampaignConstants.KEYWORD]: this._keyword,
      [s.CampaignConstants.NETWORK]: this._network,
      [s.CampaignConstants.LP]: this._lp,
      [s.CampaignConstants.AID]: this._aid,
      [s.CampaignConstants.CAMP]: this._camp,
      [s.CampaignConstants.ADGR]: this._adgr,
      [s.CampaignConstants.MATCHTYPE]: this._matchtype,
      [s.CampaignConstants.LANGUAGE]: this._lang,
      [s.CampaignConstants.COUNTRY]: this._country,
      [s.CampaignConstants.AD_CLICK_ID]: this._ad_click_id
    };
    return e;
  };
  CampaignVars.prototype.toString = function () {
    return ["partnerId: " + this.partnerId, "channelId: " + this.channelId, "trafficSource: " + this.trafficSource, "creative: " + this.creative, "placement: " + this.placement, "keyword: " + this.keyword, "network: " + this.network, "lp: " + this.lp, "aid: " + this.aid, "camp: " + this.camp, "adgr: " + this.adgr, "matchtype: " + this.matchtype, "lang: " + this.lang, "country: " + this.country].join(", ");
  };
  Object.defineProperty(CampaignVars.prototype, "isInitialized", {
    get: function () {
      return this._isInitialized;
    },
    enumerable: true,
    configurable: true
  });
  CampaignVars.prototype.isValid = function () {
    var e;
    var t = parseInt(this._partnerId);
    if (!isNaN(t) && t >= 0) {
      e = true;
    }
    return e;
  };
  Object.defineProperty(CampaignVars.prototype, "channelId", {
    get: function () {
      return this._channelId || "";
    },
    set: function (e) {
      this._channelId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "trafficSource", {
    get: function () {
      return this._trafficSource || "";
    },
    set: function (e) {
      this._trafficSource = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "partnerId", {
    get: function () {
      return this._partnerId || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "lpPartnerID", {
    get: function () {
      return this._lpPartnerId || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "extendedPartnerID", {
    get: function () {
      if (this.partnerId !== "-1") {
        return this.partnerId;
      } else if (this.lpPartnerID !== "-1") {
        return this.lpPartnerID;
      } else {
        return "-1";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "creative", {
    get: function () {
      return this._creative || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "placement", {
    get: function () {
      return this._placement || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "keyword", {
    get: function () {
      return this._keyword || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "network", {
    get: function () {
      return this._network || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "lp", {
    get: function () {
      return this._lp || "-1";
    },
    set: function (e) {
      this._lp = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "aid", {
    get: function () {
      return this._aid || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "camp", {
    get: function () {
      return this._camp || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "adgr", {
    get: function () {
      return this._adgr || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "matchtype", {
    get: function () {
      return this._matchtype || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "lang", {
    get: function () {
      return this._lang || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "ad_click_id", {
    get: function () {
      return this._ad_click_id || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "country", {
    get: function () {
      return this._country || "";
    },
    enumerable: true,
    configurable: true
  });
  CampaignVars.DEFAULT_DELIMITER = ";";
  return CampaignVars;
}();
exports.CampaignVars = o;