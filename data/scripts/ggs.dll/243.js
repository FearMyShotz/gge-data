Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./54.js");
var a = require("./145.js");
var s = require("./244.js");
var r = require("./245.js");
var o = createjs.DisplayObject;
var l = createjs.MovieClip;
var u = function () {
  function ButtonHelper() {}
  ButtonHelper.initBasicButton = function (e, t = -1) {
    ButtonHelper.initButton(e, t, i.BasicButton);
  };
  ButtonHelper.initTwoStateButton = function (e, t = -1) {
    ButtonHelper.initButton(e, t, a.TwoStateButton);
  };
  ButtonHelper.initCheckBox = function (e, t = -1) {
    ButtonHelper.initButton(e, t, s.CheckBoxButton);
  };
  ButtonHelper.initCheckBoxes = function (e) {
    for (var t = 0, n = e; t < n.length; t++) {
      var i = n[t];
      ButtonHelper.initButton(i, -1, s.CheckBoxButton);
    }
  };
  ButtonHelper.initSmallButton = function (e) {
    ButtonHelper.initButton(e, -1, r.SmallButton);
  };
  ButtonHelper.initBasicButtons = function (e) {
    for (var t = 0, n = e; t < n.length; t++) {
      var i = n[t];
      ButtonHelper.initBasicButton(i);
    }
  };
  ButtonHelper.initTwoStateButtons = function (e) {
    for (var t = 0, n = e; t < n.length; t++) {
      var i = n[t];
      ButtonHelper.initTwoStateButton(i);
    }
  };
  ButtonHelper.initSmallButtons = function (e) {
    for (var t = 0, n = e; t < n.length; t++) {
      var i = n[t];
      ButtonHelper.initSmallButton(i);
    }
  };
  ButtonHelper.initButton = function (e, t, n) {
    if (!!e && !(e instanceof i.BasicButton) && !e.basicButton) {
      e.basicButton = new n(e, true);
      if (t > 0) {
        e.basicButton.mouseOverScale = t;
      }
    }
  };
  ButtonHelper.initButtons = function (e, t, n = -1) {
    for (var i = 0, a = e; i < a.length; i++) {
      var s = a[i];
      ButtonHelper.initButton(s, n, t);
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
    var n = ButtonHelper.getBasicButton(e);
    if (n) {
      n.enableButton = t;
    }
  };
  ButtonHelper.setButtonSelected = function (e, t) {
    var n = ButtonHelper.getBasicButton(e);
    if (n) {
      n.selectButton = t;
    }
  };
  ButtonHelper.isButtonSelected = function (e) {
    var t = ButtonHelper.getBasicButton(e);
    return !!t && t.isSelected;
  };
  ButtonHelper.delayEnableButton = function (e, t, n = -1) {
    var i = ButtonHelper.getBasicButton(e);
    if (i) {
      i.delayEnableButton(t, n);
    }
  };
  ButtonHelper.isEnablingDelayed = function (e) {
    var t = ButtonHelper.getBasicButton(e);
    return !!t && !!t.enablingIsDelayed;
  };
  ButtonHelper.setMouseOverScale = function (e, t = -1) {
    var n = ButtonHelper.getBasicButton(e);
    if (n) {
      n.mouseOverScale = t > 0 ? t : i.BasicButton.DEFAULT_MOUSEOVER_SCALE;
    }
  };
  ButtonHelper.getBasicButton = function (e) {
    if (e != null && e instanceof o) {
      if (e instanceof i.BasicButton) {
        return e;
      } else if (e instanceof l && e.basicButton != null) {
        return e.basicButton;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  return ButtonHelper;
}();
exports.ButtonHelper = u;