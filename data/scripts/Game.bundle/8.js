Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MovieClip;
var o = createjs.TextField;
var a = createjs.DisplayObject;
var s = function () {
  function ButtonHelper() {}
  ButtonHelper.initBasicButton = function (e, t = -1) {
    ButtonHelper.initButton(e, t, r.BasicButton);
  };
  ButtonHelper.initTwoStateButton = function (e, t = -1) {
    ButtonHelper.initButton(e, t, u.TwoStateButton);
  };
  ButtonHelper.initCheckBox = function (e, t = -1) {
    ButtonHelper.initButton(e, t, l.CheckBoxButton);
  };
  ButtonHelper.initCheckBoxes = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          ButtonHelper.initButton(n, -1, l.CheckBoxButton);
        }
      }
    }
  };
  ButtonHelper.initSmallButton = function (e) {
    ButtonHelper.initButton(e, -1, c.SmallButton);
  };
  ButtonHelper.initBasicButtons = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          ButtonHelper.initBasicButton(n);
        }
      }
    }
  };
  ButtonHelper.initTwoStateButtons = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          ButtonHelper.initTwoStateButton(n);
        }
      }
    }
  };
  ButtonHelper.initSmallButtons = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          ButtonHelper.initSmallButton(n);
        }
      }
    }
  };
  ButtonHelper.initButton = function (e, t, i) {
    if (!!e && !p.instanceOfClass(e, "BasicButton") && !e.basicButton) {
      e.changeTextFieldCacheScale(2);
      if (e.children.length == 1 && e.getChildAt(0) instanceof o && h.isNullOrUndefined(e.hitArea) && !e.getChildAt(0).mouseEnabled) {
        console.warn("Register button \"" + e.name + "\" contains only a TextField. If it is not clickable, then set <TextField>.mouseEnable = true");
      }
      e.basicButton = new i(e, true);
      if (t > 0) {
        e.basicButton.mouseOverScale = t;
      }
    }
  };
  ButtonHelper.initButtons = function (e, t, i = -1) {
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          ButtonHelper.initButton(a, i, t);
        }
      }
    }
  };
  ButtonHelper.hasBasicButton = function (e) {
    return !!ButtonHelper.getBasicButton(e);
  };
  ButtonHelper.isButtonEnabled = function (e) {
    var t = ButtonHelper.getBasicButton(e);
    return !t || t.enabled;
  };
  ButtonHelper.enableButton = function (e, t) {
    var i = ButtonHelper.getBasicButton(e);
    if (i) {
      i.enableButton = t;
    }
  };
  ButtonHelper.setButtonSelected = function (e, t) {
    var i = ButtonHelper.getBasicButton(e);
    if (i) {
      i.selectButton = t;
      if (!i.enableButton) {
        e.doCache();
      }
    }
  };
  ButtonHelper.isButtonSelected = function (e) {
    var t = d.castAs(ButtonHelper.getBasicButton(e), "TwoStateButton");
    return !!t && t.isSelected;
  };
  ButtonHelper.delayEnableButton = function (e, t, i = -1) {
    var n = ButtonHelper.getBasicButton(e);
    if (n) {
      n.delayEnableButton(t, i);
    }
  };
  ButtonHelper.isEnablingDelayed = function (e) {
    var t = ButtonHelper.getBasicButton(e);
    return !!t && !!t.enablingIsDelayed;
  };
  ButtonHelper.setMouseOverScale = function (e, t = -1) {
    var i = ButtonHelper.getBasicButton(e);
    if (i) {
      i.mouseOverScale = t > 0 ? t : r.BasicButton.DEFAULT_MOUSEOVER_SCALE;
    }
  };
  ButtonHelper.getBasicButton = function (e) {
    if (e != null && e instanceof a) {
      if (p.instanceOfClass(e, "BasicButton")) {
        return e;
      } else if (e instanceof n && e.basicButton != null) {
        return e.basicButton;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  ButtonHelper.resetHoverState = function (e) {
    var t = ButtonHelper.getBasicButton(e);
    if (t) {
      t.resetHoverState();
    }
  };
  return ButtonHelper;
}();
exports.ButtonHelper = s;
var r = require("./49.js");
var l = require("./49.js");
var c = require("./49.js");
var u = require("./49.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./229.js");