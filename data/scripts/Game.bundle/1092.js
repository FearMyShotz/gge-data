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
var g = require("./748.js");
var C = require("./8.js");
var _ = require("./11.js");
var m = require("./3711.js");
var f = createjs.MouseEvent;
var O = function (e) {
  function CastleGenericAllianceHighscoreDialog(t) {
    var i = this;
    i._currentLeagueId = 0;
    i._currentSearchName = "";
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleGenericAllianceHighscoreDialog, e);
  CastleGenericAllianceHighscoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_search, this.dialogDisp.btn_help, this.dialogDisp.mc_listContainer.btn_top, this.dialogDisp.mc_listContainer.btn_up, this.dialogDisp.mc_listContainer.btn_down]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank, new r.LocalizedTextVO("rank")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new r.LocalizedTextVO("panel_multiinfo_alliance")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_fameLevel, new r.LocalizedTextVO("dialog_allianceFame_level")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_membercount, new r.LocalizedTextVO("dialog_alliance_member")).autoFitToBounds = true;
    this.dialogDisp.btn_search.toolTipText = "dialog_highscore_search";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.initItemRenderers();
  };
  CastleGenericAllianceHighscoreDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._currentSearchName = "";
    this._currentLeagueId = c.int(this.dialogProperties.preselectedLeagueId);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new r.LocalizedTextVO(""));
    this._itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.txt_search, new r.LocalizedTextVO("dialog_highscore_search"));
    this._defaultSearchText = this._itxt_search.text;
    this._itxt_search.keyUp.add(this.bindFunction(this.onSearchFieldKeyDown));
    this._itxt_search.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this._itxt_search.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    h.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    h.CastleModel.highscoreData.addEventListener(d.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    h.CastleModel.highscoreData.addEventListener(d.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    for (var i = 0; i < CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++i) {
      this._itemRenderers[i].itemVO = null;
      this._itemRenderers[i].updateItem(this._currentSearchName);
    }
    this.updateScrollButtons();
    this.requestHighscoreData(this.dialogProperties.preselectedOwnRank > 0 ? "" + this.dialogProperties.preselectedOwnRank : CastleGenericAllianceHighscoreDialog.OWN_RANK);
    this.dialogDisp.addEventListener(f.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleGenericAllianceHighscoreDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    if (this._itxt_search) {
      this._itxt_search.keyUp.removeAll();
      this._itxt_search.focusIn.removeAll();
      this._itxt_search.focusOut.removeAll();
    }
    h.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    h.CastleModel.highscoreData.removeEventListener(d.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    h.CastleModel.highscoreData.removeEventListener(d.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.dialogDisp.removeEventListener(f.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleGenericAllianceHighscoreDialog.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.scrollUp();
    } else if (e.delta > 0) {
      this.scrollDown();
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_search:
          this.onConfirmSearchField();
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
  Object.defineProperty(CastleGenericAllianceHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_alliance_highscore";
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericAllianceHighscoreDialog.prototype.onConfirmSearchField = function () {
    if (this._itxt_search.text != "" && this._itxt_search.text != this._defaultSearchText) {
      this._currentSearchName = this._itxt_search.text;
      this.requestHighscoreData(this._currentSearchName);
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onGetHighscoreDataError = function (e) {
    this.isWaitingForServerMessage = false;
    this._currentSearchName = "";
  };
  CastleGenericAllianceHighscoreDialog.prototype.onGetHighscoreData = function (e) {
    this.isWaitingForServerMessage = false;
    this._currentLeagueId = e.leagueId;
    this.initItemRenderers();
    var t = e.params[0].L;
    var i = 0;
    for (var n = 0; n < CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++n) {
      var o = this._itemRenderers[n];
      var a = null;
      if (n < t.length) {
        var s = t[n];
        a = new m.CastlePointEventAllianceHighscoreItemVO();
        var r = new g.AllianceHighscoreInfoVO();
        r.fillFromParamObject(s[2]);
        a.allianceVO = r;
        i = c.int(a.rank = c.int(s[0]));
        a.amount = c.int(s[1]);
      }
      o.itemVO = a;
      o.updateItem(this._currentSearchName);
      if (!!a && (this._currentSearchName.toLowerCase() == a.allianceVO.allianceName.toLowerCase() || Number(this._currentSearchName) == a.rank)) {
        o;
      }
      if (o.isOwnAlliance) {
        o;
      }
    }
    this.updateScrollButtons(i, e.params[0].LR);
  };
  CastleGenericAllianceHighscoreDialog.prototype.updateScrollButtons = function (e = 0, t = 0) {
    var i = !!this._itemRenderers[0].itemVO && this._itemRenderers[0].itemVO.rank > 1;
    var n = e < t;
    C.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_top, i);
    C.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_up, i);
    C.ButtonHelper.enableButton(this.dialogDisp.mc_listContainer.btn_down, n);
  };
  CastleGenericAllianceHighscoreDialog.prototype.scrollUp = function () {
    if (!this.isWaitingForServerMessage && this._itemRenderers[0].itemVO) {
      var e = c.int(Math.max(this._itemRenderers[0].itemVO.rank - CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS + CastleGenericAllianceHighscoreDialog.SCROLL_DELTA, 0));
      this.requestHighscoreData("" + e);
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.scrollDown = function () {
    if (!this.isWaitingForServerMessage && this._itemRenderers[0].itemVO) {
      var e = c.int(this._itemRenderers[0].itemVO.rank + CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS + CastleGenericAllianceHighscoreDialog.SCROLL_DELTA);
      this.requestHighscoreData("" + e);
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.scrollLeagueUp = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId++;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId >= this.dialogProperties.numberOfLeagues + 1) {
        this._currentLeagueId = 1;
      }
      this.requestHighscoreData("1", this._currentLeagueId);
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.scrollLeagueDown = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId--;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId <= 0) {
        this._currentLeagueId = c.int(this.dialogProperties.numberOfLeagues);
      }
      this.requestHighscoreData("1", this._currentLeagueId);
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.initItemRenderers = function () {
    if (!this._itemRenderers) {
      this._itemRenderers = [];
      for (var e = 0; e < CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++e) {
        this._itemRenderers.push(new y.CastleGenericAllianceHighscoreDialogItemRenderer(this.dialogDisp.mc_listContainer["i" + e]));
      }
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onSearchFieldKeyDown = function (e) {
    if (e.key == o.Keyboard.ENTER) {
      document.activeElement.blur();
      this.onConfirmSearchField();
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onFocusInSearchText = function (e) {
    if (this._itxt_search.text == this._defaultSearchText) {
      this._itxt_search.clearText();
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onFocusOutSearchText = function (e) {
    if (this._itxt_search.text == "") {
      this._itxt_search.textContentVO = new l.TextVO(this._defaultSearchText);
      this._currentSearchName = "";
    }
  };
  CastleGenericAllianceHighscoreDialog.prototype.onRemoveSpecialEvent = function (e) {
    this.hide();
    this.destroy();
  };
  CastleGenericAllianceHighscoreDialog.prototype.requestHighscoreData = function (e, t = -1) {
    this.isWaitingForServerMessage = true;
    h.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetHighscoreVO(e, this.dialogProperties.highscoreType, t > 0 ? t : this._currentLeagueId));
  };
  Object.defineProperty(CastleGenericAllianceHighscoreDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericAllianceHighscoreDialog.__initialize_static_members = function () {
    CastleGenericAllianceHighscoreDialog.OWN_RANK = "-1";
    CastleGenericAllianceHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS = 8;
    CastleGenericAllianceHighscoreDialog.SCROLL_DELTA = 3;
  };
  return CastleGenericAllianceHighscoreDialog;
}(_.CastleExternalDialog);
exports.CastleGenericAllianceHighscoreDialog = O;
var E = require("./9.js");
var y = require("./3712.js");
a.classImplementsInterfaces(O, "ICollectableRendererList");
O.__initialize_static_members();