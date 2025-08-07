Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2622.js");
var o = require("./4.js");
var a = function () {
  function ConstructionItemExpiredAreaVO() {
    this._expiredCIs = [];
  }
  ConstructionItemExpiredAreaVO.prototype.parseParams = function (e) {
    this._areaID = e.AID;
    this._kingdomID = e.KID;
    this._castleWMO = o.CastleModel.userData.getOwnCastle(this._areaID, this._kingdomID);
    this._expiredCIs = [];
    for (var t = 0; t < e.CIL.length; t++) {
      var i = new n.ConstructionItemExpiredVO();
      i.parseParams(e.CIL[t]);
      this._expiredCIs.push(i);
    }
  };
  ConstructionItemExpiredAreaVO.prototype.hasBuildingExpired = function (e) {
    for (var t = 0; t < this._expiredCIs.length; t++) {
      if (this._expiredCIs[t].objectID == e) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(ConstructionItemExpiredAreaVO.prototype, "castleWMO", {
    get: function () {
      return this._castleWMO;
    },
    set: function (e) {
      this._castleWMO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemExpiredAreaVO.prototype, "expiredCIs", {
    get: function () {
      return this._expiredCIs;
    },
    set: function (e) {
      this._expiredCIs = e;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemExpiredAreaVO;
}();
exports.ConstructionItemExpiredAreaVO = a;