Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./91.js");
var u = require("./40.js");
var d = require("./8.js");
var p = function (e) {
  function CastleTournamentRankListComponent(t, i, n, o) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t) || this)._itemClass = i;
    d.ButtonHelper.initBasicButtons([t.btn_top, t.btn_up, t.btn_down]);
    if (t.mc_search && t.mc_search.btn_search) {
      d.ButtonHelper.initBasicButtons([t.mc_search.btn_search]);
    }
    if (t.mc_search) {
      a._itxt_search = g.CastleComponent.textFieldManager.registerTextField(t.mc_search.txt_search, new r.LocalizedTextVO(n));
      a._itxt_search.textContentDefaultVO = new r.LocalizedTextVO(n);
      a._itxt_search.maxChars = CastleTournamentRankListComponent.SEARCH_MAX_CHARS;
      t.mc_search.btn_search.toolTipText = o;
    }
    a._itemList = [];
    for (var s = 0; s < CastleTournamentRankListComponent.MAX_ITEM_COUNT; ++s) {
      a._itemList.push(new a._itemClass(t["item" + s]));
    }
    return a;
  }
  n.__extends(CastleTournamentRankListComponent, e);
  CastleTournamentRankListComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    for (var t = 0; t < this._itemList.length; ++t) {
      this._itemList[t].onShow();
    }
    if (this._itxt_search) {
      this._itxt_search.keyUp.add(this.bindFunction(this.onSearchTextfieldKeyUp));
      this._itxt_search.textContentVO = this._itxt_search.textContentDefaultVO;
    }
    this.updateFullScreenMode();
  };
  CastleTournamentRankListComponent.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    for (var t = 0; t < this._itemList.length; ++t) {
      this._itemList[t].onHide();
    }
    if (this._itxt_search) {
      this._itxt_search.keyUp.remove(this.bindFunction(this.onSearchTextfieldKeyUp));
    }
  };
  CastleTournamentRankListComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    g.CastleComponent.controller.addEventListener(c.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, this.bindFunction(this.onDisplayChange));
  };
  CastleTournamentRankListComponent.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    g.CastleComponent.controller.removeEventListener(c.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, this.bindFunction(this.onDisplayChange));
  };
  CastleTournamentRankListComponent.prototype.requestHighscoreData = function (e) {
    if (this._requestHighscoreDataFunction) {
      this._requestHighscoreDataFunction(e);
    }
  };
  CastleTournamentRankListComponent.prototype.reset = function () {
    for (var e = 0; e < this._itemList.length; ++e) {
      this._itemList[e].onHide();
      this._itemList[e].setVisibility(false);
    }
    if (this._itxt_search) {
      this._itxt_search.clearText();
    }
    this.updateScrollButtons();
  };
  CastleTournamentRankListComponent.prototype.updateWithNewData = function (e) {
    var t;
    var i = l.int(e.LR);
    var n = 0;
    var o = e.L;
    for (var a = 0; a < CastleTournamentRankListComponent.MAX_ITEM_COUNT; ++a) {
      t = this._itemList[a];
      if (!o || o.length <= 0 || a >= o.length) {
        t.setVisibility(false);
        t.onHide();
      } else {
        t.searchFieldValue = this.searchText;
        t.parseItemData(o[a]);
        t.setVisibility(true);
        t.onShow();
        n = t.rank;
      }
    }
    this.updateScrollButtons(n, i);
  };
  CastleTournamentRankListComponent.prototype.updateFullScreenMode = function () {
    if (this._itxt_search) {
      var e = h.CastleLayoutManager.getInstance().stage.displayState;
      if (e == a.StageDisplayState.FULL_SCREEN || e == a.StageDisplayState.FULL_SCREEN_INTERACTIVE) {
        this.disp.mc_search.mouseChildren = false;
        this.disp.mc_search.toolTipText = "alert_noChatInFullScreen";
        this._itxt_search.tabEnabled = false;
      } else {
        this.disp.mc_search.mouseChildren = true;
        this.disp.mc_search.toolTipText = null;
        this._itxt_search.tabEnabled = true;
      }
    }
  };
  CastleTournamentRankListComponent.prototype.scrollUp = function () {
    var e = l.int(Math.max(this._itemList[0].rank - CastleTournamentRankListComponent.MAX_ITEM_COUNT + CastleTournamentRankListComponent.SCROLL_DELTA, 0));
    this.requestHighscoreData("" + e);
  };
  CastleTournamentRankListComponent.prototype.scrollDown = function () {
    var e = l.int(this._itemList[0].rank + CastleTournamentRankListComponent.MAX_ITEM_COUNT + CastleTournamentRankListComponent.SCROLL_DELTA);
    this.requestHighscoreData("" + e);
  };
  CastleTournamentRankListComponent.prototype.updateScrollButtons = function (e = 0, t = 0) {
    var i = this._itemList[0].rank > 1;
    var n = e < t;
    d.ButtonHelper.enableButton(this.disp.btn_top, i);
    d.ButtonHelper.enableButton(this.disp.btn_up, i);
    d.ButtonHelper.enableButton(this.disp.btn_down, n);
  };
  CastleTournamentRankListComponent.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      if (this._itxt_search && t.target == this.disp.mc_search.btn_search) {
        if (this.searchText != "" && !this._itxt_search.containsDefaultTextContent) {
          this.requestHighscoreData(this.searchText);
        }
      } else {
        switch (t.target) {
          case this.disp.btn_top:
            if (this._requestHighscoreDataFunction) {
              this.requestHighscoreData("1");
            }
            break;
          case this.disp.btn_up:
            this.scrollUp();
            break;
          case this.disp.btn_down:
            this.scrollDown();
        }
      }
    }
  };
  CastleTournamentRankListComponent.prototype.onSearchTextfieldKeyUp = function (e) {
    if (this._itxt_search && e.key == o.Keyboard.ENTER) {
      if (this.searchText != "" && !this._itxt_search.containsDefaultTextContent) {
        document.activeElement.blur();
        this.requestHighscoreData(this.searchText);
      }
    }
  };
  CastleTournamentRankListComponent.prototype.onMouseWheel = function (t) {
    e.prototype.onMouseWheel.call(this, t);
    if (t.delta < 0) {
      this.scrollUp();
    } else if (t.delta > 0) {
      this.scrollDown();
    }
  };
  CastleTournamentRankListComponent.prototype.onDisplayChange = function (e) {
    this.updateFullScreenMode();
  };
  Object.defineProperty(CastleTournamentRankListComponent.prototype, "searchText", {
    get: function () {
      if (this._itxt_search) {
        return this._itxt_search.text;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentRankListComponent.prototype, "requestHighscoreDataFunction", {
    get: function () {
      return this._requestHighscoreDataFunction;
    },
    set: function (e) {
      this._requestHighscoreDataFunction = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleTournamentRankListComponent.__initialize_static_members = function () {
    CastleTournamentRankListComponent.MAX_ITEM_COUNT = 8;
    CastleTournamentRankListComponent.SCROLL_DELTA = 3;
    CastleTournamentRankListComponent.SEARCH_MAX_CHARS = 15;
  };
  return CastleTournamentRankListComponent;
}(u.CastleItemRenderer);
exports.CastleTournamentRankListComponent = p;
var h = require("./17.js");
var g = require("./14.js");
s.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();