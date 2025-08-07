Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SIsoStoreObjectVO(t) {
    var i = this;
    i.OID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).OID = t;
    return i;
  }
  n.__extends(C2SIsoStoreObjectVO, e);
  C2SIsoStoreObjectVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_STORE_OBJECT;
  };
  return C2SIsoStoreObjectVO;
}(o.BasicCommandVO);
exports.C2SIsoStoreObjectVO = s;