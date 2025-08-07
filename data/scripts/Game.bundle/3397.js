Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./4.js");
var p = require("./3398.js");
var h = function (e) {
  function OpenEventAnnouncementDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenEventAnnouncementDialogCommand, e);
  OpenEventAnnouncementDialogCommand.prototype.execute = function (e = null) {
    if (!e || !l.instanceOfClass(e, "MessageEventAnnouncementVO")) {
      throw new Error("OpenEventAnnouncementDialogCommand expects a MessageEventAnnouncementVO as its commandVars");
    }
    this.messageEventAnnouncementVO = e;
    var t = this.messageEventAnnouncementVO.eventId;
    var i = this.messageEventAnnouncementVO.durationTS;
    d.CastleModel.eventAnnouncementData.isClaimed(i);
    if (d.CastleModel.eventAnnouncementData.isAvailable(i)) {
      var n = u.int(d.CastleModel.eventAnnouncementData.getLeagueTypeId(t));
      if (n != -1) {
        var s = d.CastleModel.eventAnnouncementData.getEventAnnouncementVO(t, n);
        var r = g.CollectableManager.parser.createListFromRewardIdsString(s.teaserRewardIDs);
        var h = d.CastleModel.rewardData.getListById(s.messageRewardID);
        var f = new p.EventAnnouncementDialogProperties(t, i, r, h);
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleEventTeaserDialog, f);
      }
    } else {
      C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text(a.GenericTextIds.ALERT_INFORMATION), c.Localize.text("dialog_eventAnnouncements_expired")));
    }
  };
  return OpenEventAnnouncementDialogCommand;
}(s.SimpleCommand);
exports.OpenEventAnnouncementDialogCommand = h;
var g = require("./50.js");
var C = require("./9.js");
var _ = require("./38.js");
var m = require("./3399.js");
r.classImplementsInterfaces(h, "ISimpleCommand");