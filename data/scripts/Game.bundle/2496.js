Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  return function AllianceForgeVO(e) {
    this.allianceForgeID = 0;
    this.level = 0;
    this.forgingCostC1 = 0;
    this.allianceForgeID = parseInt(e.allianceForgeID || "");
    this.level = parseInt(e.level || "");
    this.forgingCostC1 = parseInt(e.forgingCostC1 || "");
  };
}();
exports.AllianceForgeVO = n;