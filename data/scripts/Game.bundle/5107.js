Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./7.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./10.js");
var p = function (e) {
  function AICCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AICCommand, e);
  Object.defineProperty(AICCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_ALLIANCE_INVASION_CAMP_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AICCommand.prototype.executeCommand = function (e, t) {
    var i;
    if (t && t.length > 0) {
      i = JSON.parse(t[1]);
    }
    switch (e) {
      case r.ERROR.ALL_OK:
        var n = i[s.CommKeys.ALLIANCE_CAMP][0];
        if (!n) {
          return;
        }
        var a = n[s.CommKeys.EVENT_ID];
        var l = o.castAs(u.CastleModel.specialEventData.getActiveEventByEventId(a), "IAllianceCampUpdateable");
        if (l) {
          var d = u.CastleModel.allianceInvasionCampData.getAllianceCamp(n[s.CommKeys.ALLIANCE_CAMP_ID], l.isDifficultyScalingActivated ? n[s.CommKeys.ALLIANCE_CAMP_ID] : -1);
          if (!d) {
            return false;
          }
          l.parse_AIC(d, n[s.CommKeys.ALLIANCE_RAGE]);
          u.CastleModel.specialEventData.dispatchEvent(new c.CastleSpecialEventEvent(c.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, u.CastleModel.specialEventData.getActiveEventByEventId(a)));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AICCommand;
}(d.CastleCommand);
exports.AICCommand = p;
a.classImplementsInterfaces(p, "IExecCommand");