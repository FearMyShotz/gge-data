Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.FocusEvent;
var o = createjs.MouseEvent;
var a = function () {
  function CastleSearchScrollListComponent(e, t, i) {
    this.inputFieldName = "txt_search";
    this.disp = e;
    this.scrollList = t;
    this.searchPredicate = i;
  }
  CastleSearchScrollListComponent.prototype.addEventListener = function () {
    this.disp.addEventListener(o.CLICK, this.bindFunction(this.onClick));
    var e = this.disp[this.inputFieldName];
    e.addEventListener(n.FOCUS_IN, this.bindFunction(this.onFocusInSearchText));
    e.addEventListener(n.FOCUS_OUT, this.bindFunction(this.onFocusOutSearchText));
    e.addEventListener(l.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
  };
  CastleSearchScrollListComponent.prototype.removeEventListener = function () {
    this.disp.removeEventListener(o.CLICK, this.bindFunction(this.onClick));
    var e = this.disp[this.inputFieldName];
    e.removeEventListener(n.FOCUS_IN, this.bindFunction(this.onFocusInSearchText));
    e.removeEventListener(n.FOCUS_OUT, this.bindFunction(this.onFocusOutSearchText));
    e.removeEventListener(l.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
  };
  CastleSearchScrollListComponent.prototype.show = function () {
    this.addEventListener();
    this.scrollToStart();
    this.searchField = s.GoodgameTextFieldManager.getInstance().registerTextField(this.disp[this.inputFieldName], new u.LocalizedTextVO("dialog_highscore_search"));
    this.searchField.type = c.TextFieldType.INPUT;
    this.defaultSearchText = this.searchField.text;
  };
  CastleSearchScrollListComponent.prototype.hide = function () {
    this.removeEventListener();
  };
  CastleSearchScrollListComponent.prototype.scrollToStart = function () {
    this.scrollList.initList();
  };
  CastleSearchScrollListComponent.prototype.onClick = function (e) {
    if (e.target == this.disp.btn_search && p.ButtonHelper.isButtonEnabled(e.target) && this.searchField.text != this.defaultSearchText) {
      this.scrollToEntry(this.searchField.text);
    }
  };
  CastleSearchScrollListComponent.prototype.onKeyDown = function (e) {
    if (e.key == r.Keyboard.ENTER && this.searchField.text != "" && this.searchField.text != this.defaultSearchText) {
      document.activeElement.blur();
      this.scrollToEntry(this.searchField.text);
    }
  };
  CastleSearchScrollListComponent.prototype.scrollToEntry = function (e) {
    this.onStartSearch();
    var t;
    for (var i = d.int(this.scrollList.voList.length), n = 0; n < i; n++) {
      var o = this.scrollList.voList[n];
      if (this.searchPredicate(o, e)) {
        t = o;
        break;
      }
    }
    if (t) {
      this.centerOnItemVO(n);
      this.onFind(t);
    } else if (this.notFoundCallback) {
      this.notFoundCallback();
    } else {
      this.scrollToStart();
    }
  };
  CastleSearchScrollListComponent.prototype.onStartSearch = function () {
    if (this.searchStartedCallback) {
      this.searchStartedCallback();
    }
  };
  CastleSearchScrollListComponent.prototype.onFind = function (e) {
    if (this.foundCallback) {
      for (var t = d.int(this.scrollList.veList.length), i = 0; i < t; i++) {
        var n = this.scrollList.veList[i];
        if (n.scrollItemVO == e) {
          this.foundCallback(n);
          return;
        }
      }
    }
  };
  CastleSearchScrollListComponent.prototype.centerOnItemVO = function (e) {
    var t = d.int(this.scrollList.itemsVisibleAtOnce / 2);
    var i = d.int(Math.max(e - t, 0));
    this.scrollList.initList(i);
  };
  CastleSearchScrollListComponent.prototype.onFocusInSearchText = function (e) {
    if (this.searchField.text == this.defaultSearchText) {
      this.searchField.clearText();
    }
  };
  CastleSearchScrollListComponent.prototype.onFocusOutSearchText = function (e) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new u.LocalizedTextVO("dialog_highscore_search");
    }
  };
  return CastleSearchScrollListComponent;
}();
exports.CastleSearchScrollListComponent = a;
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./8.js");