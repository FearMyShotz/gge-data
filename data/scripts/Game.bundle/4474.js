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
var u = require("./6.js");
var d = require("./39.js");
var p = require("./8.js");
var h = require("./167.js");
var g = function (e) {
  function CastleLuckyWheelScrollItem(t) {
    var i = e.call(this, t) || this;
    i.itxt_amount = i.textFieldManager.registerTextField(t.txt_amount, new c.LocalizedTextVO(""));
    i.itxt_price = i.textFieldManager.registerTextField(t.mc_price.txt_price, new l.LocalizedNumberVO(0));
    i.itxt_discount = i.textFieldManager.registerTextField(i._disp.mc_discount.txt_priceReduction, new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE));
    t.mc_price.mouseChildren = false;
    t.mc_price.toolTipText = d.ClientConstTextIds.C2;
    t.btn_buy.mouseChildren = false;
    t.btn_buy.toolTipText = d.ClientConstTextIds.BUY;
    t.mc_tickets.gotoAndStop(3);
    return i;
  }
  n.__extends(CastleLuckyWheelScrollItem, e);
  CastleLuckyWheelScrollItem.prototype.customFillItem = function () {
    this.itxt_amount.textContentVO.textId = "dialog_luckyWheel_ticketsNumber";
    this.itxt_amount.textContentVO.textReplacements = [this.luckyWheelScrollItemVO.eventPackageVO.reward.amount];
    this.itxt_price.textContentVO.numberValue = this.luckyWheelScrollItemVO.eventPackageVO.price.amount;
    this.disp.mc_tickets.toolTipText = "tooltip_tickets";
    if (this.luckyWheelScrollItemVO.ticketsToDisplay <= 3 && this.luckyWheelScrollItemVO.ticketsToDisplay > 0) {
      this.disp.mc_tickets.gotoAndStop(this.luckyWheelScrollItemVO.ticketsToDisplay);
    } else {
      this.disp.mc_tickets.gotoAndStop(3);
    }
    this.handleDiscount();
  };
  CastleLuckyWheelScrollItem.prototype.handleDiscount = function () {
    var e = u.int(C.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.luckyWheelScrollItemVO.eventPackageVO.packageID));
    if (e > 0) {
      this._disp.mc_discount.visible = true;
      this.itxt_discount.textContentVO.textReplacements = [-e];
    } else {
      this._disp.mc_discount.visible = false;
    }
  };
  CastleLuckyWheelScrollItem.prototype.show = function () {
    e.prototype.show.call(this);
    this.initItem();
  };
  CastleLuckyWheelScrollItem.prototype.initItem = function () {
    this.disp.btn_buy.scaleX = 1;
    this.disp.btn_buy.scaleY = 1;
    p.ButtonHelper.enableButton(this.disp.btn_buy, true);
    this.disp.btn_buy.toolTipText = d.ClientConstTextIds.BUY;
  };
  CastleLuckyWheelScrollItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.disp.btn_buy:
          var i = new h.CastleGenericBuyDialogProperties();
          i.parseDataFromScrollItem(this.luckyWheelScrollItemVO);
          CastleLuckyWheelScrollItem.dialogHandler.registerDefaultDialogs(m.CastleLuckyWheelTicketSliderBuyDialog, i);
      }
    }
  };
  Object.defineProperty(CastleLuckyWheelScrollItem.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelScrollItem.prototype, "luckyWheelScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelScrollItem, "dialogHandler", {
    get: function () {
      return _.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleLuckyWheelScrollItem;
}(s.ScrollItem);
exports.CastleLuckyWheelScrollItem = g;
var C = require("./190.js");
var _ = require("./9.js");
var m = require("./4475.js");
r.classImplementsInterfaces(g, "MovieClip");