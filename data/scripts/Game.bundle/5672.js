Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function XmlSeasonSettingVO() {
    this.settingID = 0;
    this.seasonPassEventEndPrice = 0;
    this.seasonPassFullDiscount = 0;
    this.seasonPassSingleDiscount = 0;
  }
  XmlSeasonSettingVO.prototype.parseXml = function (e) {
    this.settingID = n.int(o.CastleXMLUtils.getIntAttribute("settingID", e, -1));
    this.seasonPassPromotionPrice = n.int(o.CastleXMLUtils.getIntAttribute("seasonPassPromotionPrice", e));
    this.seasonPassEventEndPrice = n.int(o.CastleXMLUtils.getIntAttribute("seasonPassEventEndPrice", e));
    this.seasonPassFullDiscount = n.int(o.CastleXMLUtils.getIntAttribute("seasonPassFullDiscount", e));
    this.seasonPassSingleDiscount = n.int(o.CastleXMLUtils.getIntAttribute("seasonPassSingleDiscount", e));
  };
  Object.defineProperty(XmlSeasonSettingVO.prototype, "seasonPassEventSalePrice", {
    get: function () {
      return Math.ceil(this.seasonPassEventEndPrice * (1 - this.seasonPassSingleDiscount / 100));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonSettingVO.prototype, "seasonPassPromotionSalePrice", {
    get: function () {
      return Math.ceil(this.seasonPassPromotionPrice * (1 - this.seasonPassSingleDiscount / 100));
    },
    enumerable: true,
    configurable: true
  });
  return XmlSeasonSettingVO;
}();
exports.XmlSeasonSettingVO = a;