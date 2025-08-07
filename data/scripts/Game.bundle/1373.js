Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./188.js");
var u = require("./1374.js");
var d = require("./410.js");
var p = require("./4.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./2441.js");
var _ = function (e) {
  function CastleTitleSelectDialog() {
    var t = this;
    t.isPrefixCategory = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTitleSelectDialog.NAME) || this;
  }
  n.__extends(CastleTitleSelectDialog, e);
  CastleTitleSelectDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new r.LocalizedTextVO("dialog_titleSelection_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_fame_rankTitle"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_system, new r.LocalizedTextVO("system"));
    this.itxt_prefix_deselected = this.textFieldManager.registerTextField(this.dialogDisp.btn_prefix_deselected.txt_label, new r.LocalizedTextVO(""));
    this.itxt_prefix_selected = this.textFieldManager.registerTextField(this.dialogDisp.btn_prefix_selected.txt_label, new r.LocalizedTextVO(""));
    this.itxt_suffix_deselected = this.textFieldManager.registerTextField(this.dialogDisp.btn_suffix_deselected.txt_label, new r.LocalizedTextVO(""));
    this.itxt_suffix_selected = this.textFieldManager.registerTextField(this.dialogDisp.btn_suffix_selected.txt_label, new r.LocalizedTextVO(""));
    this.prefixLabels = [this.itxt_prefix_selected, this.itxt_prefix_deselected];
    this.suffixLabels = [this.itxt_suffix_selected, this.itxt_suffix_deselected];
    var i = [this.dialogDisp.btn_prefix_deselected, this.dialogDisp.btn_suffix_deselected, this.dialogDisp.mc_itemContainer.item0, this.dialogDisp.mc_itemContainer.item1, this.dialogDisp.mc_itemContainer.item2, this.dialogDisp.mc_itemContainer.item3];
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.mc_itemContainer.btn_up, this.dialogDisp.mc_itemContainer.btn_down, this.dialogDisp.mc_itemContainer.mc_slider.btn_slider].concat(i));
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          a.mouseChildren = false;
        }
      }
    }
    this._scrollList = new O.SliderItemScrollList(this.dialogDisp.mc_itemContainer, this.dialogDisp);
    this._scrollList.scrollItemClass = E.CastleTitleSelectionItem;
  };
  CastleTitleSelectDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    p.CastleModel.titleData.isSuffixAvailable;
    var i = "dialog_titleSelection_description";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new l.TextVO(p.CastleModel.userData.userName));
    this.clearLabels(this.prefixLabels);
    this.clearLabels(this.suffixLabels);
    this.isPrefixCategory = true;
    this._currentPrefix = p.CastleModel.titleData.getSelectedTitleByDisplayType(c.ClientConstTitle.DISPLAYTYPE_PREFIX);
    this._currentSuffix = p.CastleModel.titleData.getSelectedTitleByDisplayType(c.ClientConstTitle.DISPLAYTYPE_SUFFIX);
    this.updateTitle(this._currentPrefix);
    this.updateTitle(this._currentSuffix);
    this.updateTitleList();
    this.updateButtons();
  };
  CastleTitleSelectDialog.prototype.clearLabels = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.textContentVO.textId = "";
        }
      }
    }
  };
  CastleTitleSelectDialog.prototype.addEventListenerOnShow = function () {
    this._scrollList.addEventListener(o.ScrollItemEvent.CLICK, this.bindFunction(this.onSelectTitle));
    p.CastleModel.titleData.addEventListener(d.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitlesUpdate));
  };
  CastleTitleSelectDialog.prototype.removeEventListenerOnHide = function () {
    this._scrollList.removeEventListener(o.ScrollItemEvent.CLICK, this.bindFunction(this.onSelectTitle));
    p.CastleModel.titleData.removeEventListener(d.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitlesUpdate));
  };
  CastleTitleSelectDialog.prototype.onSelectTitle = function (e) {
    var t = e.scrollItem.selectionItemVO.title;
    this.updateTitle(t);
    this.updateTitleList();
  };
  CastleTitleSelectDialog.prototype.onTitlesUpdate = function (e) {
    this.clearLabels(this.prefixLabels);
    this.clearLabels(this.suffixLabels);
    this._currentPrefix = this.validateCurrentlySelected(this._currentPrefix);
    this._currentSuffix = this.validateCurrentlySelected(this._currentSuffix);
    this.updateTitle(this._currentPrefix);
    this.updateTitle(this._currentSuffix);
    if (this.isPrefixCategory || p.CastleModel.titleData.isSuffixAvailable) {
      this.updateTitleList();
      this.updateButtons();
    } else {
      this.toggleCategory();
    }
  };
  CastleTitleSelectDialog.prototype.validateCurrentlySelected = function (e) {
    for (var t = 0, i = p.CastleModel.titleData.getDisplayableTitles(e.displayType); t < i.length; t++) {
      var n = i[t];
      if (n.titleSystem == e.titleSystem) {
        return n;
      }
    }
    return p.CastleModel.titleData.getSelectedTitleByDisplayType(e.displayType);
  };
  CastleTitleSelectDialog.prototype.updateTitleList = function () {
    this._scrollList.clear();
    if (this.availableTitles != null) {
      for (var e = 0, t = this.availableTitles; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = i.isSuffix ? i.titleSystem == this._currentSuffix.titleSystem : i.titleSystem == this._currentPrefix.titleSystem;
          var o = new C.CastleTitleSelectionItemVO(i, n);
          this._scrollList.pushContent(o);
        }
      }
    }
    this._scrollList.initList(this._scrollList.currentStartIndex);
  };
  CastleTitleSelectDialog.prototype.updateTitle = function (e) {
    if (e && e != m.CastleTitleData.NULL_TITLE) {
      if (e.displayType == c.ClientConstTitle.DISPLAYTYPE_PREFIX) {
        this._currentPrefix = e;
      } else {
        this._currentSuffix = e;
      }
      var t = e.isSuffix ? this.suffixLabels : this.prefixLabels;
      if (t != null) {
        for (var i = 0, n = t; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            o.textContentVO.textId = e.textID;
          }
        }
      }
    }
  };
  CastleTitleSelectDialog.prototype.updateButtons = function () {
    this.dialogDisp.btn_prefix_selected.visible = this.isPrefixCategory;
    this.dialogDisp.btn_prefix_deselected.visible = !this.isPrefixCategory;
    this.dialogDisp.btn_suffix_selected.visible = !this.isPrefixCategory && p.CastleModel.titleData.isSuffixAvailable;
    this.dialogDisp.btn_suffix_deselected.visible = this.isPrefixCategory && p.CastleModel.titleData.isSuffixAvailable;
    if (this._currentSuffix && this._currentSuffix.isAForcedTitle) {
      h.ButtonHelper.enableButton(this.dialogDisp.btn_suffix_deselected, false);
    } else {
      h.ButtonHelper.enableButton(this.dialogDisp.btn_suffix_deselected, true);
    }
  };
  CastleTitleSelectDialog.prototype.onClick = function (e) {
    if (h.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_yes:
          this.confirmSelection();
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.hide();
          break;
        case this.dialogDisp.btn_prefix_deselected:
        case this.dialogDisp.btn_suffix_deselected:
          this.toggleCategory();
          break;
        case this.dialogDisp.btn_help:
          f.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_titleSelection"));
      }
    }
  };
  CastleTitleSelectDialog.prototype.toggleCategory = function () {
    this.isPrefixCategory = !this.isPrefixCategory;
    this.updateTitleList();
    this.updateButtons();
  };
  CastleTitleSelectDialog.prototype.confirmSelection = function () {
    this.hide();
    p.CastleModel.smartfoxClient.sendCommandVO(new u.C2SSelectTitleVO(this._currentPrefix.titleSystem, this._currentSuffix ? this._currentSuffix.titleSystem : ""));
  };
  Object.defineProperty(CastleTitleSelectDialog.prototype, "availableTitles", {
    get: function () {
      return p.CastleModel.titleData.getDisplayableTitles(this.isPrefixCategory ? c.ClientConstTitle.DISPLAYTYPE_PREFIX : c.ClientConstTitle.DISPLAYTYPE_SUFFIX);
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleSelectDialog.__initialize_static_members = function () {
    CastleTitleSelectDialog.NAME = "CastleTitleSelection";
  };
  return CastleTitleSelectDialog;
}(g.CastleExternalDialog);
exports.CastleTitleSelectDialog = _;
var m = require("./565.js");
var f = require("./9.js");
var O = require("./314.js");
var E = require("./2442.js");
a.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();