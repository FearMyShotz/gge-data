Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DecoStorageTempDecoVO() {
    this._areaId = -1;
    this._kingdomId = -1;
    this._buildings = [];
  }
  DecoStorageTempDecoVO.prototype.parseServerObject = function (e) {
    this._areaId = r.int(e.AID);
    this._kingdomId = r.int(e.KID);
    this._buildings = [];
    for (var t = 0, i = e.A; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var c = r.int(n.WID);
        var u = s.castAs(l.CastleModel.wodData.createVObyWOD(c, o.CastleWodData.TYPE_BUILDING), "ADecoBuildingVO");
        if (u) {
          u.parseServerInfoShort(n);
          u.updateData();
          this._buildings.push(u);
        } else {
          a.error("DecoStorageTempDecoVO.parseServerObject(): Deco with wodId '" + c + "' does not exist in xml.");
        }
      }
    }
  };
  Object.defineProperty(DecoStorageTempDecoVO.prototype, "areaId", {
    get: function () {
      return this._areaId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageTempDecoVO.prototype, "kingdomId", {
    get: function () {
      return this._kingdomId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageTempDecoVO.prototype, "buildings", {
    get: function () {
      return this._buildings;
    },
    enumerable: true,
    configurable: true
  });
  return DecoStorageTempDecoVO;
}();
exports.DecoStorageTempDecoVO = n;
var o = require("./56.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./4.js");