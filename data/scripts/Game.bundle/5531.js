Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = function (e) {
  function CastleDesertedTroopsDialogProperties(t) {
    var i = e.call(this) || this;
    i.messageVO = t;
    return i;
  }
  n.__extends(CastleDesertedTroopsDialogProperties, e);
  Object.defineProperty(CastleDesertedTroopsDialogProperties.prototype, "isCamp", {
    get: function () {
      return this.messageVO.areaType == a.WorldConst.AREA_TYPE_TREASURE_CAMP || this.messageVO.areaType == a.WorldConst.AREA_TYPE_FACTION_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDesertedTroopsDialogProperties.prototype, "isHospitalEnabled", {
    get: function () {
      return this.messageVO.areaID != -1 && this.messageVO.kingdomID != -1 && this.messageVO.areaType != a.WorldConst.AREA_TYPE_TREASURE_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDesertedTroopsDialogProperties;
}(o.BasicProperties);
exports.CastleDesertedTroopsDialogProperties = s;