Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleHorsesVO() {
    this._horses = [];
  }
  CastleHorsesVO.prototype.parseParamObject = function (e) {
    this._horses = [];
    var t = e;
    if (t && !(t.length <= 0)) {
      var i;
      var n;
      for (var l = 0, c = t; l < c.length; l++) {
        var u = c[l];
        if (u !== undefined && (i = r.CastleModel.wodData.createVObyWOD(u, a.CastleWodData.TYPE_HORSE)) && s.instanceOfClass(i, "HorseTravelboosterVO")) {
          if ((n = i).isInstantSpyHorse) {
            this._horses.push(n.createNonPegasusDuplicate());
            this._horses.push(n);
          } else {
            this._horses.push(n);
          }
        }
      }
      this._horses.sort(o.ClientConstSort.sortVisualVOByWodId);
    }
  };
  Object.defineProperty(CastleHorsesVO.prototype, "horses", {
    get: function () {
      return this._horses;
    },
    enumerable: true,
    configurable: true
  });
  CastleHorsesVO.prototype.getHorseByWodID = function (e) {
    if (this._horses != null) {
      for (var t = 0, i = this._horses; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.wodId == e) {
          return n;
        }
      }
    }
    return null;
  };
  return CastleHorsesVO;
}();
exports.CastleHorsesVO = n;
var o = require("./75.js");
var a = require("./56.js");
var s = require("./1.js");
var r = require("./4.js");