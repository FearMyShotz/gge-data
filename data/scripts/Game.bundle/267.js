Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./118.js");
var l = require("./4.js");
var c = require("./7.js");
var u = require("./176.js");
var d = require("./1985.js");
var p = r.getLogger("CXFDecorator");
var h = [c.ClientConstSF.S2C_GET_BASIC_DATA, c.ClientConstSF.S2C_SET_API_TOKEN];
var g = new Map();
function C(e, t, i) {
  if (e.includes(t) && parseInt(i[0]) == s.ERROR.ALL_OK) {
    var o = n.EnvGlobalsHandler.globals.networkId;
    p.info("received message for which we subscribed ", t);
    a.ExternalInterface.call("onServerCommandReceived", [t, i, window.ggs.worldAssignment.facade.currentCountry.ggsLanguageCode, o, window.ggs.worldAssignment.facade.selectedNetworkInstance.instanceId, window.ggs.worldAssignment.facade.selectedNetworkInstance.zoneId, n.EnvGlobalsHandler.globals.urlVariables.websiteId, window.ggs.worldAssignment.facade.currentCountry.ggsCountryCode]);
  }
}
function _(e) {
  console.warn("CXF WILL SUBSCRIBE TO COMMANDS ", e);
  l.CastleModel.smartfoxClient.addEventListener(o.SmartfoxEvent.EXTENSION_RESPONSE, function (t) {
    var i = t.cmdId;
    var n = t.params;
    if (!u.CastleDataHolder.instance.gbdParsed && g.size > 0 && h.includes(i)) {
      (function (e, t, i) {
        g.set(t.toString(), i);
        if (h.every(function (e) {
          return g.has(e);
        })) {
          var n = JSON.parse(g.get(c.ClientConstSF.S2C_GET_BASIC_DATA)[1]);
          var o = JSON.parse(g.get(c.ClientConstSF.S2C_SET_API_TOKEN)[1]);
          n.ato = o;
          g.get(c.ClientConstSF.S2C_GET_BASIC_DATA)[1] = JSON.stringify(n);
          C(e, c.ClientConstSF.S2C_GET_BASIC_DATA, g.get(c.ClientConstSF.S2C_GET_BASIC_DATA));
          C(e, c.ClientConstSF.S2C_SET_API_TOKEN, g.get(c.ClientConstSF.S2C_SET_API_TOKEN));
          g.clear();
        }
      })(e, i, n);
    } else {
      C(e, i, n);
    }
  });
}
var m = new WeakMap();
function f(e) {
  if (l.CastleModel.userData.newCapTooNotifications < e) {
    l.CastleModel.userData.hideCapToolNotifications = false;
  }
  l.CastleModel.userData.newCapTooNotifications = e;
}
function O(e) {
  l.CastleModel.globalOfferData.webShopOffersAmount = e;
}
function E() {
  a.ExternalInterface.call("ggsGameInitialized");
  p.info("Calling ggsGameInitialized");
}
exports.initCXF = function () {
  a.ExternalInterface.addCallback("CXFregisterServerCommands", _);
  a.ExternalInterface.addCallback("setCapToolNotifications", f);
  a.ExternalInterface.addCallback("setUnseenOffersCounter", O);
  var e = a.ExternalInterface.asyncCall("isCXFInitialized");
  if (e) {
    e.then(function (e) {
      if (e) {
        p.info("CXF is already ready.  Calling ggsGameInitialized");
        a.ExternalInterface.call("ggsGameInitialized");
      } else {
        p.info("CXF is not ready yet, waiting for it.");
        a.ExternalInterface.addCallback("cxf.initialized", E);
      }
    }).catch(function (e) {
      return p.warn(e);
    });
  }
};
exports.registerUIComponentToCXF = function (e, i = null, n = {}) {
  exports.unregisterUIComponentToCXF(e);
  m.set(e, new d.CXFDecorator(e, i, n));
};
exports.unregisterUIComponentToCXF = function (e) {
  if (m.has(e)) {
    m.get(e).undecorate();
    m.delete(e);
  }
};
exports.cxfResetCommandCache = function () {
  g.clear();
  a.ExternalInterface.call("cxf.dialog.close");
};