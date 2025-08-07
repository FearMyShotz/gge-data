Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastlePartpaypriceData(e) {
    this.parseXml(e);
  }
  CastlePartpaypriceData.prototype.parseXml = function (e) {
    this._partpaypriceVOs = new Map();
    var t;
    var i = e.partpayprices;
    if (i != null) {
      for (var n = 0, a = i; n < a.length; n++) {
        var s = a[n];
        if (s !== undefined) {
          (t = new o.PartpaypriceVO()).fillFromParamXml(s);
          this._partpaypriceVOs.set(t.id, t);
        }
      }
    }
  };
  CastlePartpaypriceData.prototype.getVOById = function (e) {
    return this._partpaypriceVOs.get(e);
  };
  return CastlePartpaypriceData;
}();
exports.CastlePartpaypriceData = n;
var o = require("./5642.js");