Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./54.js");
var r = require("./806.js");
var l = function (e) {
  function CastleTaxData() {
    var t = this;
    t._isWaitingForServerResponse = false;
    t._lastTaxState = -1;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._taxInfoVO = new r.TaxInfoVO();
    t.onTaxChanged = new o.NumberSignal();
    return t;
  }
  n.__extends(CastleTaxData, e);
  CastleTaxData.prototype.executeUpdate = function (e) {
    if (this._taxInfoVO) {
      var t = this._taxInfoVO.taxState;
      var i = this._lastTaxState != t;
      this._lastTaxState = t;
      if (i) {
        this.onTaxChanged.signal(t);
      }
    }
  };
  Object.defineProperty(CastleTaxData.prototype, "taxInfoVO", {
    get: function () {
      return this._taxInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTaxData.prototype.parse_TXI = function (e) {
    if (e) {
      this._taxInfoVO = new r.TaxInfoVO();
      this._taxInfoVO.fillFromParamObject(e.TX);
    }
  };
  Object.defineProperty(CastleTaxData.prototype, "isWaitingForServerResponse", {
    get: function () {
      return this._isWaitingForServerResponse;
    },
    set: function (e) {
      this._isWaitingForServerResponse = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTaxData;
}(s.CastleBasicData);
exports.CastleTaxData = l;
a.classImplementsInterfaces(l, "IUpdatable");