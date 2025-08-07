Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function QSTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(QSTCommand, e);
  Object.defineProperty(QSTCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_QUEST_START;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  QSTCommand.prototype.exec = function (e) {
    var t = r.int(e[0]);
    var i = e[1];
    switch (t) {
      case s.ERROR.ALL_OK:
        for (var n = 0, a = JSON.parse(i[1]).QIDS; n < a.length; n++) {
          var l = a[n];
          if (l) {
            o.ClientFunnelTrackingController.getInstance().trackState("quest_QuestID_" + l);
            c.CastleModel.questData.startQuest(l);
          }
        }
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return QSTCommand;
}(u.CastleCommand);
exports.QSTCommand = d;
a.classImplementsInterfaces(d, "IExecCommand");