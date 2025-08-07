Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./5.js");
var s = i.getLogger("CoreJS.InstanceVOProxy");
var r = function () {
  function InstanceVOProxy() {
    this._runtimeInstances = new Map();
  }
  InstanceVOProxy.prototype.setWorldAssignementFacade = function (e) {
    this.worldAssignmentFacade = e;
  };
  Object.defineProperty(InstanceVOProxy.prototype, "instanceMap", {
    get: function () {
      if (!this.worldAssignmentFacade) {
        s.warn("worldassignment is null: are you invoking get InstanceMap too early?");
        return [];
      }
      var e = this.worldAssignmentFacade.networkInstances.concat();
      if (a.EnvGlobalsHandler.globals.isTest) {
        e = e.concat(this._runtimeInstances.toArray());
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InstanceVOProxy.prototype, "selectedInstanceVO", {
    get: function () {
      if (this._selectedInstanceVO) {
        return this._selectedInstanceVO;
      } else {
        return this.getSelectedWorldAssignmentInstance();
      }
    },
    enumerable: true,
    configurable: true
  });
  InstanceVOProxy.prototype.getSelectedWorldAssignmentInstance = function () {
    if (this.worldAssignmentFacade) {
      return this.worldAssignmentFacade.selectedNetworkInstance;
    } else {
      return null;
    }
  };
  InstanceVOProxy.prototype.addInstance = function (e) {
    if (!this.worldAssignmentFacade.getInstanceById(e.instanceId)) {
      this._runtimeInstances.set(e.instanceId, e);
    }
  };
  InstanceVOProxy.prototype.addInstances = function (e) {
    s.warn("deprecated(HTML-4220, we should use a proxied network.xml instead of messing around at runtime");
    for (var t = 0, n = e; t < n.length; t++) {
      var i = n[t];
      this.addInstance(i);
    }
  };
  InstanceVOProxy.prototype.getInstanceVOByID = function (e) {
    if (this._runtimeInstances.has(e)) {
      return this._runtimeInstances.get(e);
    } else if (this.worldAssignmentFacade) {
      return this.worldAssignmentFacade.getInstanceById(e);
    } else {
      s.warn("worldassignment is null: are you invoking getInstanceVOByID too early?");
      return null;
    }
  };
  InstanceVOProxy.prototype.getInstanceVOByZoneID = function (e) {
    if (this.worldAssignmentFacade) {
      return this.worldAssignmentFacade.getInstanceByZoneId(e);
    } else {
      s.warn("worldassignment is null: are you invoking getInstanceVOByZoneID too early?");
      return null;
    }
  };
  InstanceVOProxy.prototype.getInstancesForActualCountry = function () {
    if (this.worldAssignmentFacade) {
      return this.worldAssignmentFacade.getInstancesByCountryCode(this.worldAssignmentFacade.currentCountry.ggsCountryCode);
    } else {
      s.warn("worldassignment is null: are you invoking getInstancesForActualCountry too early?");
      return [];
    }
  };
  InstanceVOProxy.prototype.printInstances = function () {
    for (var e = 0, t = this.instanceMap; e < t.length; e++) {
      var n = t[e];
      s.debug(n.toString());
    }
  };
  return InstanceVOProxy;
}();
exports.InstanceVOProxy = r;