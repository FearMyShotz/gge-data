Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./258.js");
var s = function (e) {
  function C2SOfferStatusCheck(t) {
    var i = this;
    i.OID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).OID = t;
    return i;
  }
  n.__extends(C2SOfferStatusCheck, e);
  C2SOfferStatusCheck.prototype.getCmdId = function () {
    return a.CoreEventsConstants.C2S_OFFER_STATUS_CHECK_EVENT;
  };
  return C2SOfferStatusCheck;
}(o.BasicCommandVO);
exports.C2SOfferStatusCheck = s;