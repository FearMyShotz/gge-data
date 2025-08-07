Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./393.js");
var g = require("./172.js");
var C = require("./137.js");
var _ = require("./13.js");
var m = require("./4.js");
var f = require("./9.js");
var O = require("./82.js");
var E = require("./47.js");
var y = require("./59.js");
var b = require("./8.js");
var D = require("./35.js");
var I = require("./4537.js");
var T = require("./4538.js");
var v = require("./4539.js");
var S = createjs.TimerEvent;
var A = require("./36.js");
var L = require("./121.js");
var P = function (e) {
  function CastleTemporaryServerEventDialogRanking(t, i, n) {
    var o = this;
    o._highScoreType = 0;
    o._currentMaxRank = CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS;
    o._hasRequestedOwnRank = false;
    o._currentRank = 1;
    o._rankListItems = [];
    o._hasScrollValueChanged = false;
    o._requestTimer = new l.Timer(CastleTemporaryServerEventDialogRanking.TIME_TO_REQUEST_NEW_RANK_DATA, 0);
    o._defaultSearchText = "";
    o.searchName = "";
    o.isWaitingForServerMessage = false;
    CONSTRUCTOR_HACK;
    (o = e.call(this, t) || this)._highScoreType = i;
    o.parent = n;
    o.init();
    return o;
  }
  n.__extends(CastleTemporaryServerEventDialogRanking, e);
  CastleTemporaryServerEventDialogRanking.prototype.init = function () {
    b.ButtonHelper.initButtons([this.dialogDisp.btn_info, this.dialogDisp.btn_search, this.dialogDisp.btn_findme, this.dialogDisp.mc_switch.btn_left, this.dialogDisp.mc_switch.btn_right], A.ClickFeedbackButton);
    b.ButtonHelper.initButtons([this.dialogDisp.btn_info, this.dialogDisp.btn_findme], L.ClickFeedbackButtonBackground);
    if (this.subLayerDisp.mc_multiplier) {
      b.ButtonHelper.initButton(this.dialogDisp.mc_multiplier.btn_info, -1, A.ClickFeedbackButton);
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_info.txt_text, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_moreInfo_button"))).autoFitToBounds = true;
    this._scrollComponent = new O.ModernSliderScrollComponent(new E.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addVisualElements([this.dialogDisp.mc_slider]).addMouseWheelElements([this.dialogDisp]), new y.DynamicSizeScrollStrategyVertical(true, CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS));
    this._scrollComponent.triggerSignalOnlyOnValueChanged = true;
    for (var e = 0; e < CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS; ++e) {
      this._rankListItems.push(new v.TempServerEventDialogRankingItem(this.dialogDisp.getChildByName("mc_item" + e)));
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    b.ButtonHelper.enableButton(this.dialogDisp.mc_switch.btn_left, this.castleEnv.isOnTemporaryServer);
    b.ButtonHelper.enableButton(this.dialogDisp.mc_switch.btn_right, this.castleEnv.isOnTemporaryServer);
    this.dialogDisp.btn_findme.visible = this.castleEnv.isOnTemporaryServer;
    this.dialogDisp.icon_ranking.toolTipText = "rank";
    this.dialogDisp.icon_lvl.toolTipText = "level";
    this.dialogDisp.icon_distance.toolTipText = "distance";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_switch.txt_copy, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId(this.highScoreTypeIsDaily ? "dialog_tempServer_dailyRanking_title" : "dialog_tempServer_overallRanking_title")));
    if (this.dialogDisp.icon_lvl_charge) {
      this.dialogDisp.icon_lvl_charge.visible = false;
      this.dialogDisp.icon_lvl_charge.toolTipText = "level";
    }
    if (this.dialogDisp.icon_might) {
      this.dialogDisp.icon_might.toolTipText = "playerMight";
      this.dialogDisp.icon_might.visible = this.eventVO.isMightScoring;
    }
    if (this.dialogDisp.icon_collectorPoints) {
      this.dialogDisp.icon_collectorPoints.visible = this.eventVO.isCollectorScoring;
      this.dialogDisp.icon_collectorPoints.toolTipText = "dialog_tempServer_collectPoints_tooltip_collector";
    }
    if (this.dialogDisp.mc_rankSwap_total) {
      this.dialogDisp.mc_rankSwap_total.visible = this.eventVO.isRankSwapScoring;
      this.dialogDisp.mc_rankSwap_total.toolTipText = "dialog_tempServer_rankingPoints_tooltip";
    }
    if (this.dialogDisp.mc_icon_rankSwap) {
      this.dialogDisp.mc_icon_rankSwap.visible = this.eventVO.isRankSwapScoring;
      this.dialogDisp.mc_icon_rankSwap.toolTipText = "dialog_tempServer_collectPoints_tooltip_rankSwap";
    }
    if (this.dialogDisp.mc_rank_charge) {
      this.dialogDisp.mc_rank_charge.visible = false;
      this.dialogDisp.mc_rank_charge.toolTipText = "dialog_tempServer_collectPoints_tooltip_tier_charge";
    }
    if (this.dialogDisp.mc_charge_tonic) {
      this.dialogDisp.mc_charge_tonic.visible = false;
      this.dialogDisp.mc_charge_tonic.toolTipText = "dialog_tempServer_collectPoints_tooltip_tonic_charge";
    }
    if (this.dialogDisp.mc_charge_attackable) {
      this.dialogDisp.mc_charge_attackable.visible = false;
      this.dialogDisp.mc_charge_attackable.toolTipText = "dialog_tempServer_collectPoints_tooltip_attackAble_charge";
    }
    this.dialogDisp.icon_total.toolTipText = "dialog_tempServer_rankingPoints_tooltip";
    if (this.dialogDisp.icon_total2) {
      this.dialogDisp.icon_total2.visible = this.eventVO.isRankSwapScoring && this.highScoreTypeIsDaily;
      this.dialogDisp.icon_total2.toolTipText = "dialog_tempServer_rankingPoints_tooltip";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("generic_name")));
    if (this.dialogDisp.txt_name_charge) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_name_charge, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("generic_name"))).visible = false;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_alliance, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("panel_multiinfo_alliance")));
    if (this.dialogDisp.txt_alliance_charge) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_alliance_charge, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("panel_multiinfo_alliance"))).visible = false;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.btn_findme.txt_text, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_findMe_button")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_info.txt_value, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_moreInfo_button")));
    if (this.highScoreTypeIsDaily) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_dailyRanking_title")));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_overallRanking_title")));
    }
    this.searchField = this.textFieldManager.registerTextField(this.dialogDisp.mc_find.txt_input, new u.LocalizedTextVO("dialog_highscore_search"));
    this.searchField.type = r.TextFieldType.INPUT;
    this.searchField.multiline = false;
    this._defaultSearchText = this.searchField.text;
    this.searchField.keyDown.add(this.bindFunction(this.inputKeyDown));
    this.searchField.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this.searchField.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    this.dialogDisp.mc_find.gotoAndStop(1);
    this._currentRank = 1;
    this._requestTimer.start();
    m.CastleModel.highscoreData.addEventListener(g.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onRankDataReceived));
    this._requestTimer.addEventListener(S.TIMER, this.bindFunction(this.onRequestTimerUpdate));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    this._scrollComponent.show();
    if (this._rankListItems != null) {
      for (var i = 0, n = this._rankListItems; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.onShow();
        }
      }
    }
    this.updateScrollValues(0);
    this.hideAllRankListItems();
    this.updateRankList();
    this.updateMultiplier();
    this.requestDataFromServer(-1);
  };
  CastleTemporaryServerEventDialogRanking.prototype.hide = function () {
    e.prototype.hide.call(this);
    m.CastleModel.highscoreData.removeEventListener(g.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onRankDataReceived));
    this._requestTimer.removeEventListener(S.TIMER, this.bindFunction(this.onRequestTimerUpdate));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    if (this._rankListItems != null) {
      for (var t = 0, i = this._rankListItems; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    this._scrollComponent.hide();
    this._requestTimer.stop();
    if (this.searchField) {
      this.searchField.keyDown.remove(this.bindFunction(this.inputKeyDown));
      this.searchField.focusIn.remove(this.bindFunction(this.onFocusInSearchText));
      this.searchField.focusOut.remove(this.bindFunction(this.onFocusOutSearchText));
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.inputKeyDown = function (e) {
    if (e.key == s.Keyboard.ENTER) {
      this.onSearchButton();
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.requestDataFromServer = function (e) {
    var t = e;
    if (t >= 0) {
      t += CastleTemporaryServerEventDialogRanking.RANK_OFFSET_ON_SERVER_REQUEST;
    }
    m.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetHighscoreVO("" + t, this._highScoreType));
    this._hasScrollValueChanged = false;
    this._hasRequestedOwnRank = e < 0;
  };
  CastleTemporaryServerEventDialogRanking.prototype.hideAllRankListItems = function () {
    if (this._rankListItems != null) {
      for (var e = 0, t = this._rankListItems; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.setVisibility(false);
        }
      }
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.updateRankList = function (e = null) {
    if (e) {
      this._currentRankData = e;
    }
    if (this._currentRankData) {
      this.updateScrollValues(this._currentRankData.LR);
    }
    if (this._hasRequestedOwnRank && this._currentRankData && this._currentRankData.L.length > 0) {
      this._hasRequestedOwnRank = false;
      this._currentRank = p.int(this._currentRankData.L[0][0]);
      this._scrollComponent.scrollToValue(this._currentRank, false);
    }
    for (var t = 0; t < CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS; ++t) {
      var i = this._currentRank + t;
      this._rankListItems[t].updateWithNewData(i, this.getEntryFromRankData(i), this._currentMaxRank, this.searchName != this._defaultSearchText ? this.searchName : "", this._highScoreType);
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.updateScrollValues = function (e = -1) {
    if (this._currentMaxRank >= 0) {
      this._currentMaxRank = e;
    }
    this._scrollComponent.setVisibility(this._currentMaxRank > CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS);
    this._scrollComponent.init(1, o.MathBase.max(1, this._currentMaxRank - CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS + 1), CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS, CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS);
    this._scrollComponent.scrollToValue(this._currentRank, false);
  };
  CastleTemporaryServerEventDialogRanking.prototype.updateMultiplier = function () {
    var e = this.subLayerDisp.mc_multiplier;
    var t = e != null && this.castleEnv.isOnTemporaryServer && this.highScoreTypeIsDaily;
    this.subLayerDisp.btn_info.visible = !t;
    if (t) {
      e.visible = t;
      this.textFieldManager.registerTextField(e.txt_multiplierTitle, new u.LocalizedTextVO("dialog_tempServer_dailyRanking_multiplier")).autoFitToBounds = true;
      this.textFieldManager.registerTextField(e.txt_multiplier, new u.LocalizedTextVO("value_multiplied_range", [m.CastleModel.tempServerData.currentMinMultiplier, m.CastleModel.tempServerData.currentMaxMultiplier])).autoFitToBounds = true;
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.getEntryFromRankData = function (e) {
    if (!this._currentRankData) {
      return null;
    }
    for (var t = 0; t < this._currentRankData.L.length; ++t) {
      if (e == this._currentRankData.L[t][0]) {
        return this._currentRankData.L[t];
      }
    }
    return null;
  };
  CastleTemporaryServerEventDialogRanking.prototype.onClick = function (t) {
    if (b.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.mc_slider.btn_min:
        case this.dialogDisp.mc_slider.btn_minus:
        case this.dialogDisp.mc_slider.btn_plus:
          this.requestDataFromServer(this._currentRank);
          break;
        case this.dialogDisp.btn_search:
          if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
            this.searchName = this.searchField.text;
            this.requestHighscoreData(this.searchName);
            this.dialogDisp.mc_find.gotoAndStop(2);
          }
          break;
        case this.dialogDisp.btn_findme:
          this.searchName = m.CastleModel.userData.userName;
          this.requestHighscoreData(this.searchName);
          break;
        case this.dialogDisp.btn_info:
          this.onInfoButtonClicked();
          break;
        case this.dialogDisp.mc_switch.btn_left:
        case this.dialogDisp.mc_switch.btn_right:
          this.parent.toggleRankingType();
      }
      if (this.subLayerDisp.mc_multiplier && t.target == this.subLayerDisp.mc_multiplier.btn_info) {
        this.onInfoButtonClicked();
      }
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.onInfoButtonClicked = function () {
    if (this.highScoreTypeIsDaily) {
      f.CastleDialogHandler.getInstance().registerDialogs(I.CastleTempServerInfoDialog, new T.CastleTempServerInfoDialogProperties("dialog_tempServer_moreInfo_button", "dialog_tempServer_dailyRanking_title", "dialog_tempServer_dailyRanking_desc_" + C.TempServerHelper.tmpServerEvent.settingVO.scoringSystem));
    } else {
      f.CastleDialogHandler.getInstance().registerDialogs(I.CastleTempServerInfoDialog, new T.CastleTempServerInfoDialogProperties("dialog_tempServer_moreInfo_button", "dialog_tempServer_overallRanking_title", "dialog_tempServer_overallRanking_desc"));
    }
  };
  Object.defineProperty(CastleTemporaryServerEventDialogRanking.prototype, "highScoreTypeIsDaily", {
    get: function () {
      return this._highScoreType != c.HighscoreConst.TEMP_SERVER_GLOBAL;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialogRanking.prototype.onRankDataReceived = function (e) {
    this.isWaitingForServerMessage = false;
    if (this.searchName != this._defaultSearchText && e.params[0].L && e.params[0].L[0] && e.params[0].L[0][0]) {
      this._currentRank = p.int(e.params[0].L[0][0]);
    } else {
      this._currentRank = p.int(this._scrollComponent.currentValue);
    }
    this.updateRankList(e.params[0]);
  };
  CastleTemporaryServerEventDialogRanking.prototype.onScrollValueChanged = function () {
    this.searchName = "";
    if (this._currentRank != this._scrollComponent.currentValue) {
      this._hasScrollValueChanged = true;
    }
    this._currentRank = p.int(this._scrollComponent.currentValue);
    this.updateRankList();
  };
  CastleTemporaryServerEventDialogRanking.prototype.onRequestTimerUpdate = function (e) {
    if (this._hasScrollValueChanged) {
      this.requestDataFromServer(this._currentRank);
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.onFocusInSearchText = function (e) {
    if (this.searchField.text == this._defaultSearchText) {
      this.searchField.clearText();
      this.dialogDisp.mc_find.gotoAndStop(2);
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.onFocusOutSearchText = function (e) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new u.LocalizedTextVO("dialog_highscore_search");
      this.searchName = "";
      this.dialogDisp.mc_find.gotoAndStop(1);
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.onSearchButton = function () {
    if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
      document.activeElement.blur();
      this.searchName = this.searchField.text.trim();
      this.requestHighscoreData(this.searchName);
      this.dialogDisp.mc_find.gotoAndStop(2);
    }
  };
  CastleTemporaryServerEventDialogRanking.prototype.requestHighscoreData = function (e) {
    this.isWaitingForServerMessage = true;
    m.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetHighscoreVO(e, this._highScoreType));
  };
  Object.defineProperty(CastleTemporaryServerEventDialogRanking.prototype, "eventVO", {
    get: function () {
      return C.TempServerHelper.tmpServerEvent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTemporaryServerEventDialogRanking.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialogRanking.MAX_VISIBLE_ITEMS = 7;
  CastleTemporaryServerEventDialogRanking.TIME_TO_REQUEST_NEW_RANK_DATA = 500;
  CastleTemporaryServerEventDialogRanking.RANK_OFFSET_ON_SERVER_REQUEST = 3;
  return CastleTemporaryServerEventDialogRanking;
}(D.CastleDialogSubLayer);
exports.CastleTemporaryServerEventDialogRanking = P;
a.classImplementsInterfaces(P, "ICollectableRendererList", "ISublayer");