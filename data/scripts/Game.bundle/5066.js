Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./37.js");
var c = require("./147.js");
var u = require("./10.js");
var d = function (e) {
  function TIECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TIECommand, e);
  Object.defineProperty(TIECommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_ALLIANCE_TOWER_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TIECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1])[a.CommKeys.TOWERS];
        var n = [];
        if (i != null) {
          for (var o = 0, r = i; o < r.length; o++) {
            var u = r[o];
            if (u !== undefined) {
              n.push(c.WorldmapObjectFactory.parseWorldMapArea(u));
            }
          }
        }
        this.controller.dispatchEvent(new l.CastleServerMessageArrivedEvent(l.CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO, n));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TIECommand;
}(u.CastleCommand);
exports.TIECommand = d;
o.classImplementsInterfaces(d, "IExecCommand");