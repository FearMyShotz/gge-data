Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./39.js");
var h = require("./26.js");
var g = require("./528.js");
var C = require("./44.js");
var _ = require("./4.js");
var m = require("./8.js");
var f = require("./167.js");
var O = function (e) {
  function CastleVIPBuyPointsTimeItem(t) {
    var i = e.call(this, t) || this;
    i.itxt_amount = i.textFieldManager.registerTextField(t.txt_amount, new u.TextVO(""));
    i.itxt_price = i.textFieldManager.registerTextField(t.mc_price.txt_price, new l.LocalizedNumberVO(0));
    i.itxt_discount = i.textFieldManager.registerTextField(i._disp.mc_discount.txt_priceReduction, new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE));
    t.mc_price.mouseChildren = false;
    t.mc_price.toolTipText = p.ClientConstTextIds.C2;
    t.btn_buy.mouseChildren = false;
    t.btn_buy.toolTipText = p.ClientConstTextIds.BUY;
    return i;
  }
  n.__extends(CastleVIPBuyPointsTimeItem, e);
  CastleVIPBuyPointsTimeItem.prototype.customFillItem = function () {
    this.itxt_amount.textContentVO = this.packageVO.textVO;
    this.itxt_price.textContentVO.numberValue = this.packageVO.priceC2;
    this.handleDiscount();
    this.handleVIP();
  };
  CastleVIPBuyPointsTimeItem.prototype.handleDiscount = function () {
    var e = d.int(y.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageVO.packageID));
    if (e > 0) {
      this._disp.mc_discount.visible = true;
      this.itxt_discount.textContentVO.textReplacements = [-e];
    } else {
      this._disp.mc_discount.visible = false;
    }
  };
  CastleVIPBuyPointsTimeItem.prototype.show = function () {
    e.prototype.show.call(this);
    _.CastleModel.vipData.addEventListener(g.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVIPDataChanged));
    _.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    _.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEventChanged));
  };
  CastleVIPBuyPointsTimeItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    _.CastleModel.vipData.removeEventListener(g.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVIPDataChanged));
    _.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    _.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEventChanged));
  };
  CastleVIPBuyPointsTimeItem.prototype.handleVIP = function () {
    this.disp.btn_buy.scaleX = 1;
    this.disp.btn_buy.scaleY = 1;
    if (this.packageVO.reward.itemType == E.CollectableEnum.VIP_TIME) {
      var e = d.int(_.CastleModel.vipData.maxTimePackagesBuyable(this.packageVO.reward.duration));
      if (C.SpecialServerHelper.isOnSpecialServer && this.packageVO.disabledOnGlobalServer) {
        m.ButtonHelper.enableButton(this.disp.btn_buy, false);
        this.disp.btn_buy.toolTipText = "noAvailableOffer";
        return;
      }
      if (e < 1) {
        m.ButtonHelper.enableButton(this.disp.btn_buy, false);
        this.disp.btn_buy.toolTipText = "dialog_buyVipTime_maxAmount";
      } else {
        m.ButtonHelper.enableButton(this.disp.btn_buy, true);
        this.disp.btn_buy.toolTipText = p.ClientConstTextIds.BUY;
      }
    } else if (_.CastleModel.vipData.currentPremiumPoints >= _.CastleModel.vipData.getVIPLevelInfoVOByLevel(_.CastleModel.vipData.maxLevel).minVIPPoints) {
      m.ButtonHelper.enableButton(this.disp.btn_buy, false);
      this.disp.btn_buy.toolTipText = "dialog_buyVipPoints_maxAmountTotal_v2";
    } else {
      m.ButtonHelper.enableButton(this.disp.btn_buy, true);
      this.disp.btn_buy.toolTipText = p.ClientConstTextIds.BUY;
    }
  };
  CastleVIPBuyPointsTimeItem.prototype.onSpecialEventRemoved = function (e) {
    this.handleDiscount();
  };
  CastleVIPBuyPointsTimeItem.prototype.onSpecialEventChanged = function (e) {
    this.handleDiscount();
  };
  CastleVIPBuyPointsTimeItem.prototype.onVIPDataChanged = function (e) {
    this.handleVIP();
  };
  CastleVIPBuyPointsTimeItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.disp.btn_buy:
          var n = new f.CastleGenericBuyDialogProperties();
          n.parseDataFromScrollItem(this.scrollItemVO);
          var o = require("./1428.js").CastleVIPBuyDialog;
          b.CastleDialogHandler.getInstance().registerDefaultDialogs(o, n);
      }
    }
  };
  Object.defineProperty(CastleVIPBuyPointsTimeItem.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPBuyPointsTimeItem.prototype, "packageVO", {
    get: function () {
      return this.scrollItemVO.eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleVIPBuyPointsTimeItem;
}(s.ScrollItem);
exports.CastleVIPBuyPointsTimeItem = O;
var E = require("./12.js");
var y = require("./190.js");
var b = require("./9.js");
r.classImplementsInterfaces(O, "MovieClip");