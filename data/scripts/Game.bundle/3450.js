Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = function (e) {
  function CastleBountyhunterWinDialogProperties(t) {
    var i = this;
    i.bountyPrizeC1 = 0;
    i.bountyPrizeC2 = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).bountyPrizeC1 = a.int(t.BC1);
    i.bountyPrizeC2 = a.int(t.BC2);
    return i;
  }
  n.__extends(CastleBountyhunterWinDialogProperties, e);
  return CastleBountyhunterWinDialogProperties;
}(o.BasicProperties);
exports.CastleBountyhunterWinDialogProperties = s;