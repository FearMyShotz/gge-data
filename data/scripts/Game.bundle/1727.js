Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./16.js");
var u = require("./702.js");
var d = require("./504.js");
var p = require("./4.js");
var h = require("./203.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = createjs.MouseEvent;
var m = function (e) {
  function CastleWorldmapBookmarkListDialog() {
    var t = this;
    t._itemRenderer = [];
    t._currentFilter = CastleWorldmapBookmarkListDialog.FILTER_ALL;
    t._currentScrollIndex = 0;
    t._filteredList = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleWorldmapBookmarkListDialog.NAME) || this;
  }
  n.__extends(CastleWorldmapBookmarkListDialog, e);
  CastleWorldmapBookmarkListDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_scrollUp, this.dialogDisp.btn_scrollDown, this.dialogDisp.btn_tabAll, this.dialogDisp.btn_tabFriend, this.dialogDisp.btn_tabEnemy, this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this._itemRenderer = [];
    for (var i = 0; i < CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT; ++i) {
      this._itemRenderer.push(new E.CastleWorldmapBookmarkListDialogItem(this.dialogDisp["mc_item" + i]));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("Bookmarks_markedLocations_tooltip"));
    this.dialogDisp.btn_tabAll.toolTipText = "Bookmarks_Menu_allBookmarks_tooltip";
    this.dialogDisp.btn_tabFriend.toolTipText = "Bookmarks_Menu_friendlyBookmarks_tooltip";
    this.dialogDisp.btn_tabEnemy.toolTipText = "Bookmarks_Menu_enemyBookmarks_tooltip";
    this.dialogDisp.btn_tabAll.mc_icon.gotoAndStop(1);
    this.dialogDisp.btn_tabFriend.mc_icon.gotoAndStop(2);
    this.dialogDisp.btn_tabEnemy.mc_icon.gotoAndStop(3);
  };
  CastleWorldmapBookmarkListDialog.prototype.showLoaded = function (t = null) {
    this.dialogDisp.addEventListener(_.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    p.CastleModel.bookmarkData.addEventListener(d.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onDataUpdated));
    e.prototype.showLoaded.call(this, t);
    this.updateData();
  };
  CastleWorldmapBookmarkListDialog.prototype.updateData = function () {
    p.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetBookmarkList());
  };
  CastleWorldmapBookmarkListDialog.prototype.hideLoaded = function (t = null) {
    this.dialogDisp.removeEventListener(_.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    p.CastleModel.bookmarkData.removeEventListener(d.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onDataUpdated));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleWorldmapBookmarkListDialog.prototype.validateScrollIndex = function () {
    this._currentScrollIndex = l.int(Math.max(0, Math.min(this._filteredList.length - CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT, this._currentScrollIndex)));
  };
  CastleWorldmapBookmarkListDialog.prototype.getListByFilter = function () {
    var e = p.CastleModel.bookmarkData.worldmapBookmarks;
    (e = e.filter(this.bindFunction(this.isBookmarkInFilter))).sort(f.ClientConstSort.sortByBookmarks);
    return e;
  };
  CastleWorldmapBookmarkListDialog.prototype.isBookmarkInFilter = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return this._currentFilter == CastleWorldmapBookmarkListDialog.FILTER_ALL && e.isPlayerBookmark || this._currentFilter == CastleWorldmapBookmarkListDialog.FILTER_FRIEND && e.type == h.EWorldmapBookmarkType.PLAYER_FRIEND || this._currentFilter == CastleWorldmapBookmarkListDialog.FILTER_ENEMY && e.type == h.EWorldmapBookmarkType.PLAYER_ENEMY;
  };
  CastleWorldmapBookmarkListDialog.prototype.changeFilter = function (e) {
    if (this._currentFilter != e) {
      this._currentFilter = e;
      this._currentScrollIndex = 0;
      this.updateData();
    }
  };
  CastleWorldmapBookmarkListDialog.prototype.scrollUp = function () {
    this._currentScrollIndex -= CastleWorldmapBookmarkListDialog.SCROLL_DELTA;
    this.validateScrollIndex();
    this.updateItems();
  };
  CastleWorldmapBookmarkListDialog.prototype.scrollDown = function () {
    this._currentScrollIndex += CastleWorldmapBookmarkListDialog.SCROLL_DELTA;
    this.validateScrollIndex();
    this.updateItems();
  };
  CastleWorldmapBookmarkListDialog.prototype.updateFilteredList = function () {
    this._filteredList = this.getListByFilter();
  };
  CastleWorldmapBookmarkListDialog.prototype.updateDialog = function () {
    this.updateFilteredList();
    this.updateTabs();
    this.updateCount();
    this.updateItems();
    this.updateEmptyText();
  };
  CastleWorldmapBookmarkListDialog.prototype.updateCount = function () {
    var e = this.textFieldManager.registerTextField(this.dialogDisp.mc_count.txt_value, new r.LocalizedTextVO("numbersXY", [p.CastleModel.bookmarkData.numPlayerBookmarks, a.PlayerConst.BOOKMARKS_MAX_ENTRYS]));
    if (p.CastleModel.bookmarkData.isPlayerListFull) {
      e.color = c.ClientConstColor.GENERIC_RED;
      this.dialogDisp.mc_count.toolTipText = "Bookmarks_Menu_counterLimit_tooltip";
    } else {
      e.color = c.ClientConstColor.FONT_DEFAULT_COLOR;
      this.dialogDisp.mc_count.toolTipText = "Bookmarks_Menu_counter_tooltip";
    }
  };
  CastleWorldmapBookmarkListDialog.prototype.updateEmptyText = function () {
    var e = "";
    if (this._filteredList.length <= 0) {
      switch (this._currentFilter) {
        case CastleWorldmapBookmarkListDialog.FILTER_ALL:
          e = "Bookmarks_Menu_copy";
          break;
        case CastleWorldmapBookmarkListDialog.FILTER_FRIEND:
          e = "Bookmarks_Menu_copy_noFriendly";
          break;
        case CastleWorldmapBookmarkListDialog.FILTER_ENEMY:
          e = "Bookmarks_Menu_copy_noEnemy";
      }
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_emptyText.txt_value, new r.LocalizedTextVO(e));
  };
  CastleWorldmapBookmarkListDialog.prototype.updateItems = function () {
    this.validateScrollIndex();
    for (var e = 0; e < CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT; ++e) {
      var t = this._currentScrollIndex + e;
      if (t < this._filteredList.length) {
        this._itemRenderer[e].bookmarkVO = this._filteredList[t];
        this._itemRenderer[e].show();
      } else {
        this._itemRenderer[e].bookmarkVO = null;
        this._itemRenderer[e].hide();
      }
    }
    this.updateScrollButtons();
  };
  CastleWorldmapBookmarkListDialog.prototype.updateScrollButtons = function () {
    var e = this._filteredList.length > CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT;
    this.dialogDisp.btn_scrollUp.visible = e;
    this.dialogDisp.btn_scrollDown.visible = e;
    g.ButtonHelper.enableButton(this.dialogDisp.btn_scrollUp, this._currentScrollIndex > 0);
    g.ButtonHelper.enableButton(this.dialogDisp.btn_scrollDown, this._filteredList.length - CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT - this._currentScrollIndex > 0);
  };
  CastleWorldmapBookmarkListDialog.prototype.updateTabs = function () {
    var e = p.CastleModel.bookmarkData.worldmapBookmarks.length <= 0;
    this._currentFilter = l.int(e ? CastleWorldmapBookmarkListDialog.FILTER_ALL : this._currentFilter);
    for (var t = 0; t < CastleWorldmapBookmarkListDialog.NUMBER_OF_FILTERS; ++t) {
      this.markTabAsSelected(t, this._currentFilter == t);
    }
    g.ButtonHelper.enableButton(this.dialogDisp.btn_tabFriend, !e);
    g.ButtonHelper.enableButton(this.dialogDisp.btn_tabEnemy, !e);
  };
  CastleWorldmapBookmarkListDialog.prototype.markTabAsSelected = function (e, t) {
    var i;
    switch (e) {
      case CastleWorldmapBookmarkListDialog.FILTER_ALL:
        i = this.dialogDisp.btn_tabAll;
        break;
      case CastleWorldmapBookmarkListDialog.FILTER_FRIEND:
        i = this.dialogDisp.btn_tabFriend;
        break;
      case CastleWorldmapBookmarkListDialog.FILTER_ENEMY:
        i = this.dialogDisp.btn_tabEnemy;
    }
    if (i) {
      var n = i.mc_icon.currentFrame + 1;
      i.gotoAndStop(t ? 2 : 1);
      if (t) {
        i._2.gotoAndStop(n);
      } else {
        i.mc_icon.gotoAndStop(n);
      }
    }
  };
  CastleWorldmapBookmarkListDialog.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          O.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_BookmarksMenu_copy"));
          break;
        case this.dialogDisp.btn_scrollUp:
          this.scrollUp();
          break;
        case this.dialogDisp.btn_scrollDown:
          this.scrollDown();
          break;
        case this.dialogDisp.btn_tabAll:
          this.changeFilter(CastleWorldmapBookmarkListDialog.FILTER_ALL);
          break;
        case this.dialogDisp.btn_tabFriend:
          this.changeFilter(CastleWorldmapBookmarkListDialog.FILTER_FRIEND);
          break;
        case this.dialogDisp.btn_tabEnemy:
          this.changeFilter(CastleWorldmapBookmarkListDialog.FILTER_ENEMY);
      }
    }
  };
  CastleWorldmapBookmarkListDialog.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.scrollUp();
    } else if (e.delta > 0) {
      this.scrollDown();
    }
  };
  CastleWorldmapBookmarkListDialog.prototype.onDataUpdated = function (e) {
    this.updateDialog();
  };
  CastleWorldmapBookmarkListDialog.__initialize_static_members = function () {
    CastleWorldmapBookmarkListDialog.NAME = "CastleWorldmapBookmarkList";
    CastleWorldmapBookmarkListDialog.SHOWN_ITEM_COUNT = 3;
    CastleWorldmapBookmarkListDialog.NUMBER_OF_FILTERS = 3;
    CastleWorldmapBookmarkListDialog.SCROLL_DELTA = 1;
    CastleWorldmapBookmarkListDialog.FILTER_ALL = 0;
    CastleWorldmapBookmarkListDialog.FILTER_FRIEND = 1;
    CastleWorldmapBookmarkListDialog.FILTER_ENEMY = 2;
  };
  return CastleWorldmapBookmarkListDialog;
}(C.CastleExternalDialog);
exports.CastleWorldmapBookmarkListDialog = m;
var f = require("./75.js");
var O = require("./9.js");
var E = require("./3574.js");
o.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();