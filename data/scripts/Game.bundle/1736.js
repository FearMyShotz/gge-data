Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SOneTimeOfferCancelled(t) {
    var i = this;
    i.OID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).OID = t;
    return i;
  }
  n.__extends(C2SOneTimeOfferCancelled, e);
  C2SOneTimeOfferCancelled.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ONE_TIME_OFFER_CANCELLED;
  };
  return C2SOneTimeOfferCancelled;
}(o.BasicCommandVO);
exports.C2SOneTimeOfferCancelled = s;