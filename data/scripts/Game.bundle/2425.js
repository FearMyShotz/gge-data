Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./16.js");
var d = require("./503.js");
var p = require("./4.js");
var h = require("./203.js");
var g = require("./8.js");
var C = require("./34.js");
var _ = require("./2426.js");
var m = function (e) {
  function CastleAllianceDialogBookmarks(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).textFieldManager.registerTextField(i.subLayerDisp.mc_emptyText.txt_value, new l.LocalizedTextVO("Bookmarks_alliance_Menu_copy"));
    i.initButtons();
    i.initScrollList();
    i.setTooltips();
    return i;
  }
  n.__extends(CastleAllianceDialogBookmarks, e);
  CastleAllianceDialogBookmarks.prototype.setDefaultFilters = function () {
    this.activeFilters = [h.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK, h.EWorldmapBookmarkType.ALLIANCE_DEFEND, h.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER];
    this.subLayerDisp.mc_filterFreeAttacks.cb_filter.gotoAndStop(CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_CHECKED);
    this.subLayerDisp.mc_filterDefend.cb_filter.gotoAndStop(CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_CHECKED);
    this.subLayerDisp.mc_filterAttackOrder.cb_filter.gotoAndStop(CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_CHECKED);
  };
  CastleAllianceDialogBookmarks.prototype.initScrollList = function () {
    this.scrollList = new a.ItemScrollList(this.subLayerDisp);
    this.scrollList.scrollItemClass = O.CastleAllianceBookmarkScrollItem;
    this.scrollList.hideButtons = true;
  };
  CastleAllianceDialogBookmarks.prototype.initButtons = function () {
    var e = [this.subLayerDisp.btn_up, this.subLayerDisp.btn_down];
    var t = 0;
    for (var i = this.subLayerDisp["item" + t]; i != null;) {
      e.push(i.btn_jumpTo, i.btn_delete);
      t++;
      i = this.subLayerDisp["item" + t];
    }
    g.ButtonHelper.initBasicButtons(e);
  };
  CastleAllianceDialogBookmarks.prototype.setTooltips = function () {
    this.subLayerDisp.mc_counter.toolTipText = "dialog_alliance_bookmarks_counter_tooltip";
    this.subLayerDisp.mc_counter.mouseChildren = false;
    this.subLayerDisp.mc_filterFreeAttacks.mc_icon.toolTipText = "dialog_alliance_bookmarks_freeTarget_tooltip";
    this.subLayerDisp.mc_filterFreeAttacks.cb_filter.actLikeButton = true;
    this.subLayerDisp.mc_filterFreeAttacks.cb_filter.mouseChildren = false;
    this.subLayerDisp.mc_filterFreeAttacks.cb_filter.toolTipText = "dialog_alliance_bookmarks_freeTarget_active_tooltip";
    this.subLayerDisp.mc_filterDefend.mc_icon.toolTipText = "dialog_alliance_bookmarks_supportTarget_tooltip";
    this.subLayerDisp.mc_filterDefend.cb_filter.actLikeButton = true;
    this.subLayerDisp.mc_filterDefend.cb_filter.mouseChildren = false;
    this.subLayerDisp.mc_filterDefend.cb_filter.toolTipText = "dialog_alliance_bookmarks_supportTarget_active_tooltip";
    this.subLayerDisp.mc_filterAttackOrder.mc_icon.toolTipText = "dialog_alliance_bookmarks_plannedTarget_tooltip";
    this.subLayerDisp.mc_filterAttackOrder.cb_filter.actLikeButton = true;
    this.subLayerDisp.mc_filterAttackOrder.cb_filter.mouseChildren = false;
    this.subLayerDisp.mc_filterAttackOrder.cb_filter.toolTipText = "dialog_alliance_bookmarks_plannedTarget_active_tooltip";
  };
  CastleAllianceDialogBookmarks.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    p.CastleModel.bookmarkData.addEventListener(d.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarkListChanged));
    this.setDefaultFilters();
    this.update();
  };
  CastleAllianceDialogBookmarks.prototype.update = function () {
    var e = c.int(p.CastleModel.bookmarkData.allianceBookmarks.length);
    var t = c.int(p.CastleModel.bookmarkData.maxAllianceBookmarks);
    var i = this.textFieldManager.registerTextField(this.subLayerDisp.mc_counter.txt_numBookmarks, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [e, t]));
    if (e >= t) {
      i.color = u.ClientConstColor.GENERIC_RED;
      this.subLayerDisp.mc_counter.toolTipText = "Bookmarks_Menu_counterLimit_tooltip";
    } else {
      i.color = u.ClientConstColor.FONT_DEFAULT_COLOR;
      this.subLayerDisp.mc_counter.toolTipText = "dialog_alliance_bookmarks_counter_tooltip";
    }
    this.updateList();
  };
  CastleAllianceDialogBookmarks.prototype.updateList = function () {
    this.scrollList.clear();
    var e = p.CastleModel.bookmarkData.getFilteredBookmarks(this.activeFilters);
    this.subLayerDisp.mc_emptyText.visible = p.CastleModel.bookmarkData.allianceBookmarks.length == 0;
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.scrollList.pushContent(new _.CastleAllianceBookmarkScrollItemVO(n));
        }
      }
    }
    this.scrollList.initList(0);
  };
  CastleAllianceDialogBookmarks.prototype.onBookmarkListChanged = function (e) {
    this.update();
  };
  CastleAllianceDialogBookmarks.prototype.hide = function () {
    e.prototype.hide.call(this);
    p.CastleModel.bookmarkData.removeEventListener(d.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarkListChanged));
  };
  CastleAllianceDialogBookmarks.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.mc_filterFreeAttacks.cb_filter:
          this.onCheckBoxClick(t.target, h.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK, "dialog_alliance_bookmarks_freeTarget");
          break;
        case this.subLayerDisp.mc_filterDefend.cb_filter:
          this.onCheckBoxClick(t.target, h.EWorldmapBookmarkType.ALLIANCE_DEFEND, "dialog_alliance_bookmarks_supportTarget");
          break;
        case this.subLayerDisp.mc_filterAttackOrder.cb_filter:
          this.onCheckBoxClick(t.target, h.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER, "dialog_alliance_bookmarks_plannedTarget");
      }
    }
  };
  CastleAllianceDialogBookmarks.prototype.onCheckBoxClick = function (e, t, i) {
    var n;
    var o = c.int(this.activeFilters.indexOf(t));
    if (o == -1) {
      this.activeFilters.push(t);
      e.gotoAndStop(CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_CHECKED);
      n = "_active";
    } else {
      this.activeFilters.splice(o, 1);
      e.gotoAndStop(CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_NOT_CHECKED);
      n = "_inactive";
    }
    e.toolTipText = i + n + "_tooltip";
    this.updateList();
  };
  CastleAllianceDialogBookmarks.prototype.showHelp = function () {
    f.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_alliance_bookmarks"));
  };
  CastleAllianceDialogBookmarks.__initialize_static_members = function () {
    CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_NOT_CHECKED = 1;
    CastleAllianceDialogBookmarks.FRAME_CHECK_BOX_CHECKED = 2;
  };
  return CastleAllianceDialogBookmarks;
}(C.CastleDialogSubLayer);
exports.CastleAllianceDialogBookmarks = m;
var f = require("./9.js");
var O = require("./2427.js");
s.classImplementsInterfaces(m, "ICollectableRendererList", "ISublayer");
m.__initialize_static_members();