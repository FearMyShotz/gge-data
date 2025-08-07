Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./4.js");
var c = function (e) {
  function CollectEventDailogShop(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CollectEventDailogShop, e);
  CollectEventDailogShop.prototype.init = function () {
    e.prototype.init.call(this);
    if (this.eventVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new r.LocalizedTextVO("dialog_collector_shop_info_" + this.eventVO.collectInfoVO.collectorEventSkinName));
    } else {
      this.hide();
    }
  };
  CollectEventDailogShop.prototype.getEventPackages = function () {
    return this.getEventVO().buyPackagesEventVO.getVisiblePackages(l.CastleModel.userData.userLevel, l.CastleModel.userData.userLegendLevel, s.WorldConst.AREA_TYPE_CASTLE);
  };
  CollectEventDailogShop.prototype.getEventVO = function () {
    return l.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_COLLECTOR_SHOP);
  };
  CollectEventDailogShop.prototype.getCurrencyType = function () {
    return new d.CollectableTypeVO(u.CollectableEnum.C2);
  };
  Object.defineProperty(CollectEventDailogShop.prototype, "eventVO", {
    get: function () {
      return l.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    },
    enumerable: true,
    configurable: true
  });
  return CollectEventDailogShop;
}(require("./766.js").AModernPackageShopDialogSublayer);
exports.CollectEventDailogShop = c;
var u = require("./12.js");
var d = require("./74.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "ISublayer");