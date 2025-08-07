Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./561.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function BLSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BLSCommand, e);
  Object.defineProperty(BLSCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_BATTLE_LOG_SHORT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BLSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = s.int(i.LID);
        c.CastleModel.otherPlayerData.parseOwnerInfoArray(i.PI);
        if (i.IM == 1) {
          if (!c.CastleModel.messageData.hasAlreadyLogId(n)) {
            c.CastleModel.messageData.parseBattleLogShort(i);
            c.CastleModel.messageData.parseBattleLogMiddle(i.blm);
            c.CastleModel.messageData.parseBattleLogDetail(i.bld);
          }
          var o = c.CastleModel.messageData.getBattleLogById(n);
          if (o) {
            this.controller.dispatchEvent(new l.CastleLogDataEvent(l.CastleLogDataEvent.NEW_LOG_ANIMATION, o));
          }
        } else {
          c.CastleModel.messageData.parseBattleLogShort(i);
          this.controller.dispatchEvent(new l.CastleLogDataEvent(l.CastleLogDataEvent.NEW_LOG, c.CastleModel.messageData.getBattleLogById(i.LID)));
        }
        break;
      case a.ERROR.NO_SUCH_MESSAGE:
      case a.ERROR.MESSAGEDATA_TOO_OLD:
        this.controller.dispatchEvent(new l.CastleLogDataEvent(l.CastleLogDataEvent.LOG_DOES_NOT_EXISTS));
        this.showErrorDialog(e, t);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BLSCommand;
}(u.CastleCommand);
exports.BLSCommand = d;
o.classImplementsInterfaces(d, "IExecCommand");