Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./39.js");
var a = require("./72.js");
var s = require("./147.js");
var r = require("./2.js").getLogger("WorldAssignment.CountryUtils");
exports.getCountryCodeByPresetInstance = function (e) {
  var t = i.Context.instance.get(a.NetworkInstancesManager);
  if (t) {
    if (e > 0) {
      var n = t.getInstanceById(e);
      if (n && n.countries) {
        if (n.countries.length == 1) {
          return n.countries[0].ggsCountryCode;
        }
        r.warn("getCountryCodeByPreselectedInstance: found an instance for the presetInstanceID but could not determine Country because there are more than one,  following steps in CountryDetection will  find the right one");
      } else {
        r.error("getCountryCodeByPreselectedInstance: unable to select instance by preset instanceId, wrong network.xml?");
      }
    }
  } else {
    r.error("getCountryCodeByPreselectedInstance: NetworkInstancesManager not initialized");
  }
};
exports.getCountryCodeByFriendInvite = function (e, t) {
  var n = i.Context.instance.get(a.NetworkInstancesManager);
  if (n) {
    if (e > 0) {
      var o = n.getInstanceByZoneId(e);
      if (o && o.countries) {
        var l = s.filterCountriesByCountryCode(o.countries, t);
        if (l.length) {
          return l[0].ggsCountryCode;
        } else {
          return o.countries[0].ggsCountryCode;
        }
      }
      r.error("getCountryCodeByFriendInvite: instance provided by friend invite code is not valid");
    }
  } else {
    r.error("getCountryCodeByFriendInvite: NetworkInstancesManager not initialized");
  }
};
exports.getCountryCodeByDefaultInstance = function (e) {
  var t = i.Context.instance.get(a.NetworkInstancesManager);
  if (t) {
    var n = t.getInstanceById(e);
    if (n && n.defaultcountry) {
      return n.defaultcountry;
    }
    r.error("getCountryCodeByDefaultInstance: unable to select instance by default instance, wrong network.xml?");
  } else {
    r.error("getCountryCodeByDefaultInstance: NetworkInstancesManager not initialized");
  }
};