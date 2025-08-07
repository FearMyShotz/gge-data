Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function GFPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GFPCommand, e);
  Object.defineProperty(GFPCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.C2S_GET_FACTION_POINTS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GFPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = o.castAs(c.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
        if ((i.RFP || i.BFP) && n) {
          n.parseFactionPointsFromParamObject(i);
        }
        return true;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GFPCommand;
}(u.CastleCommand);
exports.GFPCommand = d;
a.classImplementsInterfaces(d, "IExecCommand");