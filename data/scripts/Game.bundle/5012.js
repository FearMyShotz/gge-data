Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./7.js");
var u = require("./1636.js");
var d = require("./4.js");
var p = require("./10.js");
var h = function (e) {
  function CQSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CQSCommand, e);
  Object.defineProperty(CQSCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_CAMPAIGN_QUEST_STATUS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CQSCommand.prototype.exec = function (e) {
    var t = l.int(e[0]);
    var i = e[1];
    switch (t) {
      case s.ERROR.ALL_OK:
        var n = JSON.parse(i[1]);
        var a = o.castAs(d.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT), "TimeLimitedCampaignEventEventVO");
        if (!a) {
          return;
        }
        a.parseCQS(n);
        this.controller.dispatchEvent(new u.TimeLimitedCampaignUpdateEvent(u.TimeLimitedCampaignUpdateEvent.CAMPAIGN_UPDATED));
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return CQSCommand;
}(p.CastleCommand);
exports.CQSCommand = h;
a.classImplementsInterfaces(h, "IExecCommand");