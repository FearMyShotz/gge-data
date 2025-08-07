Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetDonationPointTypeVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetDonationPointTypeVO, e);
  C2SGetDonationPointTypeVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_DONATION_TYPE_INFO;
  };
  return C2SGetDonationPointTypeVO;
}(o.BasicCommandVO);
exports.C2SGetDonationPointTypeVO = s;