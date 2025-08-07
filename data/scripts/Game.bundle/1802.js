Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./69.js");
var l = createjs.MouseEvent;
var c = function () {
  function AChooseGroup(e, t, i, n, o = 0) {
    this._questionId = 0;
    this._offset = 0;
    this._parentMc = i;
    this._buttonMcs = t;
    this._buttonTextPrefix = n;
    this._questionId = e;
    this._offset = o;
    this.initTexts();
    this.reset();
  }
  AChooseGroup.prototype.show = function () {
    this._parentMc.addEventListener(l.CLICK, this.bindFunction(this.onClick));
    this._parentMc.addEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._parentMc.addEventListener(l.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  AChooseGroup.prototype.hide = function () {
    this._parentMc.removeEventListener(l.CLICK, this.bindFunction(this.onClick));
    this._parentMc.removeEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._parentMc.removeEventListener(l.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  AChooseGroup.prototype.getJson = function () {
    return {
      ID: this._questionId,
      AS: this.selectedIndices
    };
  };
  Object.defineProperty(AChooseGroup.prototype, "selectedIndices", {
    get: function () {
      var e = [];
      for (var t = 0; t < this._buttonMcs.length; ++t) {
        if (this.isSelected(t)) {
          e.push(t);
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  AChooseGroup.prototype.onClick = function (e) {
    var t = s.int(this.getIndexFromButtonMc(e.target));
    if (t >= 0) {
      this.click(t);
    }
  };
  AChooseGroup.prototype.onMouseOver = function (e) {
    var t = s.int(this.getIndexFromButtonMc(e.target));
    if (t >= 0) {
      this.hoverButton(t, true);
    }
  };
  AChooseGroup.prototype.onMouseOut = function (e) {
    for (var t = 0; t < this._buttonMcs.length; ++t) {
      this.hoverButton(t, false);
    }
  };
  AChooseGroup.prototype.initTexts = function () {
    for (var e = 0; e < this._buttonMcs.length; e++) {
      var t = this._buttonMcs[e];
      n.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_title, new a.LocalizedTextVO(this._buttonTextPrefix + (e + this._offset)));
      t.actLikeButton = true;
    }
  };
  AChooseGroup.prototype.reset = function () {
    for (var e = 0; e < this._buttonMcs.length; ++e) {
      this.selectButton(e, false);
    }
  };
  AChooseGroup.prototype.isSelected = function (e) {
    return this._buttonMcs[e].btn_select.currentFrame == AChooseGroup.SELECTED - 1;
  };
  AChooseGroup.prototype.getIndexFromButtonMc = function (e) {
    for (var t = 0; t < this._buttonMcs.length; ++t) {
      if (this._buttonMcs[t] == e) {
        return t;
      }
    }
    return -1;
  };
  AChooseGroup.prototype.click = function (e) {
    throw new r.AbstractMethodError();
  };
  AChooseGroup.prototype.selectButton = function (e, t) {
    this._buttonMcs[e].btn_select.gotoAndStop(t ? AChooseGroup.SELECTED : AChooseGroup.NOT_SELECTED);
  };
  AChooseGroup.prototype.hoverButton = function (e, t) {
    if (!this.isSelected(e)) {
      this._buttonMcs[e].btn_select.gotoAndStop(t ? AChooseGroup.HOVER : AChooseGroup.NOT_SELECTED);
    }
  };
  AChooseGroup.__initialize_static_members = function () {
    AChooseGroup.SELECTED = 3;
    AChooseGroup.NOT_SELECTED = 1;
    AChooseGroup.HOVER = 2;
  };
  return AChooseGroup;
}();
exports.AChooseGroup = c;
o.classImplementsInterfaces(c, "ISurveyFormField");
c.__initialize_static_members();