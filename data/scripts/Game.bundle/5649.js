Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function RewardVO() {
    this._id = -1;
    this._grantType = -1;
  }
  RewardVO.prototype.fillFromParamXml = function (e) {
    this._id = parseInt(e.rewardID || "");
    this._grantType = parseInt(e.grantType || a.RewardConst.PLAYER + "");
    this._rewardList = o.CollectableManager.parser.x2cRewards.createList(e);
  };
  Object.defineProperty(RewardVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardVO.prototype, "grantType", {
    get: function () {
      return this._grantType;
    },
    enumerable: true,
    configurable: true
  });
  return RewardVO;
}();
exports.RewardVO = n;
var o = require("./50.js");
var a = require("./5.js");