Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./188.js");
var g = require("./410.js");
var C = require("./4.js");
var _ = require("./35.js");
var m = require("./27.js");
var f = require("./43.js");
var O = require("./259.js");
var E = require("./740.js");
var y = require("./741.js");
var b = require("./274.js");
var D = require("./42.js");
var I = require("./8.js");
var T = require("./141.js");
var v = require("./34.js");
var S = require("./93.js");
var A = require("./2439.js");
var L = require("./2440.js");
var P = createjs.Point;
var M = function (e) {
  function CastleTitleSublayer(t) {
    var i = this;
    i.lastProgress = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).textFieldManager.registerTextField(i.subLayerDisp.txt_titleList_points, new u.LocalizedTextVO("points_noValue"));
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_titleList_title, new u.LocalizedTextVO("dialog_fame_rankTitle"));
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_titleList_reward, new u.LocalizedTextVO("reward"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_titleInfo.titleDetails_rank.mc_rankInfoBox.txt_rank_header, new u.LocalizedTextVO("dialog_factionTitles_yourRank"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_titleInfo.titleDetails_rank.txt_timerDescription, new u.LocalizedTextVO("dialog_factionTitles_refreshIn_1")).autoFitToBounds = true;
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_currentTitle_header, new u.LocalizedTextVO("dialog_titles_displayedTitle"));
    i.textFieldManager.registerTextField(i.subLayerDisp.btn_titleSelection.txt_label, new u.LocalizedTextVO("dialog_titles_selectTitle")).verticalAlign = a.GGSVerticalAlign.MIDDLE;
    i.initBasicButtons([i.subLayerDisp.btn_titleSelection, i.subLayerDisp.mc_itemContainer.btn_up, i.subLayerDisp.mc_itemContainer.btn_top, i.subLayerDisp.mc_itemContainer.btn_down, i.subLayerDisp.mc_itemContainer.mc_slider.btn_slider]);
    i.selectedTitleProgressBar = new o.BasicProgressBar(i.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.progressbar);
    i.nextRankTimer = new O.CastleTimerComponent(i.textFieldManager.registerTextField(i.subLayerDisp.mc_titleInfo.titleDetails_rank.txt_timer, new d.TextVO("")), i.bindFunction(i.getTimerText));
    i.titleInfoProgressBarOriginalPosition = new P(i.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.x, i.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.y);
    i.currentProgressBar = new E.AdvancedProgressBar(i.subLayerDisp.mc_progress.progressbar, new y.HorizontalCallbackProgressBehaviour(i.bindFunction(i.onProgressAnimationUpdate), i.bindFunction(i.onProgressAnimationComplete)));
    i.mightPointsOriginalPosition = i.subLayerDisp.mc_titleInfo.mc_might ? new P(i.subLayerDisp.mc_titleInfo.mc_might.x, i.subLayerDisp.mc_titleInfo.mc_might.y) : new P(-1, -1);
    return i;
  }
  n.__extends(CastleTitleSublayer, e);
  CastleTitleSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (this.lastProgress == -1) {
      this.lastProgress = this.currentTitle != R.CastleTitleData.NULL_TITLE && this.currentTitle.nextTitleID == -1 ? 1 : this.titleData.getProgressTo(this.nextTitle);
    } else if (this.lastProgress != this.currentProgressBar.currentProgress && this.currentTitle.topX != 1) {
      this.currentProgressBar.scale(this.lastProgress);
    }
    this.initTextFields();
    this.initList(true);
    this.initSystemSymbols();
    this.updateTitleInfo();
    this.updateProgressBar();
    this.updateDecay();
    this.updateTitleSelectionButton();
    this.titleData.addEventListener(g.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitleDataUpdated));
  };
  CastleTitleSublayer.prototype.onTitleDataUpdated = function (e) {
    this.initList(false);
    this.updateTitleInfo();
    this.updateProgressBar();
    this.updateDecay();
    this.updateTitleSelectionButton();
    this.itxt_currentShownTitle.textContentVO.textId = this.shownTitle.textID;
    w.CastleTitleSystemHelper.setTitleSystemIcon(this.subLayerDisp.mc_currentSelectedSystem, this.shownTitle.titleSystem, new P(30, 29));
  };
  CastleTitleSublayer.prototype.initTextFields = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_header, new u.LocalizedTextVO(this.sublayerProperties.headerTextID));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new u.LocalizedTextVO(this.sublayerProperties.copyTextID));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.txt_selectedTitle, new u.LocalizedTextVO(this.sublayerProperties.neededPointsTextID));
    this.itxt_currentShownTitle = this.textFieldManager.registerTextField(this.subLayerDisp.txt_currentTitle, new u.LocalizedTextVO(this.shownTitle.textID));
    this.itxt_selectedProgress = this.textFieldManager.registerTextField(this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.txt_progress, new u.LocalizedTextVO(""));
    this.itxt_nextHeader = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_next_header, new u.LocalizedTextVO(""));
    this.itxt_nextTitle = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_next, new u.LocalizedTextVO(""));
    this.itxt_nextPoints = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_next_points, new c.LocalizedNumberVO(0, true));
    this.itxt_nextPoints.autoFitToBounds = true;
    this.itxt_currentHeader = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_current_header, new u.LocalizedTextVO(""));
    this.itxt_currentTitle = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_current, new u.LocalizedTextVO(""));
    this.itxt_currentPoints = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_current_points, new c.LocalizedNumberVO(0, true));
    this.itxt_currentPoints.autoFitToBounds = true;
    this.itxt_currentRank = this.textFieldManager.registerTextField(this.subLayerDisp.mc_titleInfo.titleDetails_rank.mc_rankInfoBox.txt_rank, new c.LocalizedNumberVO(0));
    this.itxt_currentTitle.autoFitToBounds = true;
    this.itxt_nextTitle.autoFitToBounds = true;
    this.initMightText();
  };
  CastleTitleSublayer.prototype.initMightText = function () {
    if (this.subLayerDisp.mc_titleInfo.mc_might) {
      this.itxt_mightTitleHeader = this.textFieldManager.registerTextField(this.subLayerDisp.mc_titleInfo.mc_might.txt_title, new u.LocalizedTextVO(""));
      this.itxt_mightTitlePoints = this.textFieldManager.registerTextField(this.subLayerDisp.mc_titleInfo.mc_might.txt_points, new c.LocalizedNumberVO(0));
      this.subLayerDisp.mc_titleInfo.mc_might.toolTipText = "dialog_gloryTitles_mightCounter_tooltip";
      this.subLayerDisp.mc_titleInfo.titleDetails_rank.mc_rankInfoBox.toolTipText = "dialog_factionTitles_refreshIn_2";
      this.subLayerDisp.mc_titleInfo.mc_might.mouseChildren = false;
      this.subLayerDisp.mc_titleInfo.titleDetails_rank.mc_rankInfoBox.mouseChildren = false;
    }
  };
  CastleTitleSublayer.prototype.initList = function (e) {
    var t = new b.BasicSliderVO(this.subLayerDisp.mc_itemContainer.mc_slider.sliderBar, this.subLayerDisp.mc_itemContainer.mc_slider.btn_slider, this.titles.length, 0, this.subLayerDisp);
    var i = p.int(this.titleList ? this.titleList.currentStartIndex : 0);
    this.hideList();
    this.titleList = new x.SliderItemScrollList(this.subLayerDisp.mc_itemContainer, this.subLayerDisp, t);
    this.titleList.scrollItemClass = A.CastleTitleScrollItem;
    for (var n = p.int(this.titles.length - 1); n >= 0; n--) {
      var o = this.titles[n];
      var a = false;
      a = e ? !!this.currentTitle && (o.titleID == this.currentTitle.nextTitleID || o.topX == 1 && this.currentTitle.topX == 1) || this.currentTitle == R.CastleTitleData.NULL_TITLE && n == 0 : this.currentlySelectedInList.title.titleID == o.titleID;
      var s = new L.CastleTitleScrollItemVO(o, a);
      if (a) {
        this.currentlySelectedInList = s;
      }
      this.titleList.pushContent(s);
    }
    this.titleList.initList(e ? this.getListStartIndex() : i);
    this.titleList.addEventListener(r.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
  };
  CastleTitleSublayer.prototype.getListStartIndex = function () {
    return p.int(Math.max(0, this.titles.length - this.currentlySelectedInList.title.orderInSystem - CastleTitleSublayer.NUMER_LIST_ITEMS + 1));
  };
  CastleTitleSublayer.prototype.initSystemSymbols = function () {
    w.CastleTitleSystemHelper.setTitleSystemIcon(this.subLayerDisp.mc_currentSelectedSystem, this.shownTitle.titleSystem, new P(30, 29));
    w.CastleTitleSystemHelper.setTitleSystemIcon(this.subLayerDisp.mc_progress.mc_nextSystem, this.sublayerProperties.titleSystem, new P(24, 23));
    w.CastleTitleSystemHelper.setTitleSystemIcon(this.subLayerDisp.mc_progress.mc_currentSystem, this.sublayerProperties.titleSystem, new P(24, 23));
    this.subLayerDisp.mc_progress.mc_nextSystem.toolTipText = w.CastleTitleSystemHelper.getTitleSystemPointsTextID(this.sublayerProperties.titleSystem);
    this.subLayerDisp.mc_progress.mc_currentSystem.toolTipText = w.CastleTitleSystemHelper.getTitleSystemPointsTextID(this.sublayerProperties.titleSystem);
  };
  CastleTitleSublayer.prototype.updateTitleInfo = function () {
    var e = this.currentlySelectedInList.title;
    var t = p.int(this.titleData.getPointsInSystem(this.sublayerProperties.titleSystem));
    var i = p.int(this.currentTitle ? this.currentTitle.orderInSystem : -1);
    if (e.orderInSystem <= i) {
      this.selectedTitleProgressBar.scaleX = 1;
      this.itxt_selectedProgress.textContentVO.textId = "dialog_gloryTitles_achieved";
    } else {
      var n = this.titleData.getProgressTo(e);
      this.selectedTitleProgressBar.scaleX = n;
      this.itxt_selectedProgress.textContentVO.textId = s.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this.itxt_selectedProgress.textContentVO.textReplacements = [new c.LocalizedNumberVO(t, false), new c.LocalizedNumberVO(e.threshold, false)];
    }
    if (t >= this.titleData.getMaxDefaultThresholdInSystem(this.sublayerProperties.titleSystem)) {
      this.setUpTitleBarPosition(this.titleInfoProgressBarOriginalPosition);
      this.setUpMightInfoPosition(this.mightPointsOriginalPosition);
      this.subLayerDisp.mc_titleInfo.titleDetails_rank.visible = true;
      this.subLayerDisp.mc_titleInfo.titleDetails_normal.visible = false;
      var o = p.int(this.titleData.getTopXRankInSystem(this.sublayerProperties.titleSystem));
      if (o > 0) {
        T.CastleTextFieldHelper.safeSetNumber(this.itxt_currentRank, o);
      } else {
        T.CastleTextFieldHelper.safeSetText(this.itxt_currentRank, "-");
      }
      this.nextRankTimer.start(this.titleData.getRankTimerRemainingSecondsOfSystem(this.sublayerProperties.titleSystem));
    } else {
      this.setUpTitleBarPosition();
      this.setUpMightInfoPosition();
      this.subLayerDisp.mc_titleInfo.titleDetails_rank.visible = false;
      this.subLayerDisp.mc_titleInfo.titleDetails_normal.visible = true;
      this.nextRankTimer.stop();
    }
    this.updateMightPointsValue(e);
  };
  CastleTitleSublayer.prototype.updateMightPointsValue = function (e) {
    if (this.itxt_mightTitleHeader && this.itxt_mightTitlePoints) {
      var t = 0;
      if (e.previousTitleID >= 0) {
        t = p.int(C.CastleModel.titleData.getTitleByTitleID(e.previousTitleID).mightValue);
      }
      var i = e.mightValue - t;
      this.itxt_mightTitleHeader.textContentVO.textId = "dialog_gloryTitles_mightCounter_header";
      this.itxt_mightTitlePoints.textContentVO.numberValue = i;
    }
  };
  CastleTitleSublayer.prototype.setUpMightInfoPosition = function (e = null) {
    if (this.subLayerDisp.mc_titleInfo.mc_might) {
      this.subLayerDisp.mc_titleInfo.mc_might.x = e ? e.x : this.subLayerDisp.mc_titleInfo.mc_mightDetailsGuide.x;
      this.subLayerDisp.mc_titleInfo.mc_might.y = e ? e.y : this.subLayerDisp.mc_titleInfo.mc_mightDetailsGuide.y;
    }
  };
  CastleTitleSublayer.prototype.setUpTitleBarPosition = function (e = null) {
    this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.x = e ? e.x : this.subLayerDisp.mc_titleInfo.mc_detailsGuide.x;
    this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.y = e ? e.y : this.subLayerDisp.mc_titleInfo.mc_detailsGuide.y;
  };
  CastleTitleSublayer.prototype.updateProgressBar = function () {
    this.itxt_currentPoints.visible = true;
    if (this.currentTitle && this.currentTitle.topX == 1) {
      this.itxt_nextHeader.textContentVO.textId = "dialog_gloryTitles_currentTitle";
      this.itxt_nextTitle.textContentVO.textId = this.currentTitle.textID;
      this.itxt_nextPoints.textContentVO.numberValue = this.titleData.getPointsInSystem(this.sublayerProperties.titleSystem);
      this.itxt_currentHeader.textContentVO.textId = "";
      this.itxt_currentTitle.textContentVO.textId = "";
      T.CastleTextFieldHelper.safeSetText(this.itxt_currentPoints, "");
      this.itxt_currentPoints.visible = false;
      this.currentProgressBar.scaleX = 1;
      this.lastProgress = 1;
    } else {
      var e = this.titleData.getProgressTo(this.nextTitle);
      this.itxt_nextHeader.textContentVO.textId = "dialog_gloryTitles_nextTitle";
      this.itxt_nextTitle.textContentVO.textId = this.nextTitle.textID;
      this.itxt_nextPoints.textContentVO.numberValue = this.nextTitle.threshold;
      this.itxt_currentHeader.textContentVO.textId = "dialog_gloryTitles_currentTitle";
      this.itxt_currentTitle.textContentVO.textId = this.currentTitle.textID;
      if (!this.titleOnLastOpen || this.currentTitle.orderInSystem > this.titleOnLastOpen.orderInSystem) {
        this.currentProgressBar.fromTo(0, e);
      } else if (this.currentTitle.orderInSystem < this.titleOnLastOpen.orderInSystem) {
        this.currentProgressBar.fromTo(1, e);
      } else {
        this.currentProgressBar.to(e);
      }
    }
    this.titleOnLastOpen = this.currentTitle;
  };
  CastleTitleSublayer.prototype.updateDecay = function () {
    if (this.subLayerDisp.mc_decay) {
      if (this.titleData.isDecaying(this.sublayerProperties.titleSystem)) {
        var e = p.int(Math.max(0, this.titleData.getHighestTitleCurrentlyHeldByThisUser(this.sublayerProperties.titleSystem).decay + this.subscriptionBonus));
        this.subLayerDisp.mc_decay.gotoAndStop(this.isSubscriptionActive ? 2 : 1);
        this.textFieldManager.registerTextField(this.subLayerDisp.mc_decay.txt_label, new u.LocalizedTextVO(this.sublayerProperties.decayTextID, [e])).verticalAlign = D.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
        this.subLayerDisp.mc_decay.visible = true;
      } else {
        this.subLayerDisp.mc_decay.visible = false;
      }
    }
  };
  Object.defineProperty(CastleTitleSublayer.prototype, "isSubscriptionActive", {
    get: function () {
      return this.sublayerProperties.titleSystem == h.ClientConstTitle.GLORY_TITLE && C.CastleModel.subscriptionData.isEffectTypeActive(_.EffectTypeEnum.EFFECT_TYPE_GLORY_DECAY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "subscriptionBonus", {
    get: function () {
      if (this.isSubscriptionActive) {
        return C.CastleModel.subscriptionData.getEffectValue(_.EffectTypeEnum.EFFECT_TYPE_GLORY_DECAY);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleSublayer.prototype.updateTitleSelectionButton = function () {
    var e = this.titleData.getDisplayableTitles(h.ClientConstTitle.DISPLAYTYPE_PREFIX).length > 1 || this.titleData.getDisplayableTitles(h.ClientConstTitle.DISPLAYTYPE_SUFFIX).length > 1;
    I.ButtonHelper.enableButton(this.subLayerDisp.btn_titleSelection, e);
    if (e) {
      this.subLayerDisp.btn_titleSelection.toolTipText = null;
    } else {
      this.subLayerDisp.btn_titleSelection.toolTipText = "dialog_gloryTitles_noTitlesSelect";
      this.subLayerDisp.btn_titleSelection.mouseChildren = false;
    }
  };
  CastleTitleSublayer.prototype.onProgressAnimationUpdate = function (e, t) {
    this.lastProgress = e.target[t];
    var i = p.int(this.nextTitle.threshold - this.currentTitle.threshold);
    var n = Math.round(this.currentTitle.threshold + i * this.lastProgress);
    T.CastleTextFieldHelper.safeSetNumber(this.itxt_currentPoints, Math.max(0, n));
  };
  CastleTitleSublayer.prototype.onProgressAnimationComplete = function () {
    T.CastleTextFieldHelper.safeSetNumber(this.itxt_currentPoints, Math.max(0, this.titleData.getPointsInSystem(this.sublayerProperties.titleSystem)));
  };
  CastleTitleSublayer.prototype.getTimerText = function (e) {
    return m.CastleTimeStringHelper.getShortTimeString(e);
  };
  CastleTitleSublayer.prototype.onScrollItemClick = function (e) {
    this.selectTitle(e.scrollItem.titleScrollItemVO);
  };
  CastleTitleSublayer.prototype.selectTitle = function (e) {
    if (e.title.currentAssigneePID > -1) {
      v.CastleDialogSubLayer.dialogHandler.registerDialogsWithTypeAndDefaultValues(B.CastlePlayerInfoDialog, new S.CastlePlayerInfoDialogProperties(e.title.currentAssigneePID), f.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
    this.currentlySelectedInList.selected = false;
    e.selected = true;
    this.currentlySelectedInList = e;
    this.titleList.initList(this.titleList.currentStartIndex);
    this.updateTitleInfo();
  };
  CastleTitleSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.hideList();
    this.nextRankTimer.stop();
    this.currentProgressBar.kill();
    this.currentProgressBar.removeMaskMC();
    this.selectedTitleProgressBar.removeMaskMC();
    this.titleOnLastOpen = this.currentTitle;
    this.titleData.removeEventListener(g.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitleDataUpdated));
  };
  CastleTitleSublayer.prototype.hideList = function () {
    if (this.titleList) {
      this.titleList.removeEventListener(r.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
      this.titleList.clear();
      this.titleList.remove();
      this.titleList = null;
    }
  };
  CastleTitleSublayer.prototype.onClick = function (e) {
    if (I.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_titleSelection:
          v.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(F.CastleTitleSelectDialog);
      }
    }
  };
  CastleTitleSublayer.prototype.showHelp = function () {
    V.CastleDialogHandler.getInstance().showHelper("", this.sublayerProperties.helpText);
  };
  Object.defineProperty(CastleTitleSublayer.prototype, "shownTitle", {
    get: function () {
      if (this.titleData.getSelectedTitleByDisplayType(h.ClientConstTitle.DISPLAYTYPE_SUFFIX) != R.CastleTitleData.NULL_TITLE) {
        return this.titleData.getSelectedTitleByDisplayType(h.ClientConstTitle.DISPLAYTYPE_SUFFIX);
      } else {
        return this.titleData.getSelectedTitleByDisplayType(h.ClientConstTitle.DISPLAYTYPE_PREFIX);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "currentTitle", {
    get: function () {
      return this.titleData.getHighestTitleCurrentlyHeldByThisUser(this.sublayerProperties.titleSystem);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "nextTitle", {
    get: function () {
      if (this.currentTitle != R.CastleTitleData.NULL_TITLE) {
        return this.titleData.getTitleByTitleID(this.currentTitle.nextTitleID);
      } else {
        return this.titleData.getTitlesFromSystem(this.sublayerProperties.titleSystem)[0];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "titles", {
    get: function () {
      return this.titleData.getTitlesFromSystem(this.sublayerProperties.titleSystem);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "titleData", {
    get: function () {
      return C.CastleModel.titleData;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleSublayer.__initialize_static_members = function () {
    CastleTitleSublayer.NUMER_LIST_ITEMS = 6;
  };
  return CastleTitleSublayer;
}(v.CastleDialogSubLayer);
exports.CastleTitleSublayer = M;
var R = require("./565.js");
var V = require("./9.js");
var x = require("./314.js");
var w = require("./106.js");
var B = require("./94.js");
var F = require("./1373.js");
l.classImplementsInterfaces(M, "ICollectableRendererList", "ISublayer");
M.__initialize_static_members();