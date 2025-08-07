Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./198.js");
var r = require("./562.js");
var l = function (e) {
  function AlienLordEquipmentVO() {
    return e.call(this) || this;
  }
  n.__extends(AlienLordEquipmentVO, e);
  AlienLordEquipmentVO.prototype.parseAlienBoniData = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new r.EquipmentBonusVO().parseEquipmentFromValueArray(n[0], n[1]);
          this._boni.push(o);
        }
      }
    }
  };
  AlienLordEquipmentVO.prototype.parseGemBoniData = function (e) {
    this._alienGems = [];
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = a.CastleModel.gemData.getGemVO(n);
          this._alienGems.push(o);
        }
      }
    }
  };
  Object.defineProperty(AlienLordEquipmentVO.prototype, "alienGems", {
    get: function () {
      return this._alienGems;
    },
    enumerable: true,
    configurable: true
  });
  return AlienLordEquipmentVO;
}(s.BasicEquipmentVO);
exports.AlienLordEquipmentVO = l;
o.classImplementsInterfaces(l, "IEquippableVO");