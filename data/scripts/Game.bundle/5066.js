Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./37.js");
var c = require("./4.js");
var u = require("./147.js");
var d = require("./10.js");
var p = function (e) {
  function TPICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TPICommand, e);
  Object.defineProperty(TPICommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_ALLIANCE_TOWER_CASTLES_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TPICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i[a.CommKeys.OWNER_INFO_2]) {
          for (var n = 0, o = i[a.CommKeys.OWNER_INFO_2]; n < o.length; n++) {
            var r = o[n];
            if (r !== undefined) {
              c.CastleModel.otherPlayerData.parseOwnerInfo(r);
            }
          }
        }
        var d = i[a.CommKeys.CASTLES];
        var p = [];
        if (d != null) {
          for (var h = 0, g = d; h < g.length; h++) {
            var C = g[h];
            if (C !== undefined) {
              p.push(u.WorldmapObjectFactory.parseWorldMapArea(C));
            }
          }
        }
        this.controller.dispatchEvent(new l.CastleServerMessageArrivedEvent(l.CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, p));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TPICommand;
}(d.CastleCommand);
exports.TPICommand = p;
o.classImplementsInterfaces(p, "IExecCommand");