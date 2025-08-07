Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./15.js");
var a = require("./44.js");
var s = require("./38.js");
var r = function () {
  function TrackingVerificationPatternGenerator() {}
  TrackingVerificationPatternGenerator.getPattern = function (e) {
    var t = TrackingVerificationPatternGenerator.standardPattern;
    switch (e) {
      case TrackingVerificationPatternGenerator.CLASSIC_STANDARD_PATTERN:
        break;
      case TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_WWW_PATTERN:
        t = t.concat(TrackingVerificationPatternGenerator.firstSessionStandardPattern, TrackingVerificationPatternGenerator.firstInstanceWWWCase);
        break;
      case TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_SSO_PATTERN:
        t = t.concat(TrackingVerificationPatternGenerator.firstSessionStandardPattern, TrackingVerificationPatternGenerator.firstInstanceSSOCase);
        break;
      case TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_LP_PATTERN:
        t = t.concat(TrackingVerificationPatternGenerator.firstSessionStandardPattern);
        break;
      default:
        a.error("Unknown tracking pattern!");
    }
    return t;
  };
  Object.defineProperty(TrackingVerificationPatternGenerator, "standardPattern", {
    get: function () {
      return [i.TrackingEventIds.IMPRESSION];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingVerificationPatternGenerator, "firstSessionStandardPattern", {
    get: function () {
      return [i.TrackingEventIds.WORLD_ASSIGNMENT, i.TrackingEventIds.CONNECTION, i.TrackingEventIds.CONNECTION, i.TrackingEventIds.CONNECTION, s.ClientFunnelGameStates.LOADING_CIRCLE, s.ClientFunnelGameStates.FIRST_GAME_SCREEN, s.ClientFunnelGameStates.LOADING_BAR, s.ClientFunnelGameStates.NETWORK_XML_START, s.ClientFunnelGameStates.NETWORK_XML_END, s.ClientFunnelGameStates.LANG_XML_START, s.ClientFunnelGameStates.LANG_XML_END, s.ClientFunnelGameStates.ITEM_XML_START, s.ClientFunnelGameStates.ITEM_XML_END, s.ClientFunnelGameStates.ASSETS_START, s.ClientFunnelGameStates.ASSETS_END, s.ClientFunnelGameStates.GAME_SWF_LOADED, s.ClientFunnelGameStates.SERVER_CONNECT, s.ClientFunnelGameStates.SERVER_CONNECT_SUCCESS, s.ClientFunnelGameStates.VERSION_CHECK_SEND, s.ClientFunnelGameStates.GAME_JOINED];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingVerificationPatternGenerator, "firstInstanceWWWCase", {
    get: function () {
      return [s.ClientFunnelGameStates.ENTER_NAME, s.ClientFunnelGameStates.ENTER_EMAIL, s.ClientFunnelGameStates.ENTER_PASSWORD, s.ClientFunnelGameStates.CLICK_REGISTER_WITH_DATA, s.ClientFunnelGameStates.REGISTERED];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingVerificationPatternGenerator, "firstInstanceSSOCase", {
    get: function () {
      return [s.ClientFunnelGameStates.CLICK_REGISTER_WITH_DATA_SSO, s.ClientFunnelGameStates.REGISTERED];
    },
    enumerable: true,
    configurable: true
  });
  TrackingVerificationPatternGenerator.CLASSIC_STANDARD_PATTERN = "CLASSIC_STANDARD_PATTERN";
  TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_SSO_PATTERN = "CLASSIC_FIRST_INSTANCE_SSO_PATTERN";
  TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_WWW_PATTERN = "CLASSIC_FIRST_INSTANCE_WWW_PATTERN";
  TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_LP_PATTERN = "CLASSIC_FIRST_INSTANCE_LP_PATTERN";
  return TrackingVerificationPatternGenerator;
}();
exports.TrackingVerificationPatternGenerator = r;