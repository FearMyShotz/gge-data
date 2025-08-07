Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./16.js");
var m = require("./123.js");
var f = require("./21.js");
var O = require("./26.js");
var E = require("./528.js");
var y = require("./4.js");
var b = require("./180.js");
var D = require("./27.js");
var I = require("./42.js");
var T = require("./8.js");
var v = require("./35.js");
var S = require("./1425.js");
var A = function (e) {
  function CastlePremiumMarketPlaceDialogVIP(t) {
    var i = this;
    i._currentLevel = 1;
    i._currentHighlightLevel = 1;
    i._vipPointsDiscount = 0;
    i._vipTimeDiscount = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastlePremiumMarketPlaceDialogVIP, e);
  CastlePremiumMarketPlaceDialogVIP.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.initBasicButtons([this.subLayerDisp.btn_activateVIP, this.subLayerDisp.btn_addPremiumPoints, this.subLayerDisp.btn_progressMarker_level1, this.subLayerDisp.btn_progressMarker_level2, this.subLayerDisp.btn_progressMarker_level3, this.subLayerDisp.btn_progressMarker_level4, this.subLayerDisp.btn_progressMarker_level5, this.subLayerDisp.btn_progressMarker_level6, this.subLayerDisp.btn_progressMarker_level7, this.subLayerDisp.btn_progressMarker_level8, this.subLayerDisp.btn_progressMarker_level9, this.subLayerDisp.btn_progressMarker_level10, this.subLayerDisp.btn_scrollVIPLevel_down, this.subLayerDisp.btn_scrollVIPLevel_left, this.subLayerDisp.btn_scrollVIPLevel_right, this.subLayerDisp.btn_scrollVIPLevel_up]);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new p.LocalizedTextVO("dialog_VipScreen_description_copy_v2", [u.PlayerConst.DAILY_VIP_POINTS_LOSS]), new a.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_runtimeLabel, new p.LocalizedTextVO("dialog_VipScreen_vipTime")).verticalAlign = I.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_premiumPointsLabel, new p.LocalizedTextVO("dialog_VipScreen_premiumPoints_v2")).verticalAlign = I.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.subLayerDisp.mc_progressbar.mouseChildren = false;
    this.levelMarkers = [];
    for (var i = 1; i <= 10; i++) {
      var n = this.subLayerDisp.getChildByName("btn_progressMarker_level" + i);
      this.textFieldManager.registerTextField(n.txt_level, new h.NumberVO(i), new a.InternalGGSTextFieldConfigVO(true));
      n.toolTipText = {
        t: "dialog_VipScreen_vipLevel_v2",
        p: [i]
      };
      this.levelMarkers.push(n);
    }
    this._buyVipTimeButton = new M.ButtonBuyVipTimeComponent(this.subLayerDisp.btn_activateVIP.basicButton, this.subLayerDisp.btn_activateVIP.txt_activate);
    this._scrollComponent = new R.CastleTextScrollComponent(new b.CastleTextScrollVO(this.subLayerDisp.txt_bonusDesc_middle, this.subLayerDisp.btn_scrollVIPLevel_up, this.subLayerDisp.btn_scrollVIPLevel_down, null, null, [this.subLayerDisp.levelScrollBackground]));
    this._scrollComponent.invisibleOnFit = true;
    this._scrollComponent.hideArrowsOnScrollToEdges = true;
    this.itxt_BonusLevelContent = this.textFieldManager.registerTextField(this.subLayerDisp.txt_bonusDesc_middle, new g.TextVO(V.CastleVIPLevelInfoTextComposer.generateBonusText(y.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentHighlightLevel))), new a.InternalGGSTextFieldConfigVO(true));
    this.updateVIPData();
    this._currentHighlightLevel = this._currentLevel;
    this.setLevelBonusText();
    y.CastleModel.vipData.addEventListener(E.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onDataChanged));
    y.CastleModel.timerData.addEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    y.CastleModel.specialEventData.addEventListener(O.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    y.CastleModel.specialEventData.addEventListener(O.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    this.checkVipPackagePrimeSale();
    this.handleDiscountIcons();
    this._buyVipTimeButton.onShow();
    this._scrollComponent.onShow();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.onEventsChange = function (e) {
    this.checkVipPackagePrimeSale();
    this.handleDiscountIcons();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.handleDiscountIcons = function () {
    if (this._vipPointsDiscount > 0) {
      if (!this._vipPointsDiscountIcon) {
        this._vipPointsDiscountIcon = new Library.CastleInterfaceElements_Icons.Icon_Generic_Discount();
        s.MovieClipHelper.scaleToFit(this._vipPointsDiscountIcon, 40, 45);
        this._vipPointsDiscountIcon.x = -this.subLayerDisp.btn_addPremiumPoints.width / 2;
        this._vipPointsDiscountIcon.y = -this.subLayerDisp.btn_addPremiumPoints.height / 2 + CastlePremiumMarketPlaceDialogVIP.DISCOUNT_ICON_OFFSET;
      }
      this.textFieldManager.registerTextField(this._vipPointsDiscountIcon.txt_value, new p.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this._vipPointsDiscount]));
      this.subLayerDisp.btn_addPremiumPoints.addChild(this._vipPointsDiscountIcon);
    } else if (this._vipPointsDiscountIcon && this._vipPointsDiscountIcon.stage) {
      this._vipPointsDiscountIcon.parent.removeChild(this._vipPointsDiscountIcon);
    }
    if (this._vipTimeDiscount > 0) {
      if (!this._vipTimeDiscountIcon) {
        this._vipTimeDiscountIcon = new Library.CastleInterfaceElements_Icons.Icon_Generic_Discount();
        s.MovieClipHelper.scaleToFit(this._vipTimeDiscountIcon, 40, 45);
        this._vipTimeDiscountIcon.x = -this.subLayerDisp.btn_activateVIP.width / 2;
        this._vipTimeDiscountIcon.y = -this.subLayerDisp.btn_activateVIP.height / 2 + CastlePremiumMarketPlaceDialogVIP.DISCOUNT_ICON_OFFSET;
      }
      this.textFieldManager.registerTextField(this._vipTimeDiscountIcon.txt_value, new p.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this._vipTimeDiscount]));
      this.subLayerDisp.btn_activateVIP.addChild(this._vipTimeDiscountIcon);
    } else if (this._vipTimeDiscountIcon && this._vipTimeDiscountIcon.stage) {
      this._vipTimeDiscountIcon.parent.removeChild(this._vipTimeDiscountIcon);
    }
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.hide = function () {
    e.prototype.hide.call(this);
    y.CastleModel.vipData.removeEventListener(E.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onDataChanged));
    y.CastleModel.timerData.removeEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    y.CastleModel.specialEventData.removeEventListener(O.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    y.CastleModel.specialEventData.removeEventListener(O.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    if (this._buyVipTimeButton) {
      this._buyVipTimeButton.onHide();
    }
    if (this._scrollComponent) {
      this._scrollComponent.onHide();
    }
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.onDataChanged = function (e) {
    this.updateVIPData();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.onTimerUpdate = function (e) {
    if (y.CastleModel.vipData.vipModeActive) {
      this.itxt_runtimeValue.textContentVO.stringValue = D.CastleTimeStringHelper.getEventTimeString(y.CastleModel.vipData.remainingVIPTimeInSeconds);
    } else {
      this.itxt_runtimeValue = this.textFieldManager.registerTextField(this.subLayerDisp.txt_runtimeValue, new p.LocalizedTextVO("dialog_VipScreen_vipTime_notActive"), new a.InternalGGSTextFieldConfigVO(true));
      y.CastleModel.timerData.removeEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
    this.itxt_runtimeValue.color = y.CastleModel.vipData.vipModeActive ? _.ClientConstColor.GENERIC_GREEN : _.ClientConstColor.GENERIC_RED;
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.updateVIPData = function () {
    this._currentLevel = C.int(y.CastleModel.vipData.currentVIPLevel);
    if (y.CastleModel.vipData.vipModeActive) {
      var e = D.CastleTimeStringHelper.getEventTimeString(y.CastleModel.vipData.remainingVIPTimeInSeconds);
      this.itxt_runtimeValue = this.textFieldManager.registerTextField(this.subLayerDisp.txt_runtimeValue, new g.TextVO(e), new a.InternalGGSTextFieldConfigVO(true));
      y.CastleModel.timerData.addEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    } else {
      this.itxt_runtimeValue = this.textFieldManager.registerTextField(this.subLayerDisp.txt_runtimeValue, new p.LocalizedTextVO("dialog_VipScreen_vipTime_notActive"), new a.InternalGGSTextFieldConfigVO(true));
    }
    this.itxt_runtimeValue.color = y.CastleModel.vipData.vipModeActive ? _.ClientConstColor.GENERIC_GREEN : _.ClientConstColor.GENERIC_RED;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_premiumPointsValue, new d.LocalizedNumberVO(y.CastleModel.vipData.currentPremiumPoints), new a.InternalGGSTextFieldConfigVO(true));
    this._currentHighlightLevel = this._currentLevel;
    this.setButtonVisibility();
    this.setProgressbar();
    this.setLevelBonusText();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.setProgressbar = function () {
    var e = y.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentLevel + 1);
    if (e) {
      var t = C.int(e.minVIPPoints - y.CastleModel.vipData.currentPremiumPoints);
      this.subLayerDisp.mc_progressbar.toolTipText = t == 1 ? {
        t: "dialog_VipScreen_vipPointsThreshold_singular_v2",
        p: [e.levelID]
      } : {
        t: "dialog_VipScreen_vipPointsThreshold_v2",
        p: [t, e.levelID]
      };
    } else {
      this.subLayerDisp.mc_progressbar.toolTipText = {
        t: "dialog_VipBonus_message_header_v2",
        p: [y.CastleModel.vipData.maxLevel]
      };
    }
    this.subLayerDisp.mc_progressbar.mc_mask.scaleX = this.calcProgressbarScale();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.calcProgressbarScale = function () {
    if (this._currentLevel == y.CastleModel.vipData.maxLevel) {
      return 1;
    }
    var e = 1 / (y.CastleModel.vipData.maxLevel - 1);
    var t = y.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentLevel);
    var i = Number(y.CastleModel.vipData.currentPremiumPoints - t.minVIPPoints) / (t.maxVIPPoints - t.minVIPPoints);
    return (this._currentLevel - 1) * e + i * e;
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.checkVipPackagePrimeSale = function () {
    this._vipPointsDiscount = 0;
    this._vipTimeDiscount = 0;
    var e = r.castAs(y.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES), "EventPackagePrimeSaleEventVO");
    if (e) {
      for (var t = 0, i = e.packageIDs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = y.CastleModel.eventPackageData.getEventPackageByID(n);
          if (o && o.packageType == m.ClientConstPackages.PACKAGE_TYPE_VIP) {
            if (o.reward.itemType == L.CollectableEnum.VIP_POINTS) {
              this._vipPointsDiscount = e.discount;
            } else if (o.reward.itemType == L.CollectableEnum.VIP_TIME) {
              this._vipTimeDiscount = e.discount;
            }
          }
        }
      }
    }
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.setButtonVisibility = function () {
    if (y.CastleModel.vipData.currentPremiumPoints >= y.CastleModel.vipData.getVIPLevelInfoVOByLevel(y.CastleModel.vipData.maxLevel).minVIPPoints) {
      this.subLayerDisp.btn_addPremiumPoints.toolTipText = "dialog_buyVipPoints_maxAmountTotal_v2";
      T.ButtonHelper.enableButton(this.subLayerDisp.btn_addPremiumPoints, false);
    } else {
      this.subLayerDisp.btn_addPremiumPoints.toolTipText = "dialog_VipScreen_buyPoints_tooltip_v2";
      T.ButtonHelper.enableButton(this.subLayerDisp.btn_addPremiumPoints, true);
    }
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.setLevelBonusText = function () {
    if (this._currentHighlightLevel <= 1) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_BonusHead_left, new p.LocalizedTextVO(""));
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_bonusDesc_left, new g.TextVO(""));
      T.ButtonHelper.enableButton(this.subLayerDisp.btn_scrollVIPLevel_left, false);
      this.subLayerDisp.mc_BonusHeader_left.visible = false;
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_BonusHead_left, new p.LocalizedTextVO("dialog_VipScreen_vipLevel_v2", [this._currentHighlightLevel - 1]), new a.InternalGGSTextFieldConfigVO(true));
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_bonusDesc_left, new g.TextVO(V.CastleVIPLevelInfoTextComposer.generateBonusText(y.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentHighlightLevel - 1), CastlePremiumMarketPlaceDialogVIP.MAX_BONUS_LINES)), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
      T.ButtonHelper.enableButton(this.subLayerDisp.btn_scrollVIPLevel_left, true);
      this.subLayerDisp.mc_BonusHeader_left.visible = true;
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_BonusHead_middle, new p.LocalizedTextVO("dialog_VipScreen_vipLevel_v2", [this._currentHighlightLevel]), new a.InternalGGSTextFieldConfigVO(true));
    this.itxt_BonusLevelContent.textContentVO.stringValue = V.CastleVIPLevelInfoTextComposer.generateBonusText(y.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentHighlightLevel));
    if (this._currentHighlightLevel >= y.CastleModel.vipData.maxLevel) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_BonusHead_right, new p.LocalizedTextVO(""));
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_bonusDesc_right, new g.TextVO(""));
      T.ButtonHelper.enableButton(this.subLayerDisp.btn_scrollVIPLevel_right, false);
      this.subLayerDisp.mc_BonusHeader_right.visible = false;
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_BonusHead_right, new p.LocalizedTextVO("dialog_VipScreen_vipLevel_v2", [this._currentHighlightLevel + 1]), new a.InternalGGSTextFieldConfigVO(true));
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_bonusDesc_right, new g.TextVO(V.CastleVIPLevelInfoTextComposer.generateBonusText(y.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentHighlightLevel + 1), CastlePremiumMarketPlaceDialogVIP.MAX_BONUS_LINES)), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
      T.ButtonHelper.enableButton(this.subLayerDisp.btn_scrollVIPLevel_right, true);
      this.subLayerDisp.mc_BonusHeader_right.visible = true;
    }
    for (var e = [this.subLayerDisp.mc_BonusHeader_left, this.subLayerDisp.mc_BonusHeader_middle, this.subLayerDisp.mc_BonusHeader_right], t = this._currentLevel - this._currentHighlightLevel + 1, i = 0; i < e.length; i++) {
      e[i].gotoAndStop(1);
    }
    if (t >= 0 && t < e.length) {
      e[t].gotoAndStop(2);
    }
    this._scrollComponent.scrollToStart();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.scrollLevelBonus = function (e) {
    this._currentHighlightLevel += e;
    this.setLevelBonusText();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.jumpToLevelBonus = function (e) {
    this._currentHighlightLevel = e;
    this.setLevelBonusText();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.onClick = function (t) {
    if (T.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_activateVIP:
          this._buyVipTimeButton.onClickButton();
          break;
        case this.subLayerDisp.btn_addPremiumPoints:
          P.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleVIPBuyPointsTimeDialog, new S.CastleVIPBuyPointsTimeDialogProperties(L.CollectableEnum.VIP_POINTS));
          break;
        case this.subLayerDisp.btn_scrollVIPLevel_left:
          this.scrollLevelBonus(CastlePremiumMarketPlaceDialogVIP.SCROLL_LEFT);
          break;
        case this.subLayerDisp.btn_scrollVIPLevel_right:
          this.scrollLevelBonus(CastlePremiumMarketPlaceDialogVIP.SCROLL_RIGHT);
      }
      if (this.levelMarkers != null) {
        for (var i = 0, n = this.levelMarkers; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined && t.target == o) {
            var a = C.int(this.levelMarkers.indexOf(o) + 1);
            this.jumpToLevelBonus(a);
          }
        }
      }
    }
  };
  CastlePremiumMarketPlaceDialogVIP.__initialize_static_members = function () {
    CastlePremiumMarketPlaceDialogVIP.NAME = "CastlePremiumMarketPlaceDialogVIP";
    CastlePremiumMarketPlaceDialogVIP.MAX_BONUS_LINES = 10;
    CastlePremiumMarketPlaceDialogVIP.SCROLL_RIGHT = 1;
    CastlePremiumMarketPlaceDialogVIP.DISCOUNT_ICON_OFFSET = 10;
  };
  CastlePremiumMarketPlaceDialogVIP.SCROLL_LEFT = -1;
  return CastlePremiumMarketPlaceDialogVIP;
}(v.CastleDialogSubLayer);
exports.CastlePremiumMarketPlaceDialogVIP = A;
var L = require("./12.js");
var P = require("./9.js");
var M = require("./2612.js");
var R = require("./182.js");
var V = require("./1429.js");
var x = require("./1427.js");
l.classImplementsInterfaces(A, "ICollectableRendererList", "ISublayer");
A.__initialize_static_members();