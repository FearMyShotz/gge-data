Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./143.js");
var a = require("./2.js");
var s = require("./592.js");
var r = require("./61.js");
var o = require("./16.js");
var l = a.getLogger(o.CREATEJS_UTILITIES_LOGGER);
var u = function () {
  function Mouse() {
    this._registeredCustomCursors = new Set();
    this._mouseCursor = {
      type: "css",
      cursor: i.CSSMouseCursor.AUTO,
      fallbackCustomCursor: null
    };
    var e = document.createElement("style");
    e.setAttribute("id", "custom-cursor-css");
    e.appendChild(document.createTextNode(""));
    document.head.appendChild(e);
    this._styleSheet = e.sheet;
    this._styleSheet.insertRule("body.custom-cursor-none { cursor: none; }", 0);
    this._styleSheet.insertRule("body.custom-cursor-" + i.CSSMouseCursor.AUTO + " { cursor: auto; }", 0);
    this._styleSheet.insertRule("body.custom-cursor-" + i.CSSMouseCursor.TEXT + " { cursor: text; }", 0);
  }
  Object.defineProperty(Mouse.prototype, "mouseCursor", {
    get: function () {
      return this._mouseCursor;
    },
    set: function (e) {
      var t = this._mouseCursor;
      this._mouseCursor = e;
      document.body.classList.remove("custom-cursor-" + t.cursor);
      document.body.classList.add("custom-cursor-" + e.cursor);
    },
    enumerable: true,
    configurable: true
  });
  Mouse.instance = function () {
    return Mouse.mouseInstance;
  };
  Mouse.prototype.registerCursor = function (e, t) {
    if (this._registeredCustomCursors.has(e)) {
      l.warn("registerCursor: A custom cursor with name \"" + e + "\" is already registered");
    } else {
      this._registeredCustomCursors.add(e);
      var n;
      var i = t.data[0];
      i.updateImageData();
      if (r.currentBrowserInfo.isEdge || r.currentBrowserInfo.isIE) {
        var a = document.createElement("canvas");
        a.width = 32;
        a.height = 32;
        a.getContext("2d").drawImage(i.canvas, 0, 0);
        n = s.curObjectURLFromCanvas(a);
        a.width = a.height = 0;
      } else {
        n = i.canvas.toDataURL();
      }
      var o = "body.custom-cursor-" + e + " {cursor:url(" + n + "), auto}";
      this._styleSheet.insertRule(o, 0);
    }
  };
  Mouse.prototype.hideCustomCursor = function () {
    if (this.mouseCursor.type === "custom") {
      this.mouseCursor = {
        type: "css",
        cursor: this.mouseCursor.fallbackCssCustor || i.CSSMouseCursor.NONE,
        fallbackCustomCursor: this.mouseCursor.cursor
      };
    } else {
      l.info("Not using custom cursor, so nothing to hide");
    }
  };
  Mouse.prototype.showCustomCursor = function (e) {
    if (this.mouseCursor.cursor !== e) {
      if (!this._registeredCustomCursors.has(e)) {
        l.warn("showCustomCursor: Custom cursor with name \"" + e + "\" is not registered");
      }
      if (this.mouseCursor.type === "custom") {
        this.mouseCursor = {
          type: "custom",
          cursor: e,
          fallbackCssCustor: this.mouseCursor.fallbackCssCustor
        };
      } else {
        this.mouseCursor = {
          type: "custom",
          cursor: e,
          fallbackCssCustor: this.mouseCursor.cursor
        };
      }
    }
  };
  Mouse.prototype.showCssCursor = function (e) {
    if (this.mouseCursor.type === "custom") {
      this.mouseCursor = {
        type: "css",
        cursor: e,
        fallbackCustomCursor: this.mouseCursor.cursor
      };
    } else {
      if (e === this.mouseCursor.cursor) {
        return;
      }
      this.mouseCursor = {
        type: "css",
        cursor: e,
        fallbackCustomCursor: this.mouseCursor.fallbackCustomCursor
      };
    }
  };
  Mouse.mouseInstance = new Mouse();
  return Mouse;
}();
exports.Mouse = u;