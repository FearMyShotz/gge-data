Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function DonationTypeVO() {
    this._donationTypeID = -1;
    this._name = "";
  }
  DonationTypeVO.prototype.parseXmlNode = function (e) {
    this._donationTypeID = n.int(o.CastleXMLUtils.getIntAttribute("donationTypeID", e, -1));
    this._name = o.CastleXMLUtils.getStringAttribute("name", e, "");
  };
  Object.defineProperty(DonationTypeVO.prototype, "donationTypeID", {
    get: function () {
      return this._donationTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationTypeVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  return DonationTypeVO;
}();
exports.DonationTypeVO = a;