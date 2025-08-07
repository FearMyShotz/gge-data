Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./39.js");
var a = require("./112.js");
var s = require("./146.js");
var r = require("./250.js");
var o = require("./251.js");
var l = require("./2.js").getLogger("WorldAssignment.NetworkXMLParser");
function readNumberChildTagValue(e, t) {
  var n = e.querySelector(t);
  if (n) {
    return +n.textContent;
  } else {
    return 0;
  }
}
function readBooleanChildTagValue(e, t) {
  var n = e.querySelector(t);
  return !!n && n.textContent === "true";
}
exports.parseInstances = function (e) {
  return u(e, "instances");
};
exports.parseTestInstances = function (e) {
  return u(e, "test-instances");
};
function u(e, t) {
  var n;
  var i = new DOMParser().parseFromString(e, "text/xml").querySelector(t);
  var a = [];
  if (!i) {
    l.debug("node '" + t + "' not found");
    return [];
  }
  if (i.children && i.children.length) {
    for (var s = 0; s < i.children.length; s++) {
      n = c(i.children.item(s));
      a.push(n);
    }
  } else {
    l.debug("node '" + t + "' is null or empty");
  }
  return a;
}
function c(e) {
  var t;
  var n;
  var i = new o.NetworkInstance();
  t = e.querySelector("server");
  i.ip = t ? t.textContent : "";
  t = e.querySelector("port");
  i.port = t ? +t.textContent : 0;
  t = e.querySelector("zone");
  i.zone = t ? t.textContent : "";
  t = e.querySelector("zoneId");
  i.zoneId = t ? +t.textContent : 0;
  t = e.querySelector("instanceName");
  i.instanceCountID = t ? +t.textContent : 0;
  t = e.querySelector("isInternational");
  i.isInternational = t && t.textContent === "1";
  t = e.querySelector("isFavorite");
  i.isFavorite = t && t.textContent === "1";
  t = e.querySelector("defaultcountry");
  i.defaultcountry = t ? t.textContent : "";
  t = e.querySelector("instanceLocaId");
  i.instanceLocaId = t ? t.textContent : "";
  n = e.attributes.getNamedItem("value");
  i.instanceId = n ? +n.textContent : 0;
  var a = (t = e.querySelector("countries")) ? _(t.textContent) : [];
  if (a) {
    i.countries = d(a);
  }
  return i;
}
exports.parseNetworkProperties = function (e) {
  new DOMParser().parseFromString(e, "text/xml");
  var t;
  var n = new r.NetworkProperties();
  t = e.attributes.getNamedItem("deployTime");
  n.deployTime = t ? +t.textContent : 0;
  t = e.attributes.getNamedItem("versionNo");
  n.versionNumber = t ? t.textContent : "0";
  t = e.attributes.getNamedItem("is_approval");
  n.isApproval = !!t && t.textContent === "true";
  return n;
};
exports.parseNetworkSettings = function (e) {
  var t = new DOMParser().parseFromString(e, "text/xml").querySelector("general");
  return new s.NetworkSettings({
    allowedFullScreen: readBooleanChildTagValue(t, "allowedfullscreen"),
    defaultInstanceId: readNumberChildTagValue(t, "defaultinstance"),
    earnCredits: readNumberChildTagValue(t, "earncredits"),
    enableFeedMessages: readBooleanChildTagValue(t, "enablefeedmessages"),
    enableLonelyCow: readBooleanChildTagValue(t, "enablelonelycow"),
    inviteFriends: readBooleanChildTagValue(t, "invitefriends"),
    maxUsernameLength: readNumberChildTagValue(t, "maxusernamelength"),
    networkBuddies: readBooleanChildTagValue(t, "networkbuddies"),
    networkName: function readStringChildTagValue(e, t) {
      var n = e.querySelector(t);
      if (n) {
        return n.textContent;
      } else {
        return "";
      }
    }(t, "networkname"),
    requestPayByJS: readBooleanChildTagValue(t, "requestpaybyjs"),
    showVersion: readBooleanChildTagValue(t, "showversion"),
    useExternalLinks: readBooleanChildTagValue(t, "useexternallinks"),
    useKeyBasedLogin: readBooleanChildTagValue(t, "usekeybaselogin"),
    usePayment: readBooleanChildTagValue(t, "usepayment")
  });
};
function _(e) {
  var t = [];
  if (e && e !== "" && e !== "null" && e.length >= 6) {
    t = JSON.parse(e);
  }
  return t;
}
function d(e) {
  var t = [];
  if (!e) {
    l.debug("NetworkXMLParser.createCountries: ggsCountryCodes is empty");
  }
  for (var n = 0; n < e.length; n++) {
    var s = i.Context.instance.get(a.CountriesManager).getCountryByCountryCode(e[n], true);
    if (s) {
      t.push(s);
    }
  }
  return t;
}