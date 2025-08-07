Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function WelcomeBackRewardVO() {
    this._welcomeBackRewardID = -1;
    this._rewardIDs = [];
  }
  WelcomeBackRewardVO.prototype.fillFromParamXml = function (e) {
    this._welcomeBackRewardID = parseInt(e.welcomeBackRewardID || "");
    this._rewardIDs = o.CastleXMLUtils.createIntListFromAttribute("rewardIDs", e);
  };
  Object.defineProperty(WelcomeBackRewardVO.prototype, "rewardList", {
    get: function () {
      return a.CastleModel.rewardData.getListByIdArray(this._rewardIDs);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WelcomeBackRewardVO.prototype, "id", {
    get: function () {
      return this._welcomeBackRewardID;
    },
    enumerable: true,
    configurable: true
  });
  return WelcomeBackRewardVO;
}();
exports.WelcomeBackRewardVO = n;
var o = require("./22.js");
var a = require("./4.js");