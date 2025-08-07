Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetDonationResourcesVO(t, i) {
    var n = this;
    n.AID = 0;
    n.KID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).AID = t;
    n.KID = i;
    return n;
  }
  n.__extends(C2SGetDonationResourcesVO, e);
  C2SGetDonationResourcesVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_DONATION_RESOURCES;
  };
  return C2SGetDonationResourcesVO;
}(o.BasicCommandVO);
exports.C2SGetDonationResourcesVO = s;