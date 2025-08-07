Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PlayerGiftVO() {
    this._packageID = 0;
    this._amount = 0;
  }
  PlayerGiftVO.prototype.parseFromArray = function (e) {
    this._packageID = o.int(e[0]);
    this._amount = o.int(e[1]);
    this._eventPackageVO = a.CastleModel.eventPackageData.getEventPackageByID(this._packageID);
  };
  Object.defineProperty(PlayerGiftVO.prototype, "eventPackageVO", {
    get: function () {
      return this._eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftVO.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftVO.prototype, "packageID", {
    get: function () {
      return this._packageID;
    },
    enumerable: true,
    configurable: true
  });
  return PlayerGiftVO;
}();
exports.PlayerGiftVO = n;
var o = require("./6.js");
var a = require("./4.js");