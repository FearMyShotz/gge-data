Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = function (e) {
  function ApprenticeSmithEventDialogShop() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.starterPackage = null;
    return t;
  }
  n.__extends(ApprenticeSmithEventDialogShop, e);
  ApprenticeSmithEventDialogShop.prototype.getEventPackages = function () {
    return this.getEventVO().getEventPackagesByCurrencyType(this._currencyType);
  };
  ApprenticeSmithEventDialogShop.prototype.getEventVO = function () {
    return s.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR);
  };
  Object.defineProperty(ApprenticeSmithEventDialogShop.prototype, "packageList", {
    get: function () {
      return this._listComponent;
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeSmithEventDialogShop.prototype.setStarterPackage = function (e) {
    this.starterPackage = e;
  };
  ApprenticeSmithEventDialogShop.prototype.onPackageInfoArrived = function (t) {
    e.prototype.onPackageInfoArrived.call(this, t);
    if (this.starterPackage) {
      this.packageList.scrollToPackage(this.starterPackage);
      this.starterPackage = null;
    }
  };
  return ApprenticeSmithEventDialogShop;
}(require("./1786.js").AModernFilterablePackageShopDialogSublayer);
exports.ApprenticeSmithEventDialogShop = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "ISublayer");