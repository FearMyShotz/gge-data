Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./4.js");
var o = function () {
  function ConstructionItemExpiredVO() {}
  ConstructionItemExpiredVO.prototype.parseParams = function (e) {
    this._constructionItemVO = n.CastleModel.constructionItemData.getConstructionItemVO(e.CID).clone();
    this._buildingVO = n.CastleModel.wodData.getBuildingVOById(e.B);
    this._objectID = e.OID;
    this._constructionItemVO.setRemainingTime(-1);
  };
  Object.defineProperty(ConstructionItemExpiredVO.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemExpiredVO.prototype, "constructionItemVO", {
    get: function () {
      return this._constructionItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemExpiredVO.prototype, "objectID", {
    get: function () {
      return this._objectID;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemExpiredVO;
}();
exports.ConstructionItemExpiredVO = o;