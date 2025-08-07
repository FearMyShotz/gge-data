Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./26.js");
var r = require("./4.js");
var l = require("./184.js");
var c = require("./24.js");
var u = require("./20.js");
var d = require("./8.js");
var p = require("./362.js");
var h = require("./556.js");
var g = function (e) {
  function GachaComponentMerchantButton(t) {
    var i = e.call(this, t) || this;
    d.ButtonHelper.initButtons([i.disp], u.ClickFeedbackButtonHover);
    return i;
  }
  n.__extends(GachaComponentMerchantButton, e);
  GachaComponentMerchantButton.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.updateIcon();
  };
  GachaComponentMerchantButton.prototype.onHide = function () {
    e.prototype.onHide.call(this);
  };
  GachaComponentMerchantButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  GachaComponentMerchantButton.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  GachaComponentMerchantButton.prototype.onEventUpdate = function (e) {
    if (e.specialEventVO.eventId == this.getEventVO().currencyMerchantEventID) {
      this.checkButtonEnabled();
    }
  };
  GachaComponentMerchantButton.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (d.ButtonHelper.isButtonEnabled(this.disp)) {
      var i = this.getCurrencyMerchantEventVO();
      if (i) {
        var n = this.getCurrencyPackageID();
        i.openMerchantDialog(true, n);
      }
    }
  };
  GachaComponentMerchantButton.prototype.updateIcon = function () {
    var e = h.GachaEventMainDialog.NAME + "_Elements_" + this.getEventVO().assetName();
    var t = h.GachaEventMainDialog.NAME + "_MerchantIcon_" + this.getEventVO().assetName();
    var i = new c.CastleGoodgameExternalClip(t, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false);
    o.MovieClipHelper.clearMovieClip(this.disp.mc_icon);
    this.disp.mc_icon.addChild(i);
    this.checkButtonEnabled();
  };
  GachaComponentMerchantButton.prototype.checkButtonEnabled = function () {
    var e = r.CastleModel.specialEventData.getActiveEventByEventId(this.getEventVO().currencyMerchantEventID);
    d.ButtonHelper.enableButton(this.disp, !!e);
    this.disp.toolTipText = e ? e.eventBuildingNameId : "alert_not_available";
  };
  GachaComponentMerchantButton.prototype.getCurrencyPackageID = function () {
    var e = this;
    var t = this.getCurrencyMerchantEventVO();
    if (t) {
      var i = t.getVisiblePackages(r.CastleModel.userData.userLevel, r.CastleModel.userData.userLegendLevel, r.CastleModel.areaData.activeAreaInfo.areaType);
      if ((i = i.filter(function (t) {
        return t.firstReward.isCombineAbleWith(e.getEventVO().getCurrentGachaVO().costs.list[0]);
      })).length > 0) {
        return i[0].packageID;
      }
    }
    return -1;
  };
  GachaComponentMerchantButton.prototype.getCurrencyMerchantEventVO = function () {
    var e = r.CastleModel.specialEventData.getActiveEventByEventId(this.getEventVO().currencyMerchantEventID);
    if (e && e.isActive && e instanceof l.BuyPackagesEventVO) {
      return e;
    } else {
      return null;
    }
  };
  GachaComponentMerchantButton.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentMerchantButton;
}(p.AGachaComponent);
exports.GachaComponentMerchantButton = g;