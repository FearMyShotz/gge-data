Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./167.js");
var l = require("./244.js");
var c = require("./4.js");
var u = require("./79.js");
var d = require("./184.js");
var p = function (e) {
  function CollectorShopEventVO() {
    var t = e.call(this) || this;
    t._buyPackagesEventVO = new d.BuyPackagesEventVO();
    return t;
  }
  n.__extends(CollectorShopEventVO, e);
  CollectorShopEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    this._buyPackagesEventVO.parseData(t, i, n);
    this._collectInfoVO = c.CastleModel.collectEventData.getCollectInfoVOByID(n.EOID);
  };
  CollectorShopEventVO.prototype.getMerchantProperties = function () {
    var e = new l.MerchantScrollItemVO();
    e.eventPackageVO = c.CastleModel.eventPackageData.getEventPackageByID(this._collectInfoVO.collectorKeyPackageID);
    e.specialEventVO = c.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    var t = new r.CastleGenericBuyDialogProperties();
    t.parseDataFromScrollItem(e);
    return t;
  };
  CollectorShopEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, h.CollectorEventDialog, new o.BasicProperties());
  };
  Object.defineProperty(CollectorShopEventVO.prototype, "collectInfoVO", {
    get: function () {
      return this._collectInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorShopEventVO.prototype, "buyPackagesEventVO", {
    get: function () {
      return this._buyPackagesEventVO;
    },
    enumerable: true,
    configurable: true
  });
  return CollectorShopEventVO;
}(u.ASpecialEventVO);
exports.CollectorShopEventVO = p;
var h = require("./1141.js");
a.classImplementsInterfaces(p, "IEventOverviewable");