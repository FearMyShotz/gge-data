Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./39.js");
var g = require("./146.js");
var C = require("./21.js");
var _ = require("./220.js");
var m = require("./26.js");
var f = require("./32.js");
var O = require("./30.js");
var E = require("./85.js");
var y = require("./4.js");
var b = require("./270.js");
var D = require("./42.js");
var I = require("./8.js");
var T = require("./34.js");
var v = createjs.MovieClip;
var S = function (e) {
  function CastlePremiumMarketPlaceDialogBooster(t) {
    var i = this;
    i.lastHighlightTime = 0;
    i._currentPage = 0;
    i.highlightIndex = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).initBasicButtons([i.subLayerDisp.btn_right, i.subLayerDisp.btn_left, i.subLayerDisp.btn_addGold]);
    i._paymentBtnComp = new L.ButtonAddGoldComponent(i.subLayerDisp.btn_addGold);
    i.itxt_c2 = i.textFieldManager.registerTextField(i.subLayerDisp.txt_c2, new E.CastleLocalizedNumberVO(y.CastleModel.currencyData.c2Amount, {
      compactThreshold: h.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    i.itxt_page = i.textFieldManager.registerTextField(i.subLayerDisp.txt_page, new u.LocalizedTextVO("pageXY", [0, 0], false));
    for (var n = 0; n < CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE; n++) {
      i.prepareItem(i.subLayerDisp["i" + n]);
    }
    return i;
  }
  n.__extends(CastlePremiumMarketPlaceDialogBooster, e);
  CastlePremiumMarketPlaceDialogBooster.prototype.prepareItem = function (e) {
    this.initBasicButtons([e.btn_buy]);
    e.mc_icon_hourglass.mouseEnabled = false;
    e.mc_icon_hourglass.mouseChildren = false;
    e.mc_icon_boni.mouseEnabled = false;
    e.mc_icon_boni.mouseChildren = false;
    e.mc_icon_base.mouseEnabled = false;
    e.mc_icon_base.mouseChildren = false;
    e.info_left.mouseChildren = false;
    e.info_right.mouseChildren = false;
    e.info_stretched.mouseChildren = false;
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.goToItemPage = function (e) {
    var t = y.CastleModel.premiumData.getShopVOsByType(this.currentCategory);
    var i = 0;
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (e(a)) {
            break;
          }
          ++i;
        }
      }
    }
    this.highlightIndex = p.int(i < t.length ? i : 0);
    this.changeCurrentPage(p.int(this.highlightIndex / CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE), false);
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.currentCategory = t.shift();
    var i = s.castAs(t.shift(), "CastlePremiumMarketShopVO");
    y.CastleModel.timerData.addEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onDataChanged));
    this.subLayerDisp["i" + this.highlightIndex % CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE].mc_highlight.gotoAndStop(CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_STOP);
    if (y.CastleModel.boosterSaleData.isAnyBoosterOnSale()) {
      this.goToItemPage(function (e) {
        return l.instanceOfClass(e, "CastleHeroBoosterShopVO") && y.CastleModel.boosterSaleData.isBoosterOnSale(e.id);
      });
    } else if (i && i.isInShopCategory(this.currentCategory)) {
      this.goToItemPage(function (e) {
        return e.listSortPriority == i.listSortPriority;
      });
      this.subLayerDisp["i" + this.highlightIndex % CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE].mc_highlight.gotoAndPlay(CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_PLAY);
    } else {
      this.changeCurrentPage(0, false);
    }
    this.updateArrowButtons();
    this.onChangeCurrency();
    this.subLayerDisp.mc_c2.toolTipText = h.ClientConstTextIds.C2;
    this.controller.addEventListener(f.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.addEventListener(f.CastleUserDataEvent.PREMIUM_FLAG_CHANGED, this.bindFunction(this.onPremiumFlagChanged));
    y.CastleModel.boostData.addEventListener(_.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onDataChanged));
    y.CastleModel.boosterSaleData.addEventListener(b.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onDataChanged));
    y.CastleModel.specialEventData.addEventListener(m.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this.bindFunction(this.onDataChanged));
    this._paymentBtnComp.init();
    this.fillItems();
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.onPremiumFlagChanged = function (e) {
    this.fillItems();
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(f.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.removeEventListener(f.CastleUserDataEvent.PREMIUM_FLAG_CHANGED, this.bindFunction(this.onPremiumFlagChanged));
    y.CastleModel.timerData.removeEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onDataChanged));
    y.CastleModel.boostData.removeEventListener(_.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onDataChanged));
    y.CastleModel.boosterSaleData.removeEventListener(b.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onDataChanged));
    y.CastleModel.specialEventData.removeEventListener(m.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this.bindFunction(this.onDataChanged));
    this._paymentBtnComp.destroy();
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.onDataChanged = function (e) {
    this.fillItems(false);
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.fillItems = function (e = true) {
    var t = y.CastleModel.premiumData.getShopVOsByType(this.currentCategory);
    var i = p.int(O.CachedTimer.getCachedTimer());
    var n = i - this.lastHighlightTime > 5000;
    for (var o = this._currentPage * CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE; o < (this._currentPage + 1) * CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE; o++) {
      var a = this.subLayerDisp["i" + (o - this._currentPage * CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE)];
      if (e) {
        a.mc_highlight.gotoAndStop(CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_STOP);
      }
      if (o >= t.length) {
        a.visible = false;
      } else {
        var s = t[o];
        this.fillItem(a, s);
        this.handleBoosterSale(a, s, e, n, i);
      }
    }
    this.updateArrowButtons();
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.fillItem = function (e, t) {
    var i = t.isTeasered;
    e.visible = true;
    e.gotoAndStop(i ? CastlePremiumMarketPlaceDialogBooster.GOLD_FRAME : CastlePremiumMarketPlaceDialogBooster.DEFAULT_FRAME);
    e.mouseChildren = true;
    e.itemVO = t;
    this.hideAll(e);
    this.fillItemTextAndIcon(e, t);
    e.icon_shortTime.visible = t.isLimited;
    e.icon_shortTime.toolTipText = "limitedOffer";
    e.info_left.toolTipText = t.bonusToolTip;
    e.info_right.toolTipText = t.nextBonusToolTip;
    e.mc_icon_boni.gotoAndStop(t.bonusIconFrame);
    if (t.isActive) {
      if (t.isPermanentBooster) {
        this.showTwoInfos(e, t, "base", "boni", new u.LocalizedTextVO(t.bonusText[0], [t.bonusText[1]]), new u.LocalizedTextVO(t.bonusTextForNextLevel[0], [t.bonusTextForNextLevel[1]]));
      } else {
        e.btn_buy.toolTipText = "rise";
        if (t.hasVisualEffectWhenActive) {
          this.showTwoInfos(e, t, "boni", "hourglass", new u.LocalizedTextVO(t.bonusText[0], [t.bonusText[1] * 100]), new d.TextVO(t.duration));
          e.info_right.toolTipText = t.timeStringTooltip;
        } else {
          this.showStretched(e, t);
        }
      }
    } else if (t.isPermanentBooster) {
      this.showCentered(e, new u.LocalizedTextVO(t.bonusTextForNextLevel[0], [t.bonusTextForNextLevel[1]]));
    } else if (t.hasVisualTimeWhenNotActive) {
      if (t.hasVisualBonus) {
        this.showTwoInfos(e, t, "boni", "hourglass", new u.LocalizedTextVO(t.bonusText[0], [t.bonusText[1]]), new d.TextVO(t.duration));
        e.info_right.toolTipText = t.timeStringTooltip;
      } else {
        this.showStretched(e, t);
      }
    }
    this.fillItemPrice(e, t);
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.handleBoosterSale = function (e, t, i, n, o) {
    if ((t.hasVisualEffectWhenActive || t.hasVisualBonus) && l.instanceOfClass(t, "CastleHeroBoosterShopVO")) {
      var a = t.id;
      if (y.CastleModel.boosterSaleData.isBoosterOnSale(a)) {
        e.gotoAndStop(CastlePremiumMarketPlaceDialogBooster.GOLD_FRAME);
        if ((i || n) && e.mc_highlight.currentFrame == CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_STOP - 1) {
          e.mc_highlight.gotoAndPlay(CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_PLAY);
          this.lastHighlightTime = o;
        }
        y.CastleModel.boosterSaleData.handleMc(e.mc_discount, a);
      }
    }
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.hideAll = function (e) {
    e.mc_discount.visible = false;
    e.info_right.visible = false;
    e.info_left.visible = false;
    e.info_stretched.visible = false;
    e.mc_icon_boni.visible = false;
    e.mc_icon_base.visible = false;
    e.mc_icon_hourglass.visible = false;
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.showCentered = function (e, t) {
    e.info_right.visible = true;
    e.info_right.x = CastlePremiumMarketPlaceDialogBooster.X_MIDDLE + CastlePremiumMarketPlaceDialogBooster.X_OFFSET_TEXT;
    e.mc_icon_boni.visible = true;
    e.mc_icon_boni.x = CastlePremiumMarketPlaceDialogBooster.X_MIDDLE;
    this.textFieldManager.registerTextField(e.info_right.textfield, t, new o.InternalGGSTextFieldConfigVO(true));
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.showStretched = function (e, t) {
    e.info_stretched.visible = true;
    e.mc_icon_hourglass.x = CastlePremiumMarketPlaceDialogBooster.X_LEFT;
    e.mc_icon_hourglass.visible = true;
    e.info_stretched.toolTipText = t.timeStringTooltip;
    this.textFieldManager.registerTextField(e.info_stretched.textfield, new d.TextVO(t.duration), new o.InternalGGSTextFieldConfigVO(true));
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.showTwoInfos = function (e, t, i, n, a, s) {
    e.info_left.visible = true;
    e.info_right.visible = true;
    var r = e["mc_icon_" + i];
    r.visible = true;
    r.x = CastlePremiumMarketPlaceDialogBooster.X_LEFT;
    var l = e["mc_icon_" + n];
    l.visible = true;
    l.x = CastlePremiumMarketPlaceDialogBooster.X_RIGHT;
    e.info_right.x = CastlePremiumMarketPlaceDialogBooster.X_RIGHT + CastlePremiumMarketPlaceDialogBooster.X_OFFSET_TEXT;
    e.mc_icon_base.gotoAndStop(t.baseIconFrame);
    this.textFieldManager.registerTextField(e.info_left.textfield, a, new o.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(e.info_right.textfield, s, new o.InternalGGSTextFieldConfigVO(true));
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.fillItemTextAndIcon = function (e, t) {
    a.MovieClipHelper.clearMovieClip(e.mc_holder);
    e.mc_holder.scaleX = e.mc_holder.scaleY = 1;
    e.mc_holder.addChild(t.visualMovieClip);
    if (this.textFieldManager.isTextFieldRegistered(e.txt_title)) {
      this.textFieldManager.getTextField(e.txt_title).textContentVO.stringValue = t.title;
      this.textFieldManager.getTextField(e.txt_copy).textContentVO.stringValue = t.copy;
    } else {
      this.textFieldManager.registerTextField(e.txt_title, new d.TextVO(t.title)).verticalAlign = D.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this.textFieldManager.registerTextField(e.txt_copy, new d.TextVO(t.copy));
      this.textFieldManager.getTextField(e.txt_title).textContentVO.stringValue = t.title;
      this.textFieldManager.getTextField(e.txt_copy).textContentVO.stringValue = t.copy;
      this.textFieldManager.getTextField(e.txt_title).autoFitToBounds = true;
    }
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.fillItemPrice = function (e, t) {
    var i = t.costString != "";
    e.btn_buy.visible = e.icon_currency.visible = e.txt_price.visible = e.mc_priceTagBackground.visible = i;
    e.gc_deco.visible = !i;
    if (i) {
      var n = 0;
      switch (t.payType) {
        case A.CastlePremiumMarketShopVO.PAYTYPE_C1:
          n = t.finalCostsC1;
          break;
        case A.CastlePremiumMarketShopVO.PAYTYPE_C2:
          n = t.finalCostsC2;
          break;
        case A.CastlePremiumMarketShopVO.PAYTYPE_FOOD:
          n = t.baseCosts;
      }
      if (t.payType == A.CastlePremiumMarketShopVO.PAYTYPE_NONE || t.payType == A.CastlePremiumMarketShopVO.PAYTYPE_FOOD && !t.isActive) {
        this.textFieldManager.registerTextField(e.txt_price, new u.LocalizedTextVO("variable"), new o.InternalGGSTextFieldConfigVO(true));
      } else {
        this.textFieldManager.registerTextField(e.txt_price, new c.LocalizedNumberVO(n), new o.InternalGGSTextFieldConfigVO(true));
      }
      e.icon_currency.gotoAndStop(t.payType);
      e.icon_currency.mouseChildren = false;
      e.icon_currency.toolTipText = t.costsToolTip;
      e.btn_buy.gotoAndStop(t.isActive && t.isExtendable ? 2 : 1);
      if (l.instanceOfClass(t, "CastleFestivalPremiumShopVO")) {
        e.btn_buy.gotoAndStop(t.isActive && t.isExtendable ? 3 : 1);
      }
      e.btn_buy.doCache();
      I.ButtonHelper.enableButton(e.btn_buy, t.canBeBought);
      if (e.btn_buy.enabled) {
        e.btn_buy.toolTipText = t.buttonBuyToolTipEnabled;
      } else {
        e.btn_buy.toolTipText = t.cantBeBoughtButtonToolTip;
      }
    }
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.changeCurrentPage = function (e, t = true) {
    if (e != this._currentPage) {
      this._currentPage = e;
      if (t) {
        this.fillItems();
      }
    }
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.onChangeCurrency = function (e = null) {
    this.itxt_c2.textContentVO.numberValue = y.CastleModel.currencyData.c2Amount;
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.updateArrowButtons = function () {
    this.subLayerDisp.btn_right.visible = this._currentPage + 1 < this.maxPage;
    this.subLayerDisp.btn_left.visible = this._currentPage > 0;
    this.itxt_page.textContentVO.textReplacements = [this._currentPage + 1, this.maxPage];
  };
  CastlePremiumMarketPlaceDialogBooster.prototype.onMouseUp = function (e) {
    if (I.ButtonHelper.hasBasicButton(e.target) && I.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_right:
          this.changeCurrentPage(this._currentPage + 1);
          break;
        case this.subLayerDisp.btn_left:
          this.changeCurrentPage(this._currentPage - 1);
          break;
        case this.subLayerDisp.btn_addGold:
          this._paymentBtnComp.onClickButton(g.CastleOpenShopExecutor.SOURCE_PREMIUM_MARKET_PLACE, P.CXFSourceTrackingConstants.SOURCE_PREMIUM_MARKET_PLACE);
          break;
        default:
          if (e.target instanceof v && e.target.enabled) {
            e.target.parent.itemVO.clickedBuyButton();
            return;
          }
      }
    }
  };
  Object.defineProperty(CastlePremiumMarketPlaceDialogBooster.prototype, "maxPage", {
    get: function () {
      var e = y.CastleModel.premiumData.getShopVOsByType(this.currentCategory);
      return Math.max(Math.ceil(e.length / CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE), 1);
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketPlaceDialogBooster.NAME = "CastlePremiumMarketPlaceDialogBooster";
  CastlePremiumMarketPlaceDialogBooster.NUM_ITEMS_PER_PAGE = 6;
  CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_STOP = 1;
  CastlePremiumMarketPlaceDialogBooster.HIGHLIGHT_FRAME_PLAY = 1;
  CastlePremiumMarketPlaceDialogBooster.DEFAULT_FRAME = 1;
  CastlePremiumMarketPlaceDialogBooster.GOLD_FRAME = 2;
  CastlePremiumMarketPlaceDialogBooster.X_LEFT = 13;
  CastlePremiumMarketPlaceDialogBooster.X_MIDDLE = 63;
  CastlePremiumMarketPlaceDialogBooster.X_RIGHT = 104;
  CastlePremiumMarketPlaceDialogBooster.X_OFFSET_TEXT = 33;
  return CastlePremiumMarketPlaceDialogBooster;
}(T.CastleDialogSubLayer);
exports.CastlePremiumMarketPlaceDialogBooster = S;
var A = require("./204.js");
var L = require("./428.js");
var P = require("./108.js");
r.classImplementsInterfaces(S, "ICollectableRendererList", "ISublayer");