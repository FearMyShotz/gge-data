Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./49.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./28.js");
var _ = require("./312.js");
var m = require("./397.js");
var f = require("./21.js");
var O = require("./32.js");
var E = require("./183.js");
var y = require("./44.js");
var b = require("./4.js");
var D = require("./35.js");
var I = require("./740.js");
var T = require("./741.js");
var v = require("./8.js");
var S = require("./185.js");
var A = require("./11.js");
var L = require("./2564.js");
var P = require("./2565.js");
var M = createjs.Point;
var R = function (e) {
  function CastleMinuteSkipDialog() {
    var t = this;
    t.STATE_UNDEFINED = 0;
    t.STATE_DEFAULT = 1;
    t.STATE_FREESKIP = 2;
    t.STATE_PRIMESALE = 3;
    t._currentState = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleMinuteSkipDialog.NAME) || this;
  }
  n.__extends(CastleMinuteSkipDialog, e);
  CastleMinuteSkipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_fullSkip, new p.LocalizedTextVO("dialog_timeSkip_fullSkipCooldownDescription"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_freeSkipOverlay.txt_freeSkipAvailable, new p.LocalizedTextVO("dialog_timeSkip_freeSkipOverlay"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_noMinuteSkips.txt_noMinuteSkips, new p.LocalizedTextVO(y.SpecialServerHelper.checkTextIDForSkinText("dialog_timeSkip_inventoryEmpty")));
    this._progressBar = new I.AdvancedProgressBar(this.dialogDisp.mc_progress.mc_bar, new T.HorizontalCallbackProgressBehaviour(this.bindFunction(this.onProgressAnimationUpdate), this.bindFunction(this.onProgressAnimationComplete)));
    this._progressBar.scaleX = 0;
    this._feedbackProgressBar = new a.BasicProgressBar(this.dialogDisp.mc_progress.mc_feedbackBar);
    this._feedbackProgressBar.scaleX = 0;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_progress.mouseChildren = false;
    this.dialogDisp.mc_progress.toolTipText = "resttime";
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_fullSkip, this.dialogDisp.mc_itemContainer.btn_up, this.dialogDisp.mc_itemContainer.btn_down, this.dialogDisp.mc_itemContainer.item0.btn_skip, this.dialogDisp.mc_itemContainer.item1.btn_skip]);
    this._minuteSkipList = new L.CastleMinuteSkipItemScrollList(this.dialogDisp.mc_itemContainer, this.dialogDisp.mc_itemContainer);
    this._minuteSkipList.scrollItemClass = w.CastleMinuteSkipScrollItem;
  };
  CastleMinuteSkipDialog.prototype.onProgressAnimationUpdate = function (e, t) {
    this.updateDialog(null);
  };
  CastleMinuteSkipDialog.prototype.onProgressAnimationComplete = function () {};
  CastleMinuteSkipDialog.prototype.showLoaded = function (t = null) {
    if (this.arePropertiesValid) {
      e.prototype.showLoaded.call(this, t);
      this._currentState = this.STATE_UNDEFINED;
      this.isWaitingForServerMessage = false;
      this.resetAnimationValues();
      this._minuteSkipList.clear();
      for (var i = b.CastleModel.currencyData.getMinuteSkips(), n = 0; n < i.length; n++) {
        var o = i[n];
        if (o.amount > 0) {
          this._minuteSkipList.pushContent(new P.CastleMinuteSkipScrollItemVO(o));
        }
      }
      this._minuteSkipList.initList(this.initialStartIndex);
      this.dialogDisp.mc_noMinuteSkips.visible = this._minuteSkipList.voList.length == 0;
      this.updateInfoArea();
      this._progressBar.kill();
      this.deduceTime(0);
    }
  };
  Object.defineProperty(CastleMinuteSkipDialog.prototype, "initialStartIndex", {
    get: function () {
      var e = 0;
      for (var t = 0; t < this._minuteSkipList.voList.length; t++) {
        e = t;
        if (this._minuteSkipList.voList[t].minuteSkipVO.xmlCurrencyVO.minutesSkipValue * C.ClientConstTime.MINUTES_2_SEC >= this.dialogProperties.getRemainingTime()) {
          break;
        }
      }
      return Math.max(0, e - 1);
    },
    enumerable: true,
    configurable: true
  });
  CastleMinuteSkipDialog.prototype.resetAnimationValues = function () {
    this._feedbackProgressBar.scaleX = 0;
    b.CastleModel.timerData.addEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateDialog));
  };
  CastleMinuteSkipDialog.prototype.addEventListenerOnShow = function () {
    b.CastleModel.allianceHelpRequestData.addEventListener(_.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.onAllianceHelp));
    b.CastleModel.timerData.addEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateDialog));
    this._minuteSkipList.addEventListener(c.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.controller.addEventListener(m.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS, this.bindFunction(this.onUseSucess));
    this.controller.addEventListener(m.CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL, this.bindFunction(this.onUseFail));
    this.controller.addEventListener(O.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    b.CastleModel.treasureMapData.addEventListener(E.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onRefreshTreasureMap));
  };
  CastleMinuteSkipDialog.prototype.removeEventListenerOnHide = function () {
    b.CastleModel.allianceHelpRequestData.removeEventListener(_.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.onAllianceHelp));
    b.CastleModel.timerData.removeEventListener(f.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateDialog));
    this._minuteSkipList.removeEventListener(c.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.controller.removeEventListener(m.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS, this.bindFunction(this.onUseSucess));
    this.controller.removeEventListener(m.CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL, this.bindFunction(this.onUseFail));
    this.controller.removeEventListener(O.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    b.CastleModel.treasureMapData.removeEventListener(E.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onRefreshTreasureMap));
    if (this._progressBar) {
      this._progressBar.kill();
    }
  };
  CastleMinuteSkipDialog.prototype.onRefreshTreasureMap = function (e) {
    if (B.instanceOfClass(this.dialogProperties, "SkippableCooldownMinuteSkipProperties")) {
      var t = this.dialogProperties.mapobjectVO;
      if (t.mapID > 0) {
        var i = b.CastleModel.treasureMapData.getTreasureMapByID(t.mapID);
        if (i) {
          t.tMapNode = i.getNodeById(t.tMapNode.nodeID);
        }
      }
    }
  };
  CastleMinuteSkipDialog.prototype.onAllianceHelp = function (e) {
    if (e.type == _.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE && e.requestVO.requestTypeId == u.AllianceConst.ALLIANCE_HELP_BUILD) {
      this.deduceTime(b.CastleModel.allianceHelpRequestData.decreaseBuildingTimeAbsolute);
    }
  };
  CastleMinuteSkipDialog.prototype.onUseSucess = function (e) {
    this.isWaitingForServerMessage = false;
  };
  CastleMinuteSkipDialog.prototype.onUseFail = function (e) {
    this.isWaitingForServerMessage = false;
    this.resetAnimationValues();
  };
  CastleMinuteSkipDialog.prototype.onCurrenciesUpdated = function (e) {
    this._minuteSkipList.initList(this._minuteSkipList.currentStartIndex);
  };
  CastleMinuteSkipDialog.prototype.updateInfoArea = function () {
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_time, new h.TextVO(""));
    this.itxt_timeUntilFreeSkip = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeUntilFreeSkip.txt_time, new p.LocalizedTextVO("dialog_timeSkip_timeUntilFreeSkip", []));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_discount, new p.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE));
    this.itxt_fullSkipCost = this.textFieldManager.registerTextField(this.dialogDisp.txt_fullSkipCost, new p.LocalizedTextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, this.dialogProperties.getNameText()).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_additionalInfo, this.dialogProperties.getAdditionalInfo()).autoFitToBounds = true;
    this.dialogDisp.mc_typeIcon.gotoAndStop(this.dialogProperties.getIconFrame());
    this.dialogDisp.mc_typeIcon.toolTipText = this.dialogProperties.getIconToolTipText();
    this.dialogDisp.mc_typeIcon.mouseChildren = false;
    l.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_picHolder);
    var e = this.dialogProperties.displayPicture(this.dialogDisp.mc_picHolder);
    this.scalePicture(e);
    this.updateDialog(null);
    var t = false;
    if (B.instanceOfClass(this.dialogProperties, "SkippableCooldownMinuteSkipProperties")) {
      t = !!this.dialogProperties.useSubscription;
    }
    t ||= this._currentState == this.STATE_FREESKIP && b.CastleModel.subscriptionData.isEffectTypeActive(D.EffectTypeEnum.EFFECT_TYPE_FREE_SKIP_BONUS);
    S.SubscriptionHelper.showSubscriptionStarToTextField(this.itxt_time, t, 40, new M(360, 0), this._currentState != this.STATE_FREESKIP);
  };
  CastleMinuteSkipDialog.prototype.updateDialog = function (e) {
    if (this.arePropertiesValid) {
      if (this.dialogProperties.isFreeSkipActive()) {
        this.changeState(this.STATE_FREESKIP);
      } else if (this.dialogProperties.isPrimeSaleActive()) {
        this.changeState(this.STATE_PRIMESALE);
      } else {
        this.changeState(this.STATE_DEFAULT);
      }
      this.updateTexts();
      this.setFullSkipButton(this._currentState);
      this.deduceTime(0);
    }
  };
  CastleMinuteSkipDialog.prototype.changeState = function (e) {
    if (this._currentState != e) {
      this.dialogDisp.mc_freeSkipOverlay.visible = e == this.STATE_FREESKIP;
      this.dialogDisp.mc_discount.visible = e == this.STATE_PRIMESALE;
      this.itxt_discount.textContentVO.textReplacements = e == this.STATE_PRIMESALE ? [-this.dialogProperties.getPrimeSaleDiscount()] : [0];
      this.dialogDisp.mc_timeUntilFreeSkip.visible = e != this.STATE_FREESKIP && this.dialogProperties.isFreeSkipActive();
      this._currentState = e;
      this.updateInfoArea();
    }
  };
  CastleMinuteSkipDialog.prototype.setFullSkipButton = function (e) {
    this.dialogDisp.btn_fullSkip.gotoAndStop(e);
    switch (e) {
      case this.STATE_DEFAULT:
        switch (this.dialogProperties.getSkipCost()) {
          case 0:
            this.dialogDisp.btn_fullSkip.toolTipText = {
              t: "freeSkipButton_tooltip",
              p: [this.dialogProperties.getSkipCost()]
            };
            break;
          case 1:
            this.dialogDisp.btn_fullSkip.toolTipText = {
              t: "fullSkipButtonCooldown_tooltip_singular",
              p: [this.dialogProperties.getSkipCost()]
            };
            break;
          default:
            this.dialogDisp.btn_fullSkip.toolTipText = {
              t: "fullSkipButtonCooldown_tooltip",
              p: [this.dialogProperties.getSkipCost()]
            };
        }
        break;
      case this.STATE_FREESKIP:
        this.dialogDisp.btn_fullSkip.toolTipText = "freeSkipButton_tooltip";
        break;
      case this.STATE_PRIMESALE:
        var t = d.Localize.text("fullSkipButton_tooltip", [this.dialogProperties.getSkipCost()]) + "\n";
        if (this.dialogProperties.getRemainingPrimeSaleTime() >= C.ClientConstTime.HOURES_2_SEC) {
          if (C.ClientConstTime.isOneHour(this.dialogProperties.getRemainingPrimeSaleTime())) {
            t += d.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipHours_singular", [new p.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.getPrimeSaleDiscount()])]);
          } else {
            t += d.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipHours_plural", [new p.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.getPrimeSaleDiscount()]), (this.dialogProperties.getRemainingPrimeSaleTime() * C.ClientConstTime.SEC_2_HOURES).toFixed(1)]);
          }
        } else if (C.ClientConstTime.isOneMinute(this.dialogProperties.getRemainingPrimeSaleTime())) {
          t += d.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipMinutes_singular", [new p.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.getPrimeSaleDiscount()])]);
        } else {
          t += d.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipMinutes_plural", [new p.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.getPrimeSaleDiscount()]), (this.dialogProperties.getRemainingPrimeSaleTime() / C.ClientConstTime.MINUTES_2_SEC).toFixed(0)]);
        }
        this.dialogDisp.btn_fullSkip.toolTipText = t;
    }
  };
  CastleMinuteSkipDialog.prototype.updateTexts = function () {
    var e = this.dialogProperties.getSkipCost() == 0 ? "dialog_timeSkip_freeSkipPrice" : this.dialogProperties.getSkipCost() == 1 ? "dialog_timeSkip_fullSkipPrice_singular" : "dialog_timeSkip_fullSkipPrice_plural";
    if (this.itxt_fullSkipCost.textContentVO) {
      this.itxt_fullSkipCost.textContentVO.textId = e;
      this.itxt_fullSkipCost.textContentVO.textReplacements = [this.dialogProperties.getSkipCost()];
    }
    this.itxt_time.textContentVO.stringValue = s.TimeStringHelper.getHoureMinuteSecondTimeString(this.dialogProperties.getRemainingTime());
  };
  CastleMinuteSkipDialog.prototype.getRemainingTimeScale = function (e) {
    return Math.min(Math.max(1 - e / this.dialogProperties.getTotalTime(), 0), 1);
  };
  CastleMinuteSkipDialog.prototype.onClick = function (e) {
    if (v.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          V.CastleDialogHandler.getInstance().showHelper("", d.Localize.text(y.SpecialServerHelper.checkTextIDForSkinText("dialog_timeSkip_help")));
          break;
        case this.dialogDisp.btn_fullSkip:
          if (!this.isWaitingForServerMessage && this.arePropertiesValid) {
            b.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.getFullSkipCommand());
          }
          this.hide();
      }
    }
  };
  CastleMinuteSkipDialog.prototype.onScrollItemClick = function (e) {
    if (v.ButtonHelper.isButtonEnabled(e.scrollItem.disp.btn_skip) && !this.isWaitingForServerMessage && this.arePropertiesValid && !(this.dialogProperties.getRemainingTime() <= 0) && e.originTarget == e.scrollItem.disp.btn_skip) {
      var t = e.scrollItem.scrollItemVO.minuteSkipVO;
      b.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.getMinuteSkipCommand(b.CastleModel.currencyData.getXmlCurrencyById(t.id).jsonKey));
      this.isWaitingForServerMessage = true;
      var i = g.int(t.xmlCurrencyVO.minutesSkipValue * C.ClientConstTime.MINUTES_2_SEC);
      this.deduceTime(i);
      this.clickedSkipButton = e.scrollItem.disp.btn_skip;
      v.ButtonHelper.enableButton(this.clickedSkipButton, false);
    }
  };
  CastleMinuteSkipDialog.prototype.deduceTime = function (e) {
    var t = this.getRemainingTimeScale(this.dialogProperties.getRemainingTime() - e);
    this._feedbackProgressBar.scaleX = t;
    if (e > 0) {
      this._progressBar.fromTo(this._progressBar.scaleX, t);
    } else {
      this._progressBar.scaleX = t;
    }
  };
  Object.defineProperty(CastleMinuteSkipDialog.prototype, "arePropertiesValid", {
    get: function () {
      if (!this.dialogProperties.isSkipAppliable()) {
        this.layoutManager.hideDialog(x.CastleExternalPreloaderDialog);
        this.hide();
      }
      return this.dialogProperties.isSkipAppliable();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMinuteSkipDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMinuteSkipDialog.prototype.scalePicture = function (e) {
    e.scaleX = 1;
    e.scaleY = 1;
    var t = CastleMinuteSkipDialog.PICTURE_WIDTH / e.width;
    if (!(t > 1)) {
      if (e.height * t > CastleMinuteSkipDialog.PICTURE_HEIGHT) {
        t = CastleMinuteSkipDialog.PICTURE_HEIGHT / e.height;
      }
      e.scaleX = e.scaleY = t;
    }
  };
  CastleMinuteSkipDialog.NAME = "CastleMinuteSkip";
  CastleMinuteSkipDialog.ICONFRAME_BUILDING = 1;
  CastleMinuteSkipDialog.ICONFRAME_DEMOLISH = 2;
  CastleMinuteSkipDialog.ICONFRAME_REPAIR = 3;
  CastleMinuteSkipDialog.ICONFRAME_RESOURCE_TRANSFER = 4;
  CastleMinuteSkipDialog.ICONFRAME_UNIT_TRANSFER = 5;
  CastleMinuteSkipDialog.ICONFRAME_RESEARCH = 6;
  CastleMinuteSkipDialog.ICONFRAME_ATTACK_COOLDOWN = 7;
  CastleMinuteSkipDialog.PICTURE_WIDTH = 110;
  CastleMinuteSkipDialog.PICTURE_HEIGHT = 155;
  return CastleMinuteSkipDialog;
}(A.CastleExternalDialog);
exports.CastleMinuteSkipDialog = R;
o.classImplementsInterfaces(R, "ICollectableRendererList");
var V = require("./9.js");
var x = require("./154.js");
var w = require("./2566.js");
var B = require("./1.js");