Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = function (e) {
  function CastlePrimeSaleScrollItemVO(t, i) {
    var n = this;
    n._packageID = 0;
    n._discount = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._packageID = t;
    n._discount = i;
    return n;
  }
  n.__extends(CastlePrimeSaleScrollItemVO, e);
  Object.defineProperty(CastlePrimeSaleScrollItemVO.prototype, "packageVO", {
    get: function () {
      return a.CastleModel.eventPackageData.getEventPackageByID(this._packageID);
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrimeSaleScrollItemVO;
}(o.ScrollItemVO);
exports.CastlePrimeSaleScrollItemVO = s;