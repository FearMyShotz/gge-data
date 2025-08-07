Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./11.js");
var c = require("./8.js");
var u = require("./20.js");
var d = require("./285.js");
var p = require("./78.js");
var h = require("./76.js");
var g = require("./77.js");
var C = require("./13.js");
var _ = require("./2457.js");
var m = require("./2458.js");
var f = require("./16.js");
var O = require("./223.js");
var E = function (e) {
  function AllianceLanguageSelectionDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, AllianceLanguageSelectionDialog.NAME) || this;
  }
  n.__extends(AllianceLanguageSelectionDialog, e);
  AllianceLanguageSelectionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new o.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("selectlanguage")));
    this._itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.mc_search.txt_text, new o.TextVO(a.Localize.text("search")));
    this._inputBehaviour = new d.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_search, this._itxt_search);
    var i = new g.InfiniteScrollListOptions(m.AllianceLanguageSelectionItem, "SelectLanguageItem", AllianceLanguageSelectionDialog.NAME);
    i.itemPaddingY = 4;
    i.useSmoothScroll = true;
    this._scrollList = new p.InfiniteScrollListComponent(new h.InfiniteScrollListClips(this.dialogDisp).addMaskMc(this.dialogDisp.mc_items.mask), i);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], u.ClickFeedbackButtonHover);
  };
  AllianceLanguageSelectionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._itxt_search.color = f.ClientConstColor.FONT_DEFAULT_COLOR;
    this._selectedLanguageCode = this.dialogProperties.preselectedLanguage;
    this._languageVOs = [];
    for (var i = 0, n = AllianceLanguageSelectionDialog.LANGUAGE_CODES; i < n.length; i++) {
      var o = n[i];
      this._languageVOs.push(new _.AllianceLanguageSelectionItemVO(o, a.Localize.text("language_native_" + o), this));
    }
    this.updateItems();
    this._scrollList.onShow();
    this._scrollList.scrollToData(0);
    this._inputBehaviour.onShow();
    this._itxt_search.keyUp.add(this.bindFunction(this.onSearchFieldKeyDown));
    this._itxt_search.change.add(this.bindFunction(this.onSearchFieldChange));
  };
  AllianceLanguageSelectionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._scrollList.onHide();
    this._inputBehaviour.onHide();
    this._itxt_search.keyUp.removeAll();
    this._itxt_search.change.removeAll();
  };
  AllianceLanguageSelectionDialog.prototype.onSearchFieldKeyDown = function (e) {
    if (e.key == r.Keyboard.ENTER) {
      document.activeElement.blur();
    }
  };
  AllianceLanguageSelectionDialog.prototype.onSearchFieldChange = function (e) {
    this.updateItems();
  };
  AllianceLanguageSelectionDialog.prototype.updateItems = function (e) {
    var t = this;
    if (e === undefined) {
      e = true;
    }
    var i = [];
    if (this.dialogProperties.includeAllLanguageSelection) {
      i.push(new _.AllianceLanguageSelectionItemVO("", a.Localize.text("dialog_allLanguages_desc"), this));
    }
    i = i.concat(this._languageVOs);
    if (!this._inputBehaviour.isEmpty()) {
      i = i.filter(function (e) {
        var i = [];
        for (var n = 1; n < arguments.length; n++) {
          i[n - 1] = arguments[n];
        }
        return e.localizedLanguage.toLowerCase().includes(t._itxt_search.text.toLowerCase());
      });
    }
    var n = i.length == 0 ? f.ClientConstColor.FONT_INSUFFICIENT_COLOR : f.ClientConstColor.FONT_DEFAULT_COLOR;
    if (s.ColorTransform.colorNumToString(n) != this._itxt_search.color) {
      this._itxt_search.color = n;
      this.dialogDisp.mc_search.txt_text.getTextFieldHTMLElement().style.color = this._itxt_search.color;
    }
    this._scrollList.updateWithNewData(i, e);
  };
  AllianceLanguageSelectionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.dialogProperties.onConfirmCallBack(this._selectedLanguageCode);
        this.hide();
    }
  };
  Object.defineProperty(AllianceLanguageSelectionDialog.prototype, "selectedLanguageCode", {
    get: function () {
      return this._selectedLanguageCode;
    },
    set: function (e) {
      this._selectedLanguageCode = e;
      O.CastleAllianceForumData.LAST_SEARCHED_LANGUAGE = e;
      this.updateItems(false);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLanguageSelectionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AllianceLanguageSelectionDialog.NAME = "CastleSelectLanguage";
  AllianceLanguageSelectionDialog.LANGUAGE_CODES = ["en", "de", "fr", "pl", "ru", "it", "nl", "pt", "es", "ar", "da", "no", "fi", "sv", "ja", "ko", "el", "tr", "zh_cn", "zh_tw", "cs", "ro", "sk", "hu", "bg"];
  return AllianceLanguageSelectionDialog;
}(l.CastleExternalDialog);
exports.AllianceLanguageSelectionDialog = E;