var i = this;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = require("./62.js");
var s = require("./90.js");
var r = require("./623.js");
var o = require("./39.js");
var l = require("./72.js");
var u = require("./2.js");
var c = require("./91.js");
var _ = require("./70.js");
var d = require("./71.js");
var m = u.getLogger("WorldAssignment.NetworkInstancesController");
exports.loadNetworkInstances = function (e) {
  return a.__awaiter(i, undefined, undefined, function () {
    return a.__generator(this, function (t) {
      m.debug("loadNetworkInstances: load network.xml");
      if (e) {
        e(c.WorldAssignmentTrackingConstants.NETWORK_XML_START);
      }
      return [2, new s.Service(o.Context.instance.globals.networkConfigUrl).load().then(function (t) {
        if (e) {
          e(c.WorldAssignmentTrackingConstants.NETWORK_XML_END);
        }
        var n = h(t, o.Context.instance.globals.isTestEnvironment || o.Context.instance.globals.forceToShowTestServers);
        var i = n.settings;
        var a = n.instances;
        o.Context.instance.set(i);
        o.Context.instance.get(l.NetworkInstancesManager).initializeInstances(a);
        m.debug("loadNetworkInstances Completed");
        return a;
      }).catch(function () {
        throw new _.WorldAssignmentError(d.WorldAssignmentErrorCodes.NETWORK_FAILED_TO_LOAD, "Failed to load network.xml from " + o.Context.instance.globals.networkConfigUrl);
      })];
    });
  });
};
function h(e, t = false) {
  var n = r.parseInstances(e);
  return {
    settings: r.parseNetworkSettings(e),
    instances: t ? n.concat(r.parseTestInstances(e)) : n
  };
}