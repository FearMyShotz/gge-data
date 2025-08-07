Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("./2.js");
var r = require("./2.js");
var s = require("./2.js");
var i = require("./1980.js");
var a = false;
function l(e) {
  if (e === "production") {
    Object.defineProperty(window, "console", {
      value: console,
      writable: false,
      configurable: false
    });
    var t;
    var n = {
      set: function (e) {
        t = e;
      },
      get: function () {
        if (!a) {
          console.clear();
          console.log("%cStop!", "font: 4em sans-serif; color: white; background-color: red;");
          console.log("%cThis is a browser feature intended for developers.", "font: 2em sans-serif");
          console.log("%cIf someone told you to copy-paste something here to enable a GGS feature or 'hack' someone's account, it is a scam and will give them access to your account.", "font: 2em sans-serif");
          a = true;
        }
        return t;
      }
    };
    Object.defineProperty(console, "_commandLineAPI", n);
    Object.defineProperty(console, "__commandLineAPI", n);
    if (console._commandLineAPI) {
      console._commandLineAPI();
    }
    if (console.__commandLineAPI) {
      console.__commandLineAPI();
    }
  }
}
exports.wrapper = function (e) {
  var t = window.location.hostname.search("localhost") !== -1 || window.location.hostname.search("127.0.0.1") !== -1 ? "development" : window.location.hostname.search("test") === -1 ? "production" : window.location.pathname.split("/")[1] || "unknown";
  l(t);
  (function (e) {
    if (e === "production") {
      ["log", "debug", "info", "warn", "error"].forEach(function (e) {
        console[e] = function () {};
      });
    }
  })(t);
  (function (e, t) {
    window.bugsnagClient = i.default({
      apiKey: "8df757b7a283ecd9fe3c3b47fa5ffdf9",
      appVersion: e,
      collectUserIp: false,
      notifyReleaseStages: ["development", "qa", "preproduction", "production"],
      releaseStage: t,
      beforeSend: function (e) {
        var t = "no_tracking_info_available";
        try {
          t = r.TrackingCache.getInstance().getEvent(s.TrackingEventIds.CLIENT_FUNNEL).gamestate_name || "unknown";
        } catch (e) {}
        var n = o.EnvGlobalsHandler.globals.lastShownDialog;
        var i = o.EnvGlobalsHandler.globals.lastUsedCommandName;
        var a = o.EnvGlobalsHandler.globals.lastExternalClip;
        e.metaData = {
          gameplay: {
            last_funnel_step: t,
            lastShownDialog: n,
            lastUsedCommandName: i,
            lastExternalClip: a
          }
        };
      }
    });
  })(e, t);
  (function (e) {
    if (e.StyleMedia) {
      if (e.location.href.indexOf("debugedge") != -1) {
        console.log("Edge logging enabled");
        return;
      }
      if (typeof e.console == "object" || typeof e.console.log == "function") {
        console.log("logging disabled by default for Edge as with the certain dev setups and console closed it fails, to enable logging add \"debugedge\" to the querystring load the page (it will fail) open the console and reload, with the console object now created it will work");
        var t = function noop() {};
        var n = ["show", "hide", "clear", "log", "debug", "dir", "info", "warn", "error"];
        for (var o = n.length; o--;) {
          console[n[o]] = t;
        }
      }
    }
  })(window);
  console.log("Initialize PageIntegration cross-communication registering MessageHandler with allowed domains");
  window.messageHandler = new window.MessageHandler(new window.EventHandler(), "*", window.parent, window.location != window.parent.location ? document.referrer : document.location.href);
  window.messageHandler.register();
};