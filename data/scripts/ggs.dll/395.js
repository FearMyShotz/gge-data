Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./6.js");
var s = require("./5.js");
var r = require("./396.js");
var o = require("./17.js");
var l = function (e) {
  function BasicVerifyTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicVerifyTrackingCommand, e);
  BasicVerifyTrackingCommand.prototype.execute = function (e = null) {
    var t = this.currentTrackingCase;
    var n = r.TrackingVerificationPatternGenerator.getPattern(t);
    if (this.env.doUserTunnelTracking) {
      o.TrackingCache.getInstance().trackingVerifier.startVerification(t, n, BasicVerifyTrackingCommand.VERIFICATION_DELAY_FOR_FIRST_SESSION);
    } else {
      o.TrackingCache.getInstance().trackingVerifier.startVerification(t, n);
    }
  };
  Object.defineProperty(BasicVerifyTrackingCommand.prototype, "currentTrackingCase", {
    get: function () {
      if (this.env.doUserTunnelTracking) {
        if (this.env.isSSO) {
          return r.TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_SSO_PATTERN;
        } else if (this.env.userFromLandingPage) {
          return r.TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_LP_PATTERN;
        } else {
          return r.TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_WWW_PATTERN;
        }
      } else {
        return r.TrackingVerificationPatternGenerator.CLASSIC_STANDARD_PATTERN;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicVerifyTrackingCommand.prototype, "env", {
    get: function () {
      return s.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicVerifyTrackingCommand.VERIFICATION_DELAY_FOR_FIRST_SESSION = 180000;
  return BasicVerifyTrackingCommand;
}(a.SimpleCommand);
exports.BasicVerifyTrackingCommand = l;