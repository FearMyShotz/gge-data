Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = require("./4.js");
var a = function () {
  function ConstructionItemDisassemblingTombolaVO() {}
  ConstructionItemDisassemblingTombolaVO.prototype.parseXML = function (e = null) {
    this._tombolaID = parseInt(n.CastleXMLUtils.getValueOrDefault("tombolaID", e, "0"));
    this._shares = parseInt(n.CastleXMLUtils.getValueOrDefault("shares", e, "0"));
    this._rewardID = parseInt(n.CastleXMLUtils.getValueOrDefault("rewardID", e, "0"));
  };
  Object.defineProperty(ConstructionItemDisassemblingTombolaVO.prototype, "tombolaID", {
    get: function () {
      return this._tombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemDisassemblingTombolaVO.prototype, "shares", {
    get: function () {
      return this._shares;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemDisassemblingTombolaVO.prototype, "rewards", {
    get: function () {
      this._rewards ||= o.CastleModel.rewardData.getListById(this._rewardID);
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemDisassemblingTombolaVO;
}();
exports.ConstructionItemDisassemblingTombolaVO = a;