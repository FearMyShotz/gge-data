Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./57.js");
var l = require("./40.js");
var c = require("./8.js");
var u = function (e) {
  function SearchFieldComponent(t) {
    var i = this;
    i._onSearchValueChanged = new r.Signal();
    i._isFocusedIn = false;
    i._currentSearchValue = "";
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(SearchFieldComponent, e);
  SearchFieldComponent.prototype.init = function () {
    c.ButtonHelper.initButton(this.disp.btn_cancel, -1, p.ClickFeedbackButtonHover);
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_helpText, new a.LocalizedTextVO("searchDeco_name"));
    this._txtInput = d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_value, new s.TextVO(""));
    this._txtInput.maxChars = SearchFieldComponent.SEARCH_FIELD_MAX_CHARS;
    this._txtInput.multiline = false;
    this._txtInput.wordwrap = false;
  };
  SearchFieldComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this._txtInput) {
      this._txtInput.change.add(this.bindFunction(this.onValueChanged));
      this._txtInput.focusIn.add(this.bindFunction(this.onSearchFieldFocusIn));
      this._txtInput.focusOut.add(this.bindFunction(this.onSearchFieldFocusOut));
    }
  };
  SearchFieldComponent.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this._txtInput) {
      this._txtInput.change.remove(this.bindFunction(this.onValueChanged));
      this._txtInput.focusIn.remove(this.bindFunction(this.onSearchFieldFocusIn));
      this._txtInput.focusOut.remove(this.bindFunction(this.onSearchFieldFocusOut));
    }
  };
  SearchFieldComponent.prototype.updateVisuals = function () {
    var e = this._currentSearchValue.length > 0;
    this.disp.txt_helpText.visible = !e && !this._isFocusedIn;
    this.disp.mc_background.gotoAndStop(this._isFocusedIn ? 2 : 1);
    this.disp.btn_search.visible = !e;
    this.disp.btn_cancel.visible = e;
  };
  SearchFieldComponent.prototype.clearSearchField = function () {
    this._txtInput.clearText();
    this._currentSearchValue = "";
    this.updateVisuals();
    if (this._onSearchValueChanged) {
      this._onSearchValueChanged.dispatch();
    }
  };
  SearchFieldComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_cancel:
        this.clearSearchField();
        break;
      default:
        this._txtInput.setFocus();
    }
  };
  SearchFieldComponent.prototype.onValueChanged = function (e) {
    this._currentSearchValue = this._txtInput.text.toLowerCase();
    this.updateVisuals();
    if (this._onSearchValueChanged) {
      this._onSearchValueChanged.dispatch();
    }
  };
  SearchFieldComponent.prototype.onSearchFieldFocusIn = function (e) {
    this._isFocusedIn = true;
    this.updateVisuals();
  };
  SearchFieldComponent.prototype.onSearchFieldFocusOut = function (e) {
    this._isFocusedIn = false;
    this.updateVisuals();
  };
  Object.defineProperty(SearchFieldComponent.prototype, "currentSearchValue", {
    get: function () {
      return this._currentSearchValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SearchFieldComponent.prototype, "onSearchValueChanged", {
    get: function () {
      return this._onSearchValueChanged;
    },
    enumerable: true,
    configurable: true
  });
  SearchFieldComponent.__initialize_static_members = function () {
    SearchFieldComponent.SEARCH_FIELD_MAX_CHARS = 100;
  };
  return SearchFieldComponent;
}(l.CastleItemRenderer);
exports.SearchFieldComponent = u;
var d = require("./14.js");
var p = require("./20.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();