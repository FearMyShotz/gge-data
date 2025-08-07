Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./7.js");
var d = require("./4.js");
var p = require("./10.js");
var h = function (e) {
  function QFICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(QFICommand, e);
  Object.defineProperty(QFICommand.prototype, "cmdId", {
    get: function () {
      return u.ClientConstSF.S2C_QUEST_FINISHED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  QFICommand.prototype.exec = function (e) {
    var t = c.int(e[0]);
    var i = e[1];
    switch (t) {
      case r.ERROR.ALL_OK:
        var n = JSON.parse(i[1]);
        var s = c.int(n.QID);
        var u = d.CastleModel.questData.getQuestPrototype(s);
        if (!u) {
          return;
        }
        if (u.isCampaignQuest) {
          var p = a.castAs(d.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT), "TimeLimitedCampaignEventEventVO");
          if (p && p.getQuestByID(u.questID)) {
            u = p.getQuestByID(u.questID);
          }
        }
        if (!u.isStarterQuest && !u.hidden) {
          g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleQuestCompletedDialog, new _.CastleQuestCompletedDialogProperties(u, n), true, o.BasicDialogHandler.PRIORITY_HIGH);
          if (this.layoutManager.isIngameState) {
            g.CastleDialogHandler.getInstance().blockDialogs = false;
          }
        }
        d.CastleModel.questData.finishQuest(n.QID);
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return QFICommand;
}(p.CastleCommand);
exports.QFICommand = h;
var g = require("./9.js");
var C = require("./1067.js");
var _ = require("./1688.js");
s.classImplementsInterfaces(h, "IExecCommand");