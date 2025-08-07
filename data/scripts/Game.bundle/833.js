Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./393.js");
var d = require("./172.js");
var p = require("./26.js");
var h = require("./4.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = require("./1787.js");
var m = createjs.MouseEvent;
var f = function (e) {
  function CastleGenericHighscoreDialog(t) {
    var i = this;
    i._currentLeagueId = 0;
    i._currentSearchName = "";
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleGenericHighscoreDialog, e);
  CastleGenericHighscoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_search, this.dialogDisp.btn_help, this.dialogDisp.btn_leagueDown, this.dialogDisp.btn_leagueUp, this.dialogDisp.mc_listContainer.btn_top, this.dialogDisp.mc_listContainer.btn_up, this.dialogDisp.mc_listContainer.btn_down]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank, new r.LocalizedTextVO("rank")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new r.LocalizedTextVO("generic_name")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_alliance, new r.LocalizedTextVO("panel_multiinfo_alliance")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new r.LocalizedTextVO("level")).autoFitToBounds = true;
    this.dialogDisp.btn_search.toolTipText = "panel_navigation_playername";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.icon_distance.toolTipText = "distance";
    this.initItemRenderers();
  };
  CastleGenericHighscoreDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._currentLeagueId = c.int(this.dialogProperties.preselectedLeagueId);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new r.LocalizedTextVO(""));
    this._itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.txt_search, new r.LocalizedTextVO("panel_navigation_playername"));
    this._defaultSearchText = this._itxt_search.text;
    this._itxt_search.keyUp.add(this.bindFunction(this.onSearchFieldKeyDown));
    this._itxt_search.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this._itxt_search.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    h.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    h.CastleModel.highscoreData.addEventListener(d.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    h.CastleModel.highscoreData.addEventListener(d.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    for (var i = 0; i < CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++i) {
      this._itemRenderers[i].itemVO = null;
      this._itemRenderers[i].updateItem();
    }
    this.updateScrollButtons();
    this.requestHighscoreData(this.dialogProperties.preselectedOwnRank > 0 ? "" + this.dialogProperties.preselectedOwnRank : CastleGenericHighscoreDialog.OWN_RANK);
    this.dialogDisp.addEventListener(m.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleGenericHighscoreDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    if (this._itxt_search) {
      this._itxt_search.keyUp.removeAll();
      this._itxt_search.focusIn.removeAll();
      this._itxt_search.focusOut.removeAll();
    }
    h.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    h.CastleModel.highscoreData.removeEventListener(d.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    h.CastleModel.highscoreData.removeEventListener(d.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.dialogDisp.removeEventListener(m.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleGenericHighscoreDialog.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.scrollUp();
    } else if (e.delta > 0) {
      this.scrollDown();
    }
  };
  CastleGenericHighscoreDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_search:
          this.onConfirmSearchField();
          break;
        case this.dialogDisp.btn_leagueUp:
          this.scrollLeagueUp();
          break;
        case this.dialogDisp.btn_leagueDown:
          this.scrollLeagueDown();
          break;
        case this.dialogDisp.mc_listContainer.btn_top:
          this.requestHighscoreData("1");
          break;
        case this.dialogDisp.mc_listContainer.btn_up:
          this.scrollUp();
          break;
        case this.dialogDisp.mc_listContainer.btn_down:
          this.scrollDown();
          break;
        case this.dialogDisp.btn_help:
          E.CastleDialogHandler.getInstance().showHelper("", s.Localize.text(this.helpTextId));
      }
    }
  };
  Object.defineProperty(CastleGenericHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_highscore";
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericHighscoreDialog.prototype.onConfirmSearchField = function () {
    if (this._itxt_search.text != "" && this._itxt_search.text != this._defaultSearchText) {
      this._currentSearchName = this._itxt_search.text;
      this.requestHighscoreData(this._currentSearchName);
    }
  };
  CastleGenericHighscoreDialog.prototype.onGetHighscoreDataError = function (e) {
    this.isWaitingForServerMessage = false;
    this._currentSearchName = "";
  };
  CastleGenericHighscoreDialog.prototype.onGetHighscoreData = function (e) {
    this.isWaitingForServerMessage = false;
    this._currentLeagueId = e.leagueId;
    this.initItemRenderers();
    var t;
    var i = e.params[0].L;
    var n = 0;
    for (var o = 0; o < CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++o) {
      var a = this._itemRenderers[o];
      var s = null;
      if (o < i.length) {
        var r = i[o];
        s = new _.CastlePointEventHighscoreItemVO();
        var l = new O.WorldMapOwnerInfoVO();
        l.fillFromParamObject(r[2]);
        s.ownerInfo = l;
        n = c.int(s.rank = c.int(r[0]));
        s.amount = c.int(r[1]);
      }
      a.itemVO = s;
      a.updateItem(this._currentSearchName);
      if (!a.isSelected() && s && s.rank == Number(this._currentSearchName)) {
        t = a;
      }
    }
    if (t) {
      t.select();
    }
    this.updateScrollButtons(n, e.params[0].LR);
    this._currentSearchName = "";
  };
  CastleGenericHighscoreDialog.prototype.updateScrollButtons = function (e = 0, t = 0) {
    var i = !!this._itemRenderers[0].itemVO && this._itemRenderers[0].itemVO.rank > 1;
    var n = e < t;
    g.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_top, i);
    g.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_up, i);
    g.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_down, n);
  };
  CastleGenericHighscoreDialog.prototype.scrollUp = function () {
    if (!this.isWaitingForServerMessage && this._itemRenderers[0].itemVO) {
      var e = c.int(Math.max(this._itemRenderers[0].itemVO.rank - CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS + CastleGenericHighscoreDialog.SCROLL_DELTA, 0));
      this.requestHighscoreData("" + e);
    }
  };
  CastleGenericHighscoreDialog.prototype.scrollDown = function () {
    if (!this.isWaitingForServerMessage && this._itemRenderers[0].itemVO) {
      var e = c.int(this._itemRenderers[0].itemVO.rank + CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS + CastleGenericHighscoreDialog.SCROLL_DELTA);
      this.requestHighscoreData("" + e);
    }
  };
  CastleGenericHighscoreDialog.prototype.scrollLeagueUp = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId++;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId >= this.dialogProperties.numberOfLeagues + 1) {
        this._currentLeagueId = 1;
      }
      var e = this._currentLeagueId == this.dialogProperties.ownLeagueID ? "-1" : "1";
      this.requestHighscoreData(e, this._currentLeagueId);
    }
  };
  CastleGenericHighscoreDialog.prototype.scrollLeagueDown = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId--;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId <= 0) {
        this._currentLeagueId = c.int(this.dialogProperties.numberOfLeagues);
      }
      var e = this._currentLeagueId == this.dialogProperties.ownLeagueID ? "-1" : "1";
      this.requestHighscoreData(e, this._currentLeagueId);
    }
  };
  CastleGenericHighscoreDialog.prototype.initItemRenderers = function () {
    if (!this._itemRenderers) {
      this._itemRenderers = [];
      for (var e = 0; e < CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++e) {
        this._itemRenderers.push(new y.CastleGenericHighscoreDialogItemRenderer(this.dialogDisp.mc_listContainer["i" + e]));
      }
    }
  };
  CastleGenericHighscoreDialog.prototype.onSearchFieldKeyDown = function (e) {
    if (e.key == o.Keyboard.ENTER) {
      document.activeElement.blur();
      this.onConfirmSearchField();
    }
  };
  CastleGenericHighscoreDialog.prototype.onFocusInSearchText = function (e) {
    if (this._itxt_search.text == this._defaultSearchText) {
      this._itxt_search.clearText();
    }
  };
  CastleGenericHighscoreDialog.prototype.onFocusOutSearchText = function (e) {
    if (this._itxt_search.text == "") {
      this._itxt_search.textContentVO = new l.TextVO(this._defaultSearchText);
      this._currentSearchName = "";
    }
  };
  CastleGenericHighscoreDialog.prototype.onRemoveSpecialEvent = function (e) {
    this.hide();
    this.destroy();
  };
  CastleGenericHighscoreDialog.prototype.requestHighscoreData = function (e, t = -1) {
    this.isWaitingForServerMessage = true;
    h.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetHighscoreVO(e, this.dialogProperties.highscoreType, t > 0 ? t : this._currentLeagueId));
  };
  Object.defineProperty(CastleGenericHighscoreDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericHighscoreDialog.__initialize_static_members = function () {
    CastleGenericHighscoreDialog.OWN_RANK = "-1";
    CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS = 8;
    CastleGenericHighscoreDialog.SCROLL_DELTA = 3;
  };
  return CastleGenericHighscoreDialog;
}(C.CastleExternalDialog);
exports.CastleGenericHighscoreDialog = f;
var O = require("./316.js");
var E = require("./9.js");
var y = require("./3811.js");
a.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();