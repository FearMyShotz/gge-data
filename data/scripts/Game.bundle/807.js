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
var u = require("./116.js");
var d = require("./6.js");
var p = require("./393.js");
var h = require("./172.js");
var g = require("./15.js");
var C = require("./72.js");
var _ = require("./4.js");
var m = require("./8.js");
var f = createjs.FocusEvent;
var O = createjs.MouseEvent;
var E = u.getLogger("createjs.ts Extensions");
var y = function (e) {
  function CastleGenericRankingComponent(t, i, n) {
    var o = this;
    o.searchName = "";
    o._currentLeagueId = 0;
    o.isWaitingForServerMessage = false;
    o._scrollStep = 0;
    o._mouseWheelEnabled = true;
    o._itemsClickable = true;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._disp = t;
    o.dialogProperties = n;
    o.setSearchPlaceholderText();
    o.setMovieClips();
    o.setItemClass(i);
    o.initRankingItems();
    o.show();
    return o;
  }
  n.__extends(CastleGenericRankingComponent, e);
  CastleGenericRankingComponent.prototype.setSearchPlaceholderText = function () {
    this.searchPlaceholderText = "dialog_highscore_search";
  };
  CastleGenericRankingComponent.prototype.setMovieClips = function (e = null, t = null, i = null, n = null, o = null, a = null, s = null) {
    this.btn_top = e || (this.disp[CastleGenericRankingComponent.BUTTON_TOP_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_TOP_DEFAULT_NAME] : null);
    this.btn_up = t || (this.disp[CastleGenericRankingComponent.BUTTON_UP_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_UP_DEFAULT_NAME] : null);
    this.btn_down = i || (this.disp[CastleGenericRankingComponent.BUTTON_DOWN_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_DOWN_DEFAULT_NAME] : null);
    this.btn_leagueUp = a || (this.disp[CastleGenericRankingComponent.BUTTON_LEAGUE_UP_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_LEAGUE_UP_DEFAULT_NAME] : null);
    this.btn_leagueDown = s || (this.disp[CastleGenericRankingComponent.BUTTON_LEAGUE_DOWN_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_LEAGUE_DOWN_DEFAULT_NAME] : null);
    this.btn_search = n || (this.disp[CastleGenericRankingComponent.BUTTON_SEARCH_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.BUTTON_SEARCH_DEFAULT_NAME] : null);
    this.txt_search = o || (this.disp[CastleGenericRankingComponent.TEXT_SEARCH_DEFAULT_NAME] ? this.disp[CastleGenericRankingComponent.TEXT_SEARCH_DEFAULT_NAME] : null);
    if (this.txt_search) {
      this.searchField = this.textFieldManager.registerTextField(this.txt_search, new c.LocalizedTextVO(this.searchPlaceholderText));
      this.searchField.type = l.TextFieldType.INPUT;
      this._defaultSearchText = this.searchField.text;
    }
  };
  CastleGenericRankingComponent.prototype.setItemClass = function (e) {
    this._itemClass = e;
  };
  CastleGenericRankingComponent.prototype.initRankingItems = function (e = CastleGenericRankingComponent.LIST_ITEM_DEFAULT_PREFIX) {
    this.rankingItems = [];
    for (var t = 0; this.disp[e + t];) {
      this.rankingItems.push(new this._itemClass(this.disp[e + t]));
      this.rankingItems[t].disp.visible = false;
      t++;
    }
    this._scrollStep = d.int(this.rankingItems.length);
  };
  CastleGenericRankingComponent.prototype.show = function (e = null) {
    if (e) {
      this.dialogProperties = e;
    }
    if (this._mouseWheelEnabled) {
      this.disp.addEventListener(O.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    }
    this.disp.addEventListener(O.CLICK, this.bindFunction(this.onClick));
    this.disp.addEventListener(O.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(O.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.txt_search.addEventListener(f.FOCUS_IN, this.bindFunction(this.onFocusInSearchText));
    this.txt_search.addEventListener(f.FOCUS_OUT, this.bindFunction(this.onFocusOutSearchText));
    this.txt_search.addEventListener(r.KeyboardEvent.KEY_DOWN, this.bindFunction(this.inputKeyDown));
    _.CastleModel.highscoreData.addEventListener(h.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    _.CastleModel.highscoreData.addEventListener(h.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.searchField.textContentVO = new c.LocalizedTextVO(this.searchPlaceholderText);
    this.searchName = "";
    this.requestHighscoreData("" + this.dialogProperties.preselectedOwnRank, this.dialogProperties.preselectedLeagueId);
  };
  CastleGenericRankingComponent.prototype.hide = function () {
    for (var e = 0; e < this.rankingItems.length; ++e) {
      this.rankingItems[e].disp.visible = false;
    }
    if (this._mouseWheelEnabled) {
      this.disp.removeEventListener(O.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    }
    this.disp.removeEventListener(O.CLICK, this.bindFunction(this.onClick));
    this.disp.removeEventListener(O.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(O.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.txt_search.removeEventListener(f.FOCUS_IN, this.bindFunction(this.onFocusInSearchText));
    this.txt_search.removeEventListener(f.FOCUS_OUT, this.bindFunction(this.onFocusOutSearchText));
    this.txt_search.removeEventListener(r.KeyboardEvent.KEY_DOWN, this.bindFunction(this.inputKeyDown));
    _.CastleModel.highscoreData.removeEventListener(h.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    _.CastleModel.highscoreData.removeEventListener(h.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
  };
  CastleGenericRankingComponent.prototype.onGetHighscoreDataError = function (e) {
    this.isWaitingForServerMessage = false;
  };
  CastleGenericRankingComponent.prototype.onGetHighscoreData = function (e) {
    this.isWaitingForServerMessage = false;
    if (e.params[0].LT == this.dialogProperties.highscoreType) {
      this._currentLeagueId = e.leagueId;
      if (this._currentLeagueId > this.dialogProperties.numberOfLeagues) {
        E.debug("leagueID " + e.leagueId + " does not exist for this highscore. taking the highest possible id: " + this.dialogProperties.numberOfLeagues);
        this._currentLeagueId = d.int(this.dialogProperties.numberOfLeagues);
      }
      var t = e.params[0].L;
      var i = 0;
      for (var n = 0; n < this.rankingItems.length; ++n) {
        if (n < t.length) {
          this.rankingItems[n].update(t[n], this._currentLeagueId, this.searchName);
          this.rankingItems[n].disp.visible = true;
          i = n;
        } else {
          this.rankingItems[n].disp.visible = false;
        }
      }
      this.updateScrollButtons(this.rankingItems[i].rank, e.params[0].LR);
    }
  };
  CastleGenericRankingComponent.prototype.updateScrollButtons = function (e = 0, t = 0) {
    var i = this.rankingItems[0].rank > 1;
    var n = e < t;
    m.ButtonHelper.enableButton(this.btn_top, i);
    m.ButtonHelper.enableButton(this.btn_up, i);
    m.ButtonHelper.enableButton(this.btn_down, n);
  };
  CastleGenericRankingComponent.prototype.onClick = function (e) {
    if (m.ButtonHelper.isButtonEnabled(e.target)) {
      if (this.itemsClickable && this.rankingItems != null) {
        for (var t = 0, i = this.rankingItems; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && (e.target == n.disp || n.disp.contains(e.target))) {
            n.onClick(e);
            return;
          }
        }
      }
      switch (e.target) {
        case this.btn_top:
          this.requestHighscoreData("1");
          this.searchName = "";
          break;
        case this.btn_up:
          this.scrollUp();
          break;
        case this.btn_down:
          this.scrollDown();
          break;
        case this.btn_leagueUp:
          this.scrollLeagueUp();
          break;
        case this.btn_leagueDown:
          this.scrollLeagueDown();
          break;
        case this.btn_search:
          this.onConfirmSearchField();
      }
    }
  };
  CastleGenericRankingComponent.prototype.onMouseOver = function (e) {
    if (this.itemsClickable && this.rankingItems != null) {
      for (var t = 0, i = this.rankingItems; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && (e.target == n.disp || n.disp.contains(e.target))) {
          this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
          n.onMouseOver(e);
          return;
        }
      }
    }
  };
  CastleGenericRankingComponent.prototype.onMouseOut = function (e) {
    if (this.itemsClickable && this.rankingItems != null) {
      for (var t = 0, i = this.rankingItems; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && e.target == n.disp) {
          this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
          n.onMouseOut(e);
          return;
        }
      }
    }
  };
  CastleGenericRankingComponent.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.scrollUp();
    } else if (e.delta > 0) {
      this.scrollDown();
    }
  };
  CastleGenericRankingComponent.prototype.scrollUp = function () {
    if (!this.isWaitingForServerMessage) {
      var e = Math.floor(this.rankingItems.length / 2);
      var t = d.int(Math.max(this.rankingItems[0].rank - this.rankingItems.length + e, 0));
      this.searchName = "";
      this.requestHighscoreData("" + t);
    }
  };
  CastleGenericRankingComponent.prototype.scrollDown = function () {
    if (!this.isWaitingForServerMessage) {
      var e = Math.floor(this.rankingItems.length / 2);
      var t = d.int(this.rankingItems[0].rank + this.rankingItems.length + e);
      this.searchName = "";
      this.requestHighscoreData("" + t);
    }
  };
  CastleGenericRankingComponent.prototype.scrollLeagueUp = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId++;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId > this.dialogProperties.numberOfLeagues) {
        this._currentLeagueId = 1;
      }
      var e = this._currentLeagueId == this._properties.ownLeagueID ? "-1" : "1";
      this.requestHighscoreData(e, this._currentLeagueId);
    }
  };
  CastleGenericRankingComponent.prototype.scrollLeagueDown = function () {
    if (!this.isWaitingForServerMessage) {
      this._currentLeagueId--;
      if (this.dialogProperties.numberOfLeagues > 0 && this._currentLeagueId <= 0) {
        this._currentLeagueId = d.int(this.dialogProperties.numberOfLeagues);
      }
      var e = this._currentLeagueId == this._properties.ownLeagueID ? "-1" : "1";
      this.requestHighscoreData(e, this._currentLeagueId);
    }
  };
  CastleGenericRankingComponent.prototype.inputKeyDown = function (e) {
    if (e.key == s.Keyboard.ENTER && this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
      document.activeElement.blur();
      this.searchName = this.searchField.text;
      this.onConfirmSearchField();
    }
  };
  CastleGenericRankingComponent.prototype.onFocusInSearchText = function (e) {
    if (this.searchField.text == this._defaultSearchText) {
      this.searchField.clearText();
    }
  };
  CastleGenericRankingComponent.prototype.onFocusOutSearchText = function (e) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new c.LocalizedTextVO(this.searchPlaceholderText);
    }
  };
  CastleGenericRankingComponent.prototype.onConfirmSearchField = function () {
    if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
      this.searchName = this.searchField.text;
      this.requestHighscoreData(this.searchName);
    }
  };
  CastleGenericRankingComponent.prototype.requestHighscoreData = function (e, t = -1) {
    this.isWaitingForServerMessage = true;
    _.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetHighscoreVO(e, this.dialogProperties.highscoreType, t > 0 ? t : this._currentLeagueId));
  };
  Object.defineProperty(CastleGenericRankingComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "mouseWheelEnabled", {
    set: function (e) {
      this._mouseWheelEnabled = e;
      if (this._mouseWheelEnabled) {
        this.disp.addEventListener(O.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      } else {
        this.disp.removeEventListener(O.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "scrollStep", {
    get: function () {
      return this._scrollStep;
    },
    set: function (e) {
      this._scrollStep = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "dialogProperties", {
    get: function () {
      return this._properties;
    },
    set: function (e) {
      this._properties = e;
      this._currentLeagueId = this._properties.preselectedLeagueId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "layoutManager", {
    get: function () {
      return b.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "controller", {
    get: function () {
      return g.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRankingComponent.prototype, "itemsClickable", {
    get: function () {
      return this._itemsClickable;
    },
    set: function (e) {
      this._itemsClickable = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRankingComponent.__initialize_static_members = function () {
    CastleGenericRankingComponent.BUTTON_TOP_DEFAULT_NAME = "btn_top";
    CastleGenericRankingComponent.BUTTON_UP_DEFAULT_NAME = "btn_up";
    CastleGenericRankingComponent.BUTTON_DOWN_DEFAULT_NAME = "btn_down";
    CastleGenericRankingComponent.BUTTON_LEAGUE_UP_DEFAULT_NAME = "btn_leagueUp";
    CastleGenericRankingComponent.BUTTON_LEAGUE_DOWN_DEFAULT_NAME = "btn_leagueDown";
    CastleGenericRankingComponent.BUTTON_SEARCH_DEFAULT_NAME = "btn_search";
    CastleGenericRankingComponent.TEXT_SEARCH_DEFAULT_NAME = "txt_input_search";
    CastleGenericRankingComponent.LIST_ITEM_DEFAULT_PREFIX = "item";
  };
  return CastleGenericRankingComponent;
}(C.CastleEventDispatcher);
exports.CastleGenericRankingComponent = y;
var b = require("./17.js");
y.__initialize_static_members();