Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function LogUnitVO(e, t = null, i = false) {
    this._wodID = 0;
    this._count = 0;
    this._lost = 0;
    this.isPreOrPostWave = false;
    if (t) {
      this.initAsSummary(t, i);
    } else {
      this.initByParams(e);
    }
  }
  LogUnitVO.prototype.initByParams = function (e) {
    this._wodID = o.int(e[LogUnitVO.WOD_ID]);
    this._count = o.int(e[LogUnitVO.AMOUNT]);
    this._lost = o.int(e[LogUnitVO.AMOUNT_LOST]);
  };
  LogUnitVO.prototype.initAsSummary = function (e, t) {
    this._wodID = o.int(e[0].wodID);
    this._count = 0;
    this._lost = 0;
    var i;
    var n = false;
    if (e != null) {
      for (var a = 0, s = e; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          if (r.isPreOrPostWave) {
            this._count = r.count;
            n = true;
          } else if (!n) {
            this._count += r.count;
            if (t && i) {
              this._count -= i.count + i.lost;
            }
            i = r;
          }
          this._lost += r.lost;
        }
      }
    }
  };
  Object.defineProperty(LogUnitVO.prototype, "wodID", {
    get: function () {
      return this._wodID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LogUnitVO.prototype, "count", {
    get: function () {
      return this._count;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LogUnitVO.prototype, "lost", {
    get: function () {
      return this._lost;
    },
    enumerable: true,
    configurable: true
  });
  LogUnitVO.__initialize_static_members = function () {
    LogUnitVO.WOD_ID = 0;
    LogUnitVO.AMOUNT = 1;
    LogUnitVO.AMOUNT_LOST = 2;
  };
  return LogUnitVO;
}();
exports.LogUnitVO = n;
var o = require("./6.js");
n.__initialize_static_members();