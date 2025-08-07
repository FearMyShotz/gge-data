Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleLaboratoryEffectHelper() {}
  CastleLaboratoryEffectHelper.laboratoryResourceBonus = function (e) {
    if (a.CastleModel.userData.isInAlliance) {
      return o.int(a.CastleModel.allianceData.myAllianceVO.landmarksList.getLaboratoryKingdomResourceBonus(e));
    } else {
      return o.int(a.CastleModel.userData.laboratoryList.getLandmarkBonus(e));
    }
  };
  return CastleLaboratoryEffectHelper;
}();
exports.CastleLaboratoryEffectHelper = n;
var o = require("./6.js");
var a = require("./4.js");