Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = function (e) {
  function CastleWorldCupFinisherProperties(t) {
    var i = this;
    i.date = 0;
    i.teamA = 0;
    i.teamB = 0;
    i.winner = 0;
    i.bonusC2 = 0;
    i.paymentC2 = 0;
    i.vote = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).date = a.int(t[0]);
    i.teamA = a.int(t[1]);
    i.teamB = a.int(t[2]);
    i.winner = a.int(t[3]);
    i.bonusC2 = a.int(t[4]);
    i.paymentC2 = a.int(t[5]);
    i.vote = a.int(t[6]);
    return i;
  }
  n.__extends(CastleWorldCupFinisherProperties, e);
  return CastleWorldCupFinisherProperties;
}(o.BasicProperties);
exports.CastleWorldCupFinisherProperties = s;