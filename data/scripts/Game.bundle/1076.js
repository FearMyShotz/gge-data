Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./16.js");
var m = require("./15.js");
var f = require("./180.js");
var O = require("./20.js");
var E = require("./8.js");
var y = require("./11.js");
var b = require("./1722.js");
var D = require("./3563.js");
var I = require("./3564.js");
var T = function (e) {
  function CastleIngameHelpDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleIngameHelpDialog.NAME) || this;
  }
  n.__extends(CastleIngameHelpDialog, e);
  CastleIngameHelpDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_itemContainer.btn_down, this.dialogDisp.mc_itemContainer.btn_up]);
    E.ButtonHelper.initButton(this.dialogDisp.btn_discord, 1, O.ClickFeedbackButtonHover);
    this.dialogDisp.btn_discord.toolTipText = "panel_option_discord";
  };
  CastleIngameHelpDialog.prototype.initCategoriesScrollList = function () {
    var e = b.CastleInGameHelpCategoriesEnum.getInGameHelpCategories();
    this._itemScrollList = new r.ItemScrollList(this.dialogDisp.mc_itemContainer);
    this._itemScrollList.scrollItemClass = D.HelpScrollItem;
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new I.HelpScrollItemVO();
          var a = h.Localize.text(n.getCategoryText());
          var l = h.Localize.text(s.GenericTextIds.VALUE_ASSIGN_COLON, [n.key + 1, a]);
          o.itemText = l;
          this._itemScrollList.pushContent(o);
        }
      }
    }
  };
  CastleIngameHelpDialog.prototype.showLoaded = function (t = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_forum, new g.LocalizedTextVO("dialog_ingameHelp_discordText"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new g.LocalizedTextVO("panel_option_ingameHelp"));
    this._itxt_helpText = this.textFieldManager.registerTextField(this.dialogDisp.txt_helpText, new p.HTMLTextCustomVO());
    this._scrollComponent = new v.CastleTextScrollComponent(new f.CastleTextScrollVO(this.dialogDisp.txt_helpText, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this._scrollComponent.hideArrowsOnScrollToEdges = true;
    this.initCategoriesScrollList();
    e.prototype.showLoaded.call(this, t);
    this._scrollComponent.onShow();
    this._itemScrollList.addEventListener(l.ScrollItemEvent.CLICK, this.bindFunction(this.onCategoryClick));
    this._itxt_helpText.htmlLinkClick.add(this.bindFunction(this.onHyperLinkClick));
    this.initList();
  };
  CastleIngameHelpDialog.prototype.initList = function () {
    var e = 0;
    if (this.dialogProperties) {
      this._itemScrollList.setActiveItemVO(this.dialogProperties.inGameHelpActiveID, true);
      e = C.int(this.calculateScrollStepForIndex(this.dialogProperties.inGameHelpActiveID));
      this.showHelpText(this.dialogProperties.category);
    } else {
      this._itemScrollList.setActiveItemVO(0, true);
      this.showHelpText(b.CastleInGameHelpCategoriesEnum.WELCOME);
    }
    this._itemScrollList.initList(e);
  };
  CastleIngameHelpDialog.prototype.calculateScrollStepForIndex = function (e) {
    var t = e - CastleIngameHelpDialog.HELP_ITEM_COUNT_AT_ONCE;
    if (t < CastleIngameHelpDialog.SCROLL_LIST_MIN_START_ITEM) {
      return CastleIngameHelpDialog.SCROLL_LIST_MIN_START_ITEM;
    } else {
      return t + CastleIngameHelpDialog.SCROLL_LIST_ITEM_OFFSET;
    }
  };
  CastleIngameHelpDialog.prototype.hideLoaded = function (t = null) {
    this._scrollComponent.onHide();
    this._itemScrollList.removeEventListener(l.ScrollItemEvent.CLICK, this.bindFunction(this.onCategoryClick));
    this._itxt_helpText.htmlLinkClick.remove(this.bindFunction(this.onHyperLinkClick));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleIngameHelpDialog.prototype.showHelpText = function (e) {
    var t = e.getCategoryText();
    var i = e.getCategoryContentText();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_category, new g.LocalizedTextVO(t));
    this._itxt_helpText = this.textFieldManager.registerTextField(this.dialogDisp.txt_helpText, this.getHtmlTextVOById(i));
    this.dialogDisp.iconHolder.gotoAndStop(e.key + 1);
    this._scrollComponent.scrollToStart();
  };
  CastleIngameHelpDialog.prototype.getHtmlTextVOById = function (e) {
    var t = new u.HTMLLinkFormatVO(_.ClientConstColor.FONT_DEFAULT_COLOR);
    var i = new u.HTMLLinkFormatVO(_.ClientConstColor.GENERIC_LIGHT_BLUE, a.GGSTextDecoration.UNDERLINE);
    var n = new d.HTMLLinkFormatsVO(new u.HTMLLinkFormatVO(_.ClientConstColor.HELP_LINK_COLOR), t, i);
    var o = new p.HTMLTextCustomVO();
    o.addLocalizedTextVO(new g.LocalizedTextVO(e));
    o.linkFormats = n;
    return o;
  };
  CastleIngameHelpDialog.prototype.onHyperLinkClick = function (e, t) {
    var i = C.int(Number(t));
    var n = b.CastleInGameHelpCategoriesEnum.getCategoryFromKey(i - 1);
    this._itemScrollList.initList(n.key);
    this._itemScrollList.setActiveItemVO(i - 1, true);
    this.showHelpText(n);
  };
  CastleIngameHelpDialog.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_discord:
          o.CommandController.instance.executeCommand(m.CastleBasicController.OPEN_DISCORD, ["Info"]);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleIngameHelpDialog.prototype.onCategoryClick = function (e) {
    var t = b.CastleInGameHelpCategoriesEnum.getCategoryFromKey(e.scrollItem.scrollItemVO.id);
    this._itemScrollList.setActiveItemVO(e.scrollItem.scrollItemVO.id, true);
    this.showHelpText(t);
  };
  Object.defineProperty(CastleIngameHelpDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleIngameHelpDialog.__initialize_static_members = function () {
    CastleIngameHelpDialog.NAME = "CastleIngameHelpEx2";
    CastleIngameHelpDialog.HELP_ITEM_COUNT_AT_ONCE = 10;
    CastleIngameHelpDialog.SCROLL_LIST_MIN_START_ITEM = 0;
    CastleIngameHelpDialog.SCROLL_LIST_ITEM_OFFSET = 1;
  };
  return CastleIngameHelpDialog;
}(y.CastleExternalDialog);
exports.CastleIngameHelpDialog = T;
var v = require("./182.js");
c.classImplementsInterfaces(T, "ICollectableRendererList");
T.__initialize_static_members();