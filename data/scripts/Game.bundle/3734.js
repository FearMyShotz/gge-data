Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3735.js");
var o = function () {
  function SamuraiInvasionDaimyoInfoVO() {
    this._isEnabled = false;
    this._castleContracts = [];
    this._townshipContracts = [];
  }
  SamuraiInvasionDaimyoInfoVO.prototype.parseServerObject = function (e) {
    this._isEnabled = e.E == 1;
    var t = e.C;
    if (t) {
      for (var i = 0, o = t.DCC; i < o.length; i++) {
        var a = o[i];
        if (a !== undefined) {
          this._castleContracts.push(new n.SamuraiInvasionContractVO(a));
        }
      }
      for (var s = 0, r = t.DTC; s < r.length; s++) {
        a = r[s];
        this._townshipContracts.push(new n.SamuraiInvasionContractVO(a));
      }
    }
  };
  Object.defineProperty(SamuraiInvasionDaimyoInfoVO.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionDaimyoInfoVO.prototype, "castleContracts", {
    get: function () {
      return this._castleContracts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiInvasionDaimyoInfoVO.prototype, "townshipContracts", {
    get: function () {
      return this._townshipContracts;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiInvasionDaimyoInfoVO;
}();
exports.SamuraiInvasionDaimyoInfoVO = o;