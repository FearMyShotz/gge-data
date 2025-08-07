Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./39.js");
var a = require("./112.js");
var s = require("./148.js");
var r = require("./72.js");
var o = require("./146.js");
var l = function () {
  function WorldAssignmentFacade() {}
  Object.defineProperty(WorldAssignmentFacade.prototype, "defaultCountry", {
    get: function () {
      return i.Context.instance.get(a.CountriesManager).defaultCountry;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "currentCountry", {
    get: function () {
      return i.Context.instance.get(a.CountriesManager).currentCountry;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "detectionFactor", {
    get: function () {
      return i.Context.instance.get(a.CountriesManager).detectionFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "activeCountries", {
    get: function () {
      return i.Context.instance.get(a.CountriesManager).activeCountries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "allCountries", {
    get: function () {
      return i.Context.instance.get(a.CountriesManager).allCountries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "notSupportedCountries", {
    get: function () {
      return i.Context.instance.get(a.CountriesManager).notSupportedCountries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "branches", {
    get: function () {
      return i.Context.instance.get(s.BranchesManager).branches;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "currentBranch", {
    get: function () {
      return i.Context.instance.get(s.BranchesManager).currentBranch;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "networkInstances", {
    get: function () {
      return i.Context.instance.get(r.NetworkInstancesManager).networkInstances;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "networkSettings", {
    get: function () {
      return i.Context.instance.get(o.NetworkSettings);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "selectedNetworkInstance", {
    get: function () {
      return i.Context.instance.get(r.NetworkInstancesManager).selectedNetworkInstance;
    },
    enumerable: true,
    configurable: true
  });
  WorldAssignmentFacade.prototype.getBranchByZoneId = function (e) {
    return i.Context.instance.get(s.BranchesManager).getBranchByZoneId(e);
  };
  WorldAssignmentFacade.prototype.getInstanceByZoneId = function (e) {
    return i.Context.instance.get(r.NetworkInstancesManager).getInstanceByZoneId(e);
  };
  WorldAssignmentFacade.prototype.getInstanceById = function (e) {
    return i.Context.instance.get(r.NetworkInstancesManager).getInstanceById(e);
  };
  WorldAssignmentFacade.prototype.getInstancesByCountryCode = function (e) {
    return i.Context.instance.get(r.NetworkInstancesManager).getInstancesByCountryCode(e);
  };
  return WorldAssignmentFacade;
}();
exports.WorldAssignmentFacade = l;