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
var u = require("./296.js");
var d = require("./232.js");
var p = require("./102.js");
var h = require("./4.js");
var g = require("./274.js");
var C = require("./737.js");
var _ = require("./738.js");
var m = require("./11.js");
var f = require("./946.js");
var O = require("./947.js");
var E = function (e) {
  function CastleBookmarkShowAttackersDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBookmarkShowAttackersDialog.NAME) || this;
  }
  n.__extends(CastleBookmarkShowAttackersDialog, e);
  CastleBookmarkShowAttackersDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_alliance_bookmarks_attackerList_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_rank.txt_label, new l.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_name.txt_label, new l.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_level.txt_label, new l.LocalizedTextVO("level"));
    this.dialogDisp.btn_column_sort_distance.toolTipText = "distance_target";
    this.dialogDisp.btn_column_sort_might.toolTipText = "playerMight";
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.btn_column_sort_rank, this.dialogDisp.btn_column_sort_name, this.dialogDisp.btn_column_sort_level, this.dialogDisp.btn_column_sort_distance, this.dialogDisp.btn_column_sort_might]);
    this._scrollList = new o.ItemScrollList(this.dialogDisp);
    this._scrollList.hideButtons = true;
    this._scrollList.scrollItemClass = D.CastleAllianceMemberScrollItem;
    this._scrollBarConfig = new g.BasicSliderVO(this.dialogDisp.mc_slider.mc_sliderBar, this.dialogDisp.mc_slider.btn_slider, 0, 1, this.dialogDisp);
    this._scrollBar = new b.ScrollComponent(this._scrollBarConfig, b.ScrollComponent.VERTICAL_SLIDER);
    this._tableSorter = new _.CastleTableSorter();
  };
  CastleBookmarkShowAttackersDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    h.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetAllianceInfoVO(h.CastleModel.userData.allianceID));
    this.lockDialog();
    this.hideMemberList();
    this.dialogDisp.mc_slider.visible = false;
    this.dialogDisp.mc_sliderDeco.visible = false;
    this.fillScrollListVO();
    this._tableSorter.init(this._scrollList.voList, this.bindFunction(this.onMemberListSortingChanged), this.createSorters());
    this._tableSorter.show();
  };
  CastleBookmarkShowAttackersDialog.prototype.hideMemberList = function () {
    for (var e = 0, t = this._scrollList.veList; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        i.hide();
      }
    }
    this.dialogDisp.btn_up.visible = false;
    this.dialogDisp.btn_down.visible = false;
  };
  CastleBookmarkShowAttackersDialog.prototype.onAllianceDataUpdated = function (e) {
    if (this.isLocked) {
      this.unLockDialog();
    }
    this.restartList();
  };
  CastleBookmarkShowAttackersDialog.prototype.fillScrollListVO = function () {
    this.assignees = this.getAssignedPlayers();
    this._scrollList.clear();
    var e = this.dialogProperties.bookmarkVO.worldmapObjectVO.absAreaPos;
    var t = c.int(this.dialogProperties.bookmarkVO.kingdomId);
    if (this.assignees != null) {
      for (var i = 0, n = this.assignees; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this._scrollList.pushContent(new O.AllianceMemberScrollItemVO(o, null, e, t));
        }
      }
    }
    this._scrollList.initList();
  };
  CastleBookmarkShowAttackersDialog.prototype.restartList = function () {
    this.assignees = this.getAssignedPlayers();
    this._scrollList.initList();
    if (this.assignees.length < this._scrollList.veList.length) {
      this.dialogDisp.mc_slider.visible = false;
      this.dialogDisp.mc_sliderDeco.visible = true;
    } else {
      this.dialogDisp.mc_slider.visible = true;
      this.dialogDisp.mc_sliderDeco.visible = false;
      this._scrollBarConfig.maxValue = c.int(this.assignees.length - this._scrollList.veList.length + 1);
    }
  };
  CastleBookmarkShowAttackersDialog.prototype.refreshList = function () {
    this._scrollList.initList();
    this.assignees ||= this.getAssignedPlayers();
    if (this.assignees.length < this._scrollList.veList.length) {
      this.dialogDisp.mc_slider.visible = false;
      this.dialogDisp.mc_sliderDeco.visible = true;
    } else {
      this.dialogDisp.mc_slider.visible = true;
      this.dialogDisp.mc_sliderDeco.visible = false;
      this._scrollBarConfig.maxValue = c.int(this.assignees.length - this._scrollList.veList.length + 1);
    }
  };
  CastleBookmarkShowAttackersDialog.prototype.getAssignedPlayers = function () {
    var e = [];
    for (var t = 0, i = this.dialogProperties.bookmarkVO.attackOrderDetails.assignedAttackers; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = h.CastleModel.otherPlayerData.getOwnerInfoVO(n);
        e.push(o);
      }
    }
    return e;
  };
  CastleBookmarkShowAttackersDialog.prototype.showLoaded = function (t = null) {
    this.dialogDisp.btn_column_sort_rank.gotoAndStop(2);
    e.prototype.showLoaded.call(this, t);
  };
  CastleBookmarkShowAttackersDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this._scrollList.addEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListChanged));
    this._scrollBar.enableComponent = true;
    this._scrollBar.addEventListener(d.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
    h.CastleModel.allianceData.addEventListener(p.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
  };
  CastleBookmarkShowAttackersDialog.prototype.createSorters = function () {
    this._sorters = [];
    this._sorters.push(new C.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_rank, f.AllianceMemberScrollItemComparer.comparePrimaryRank));
    this._sorters.push(new C.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_name, f.AllianceMemberScrollItemComparer.comparePrimaryName));
    this._sorters.push(new C.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_level, f.AllianceMemberScrollItemComparer.comparePrimaryLevel));
    this._sorters.push(new C.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_distance, f.AllianceMemberScrollItemComparer.comparePrimaryDistance));
    this._sorters.push(new C.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_might, f.AllianceMemberScrollItemComparer.compareMightValue));
    return this._sorters;
  };
  CastleBookmarkShowAttackersDialog.prototype.onMemberListSortingChanged = function (e) {
    if (this._sorters != null) {
      for (var t = 0, i = this._sorters; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.sortingTrigger.triangle.gotoAndStop(1);
        }
      }
    }
    e.sortingTrigger.triangle.gotoAndStop(e.isInAscendingOrder ? 2 : 1);
    this.refreshList();
  };
  CastleBookmarkShowAttackersDialog.prototype.onScrollListChanged = function (e = null) {
    var t = c.int(this._scrollList.currentStartIndex);
    this._scrollBar.setSelectedIndex(t, false);
  };
  CastleBookmarkShowAttackersDialog.prototype.onSliderChanged = function (e) {
    var t = c.int(this._scrollBar.selectedIndex);
    this._scrollList.initList(t);
  };
  CastleBookmarkShowAttackersDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this._scrollBar.dispose();
    this._scrollList.removeEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListChanged));
    this._scrollBar.removeEventListener(d.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
    h.CastleModel.allianceData.removeEventListener(p.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
  };
  CastleBookmarkShowAttackersDialog.prototype.destroy = function () {
    e.prototype.destroy.call(this);
  };
  CastleBookmarkShowAttackersDialog.prototype.hideLoaded = function (t = null) {
    this._tableSorter.hide();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleBookmarkShowAttackersDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        y.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_alliance_bookmarks_attackerList"));
    }
  };
  Object.defineProperty(CastleBookmarkShowAttackersDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkShowAttackersDialog.__initialize_static_members = function () {
    CastleBookmarkShowAttackersDialog.NAME = "CastleBookmarkShowAttackers";
  };
  return CastleBookmarkShowAttackersDialog;
}(m.CastleExternalDialog);
exports.CastleBookmarkShowAttackersDialog = E;
var y = require("./9.js");
var b = require("./343.js");
var D = require("./1355.js");
s.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();