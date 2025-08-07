Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./466.js");
var l = function (e) {
  function LongTermPointEventHighScoreDialogProperties(t = -1, i = -1, n = -1) {
    return e.call(this, a.HighscoreConst.LONG_TERM_POINT_EVENT, t, i, n) || this;
  }
  n.__extends(LongTermPointEventHighScoreDialogProperties, e);
  Object.defineProperty(LongTermPointEventHighScoreDialogProperties, "eventVO", {
    get: function () {
      return s.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventHighScoreDialogProperties.prototype, "numberOfLeagues", {
    get: function () {
      return LongTermPointEventHighScoreDialogProperties.eventVO.numberOfLeagues;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGenericHighscoreDialogProperties.prototype, "numberOfLeagues").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return LongTermPointEventHighScoreDialogProperties;
}(r.CastleGenericHighscoreDialogProperties);
exports.LongTermPointEventHighScoreDialogProperties = l;