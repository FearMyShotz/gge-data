Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AllianceHighscoreInfoVO() {
    this.allianceId = 0;
    this.memberAmount = 0;
    this.allianceCurrentFame = 0;
  }
  AllianceHighscoreInfoVO.prototype.fillFromParamObject = function (e) {
    if (e && Array.isArray(e)) {
      this.allianceId = o.int(e.shift());
      this.allianceName = e.shift();
      this.memberAmount = o.int(e.shift());
      this.allianceCurrentFame = o.int(e.shift());
    }
  };
  return AllianceHighscoreInfoVO;
}();
exports.AllianceHighscoreInfoVO = n;
var o = require("./6.js");