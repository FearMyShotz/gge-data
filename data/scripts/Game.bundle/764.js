Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1206.js");
var s = require("./370.js");
var r = require("./32.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./4.js");
var d = require("./34.js");
var p = createjs.Point;
var h = function (e) {
  function AModernPackageShopDialogSublayer(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(AModernPackageShopDialogSublayer, e);
  AModernPackageShopDialogSublayer.prototype.init = function () {
    this._listComponent = new m.ModernPackageShopList(this.dialogDisp.mc_itemList);
  };
  AModernPackageShopDialogSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.controller.addEventListener(r.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    this.controller.addEventListener(r.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    this.controller.addEventListener(s.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
    this.updateCurrency();
    this._listComponent.onShow();
    this._listComponent.updateWithNewData([], this.getEventVO(), this.getBuyType());
    var i = this.getTargetAreaID();
    var n = this.getTargetKingdomID();
    u.CastleModel.smartfoxClient.sendCommandVO(new a.C2SGetPackageBuyCountVO(i, n));
  };
  AModernPackageShopDialogSublayer.prototype.hide = function () {
    this.controller.removeEventListener(s.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
    this.controller.removeEventListener(r.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    this.controller.removeEventListener(r.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    this._listComponent.onHide();
    e.prototype.hide.call(this);
  };
  AModernPackageShopDialogSublayer.prototype.updateCurrency = function () {
    var e = this.getCurrencyType();
    C.CollectableRenderHelper.displaySingleItemComplete(this, new l.CollectableRenderClips(this.dialogDisp.mc_currency), g.CollectableHelper.createVO(e.type, _.CostHelper.getAvailableGoods(e), e.id), new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_DEFAULT, new p(50, 50)));
  };
  AModernPackageShopDialogSublayer.prototype.getEventPackages = function () {
    return null;
  };
  AModernPackageShopDialogSublayer.prototype.getFilteredPackages = function () {
    return this.getEventPackages();
  };
  AModernPackageShopDialogSublayer.prototype.getCurrencyType = function () {
    return null;
  };
  AModernPackageShopDialogSublayer.prototype.getEventVO = function () {
    return null;
  };
  AModernPackageShopDialogSublayer.prototype.getBuyType = function () {
    return -1;
  };
  AModernPackageShopDialogSublayer.prototype.getBuyTypeId = function () {
    return -1;
  };
  AModernPackageShopDialogSublayer.prototype.getTargetKingdomID = function () {
    return u.CastleModel.kingdomData.activeKingdomID;
  };
  AModernPackageShopDialogSublayer.prototype.getTargetAreaID = function () {
    var e = this.getTargetKingdomID();
    if (u.CastleModel.areaData.activeArea && u.CastleModel.userData.castleList.getCastleVOByID(u.CastleModel.areaData.activeAreaInfo.objectId, e) != null) {
      return u.CastleModel.areaData.activeAreaInfo.objectId;
    } else {
      return u.CastleModel.userData.castleList.getMainCastleByKingdomID(e).objectId;
    }
  };
  AModernPackageShopDialogSublayer.prototype.onSpecialUserCurrencyUpdate = function (e) {
    this.updateCurrency();
  };
  AModernPackageShopDialogSublayer.prototype.onPackageInfoArrived = function (e) {
    this.controller.removeEventListener(s.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
    this._listComponent.updateWithNewData(this.getFilteredPackages(), this.getEventVO(), this.getBuyType(), this.getBuyTypeId());
  };
  Object.defineProperty(AModernPackageShopDialogSublayer.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return AModernPackageShopDialogSublayer;
}(d.CastleDialogSubLayer);
exports.AModernPackageShopDialogSublayer = h;
var g = require("./45.js");
var C = require("./25.js");
var _ = require("./66.js");
var m = require("./2644.js");
o.classImplementsInterfaces(h, "ICollectableRendererList", "ISublayer");