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
var u = require("./232.js");
var d = require("./102.js");
var p = require("./4.js");
var h = require("./273.js");
var g = require("./739.js");
var C = require("./740.js");
var _ = require("./8.js");
var m = require("./11.js");
var f = require("./947.js");
var O = require("./948.js");
var E = function (e) {
  function CastleBookmarkAttackerSelectionDialog() {
    var t = this;
    t._allMembersSelected = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleBookmarkAttackerSelectionDialog.NAME) || this;
  }
  n.__extends(CastleBookmarkAttackerSelectionDialog, e);
  CastleBookmarkAttackerSelectionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("Bookmarks_alliance_setParticipants_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_label_select_all, new l.LocalizedTextVO("Bookmarks_alliance_setParticipants_selectAll"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_rank.txt_label, new l.LocalizedTextVO("rank"));
    this.dialogDisp.btn_column_sort_rank.toolTipText = "sortList";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_name.txt_label, new l.LocalizedTextVO("generic_name"));
    this.dialogDisp.btn_column_sort_name.toolTipText = "sortList";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_column_sort_level.txt_label, new l.LocalizedTextVO("level"));
    this.dialogDisp.btn_column_sort_level.toolTipText = "sortList";
    this.dialogDisp.btn_column_sort_distance.toolTipText = "distance_target";
    this.dialogDisp.btn_column_sort_distance.triangle.toolTipText = "sortList";
    this.dialogDisp.btn_column_sort_might.toolTipText = "playerMight";
    this.dialogDisp.btn_column_sort_selected.toolTipText = "Bookmarks_alliance_participants_tooltip";
    this.dialogDisp.btn_column_sort_selected.triangle.toolTipText = "sortList";
    this.dialogDisp.btn_select_all.actLikeButton = true;
    this.dialogDisp.btn_select_all.mouseChildren = false;
    this._scrollBarVO = new h.BasicSliderVO(this.dialogDisp.mc_slider.mc_sliderBar, this.dialogDisp.mc_slider.btn_slider, 0, 1, this.dialogDisp);
    this._scrollBar = new b.ScrollComponent(this._scrollBarVO, b.ScrollComponent.VERTICAL_SLIDER);
    this._tableSorter = new C.CastleTableSorter();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.showLoaded = function (t = null) {
    this._changedMembers = [];
    this._targetPosition = this.dialogProperties.bookmarkVO.worldmapObjectVO.absAreaPos;
    this._savedSelectedMembers = this.dialogProperties.bookmarkVO.attackOrderDetails.assignedAttackers;
    this.setupMembers();
    this.setupButtons();
    if (this._scrollList) {
      this._scrollList.clear();
      this._scrollList.remove();
    }
    this._scrollList = new o.ItemScrollList(this.dialogDisp);
    this._scrollList.scrollItemClass = D.CastleSelectableAllianceMemberScrollItem;
    this._scrollList.hideButtons = true;
    p.CastleModel.allianceData.addEventListener(d.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataChanged));
    e.prototype.showLoaded.call(this, t);
    this.updateList();
    this.setSelectAllButtonState();
    this.writeSettingsToBookmarkVO();
    this.checkSubmitButtonState();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.setupMembers = function () {
    this._memberList = [];
    var e = p.CastleModel.allianceData.getAllianceInfoVOByID(p.CastleModel.userData.allianceID).memberList;
    var t = c.int(p.CastleModel.kingdomData.getKingdomVOByID(this.dialogProperties.bookmarkVO.kingdomId).minLevel);
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (!(o.playerLevel < t)) {
            this._memberList.push(o);
          }
        }
      }
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onScrollItemClick = function (e) {
    this.checkMemberStateChange(e.scrollItem.scrollItem, true);
    this.setSelectAllButtonState();
    this.checkSubmitButtonState();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.setSelectAllButtonState = function () {
    this._allMembersSelected = !!this._scrollList.voList.every(CastleBookmarkAttackerSelectionDialog.memberIsSelected);
    this.dialogDisp.btn_select_all.gotoAndStop(this._allMembersSelected ? 2 : 1);
    this.dialogDisp.btn_select_all.toolTipText = this._allMembersSelected ? "Bookmarks_alliance_setParticipants_selectAll_tooltip" : "Bookmarks_alliance_setParticipants_selectAll_Inactive_tooltip";
  };
  CastleBookmarkAttackerSelectionDialog.prototype.checkMemberStateChange = function (e, t) {
    if (!this.getChangedMemberByMemberInfo(e)) {
      var i = t ? !e.selected : e.selected;
      this._changedMembers.push(new I(e, i));
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.getChangedMemberByMemberInfo = function (e) {
    if (this._changedMembers != null) {
      for (var t = 0, i = this._changedMembers; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.memberInfoScrollItem == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleBookmarkAttackerSelectionDialog.prototype.checkSubmitButtonState = function () {
    var e = !!this._scrollList.voList.every(CastleBookmarkAttackerSelectionDialog.memberIsNotSelected);
    _.ButtonHelper.enableButton(this.dialogDisp.btn_ok, !e);
    this.dialogDisp.btn_ok.toolTipText = e ? "Bookmarks_alliance_setParticipants_nobodySelected_Tooltip" : "";
  };
  CastleBookmarkAttackerSelectionDialog.memberIsSelected = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return e.selected;
  };
  CastleBookmarkAttackerSelectionDialog.memberIsNotSelected = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return !e.selected;
  };
  CastleBookmarkAttackerSelectionDialog.prototype.updateList = function () {
    this._scrollList.clear();
    var e = this.dialogProperties.bookmarkVO.worldmapObjectVO.absAreaPos;
    var t = c.int(this.dialogProperties.bookmarkVO.kingdomId);
    if (this._memberList != null) {
      for (var i = 0, n = this._memberList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new O.AllianceMemberScrollItemVO(o, null, e, t);
          this._scrollList.pushContent(a);
          if (this._savedSelectedMembers.length == 0 && o.isOwnOwnerInfo) {
            this.checkMemberStateChange(a, false);
            a.selected = true;
          }
          for (var s = 0, r = this.dialogProperties.bookmarkVO.attackOrderDetails.assignedAttackers; s < r.length; s++) {
            var l = r[s];
            if (l !== undefined && o.playerID == l) {
              a.selected = true;
            }
          }
        }
      }
    }
    this._tableSorter.init(this._scrollList.voList, this.bindFunction(this.onMemberListSortingChanged), this.createSorters());
    this._tableSorter.show();
    this.showScrollList();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.showScrollList = function () {
    this._scrollList.initList();
    var e = c.int(this._scrollList.voList.length);
    if (e < this._scrollList.veList.length) {
      this.dialogDisp.mc_slider.visible = false;
      this.dialogDisp.mc_sliderDeco.visible = true;
    } else {
      this.dialogDisp.mc_slider.visible = true;
      this.dialogDisp.mc_sliderDeco.visible = false;
      this._scrollBarVO.maxValue = c.int(e - this._scrollList.veList.length + 1);
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onAllianceDataChanged = function (e) {
    if (p.CastleModel.userData.isInAlliance) {
      this.setupMembers();
      this.updateList();
    } else {
      this.hide();
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onMemberListSortingChanged = function (e) {
    if (this._sorters != null) {
      for (var t = 0, i = this._sorters; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.sortingTrigger.triangle.gotoAndStop(1);
        }
      }
    }
    e.sortingTrigger.triangle.gotoAndStop(e.isInAscendingOrder ? 2 : 1);
    this.showScrollList();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onClick = function (t) {
    if (_.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_select_all:
          this.toggleAllMemberSelection();
          break;
        case this.dialogDisp.btn_ok:
          this.writeSettingsToBookmarkVO();
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          y.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_bookmarks_alliance_setParticipant"));
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.revertSettings();
          this.hide();
      }
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.revertSettings = function () {
    if (this._changedMembers != null) {
      for (var e = 0, t = this._changedMembers; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.memberInfoScrollItem.selected = i.originalSelectedValue;
        }
      }
    }
    this.dialogProperties.bookmarkVO.attackOrderDetails.sendMessageToAssignedAttackers = true;
    this._allMembersSelected = false;
  };
  CastleBookmarkAttackerSelectionDialog.prototype.writeSettingsToBookmarkVO = function () {
    this.dialogProperties.bookmarkVO.attackOrderDetails.assignedAttackers.length = 0;
    for (var e = 0, t = this._scrollList.voList; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && i.selected) {
        this.dialogProperties.bookmarkVO.attackOrderDetails.assignedAttackers.push(i.ownerInfoVO.playerID);
      }
    }
  };
  CastleBookmarkAttackerSelectionDialog.prototype.toggleAllMemberSelection = function () {
    this._allMembersSelected = !this._allMembersSelected;
    this.updateSelectionForAllMembers();
    this.showScrollList();
    this.checkSubmitButtonState();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.updateSelectionForAllMembers = function () {
    this._scrollList.voList.forEach(this.bindFunction(this.changeSelectedState));
    this.setSelectAllButtonState();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.changeSelectedState = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    if (e.selected != this._allMembersSelected) {
      this.checkMemberStateChange(e, false);
    }
    e.selected = this._allMembersSelected;
  };
  CastleBookmarkAttackerSelectionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    p.CastleModel.allianceData.removeEventListener(d.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataChanged));
    this._tableSorter.hide();
    this.dialogProperties.checkButtonSubmitState();
  };
  CastleBookmarkAttackerSelectionDialog.prototype.setupButtons = function () {
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_no, this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_column_sort_rank, this.dialogDisp.btn_column_sort_name, this.dialogDisp.btn_column_sort_level, this.dialogDisp.btn_column_sort_distance, this.dialogDisp.btn_column_sort_might, this.dialogDisp.btn_column_sort_selected]);
  };
  CastleBookmarkAttackerSelectionDialog.prototype.createSorters = function () {
    this._sorters = [];
    this._sorters.push(new g.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_rank, f.AllianceMemberScrollItemComparer.comparePrimaryRank));
    this._sorters.push(new g.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_name, f.AllianceMemberScrollItemComparer.comparePrimaryName));
    this._sorters.push(new g.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_level, f.AllianceMemberScrollItemComparer.comparePrimaryLevel));
    this._sorters.push(new g.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_distance, f.AllianceMemberScrollItemComparer.comparePrimaryDistance));
    this._sorters.push(new g.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_might, f.AllianceMemberScrollItemComparer.compareMightValue));
    this._sorters.push(new g.CastleColumnSortingVO(this.dialogDisp.btn_column_sort_selected, f.AllianceMemberScrollItemComparer.comparePrimarySelected));
    return this._sorters;
  };
  Object.defineProperty(CastleBookmarkAttackerSelectionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkAttackerSelectionDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this._scrollBar.addEventListener(u.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
    this._scrollBar.enableComponent = true;
    this._scrollList.addEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._scrollList.addEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListChanged));
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onScrollListChanged = function (e) {
    var t = c.int(this._scrollList.currentStartIndex);
    this._scrollBar.setSelectedIndex(t, false);
  };
  CastleBookmarkAttackerSelectionDialog.prototype.onSliderChanged = function (e) {
    var t = c.int(this._scrollBar.selectedIndex);
    this._scrollList.initList(t);
  };
  CastleBookmarkAttackerSelectionDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this._scrollBar.dispose();
    this._scrollBar.removeEventListener(u.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
    this._scrollList.removeEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._scrollList.removeEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListChanged));
  };
  CastleBookmarkAttackerSelectionDialog.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    if (this._tableSorter) {
      this._tableSorter.destroy();
    }
  };
  CastleBookmarkAttackerSelectionDialog.__initialize_static_members = function () {
    CastleBookmarkAttackerSelectionDialog.NAME = "CastleBookmarkAttackerSelection";
  };
  return CastleBookmarkAttackerSelectionDialog;
}(m.CastleExternalDialog);
exports.CastleBookmarkAttackerSelectionDialog = E;
var y = require("./9.js");
var b = require("./343.js");
var D = require("./2407.js");
s.classImplementsInterfaces(E, "ICollectableRendererList");
var I = function () {
  function ChangedMemberVO(e, t) {
    this._originalSelectedValue = false;
    this._memberInfoScrollItem = e;
    this._originalSelectedValue = t;
  }
  Object.defineProperty(ChangedMemberVO.prototype, "memberInfoScrollItem", {
    get: function () {
      return this._memberInfoScrollItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ChangedMemberVO.prototype, "originalSelectedValue", {
    get: function () {
      return this._originalSelectedValue;
    },
    enumerable: true,
    configurable: true
  });
  return ChangedMemberVO;
}();
E.__initialize_static_members();