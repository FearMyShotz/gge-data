Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./5539.js");
var l = require("./83.js");
var c = require("./99.js");
var u = function (e) {
  function MessageTournamentOverVO() {
    var t = this;
    t._subtypeTournament = 0;
    t._rank = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageTournamentOverVO, e);
  MessageTournamentOverVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("+");
    this._subtypeTournament = s.int(t[0]);
    this._rank = s.int(t[1]);
    this._rewardIDs = [];
    for (var i = 2; i < t.length; i++) {
      if (t[i] != -1) {
        this._rewardIDs.push(t[i]);
      }
    }
  };
  MessageTournamentOverVO.prototype.parseSubject = function () {
    return a.Localize.text("dialog_messageHeader_tournamentOver");
  };
  MessageTournamentOverVO.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  Object.defineProperty(MessageTournamentOverVO.prototype, "dialogInfo", {
    get: function () {
      if (this.subtypeTournament == o.MessageConst.TOURNAMENT_SINGLE) {
        return new l.DialogInfoVO(d.CastleTournamentEventFinishDialog, new r.CastleTournamentEventFinishDialogProperties(this.messageID, this.rank, this.rewardIDs));
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageTournamentOverVO.prototype, "subtypeTournament", {
    get: function () {
      return this._subtypeTournament;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageTournamentOverVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageTournamentOverVO.prototype, "rewardIDs", {
    get: function () {
      return this._rewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  return MessageTournamentOverVO;
}(c.AMessageVO);
exports.MessageTournamentOverVO = u;
var d = require("./5540.js");