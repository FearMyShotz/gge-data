Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SIsoResourceCartCollectVO(t) {
    var i = this;
    i.RT = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).RT = a.int(l.CastleResourceCartsData.getIndexFromEnumItem(t));
    return i;
  }
  n.__extends(C2SIsoResourceCartCollectVO, e);
  C2SIsoResourceCartCollectVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_RESOURCE_CART_COLLECT;
  };
  return C2SIsoResourceCartCollectVO;
}(o.BasicCommandVO);
exports.C2SIsoResourceCartCollectVO = r;
var l = require("./776.js");