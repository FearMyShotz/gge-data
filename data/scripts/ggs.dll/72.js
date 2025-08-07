Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./39.js");
var a = require("./149.js");
var s = require("./2.js").getLogger("WorldAssignment.NetworkInstancesManager");
var r = function () {
  function NetworkInstancesManager() {}
  NetworkInstancesManager.prototype.initializeInstances = function (e) {
    this._networkInstances = e;
    this._initialized = true;
  };
  Object.defineProperty(NetworkInstancesManager.prototype, "networkInstances", {
    get: function () {
      return this._networkInstances;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkInstancesManager.prototype, "selectedNetworkInstance", {
    get: function () {
      return this._selectedNetworkInstance;
    },
    enumerable: true,
    configurable: true
  });
  NetworkInstancesManager.prototype.getInstanceById = function (e) {
    return this.networkInstances.find(function (t) {
      return t.instanceId === e;
    });
  };
  NetworkInstancesManager.prototype.getInstanceByZoneId = function (e) {
    return this.networkInstances.find(function (t) {
      return t.zoneId === e;
    });
  };
  NetworkInstancesManager.prototype.getInstancesByCountryCode = function (e) {
    var t;
    var n = [];
    for (var i = 0; i < this.networkInstances.length; i++) {
      t = this.networkInstances[i];
      for (var a = 0; a < t.countries.length; a++) {
        if (t.countries[a].ggsCountryCode === e) {
          n.push(t);
          break;
        }
      }
    }
    return n;
  };
  NetworkInstancesManager.prototype.assignNetworkInstance = function (e) {
    var n;
    if (this._initialized) {
      s.debug("select network instance - given country code:", e);
      if (i.Context.instance.globals.presetInstanceId > 0 && (n = this._networkInstances.find(exports.finderById(i.Context.instance.globals.presetInstanceId)))) {
        s.debug("NetworkInstancesManager.assignNetworkInstance -->presetInstanceId: ", i.Context.instance.globals.presetInstanceId);
        this._selectedNetworkInstance = n;
        return;
      } else if (i.Context.instance.globals.zoneIdFromFriendInviteCode > 0 && (n = this.getInstanceByZoneId(i.Context.instance.globals.zoneIdFromFriendInviteCode))) {
        s.debug("NetworkInstancesManager.assignNetworkInstance -->friendInviteZoneId: ", i.Context.instance.globals.zoneIdFromFriendInviteCode);
        this._selectedNetworkInstance = n;
        return;
      } else if (i.Context.instance.globals.instanceIdFromNetworkCookie > 0 && (n = this.getInstanceById(i.Context.instance.globals.instanceIdFromNetworkCookie))) {
        s.debug("NetworkInstancesManager.assignNetworkInstance -->instanceIdByNetworkCookie: ", i.Context.instance.globals.instanceIdFromNetworkCookie);
        this._selectedNetworkInstance = n;
        return;
      } else if (e !== a.CountryDetectionConstants.INSTANCE_COUNTRY_DEFAULT && (n = exports.findPreferredInstanceForCountry(this._networkInstances, e))) {
        s.debug("NetworkInstancesManager.assignNetworkInstance  --> coutryCode: ", e);
        this._selectedNetworkInstance = n;
        return;
      } else if (i.Context.instance.networkSettings.defaultInstanceId > 0 && (n = this.getInstanceById(i.Context.instance.networkSettings.defaultInstanceId))) {
        s.debug("NetworkInstancesManager.assignNetworkInstance --> networkSettings.defaultInstanceId : ", i.Context.instance.networkSettings.defaultInstanceId);
        this._selectedNetworkInstance = n;
        return;
      } else {
        s.debug("NetworkInstancesManager.assignNetworkInstance --> fallback to first instance in list: ", this.networkInstances[0]);
        this._selectedNetworkInstance = this.networkInstances[0];
        return this._selectedNetworkInstance;
      }
    }
    s.debug("NetworkInstancesManager not initialized. Can not assignNetworkInstance.");
  };
  NetworkInstancesManager.prototype.forceInstance = function (e) {
    this._selectedNetworkInstance = e;
  };
  NetworkInstancesManager.prototype.forceInstanceByCountry = function (e) {
    var n = exports.findPreferredInstanceForCountry(this.networkInstances, e);
    if (n) {
      this.forceInstance(n);
    } else {
      s.error("forceInstanceByCountry: could not find any instance for ", e);
    }
    return this._selectedNetworkInstance;
  };
  return NetworkInstancesManager;
}();
exports.NetworkInstancesManager = r;
exports.getInstancesByCountryCode = function (e, t) {
  function n(e) {
    return e.ggsCountryCode === t;
  }
  return e.filter(function (e) {
    return e.countries.some(n);
  });
};
exports.finderById = function (e) {
  return function (t) {
    return t.instanceId === e;
  };
};
function o(e) {
  return e.find(function (e) {
    return e.isFavorite;
  }) || function (e) {
    if (e && e.length > 0) {
      return e[0];
    } else {
      return undefined;
    }
  }(e);
}
exports.findPreferredInstanceForCountry = function (e, n) {
  var i = exports.getInstancesByCountryCode(e, n);
  return o(i.filter(function (e) {
    return !e.isInternational;
  })) || o(i.filter(function (e) {
    return e.isInternational;
  }));
};