Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./26.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function RPRCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RPRCommand, e);
  Object.defineProperty(RPRCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_RAGE_POINTS_RECEIVED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RPRCommand.prototype.executeCommand = function (e, t) {
    var i;
    if (t && t.length > 0) {
      i = JSON.parse(t[1]);
    }
    switch (e) {
      case s.ERROR.ALL_OK:
        var n = o.castAs(c.CastleModel.specialEventData.getActiveEventByEventId(i.EID), "IAllianceCampUpdateable");
        if (n) {
          n.parse_RPR(i);
          c.CastleModel.specialEventData.dispatchEvent(new l.CastleSpecialEventEvent(l.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, c.CastleModel.specialEventData.getActiveEventByEventId(i.EID)));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RPRCommand;
}(u.CastleCommand);
exports.RPRCommand = d;
a.classImplementsInterfaces(d, "IExecCommand");