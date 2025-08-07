Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./4.js");
var o = function () {
  function HospitalFlagsVO() {
    this.kingdomID = 0;
    this.areaID = 0;
    this.hasRubyFilter = 0;
  }
  HospitalFlagsVO.prototype.parse_HFL = function (e) {
    this.kingdomID = e.KID;
    this.areaID = e.AID;
    this.hasRubyFilter = e.HRF;
  };
  HospitalFlagsVO.prototype.isCurrentCastle = function () {
    return n.CastleModel.areaData.activeArea && n.CastleModel.areaData.activeAreaInfo.kingdomID == this.kingdomID && n.CastleModel.areaData.activeAreaInfo.objectId == this.areaID;
  };
  return HospitalFlagsVO;
}();
exports.HospitalFlagsVO = o;