Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function FlankInfoVO(e, t = null, i = false) {
    this._soldierAmount = 0;
    this._soldierAmountLost = 0;
    this._toolsAmountUsed = 0;
    this.isPreOrPostWave = false;
    if (t) {
      this.initAsSummary(t, i);
    } else {
      this.initByParams(e);
    }
  }
  FlankInfoVO.prototype.initAsSummary = function (e, t) {
    var i;
    this._soldierAmount = 0;
    this._soldierAmountLost = 0;
    this._toolsAmountUsed = 0;
    var n = false;
    if (e != null) {
      for (var o = 0, a = e; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          if (s.isPreOrPostWave) {
            this._soldierAmount = s._soldierAmount;
            n = true;
          } else if (!n) {
            this._soldierAmount += s.soldierAmount;
            if (t && i) {
              this._soldierAmount -= i.soldierAmountSurvived;
            }
            i = s;
          }
          this._soldierAmountLost += s.soldierAmountLost;
          this._toolsAmountUsed += s.toolsAmountUsed;
        }
      }
    }
  };
  FlankInfoVO.prototype.initByParams = function (e) {
    this._soldierAmount = o.int(e[FlankInfoVO.SOLDIERS_AMOUNT]);
    this._toolsAmountUsed = o.int(e[FlankInfoVO.TOOLS_USED]);
    this._soldierAmountLost = o.int(e[FlankInfoVO.SOLDIERS_LOST]);
  };
  Object.defineProperty(FlankInfoVO.prototype, "soldierAmount", {
    get: function () {
      return this._soldierAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlankInfoVO.prototype, "soldierAmountLost", {
    get: function () {
      return this._soldierAmountLost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlankInfoVO.prototype, "toolsAmountUsed", {
    get: function () {
      return this._toolsAmountUsed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlankInfoVO.prototype, "soldierAmountSurvived", {
    get: function () {
      return this._soldierAmount + this._soldierAmountLost;
    },
    enumerable: true,
    configurable: true
  });
  FlankInfoVO.__initialize_static_members = function () {
    FlankInfoVO.SOLDIERS_AMOUNT = 0;
    FlankInfoVO.TOOLS_USED = 1;
    FlankInfoVO.SOLDIERS_LOST = 2;
  };
  return FlankInfoVO;
}();
exports.FlankInfoVO = n;
var o = require("./6.js");
n.__initialize_static_members();