Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./62.js");
var a = require("./248.js");
var s = require("./72.js");
var r = require("./622.js");
var o = require("./39.js");
var l = require("./624.js");
var u = require("./148.js");
var c = require("./627.js");
var _ = require("./112.js");
var d = require("./252.js");
var m = require("./70.js");
var h = require("./71.js");
var p = require("./2.js");
var g = require("./629.js");
var E = p.getLogger("WorldAssignment");
var C = function () {
  function WorldAssignment() {}
  WorldAssignment.prototype.initialize = function (e) {
    if (e) {
      E.debug("config > ", e);
      o.Context.instance.globals = e;
      o.Context.instance.set(new _.CountriesManager());
      o.Context.instance.set(new s.NetworkInstancesManager());
      o.Context.instance.set(new u.BranchesManager());
      o.Context.instance.set(new c.BranchesController());
      o.Context.instance.set(new d.ZoneCapacityManager());
      o.Context.instance.set(new l.ZoneCapacitiesController());
      this._initialized = true;
    } else {
      this._initialized = false;
    }
  };
  WorldAssignment.prototype.start = function (e) {
    return i.__awaiter(this, undefined, undefined, function () {
      var t;
      var n;
      var a;
      return i.__generator(this, function (u) {
        switch (u.label) {
          case 0:
            if (!this._initialized) {
              E.error("WorldAssignment not initialized. Call 'initialize' before starting world assignment process.");
              throw new m.WorldAssignmentError(h.WorldAssignmentErrorCodes.WORLD_ASSIGNMENT_FAILED_TO_INITIALIZE, "WorldAssignment is not initialized.");
            }
            return [4, g.loadCountryConfig(e)];
          case 1:
            u.sent();
            return [4, r.loadNetworkInstances(e)];
          case 2:
            t = u.sent();
            if (o.Context.instance.globals.useDynamicWorldAssignment) {
              return [4, o.Context.instance.get(l.ZoneCapacitiesController).loadZoneCapacityConfig(e)];
            } else {
              return [3, 5];
            }
          case 3:
            u.sent();
            return [4, o.Context.instance.get(l.ZoneCapacitiesController).initZoneCapacity()];
          case 4:
            u.sent();
            u.label = 5;
          case 5:
            o.Context.instance.get(_.CountriesManager).initActiveCountries(t);
            return [4, g.detectCountry()];
          case 6:
            n = u.sent();
            return [4, o.Context.instance.get(s.NetworkInstancesManager).assignNetworkInstance(n.ggsCountryCode)];
          case 7:
            a = u.sent();
            this._worldAssignmentDetection = {
              instance: i.__assign({}, a),
              country: i.__assign({}, n),
              globals: i.__assign({}, o.Context.instance.globals),
              settings: i.__assign({}, o.Context.instance.networkSettings)
            };
            return [4, o.Context.instance.get(c.BranchesController).loadBranches(e)];
          case 8:
            u.sent();
            return [4, o.Context.instance.get(c.BranchesController).initializeBranch()];
          case 9:
            u.sent();
            return [2, o.Context.instance.get(s.NetworkInstancesManager).selectedNetworkInstance];
        }
      });
    });
  };
  WorldAssignment.prototype.selectInstance = function (e) {
    o.Context.instance.get(s.NetworkInstancesManager).forceInstance(e);
  };
  WorldAssignment.prototype.selectInstanceByCountry = function (e) {
    o.Context.instance.get(_.CountriesManager).currentCountry = e;
    return o.Context.instance.get(s.NetworkInstancesManager).forceInstanceByCountry(e.ggsCountryCode);
  };
  Object.defineProperty(WorldAssignment.prototype, "initialized", {
    get: function () {
      return this._initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignment.prototype, "facade", {
    get: function () {
      if (this._facade) {
        return this._facade;
      }
      if (this._initialized) {
        return this._facade = new a.WorldAssignmentFacade();
      }
      throw new Error("WorldAssignment not initialized. Call 'initialize' before starting world assignment process.");
    },
    enumerable: true,
    configurable: true
  });
  return WorldAssignment;
}();
exports.WorldAssignment = C;