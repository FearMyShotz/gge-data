Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./12.js");
var s = require("./45.js");
var r = require("./4.js");
var l = function () {
  function DonationItemsVO() {
    this._donationItemID = -1;
    this._donationItemSetID = -1;
    this._donationTypeID = -1;
    this._currencyID = -1;
    this._ratio = -1;
    this._maxPointLimit = -1;
    this._resourceID = -1;
  }
  DonationItemsVO.prototype.parseXmlNode = function (e) {
    this._donationItemID = n.int(o.CastleXMLUtils.getIntAttribute("donationItemID", e, -1));
    this._donationItemSetID = n.int(o.CastleXMLUtils.getIntAttribute("donationItemSetID", e, -1));
    this._donationTypeID = n.int(o.CastleXMLUtils.getIntAttribute("donationTypeID", e, -1));
    this._currencyID = n.int(o.CastleXMLUtils.getIntAttribute("currencyID", e, -1));
    this._ratio = n.int(o.CastleXMLUtils.getIntAttribute("ratio", e, -1));
    this._maxPointLimit = n.int(o.CastleXMLUtils.getIntAttribute("maxPointLimit", e, -1));
    this._resourceID = n.int(o.CastleXMLUtils.getIntAttribute("resourceID", e, -1));
  };
  Object.defineProperty(DonationItemsVO.prototype, "donationItemID", {
    get: function () {
      return this._donationItemID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "donationItemSetID", {
    get: function () {
      return this._donationItemSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "donationTypeID", {
    get: function () {
      return this._donationTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "currencyID", {
    get: function () {
      return this._currencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "ratio", {
    get: function () {
      return this._ratio;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "maxPointLimit", {
    get: function () {
      return this._maxPointLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "resourceID", {
    get: function () {
      return this._resourceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "resourceEnum", {
    get: function () {
      return r.CastleModel.currencyData.getResourceXmlVO(this.resourceID).resourceEnum;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "pointTypeVO", {
    get: function () {
      return r.CastleModel.donationEventData.getPointTypeVOByID(this.donationTypeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationItemsVO.prototype, "collectableVO", {
    get: function () {
      if (this.resourceID > 0) {
        return s.CollectableHelper.createVO(this.resourceEnum);
      } else {
        return s.CollectableHelper.createVO(a.CollectableEnum.GENERIC_CURRENCY, 0, this.currencyID);
      }
    },
    enumerable: true,
    configurable: true
  });
  return DonationItemsVO;
}();
exports.DonationItemsVO = l;