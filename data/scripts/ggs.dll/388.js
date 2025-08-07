Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./15.js");
var s = require("./17.js");
var r = require("./177.js");
var o = require("./4.js");
var l = function (e) {
  function BasicConnectionTrackingCommand() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.alreadyTrackedDelayList = [];
    return t;
  }
  i.__extends(BasicConnectionTrackingCommand, e);
  BasicConnectionTrackingCommand.prototype.execute = function (e = null) {
    if (this.commandIsAllowed) {
      var t = e;
      var n = s.TrackingCache.getInstance().getEvent(a.TrackingEventIds.CONNECTION);
      n.playerID = o.BasicModel.userData.playerID;
      n.cv = this.env.campainVars;
      n.delay = t.delay;
      n.roundTrip = t.roundTrip;
      n.bluebox = t.bluebox;
      n.accountId = this.env.accountId;
      n.storeId = this.env.storeId;
      var i = n.delay / 60000;
      if (!this.wasExecutedForDelay(i)) {
        this.alreadyTrackedDelayList[i] = true;
        s.TrackingCache.getInstance().sendEvent(a.TrackingEventIds.CONNECTION);
      }
    }
  };
  BasicConnectionTrackingCommand.prototype.wasExecutedForDelay = function (e) {
    return this.alreadyTrackedDelayList[e];
  };
  return BasicConnectionTrackingCommand;
}(r.BasicFirstSessionTrackingCommand);
exports.BasicConnectionTrackingCommand = l;