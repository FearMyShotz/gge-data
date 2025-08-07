Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./11.js");
var a = function () {
  function IdentitiyManagementLicenseTableRegistrationVO() {
    this.COMPANY_NAME = i.BasicConstants.COMPANY_NAME;
  }
  IdentitiyManagementLicenseTableRegistrationVO.prototype.toString = function () {
    return "gameTitle: " + this.gameTitle + ", companyName: " + this.COMPANY_NAME + ", ageRating.name: " + this.ageRating.name + ", gameRatingBoardConcessionDate: " + this.gameRatingBoardConcessionDate + ", gameRatingBoardConcessionId: " + this.gameRatingBoardConcessionId + ", productionDate: " + this.productionDate;
  };
  return IdentitiyManagementLicenseTableRegistrationVO;
}();
exports.IdentitiyManagementLicenseTableRegistrationVO = a;