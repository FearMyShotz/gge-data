Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function FortuneTellerClassVO() {
    this.c2Cost = 0;
    this.id = 0;
    this.topRewardID = 0;
  }
  FortuneTellerClassVO.prototype.parseXML = function (e) {
    this.id = parseInt(n.CastleXMLUtils.getValueOrDefault("fortuneTellerClassID", e, "0"));
    this.rewardIDs = n.CastleXMLUtils.createIntListFromAttribute("rewardIDs", e, ",");
    this.c2Cost = parseInt(n.CastleXMLUtils.getValueOrDefault("c2Cost", e, "0"));
    this.topRewardID = parseInt(n.CastleXMLUtils.getValueOrDefault("toprewardID", e, "0"));
  };
  return FortuneTellerClassVO;
}();
exports.FortuneTellerClassVO = o;