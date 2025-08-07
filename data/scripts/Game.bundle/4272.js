Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function DonationRewardVO() {
    this._donationRewardID = -1;
    this._rewardSetID = -1;
    this._donationTypeID = -1;
    this._minPoints = -1;
    this._rewardID = -1;
  }
  DonationRewardVO.prototype.parseXmlNode = function (e) {
    this._donationRewardID = n.int(o.CastleXMLUtils.getIntAttribute("donationRewardID", e, -1));
    this._rewardSetID = n.int(o.CastleXMLUtils.getIntAttribute("rewardSetID", e, -1));
    this._donationTypeID = n.int(o.CastleXMLUtils.getIntAttribute("donationTypeID", e, -1));
    this._minPoints = n.int(o.CastleXMLUtils.getIntAttribute("minPoints", e, -1));
    this._rewardID = n.int(o.CastleXMLUtils.getIntAttribute("rewardID", e, -1));
  };
  Object.defineProperty(DonationRewardVO.prototype, "donationRewardID", {
    get: function () {
      return this._donationRewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationRewardVO.prototype, "rewardSetID", {
    get: function () {
      return this._rewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationRewardVO.prototype, "donationTypeID", {
    get: function () {
      return this._donationTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationRewardVO.prototype, "minPoints", {
    get: function () {
      return this._minPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationRewardVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  return DonationRewardVO;
}();
exports.DonationRewardVO = a;