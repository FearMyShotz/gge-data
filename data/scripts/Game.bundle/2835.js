Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function MineVO() {
    this.mineTypeID = 0;
    this.waitingTime = 0;
    this.amountPerCollect = NaN;
    this.totalAmount = NaN;
    this.totalLootableAmount = 0;
    this.amountInfluencePerMinute = 0;
    this.maxInfluencePoints = 0;
    this.reductionDisplay = 0;
  }
  MineVO.prototype.parseXML = function (e) {
    this.mineTypeID = parseInt(a.CastleXMLUtils.getValueOrDefault("mineTypeID", e, "0"));
    this.waitingTime = parseInt(a.CastleXMLUtils.getValueOrDefault("waitingTime", e, "0"));
    var t = parseInt(a.CastleXMLUtils.getValueOrDefault("amountPerCollectC2", e, "0"));
    var i = parseInt(a.CastleXMLUtils.getValueOrDefault("amountPerCollectC1", e, "0"));
    this.amountPerCollect = i || t;
    this.resType = t > 0 ? o.CollectableEnum.C2 : o.CollectableEnum.C1;
    this.totalLootableAmount = parseInt(a.CastleXMLUtils.getValueOrDefault("amountLootable", e, "0"));
    this.totalAmount = this.amountPerCollect * this.totalLootableAmount;
    this.amountInfluencePerMinute = parseInt(a.CastleXMLUtils.getValueOrDefault("amountInfluencePerMinute", e, "0"));
    this.maxInfluencePoints = parseInt(a.CastleXMLUtils.getValueOrDefault("maxInfluencePoints", e, "0"));
    this.reductionDisplay = parseInt(a.CastleXMLUtils.getValueOrDefault("reductionDisplay", e, "0"));
  };
  return MineVO;
}();
exports.MineVO = n;
var o = require("./12.js");
var a = require("./22.js");