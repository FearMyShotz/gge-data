Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./4.js");
var s = function () {
  function DonationSettingVO() {
    this._donationSettingID = -1;
    this._donationItemSetID = -1;
    this._rewardSetID = -1;
  }
  DonationSettingVO.prototype.parseXmlNode = function (e) {
    this._donationSettingID = n.int(o.CastleXMLUtils.getIntAttribute("donationSettingID", e, -1));
    this._donationItemSetID = n.int(o.CastleXMLUtils.getIntAttribute("donationItemSetID", e, -1));
    this._rewardSetID = n.int(o.CastleXMLUtils.getIntAttribute("rewardSetID", e, -1));
  };
  Object.defineProperty(DonationSettingVO.prototype, "donationSettingID", {
    get: function () {
      return this._donationSettingID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationSettingVO.prototype, "donationItemSetID", {
    get: function () {
      return this._donationItemSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationSettingVO.prototype, "rewardSetID", {
    get: function () {
      return this._rewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationSettingVO.prototype, "donateItemVOs", {
    get: function () {
      return a.CastleModel.donationEventData.getItemVOs_By_PointTypeSettingID(this.donationItemSetID);
    },
    enumerable: true,
    configurable: true
  });
  DonationSettingVO.prototype.getDonateItemVOsByType = function (e) {
    return a.CastleModel.donationEventData.getItemVOs_By_PointTypeSettingID_And_PointTypeID(this.donationItemSetID, e);
  };
  Object.defineProperty(DonationSettingVO.prototype, "pointTypeVOs", {
    get: function () {
      return a.CastleModel.donationEventData.getPointTypeVOs_By_DonationSettingID(this.donationSettingID);
    },
    enumerable: true,
    configurable: true
  });
  return DonationSettingVO;
}();
exports.DonationSettingVO = s;