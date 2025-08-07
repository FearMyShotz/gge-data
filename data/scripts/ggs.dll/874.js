Object.defineProperty(exports, "__esModule", {
  value: true
});
var i;
var a = require("./67.js");
var s = createjs.Event;
var r = require("./134.js");
var o = require("./2.js");
var l = require("./4.js");
var u = require("./43.js");
var c = o.getLogger("core.AssetLoaderService");
function loadAsset(e, t = 0) {
  var n = u.PathProvider.instance.interfaceVersions;
  var i = u.PathProvider.instance.itemVersions;
  if (r.isNullOrUndefined(n) || r.isNullOrUndefined(i)) {
    c.error("InterfaceVersions or ItemVersions has not been set. Set them before using assetLoad method. \n ");
  }
  return new Promise(function (o, u) {
    var _;
    var d;
    var m = r.isNullOrUndefined(n.getPath(e)) == 0;
    var h = !m && r.isNullOrUndefined(i.getPath(e)) == 0;
    if (m) {
      _ = l.BasicModel.basicLoaderData.loadVersionedInterfaceAsset;
      d = "interface";
    } else if (h) {
      _ = l.BasicModel.basicLoaderData.loadVersionedItemAsset;
      d = "item";
    }
    if (!_) {
      c.warn("Could not find Version for Interface/Item: " + e + " (skipping)");
      o("Warning from promise: " + e);
      return;
    }
    c.debug("loadAsset - " + e + ", type - " + d + ",with prio - " + t);
    var p = _.apply(l.BasicModel.basicLoaderData, [e, t]);
    if (p.isLoaded) {
      c.debug(e + " was loaded already!");
      o(e);
    } else {
      c.debug("loading of " + e + " has been started");
      function g(t) {
        C();
        o(t);
        c.debug("loading of " + e + " has been finished");
      }
      function E(t) {
        C();
        o(t);
        c.warn("loading of " + e + " has been canceled with error");
      }
      function C() {
        p.removeEventListener(s.COMPLETE, g);
        p.removeEventListener(a.BulkLoader.ERROR, E);
      }
      p.addEventListener(s.COMPLETE, g, false, 0, true);
      p.addEventListener(a.BulkLoader.ERROR, E, false, 0, true);
    }
  });
}
(function (e) {
  e[e.SEQUENTIAL = 0] = "SEQUENTIAL";
  e[e.PARALLEL = 1] = "PARALLEL";
})(i = exports.AssetLoadingFlowType ||= {});
exports.loadAsset = loadAsset;
exports.loadAssets = function loadAssets(e, t = i.PARALLEL, n = 0) {
  c.debug("loadAssets list - " + e + ", flowType: " + t + ", prio: " + n);
  if (t == i.PARALLEL) {
    return Promise.all(e.map(function (e) {
      return loadAsset(e, n);
    }));
  }
  if (t == i.SEQUENTIAL) {
    var a = [];
    return e.reduce(function (e, t) {
      return e.then(function (e) {
        return loadAsset(t, n).then(function (e) {
          return a.push(e);
        });
      });
    }, Promise.resolve());
  }
  return null;
};