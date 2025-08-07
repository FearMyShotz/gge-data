Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./57.js");
var d = require("./13.js");
var p = require("./3792.js");
var h = require("./8.js");
var g = require("./141.js");
var C = require("./14.js");
var _ = require("./40.js");
var m = require("./20.js");
var f = require("./82.js");
var O = require("./47.js");
var E = require("./59.js");
var y = function (e) {
  function GlobalLeaderBoardComponent(t, i = null, n = null) {
    var a = e.call(this, t) || this;
    a.items = [];
    a._openRewardDialogSignal = new u.Signal();
    a._searchDefaultTextID = n;
    h.ButtonHelper.initButtons([a.disp.btn_refresh, a.disp.btn_search, a.disp.btn_findMe, a.disp.btn_rewards], m.ClickFeedbackButtonHover);
    h.ButtonHelper.initButtons([a.disp.mc_find.mc_searchResults.btn_prev, a.disp.mc_find.mc_searchResults.btn_next, a.disp.mc_find.mc_searchResults.btn_clear], m.ClickFeedbackButtonHover, 1);
    for (var s = 0; a.disp.mc_list["mc_item" + s];) {
      var r = new i(a.disp.mc_list["mc_item" + s], a);
      a.items.push(r);
      s++;
    }
    if (a.disp) {
      a._scrollComponent = new f.ModernSliderScrollComponent(new O.SimpleScrollVO().initByParent(a.disp.mc_list.mc_slider).addMouseWheelElements([a.disp.mc_list]).addVisualElements([a.disp.mc_list.mc_slider]).addSliderBackground(a.disp.mc_list.mc_slider.mc_background), new E.DynamicSizeScrollStrategyVertical(true, a.items.length, true));
      a._scrollComponent.triggerSignalOnlyOnValueChanged = true;
    }
    a._txtInput = C.CastleComponent.textFieldManager.registerTextField(a.disp.mc_find.txt_input, new c.TextVO(""));
    a._txtInput.multiline = false;
    a._txtInput.wordwrap = false;
    a._txtInput.maxChars = 99;
    a._txtResults = C.CastleComponent.textFieldManager.registerTextField(a.disp.mc_find.mc_searchResults.txt_results, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    C.CastleComponent.textFieldManager.registerTextField(a.disp.mc_list.txt_empty, new l.LocalizedTextVO("dialog_highscore_noRankings"));
    C.CastleComponent.textFieldManager.registerTextField(a.disp.btn_rewards.txt_label, new c.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("rewards")));
    a.disp.btn_refresh.toolTipText = "refresh";
    a.disp.btn_findMe.toolTipText = "dialog_tempServer_findMe_button";
    return a;
  }
  n.__extends(GlobalLeaderBoardComponent, e);
  GlobalLeaderBoardComponent.prototype.init = function (e, t = null) {
    if (this._dataProvider) {
      this._dataProvider.removeEventListeners();
    }
    this._leagueComponent = t;
    this._dataProvider = new p.LeaderBoardDataProvider(e, this.items.length, t ? t.leagueTypeId : -1);
    if (this.isShown) {
      this.onShow();
    }
  };
  GlobalLeaderBoardComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._dataProvider) {
      this._dataProvider.removeEventListeners();
      this._dataProvider.addEventListeners();
      this._dataProvider.onWaitingSignal.add(this.bindFunction(this.onWaiting));
      this._dataProvider.onResultsUpdatedSignal.add(this.bindFunction(this.onResultsUpdated));
      this._dataProvider.getCurrentPlayerPage();
    }
    if (this._leagueComponent) {
      this._leagueComponent.onShow();
      this._leagueComponent.leagueChangeSignal.add(this.bindFunction(this.onLeagueChange));
    }
    this.updateScrollComponent(true);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.updateSearchResults();
    this.onSearchFocusOut();
    this._txtInput.focusIn.add(this.bindFunction(this.onSearchFocusIn));
    this._txtInput.focusOut.add(this.bindFunction(this.onSearchFocusOut));
    this._txtInput.keyDown.add(this.bindFunction(this.onSearchKeyDown));
    this._txtInput.change.add(this.bindFunction(this.onSearchResultChange));
    h.ButtonHelper.enableButton(this.disp.btn_refresh, true);
    this.disp.mc_list.txt_empty.visible = false;
  };
  GlobalLeaderBoardComponent.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this._dataProvider) {
      this._dataProvider.removeEventListeners();
    }
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.removeAll();
      this._scrollComponent.hide();
    }
    if (this._leagueComponent) {
      this._leagueComponent.onHide();
      this._leagueComponent.leagueChangeSignal.removeAll();
    }
    g.CastleTextFieldHelper.removeInputFocus();
    if (this._txtInput) {
      this._txtInput.focusIn.removeAll();
      this._txtInput.focusOut.removeAll();
      this._txtInput.keyDown.removeAll();
      this._txtInput.change.removeAll();
    }
  };
  GlobalLeaderBoardComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.disp.btn_refresh:
          this._dataProvider.getPageByRank(this._dataProvider.currentRank);
          h.ButtonHelper.delayEnableButton(this.disp.btn_refresh, true, 5000);
          break;
        case this.disp.btn_search:
          this.sendSearchRequest();
          break;
        case this.disp.btn_findMe:
          if (this._leagueComponent) {
            this._leagueComponent.changeToMyLeague();
          } else {
            this._dataProvider.getCurrentPlayerPage();
          }
          break;
        case this.disp.mc_find.mc_searchResults.btn_prev:
          this._dataProvider.getPreviousSearchPage();
          break;
        case this.disp.mc_find.mc_searchResults.btn_next:
          this._dataProvider.getNextSearchPage();
          break;
        case this.disp.mc_find.mc_searchResults.btn_clear:
          this._txtInput.clearText();
          document.activeElement.blur();
          this.onSearchFocusOut();
          this._dataProvider.clearSearchResults();
          this.onResultsUpdated();
          break;
        case this.disp.btn_rewards:
          this._openRewardDialogSignal.dispatch(this._dataProvider.leagueTypeID);
      }
    }
  };
  GlobalLeaderBoardComponent.prototype.onWaiting = function () {
    var e = this;
    if (this._dataProvider) {
      this.items.forEach(function (t, i) {
        if (e._dataProvider.requestedRank > -1 && e._dataProvider.requestedRank + i < e._dataProvider.totalNumberOfScores) {
          t.updateWithRank(e._dataProvider.requestedRank + i);
        } else if (e._dataProvider.currentScoreResults.length > i) {
          t.updateWithUnknown();
        } else {
          t.updateWithNull();
        }
      });
      this.updateSearchResults();
    }
  };
  GlobalLeaderBoardComponent.prototype.onResultsUpdated = function () {
    var e = this;
    if (this._dataProvider) {
      this.items.forEach(function (t, i) {
        if (e._dataProvider.currentScoreResults.length > i) {
          var n = e._dataProvider.currentSearchResults.length > 0 ? e._dataProvider.currentSearchResults[e._dataProvider.currentSearchIndex].scoreId : "";
          t.updateWithData(e._dataProvider.currentScoreResults[i], n);
        } else {
          t.updateWithNull();
        }
      });
      this.updateScrollComponent();
      this.updateSearchResults();
      this.disp.mc_list.txt_empty.visible = this._dataProvider.currentScoreResults.length <= 0;
      if (this._leagueComponent && this._leagueComponent.leagueTypeId != this._dataProvider.leagueTypeID) {
        this._leagueComponent.changeLeague(this._dataProvider.leagueTypeID);
      }
    }
  };
  GlobalLeaderBoardComponent.prototype.onScroll = function () {
    if (this._dataProvider) {
      this._dataProvider.getPageByRank(this._scrollComponent.currentValue + 1);
    }
  };
  GlobalLeaderBoardComponent.prototype.onSearchFocusIn = function () {
    this.disp.mc_find.mc_selected.visible = true;
    if (this._searchDefaultTextID && this.getSearchString() == r.Localize.text(this._searchDefaultTextID)) {
      this._txtInput.clearText();
    }
    this._txtInput.maxChars = GlobalLeaderBoardComponent.MAX_SEARCH_LENGTH;
  };
  GlobalLeaderBoardComponent.prototype.onSearchFocusOut = function () {
    this.disp.mc_find.mc_selected.visible = false;
    if (this._searchDefaultTextID && this.getSearchString() == "") {
      this._txtInput.maxChars = 99;
      this._txtInput.textContentVO.stringValue = r.Localize.text(this._searchDefaultTextID);
    }
  };
  GlobalLeaderBoardComponent.prototype.onSearchKeyDown = function (e) {
    if (e.key == a.Keyboard.ENTER) {
      document.activeElement.blur();
      this.sendSearchRequest();
    }
  };
  GlobalLeaderBoardComponent.prototype.onSearchResultChange = function () {
    this._dataProvider.clearSearchResults();
    this.onResultsUpdated();
  };
  GlobalLeaderBoardComponent.prototype.getSearchString = function () {
    return this._txtInput.text;
  };
  GlobalLeaderBoardComponent.prototype.updateScrollComponent = function (e = false) {
    var t = this._scrollComponent.currentValue;
    this._scrollComponent.init(0, Math.max(0, this._dataProvider.totalNumberOfScores - this._dataProvider.maxResultsPerPage), this._dataProvider.maxResultsPerPage, this._dataProvider.maxResultsPerPage, e);
    if (this._dataProvider.requestedRank == -1) {
      this._scrollComponent.scrollToValue(this._dataProvider.currentRank - 1, false);
    } else {
      this._scrollComponent.scrollToValue(t, false);
    }
    this._scrollComponent.show();
  };
  GlobalLeaderBoardComponent.prototype.updateSearchResults = function () {
    var e = this._dataProvider.currentSearchResults.length > 1;
    this.disp.mc_find.mc_searchResults.visible = e;
    this._txtInput.width = e ? 133 : 265;
    this._txtInput.size = e ? 14 : 16;
    this._txtResults.textContentVO.textReplacements = [this._dataProvider.currentSearchIndex + 1, this._dataProvider.currentSearchResults.length];
  };
  GlobalLeaderBoardComponent.prototype.sendSearchRequest = function () {
    if (this.getSearchString() != r.Localize.text(this._searchDefaultTextID)) {
      this._dataProvider.searchLeaderBoard(this.getSearchString());
    }
  };
  GlobalLeaderBoardComponent.prototype.onLeagueChange = function () {
    this._dataProvider.leagueTypeID = this._leagueComponent.leagueTypeId;
    this._dataProvider.getCurrentPlayerPage();
  };
  Object.defineProperty(GlobalLeaderBoardComponent.prototype, "openRewardDialogSignal", {
    get: function () {
      return this._openRewardDialogSignal;
    },
    enumerable: true,
    configurable: true
  });
  GlobalLeaderBoardComponent.MAX_SEARCH_LENGTH = 25;
  return GlobalLeaderBoardComponent;
}(_.CastleItemRenderer);
exports.GlobalLeaderBoardComponent = y;
s.classImplementsInterfaces(y, "ICollectableRendererList");