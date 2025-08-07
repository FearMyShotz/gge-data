Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleGenericBuyDialogProperties() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.buyType = -1;
    t.buyTypeId = -1;
    return t;
  }
  n.__extends(CastleGenericBuyDialogProperties, e);
  CastleGenericBuyDialogProperties.prototype.parseDataFromScrollItem = function (e) {
    this.specialEventVO = e.specialEventVO;
    this.eventPackageVO = e.eventPackageVO;
    this.buyType = e.buyType;
    this.buyTypeId = e.buyTypeId;
    if (this.privateOfferVO == null) {
      this.privateOfferVO = e.offerVO;
    }
  };
  return CastleGenericBuyDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleGenericBuyDialogProperties = o;