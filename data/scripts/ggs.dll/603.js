Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./139.js");
var a = require("./2.js");
var s = require("./604.js");
var r = require("./16.js");
var o = a.getLogger(r.TEXT_FIELDS_LOGGER + ".InputTextFieldService");
var l = function () {
  function InputTextFieldService() {
    var e = this;
    this.inputFields = new Set();
    window.addEventListener("keydown", function (t) {
      return e.handleWindowKeyDown(t);
    });
  }
  InputTextFieldService.prototype.registerInputField = function (e) {
    var t = this;
    if (e.type != i.TextFieldType.INPUT) {
      o.warn("The given textfield is not setup correctly to be used as an input field");
    } else if (!this.inputFields.has(e)) {
      this.inputFields.add(e);
      var n = e.getTextFieldHTMLElement();
      if (n) {
        n.addEventListener("keydown", function (n) {
          return t.handleKeyDown(e, n);
        });
      }
    }
  };
  InputTextFieldService.prototype.handleWindowKeyDown = function (e) {
    if (!Array.from(this.inputFields.values()).filter(function (e) {
      return e.isFocused;
    })[0]) {
      this.handleKeyDown(null, e);
    }
  };
  InputTextFieldService.prototype.handleKeyDown = function (e, t) {
    if (t.key === "Tab" || t.code === "Tab") {
      if (e) {
        e.blur();
      }
      var n = this.nextTextField(e, t.shiftKey ? "up" : "down");
      if (n) {
        t.preventDefault();
        n.focus();
      }
    }
  };
  InputTextFieldService.prototype.nextTextField = function (e, t) {
    var n = this;
    var i = e ? s.getUpperLeftCorner(e) : {
      x: 0,
      y: 0
    };
    var a = Array.from(this.inputFields.values()).filter(function (t) {
      return t !== e && isVisibleOnStage(t);
    }).map(function (e) {
      return {
        textField: e,
        position: s.getUpperLeftCorner(e)
      };
    }).map(function (e) {
      var a = e.textField;
      var s = e.position;
      return {
        textField: a,
        position: s,
        inRightDirection: n.isInRightDirection(s, i, t)
      };
    }).sort(function (e, n) {
      var i = e.position;
      var a = e.inRightDirection;
      var s = n.position;
      if (a == n.inRightDirection) {
        var r = t == "up" ? -1 : 1;
        if (i.y === s.y) {
          return r * (i.x - s.x);
        } else {
          return r * (i.y - s.y);
        }
      }
      if (a) {
        return -1;
      } else {
        return 1;
      }
    })[0];
    if (a) {
      return a.textField;
    } else {
      return undefined;
    }
  };
  InputTextFieldService.prototype.isInRightDirection = function (e, t, n) {
    switch (n) {
      case "up":
        if (e.y === t.y) {
          return e.x <= t.x;
        } else {
          return e.y <= t.y;
        }
      case "down":
        if (e.y === t.y) {
          return e.x >= t.x;
        } else {
          return e.y >= t.y;
        }
      default:
        return false;
    }
  };
  InputTextFieldService.prototype.unregisterInputField = function (e) {
    this.inputFields.delete(e);
    o.warn("The given textfield has not been registered. Skipping removal...");
  };
  InputTextFieldService.singleton = function () {
    if (InputTextFieldService.INSTANCE === undefined) {
      InputTextFieldService.INSTANCE = new InputTextFieldService();
    }
    return InputTextFieldService.INSTANCE;
  };
  return InputTextFieldService;
}();
function isVisibleOnStage(e) {
  for (var t = e.isVisible() && !!e.stage, n = e; n && t;) {
    if (n = n.parent) {
      t = n.isVisible();
    }
  }
  if (t) {
    var i = e.getBounds();
    var a = e.localToGlobal(i.x, i.y);
    t = e.stage.getObjectUnderPoint(a.x + 1, a.y + 1, 1) === e;
  }
  return t;
}
exports.InputTextFieldService = l;
exports.isVisibleOnStage = isVisibleOnStage;