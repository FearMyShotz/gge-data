Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./11.js");
var a = require("./29.js");
var s = function () {
  function TrackingConstants() {}
  Object.defineProperty(TrackingConstants, "JSON_TRACKING_URL", {
    get: function () {
      var e = a.EnvGlobalsHandler.globals.publicGameTitleForPaths;
      if (a.EnvGlobalsHandler.globals.isLocal || a.EnvGlobalsHandler.globals.isTest) {
        return i.BasicConstants.DOMAIN_PROTOCOL + "://" + e + "-test-client-tracking.goodgamestudios.com/";
      } else {
        return i.BasicConstants.DOMAIN_PROTOCOL + "://" + e + "-client-tracking.goodgamestudios.com/";
      }
    },
    enumerable: true,
    configurable: true
  });
  TrackingConstants.TEST_TRACKING_SERVER = i.BasicConstants.DOMAIN_PROTOCOL + "://10.0.17.151:8443/";
  return TrackingConstants;
}();
exports.TrackingConstants = s;