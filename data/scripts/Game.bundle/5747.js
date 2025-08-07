Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function OfficersSchoolUnitPairVO() {
    this.id = 0;
    this.wodIDs = [];
    this.unlockBuildingWodID = 0;
  }
  OfficersSchoolUnitPairVO.prototype.parseXml = function (e) {
    this.id = n.int(o.CastleXMLUtils.getIntAttribute("id", e, -1));
    for (var t = 0, i = o.CastleXMLUtils.getStringAttribute("wodID", e).split("+"); t < i.length; t++) {
      var a = i[t];
      this.wodIDs.push(parseInt(a));
    }
    this.unlockBuildingWodID = n.int(o.CastleXMLUtils.getIntAttribute("unlockBuildingWodID", e, -1));
  };
  return OfficersSchoolUnitPairVO;
}();
exports.OfficersSchoolUnitPairVO = a;