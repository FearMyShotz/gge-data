Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function InviteRewardVO() {
    this._id = 0;
    this._friendLevel = 0;
    this._friendCount = 0;
    this._relatedPrivateOfferID = 0;
    this._rewardID = 0;
  }
  Object.defineProperty(InviteRewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InviteRewardVO.prototype, "friendLevel", {
    get: function () {
      return this._friendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InviteRewardVO.prototype, "friendCount", {
    get: function () {
      return this._friendCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InviteRewardVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InviteRewardVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  InviteRewardVO.prototype.fillFromParamXml = function (e) {
    this._id = parseInt(e.inviteRewardstepID || "");
    this._friendLevel = parseInt(e.requiredFriendLevel || "");
    this._friendCount = parseInt(e.countFriends || "");
    this._rewardID = parseInt(e.rewardID || "");
    this._relatedPrivateOfferID = parseInt(e.relatedOfferID || "");
    this._type = (e.type || "").toString();
  };
  InviteRewardVO.prototype.getRewardCollectableList = function () {
    return o.CastleModel.rewardData.getListById(this._rewardID);
  };
  InviteRewardVO.prototype.toString = function () {
    return "id: " + this._id + ", friendLevel: " + this._friendLevel + ", friendCount: " + this._friendCount + ", rewardID: " + this._rewardID + ", type: " + this._type;
  };
  Object.defineProperty(InviteRewardVO.prototype, "relatedPrivateOfferID", {
    get: function () {
      return this._relatedPrivateOfferID;
    },
    enumerable: true,
    configurable: true
  });
  return InviteRewardVO;
}();
exports.InviteRewardVO = n;
var o = require("./4.js");