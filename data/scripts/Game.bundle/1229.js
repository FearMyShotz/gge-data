Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function SearchListAllianceItemVO() {
    this.allianceID = 0;
    this.distance = 0;
    this.memberCount = 0;
    this.allianceHonor = 0;
    this.allianceLevel = 0;
    this.allianceLanguage = "";
  }
  SearchListAllianceItemVO.prototype.parseItem = function (e) {
    this.allianceID = o.int(e.AID);
    this.allianceName = e.N;
    this.distance = e.D;
    this.memberCount = o.int(e.M);
    this.allianceHonor = o.int(e.AH);
    this.allianceLevel = o.int(e.AL);
    this.allianceLanguage = e.ALL;
  };
  return SearchListAllianceItemVO;
}();
exports.SearchListAllianceItemVO = n;
var o = require("./6.js");