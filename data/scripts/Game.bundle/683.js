Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./6.js");
var d = createjs.MovieClip;
var p = createjs.Container;
var h = createjs.MouseEvent;
var g = function (e) {
  function CastleNativeCustomCursor() {
    var t = this;
    t.currentCursorType = 0;
    t.prevCursorType = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new d()) || this).draggedItem = new p();
    t.draggedItem.mouseChildren = false;
    t.draggedItem.mouseEnabled = false;
    t.disp.addChild(t.draggedItem);
    return t;
  }
  n.__extends(CastleNativeCustomCursor, e);
  CastleNativeCustomCursor.prototype.init = function () {
    e.prototype.init.call(this);
    this.disp.mouseChildren = false;
    this.disp.mouseEnabled = false;
    this.isEnabled = true;
    this.registerCursors();
  };
  CastleNativeCustomCursor.prototype.registerCursors = function () {
    this.addMouseCursor(o.BasicCustomCursor.CURSOR_ARROW, new (s.getDefinitionByName("Cursor_Arrow"))());
    this.addMouseCursor(o.BasicCustomCursor.CURSOR_CLICK, new (s.getDefinitionByName("Cursor_Click"))());
    this.addMouseCursor(o.BasicCustomCursor.CURSOR_DRAG, new (s.getDefinitionByName("Cursor_Drag"))());
    this.addMouseCursor(o.BasicCustomCursor.CURSOR_HAND, new (s.getDefinitionByName("Cursor_Active"))());
    this.addMouseCursor(CastleNativeCustomCursor.CURSOR_INPUT, new (s.getDefinitionByName("Cursor_Input"))());
  };
  CastleNativeCustomCursor.prototype.addMouseCursor = function (e, t) {
    var i = new c.MouseCursorData();
    i.data = [];
    i.data[0] = t;
    r.Mouse.instance().registerCursor(this.typeToString(e), i);
  };
  CastleNativeCustomCursor.prototype.typeToString = function (e) {
    switch (e) {
      case o.BasicCustomCursor.CURSOR_CLICK:
        return l.MouseCursor.CLICK;
      case o.BasicCustomCursor.CURSOR_DRAG:
        return l.MouseCursor.DRAG;
      case o.BasicCustomCursor.CURSOR_HAND:
        return l.MouseCursor.HAND;
      case CastleNativeCustomCursor.CURSOR_INPUT:
        return "input";
      default:
        return l.MouseCursor.ARROW;
    }
  };
  CastleNativeCustomCursor.prototype.setCursorType = function (e) {
    this.showCustomCursor();
    if (this.isEnabled && !this.hasDraggedItem) {
      this.prevCursorType = this.currentCursorType;
      this.currentCursorType = e;
      r.Mouse.instance().showCustomCursor(this.typeToString(e));
    }
  };
  CastleNativeCustomCursor.prototype.hideCustomCursor = function () {
    r.Mouse.instance().hideCustomCursor();
    this.additionalCursorGfx.visible = false;
  };
  CastleNativeCustomCursor.prototype.showCustomCursor = function () {
    this.additionalCursorGfx.visible = false;
    r.Mouse.instance().showCustomCursor(this.typeToString(this.currentCursorType));
  };
  CastleNativeCustomCursor.prototype.startDrag = function (e, t = 0, i = 0, n = u.int(o.BasicCustomCursor.CURSOR_DRAG)) {
    this.setCursorType(n);
    this.draggedItemVisible = true;
    a.MovieClipHelper.clearMovieClip(this.draggedItem);
    this.draggedItem.addChild(e);
    e.x += t;
    e.y += i;
    e.mouseEnabled = false;
    e.mouseChildren = false;
  };
  CastleNativeCustomCursor.prototype.stopDrag = function (e) {
    if (this.draggedItem.contains(e)) {
      this.draggedItem.removeChild(e);
      this.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
      e.mouseEnabled = true;
      e.mouseChildren = true;
    }
  };
  Object.defineProperty(CastleNativeCustomCursor.prototype, "draggedItemVisible", {
    set: function (e) {
      this.draggedItem.visible = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleNativeCustomCursor.prototype.onAddedToStage = function (e) {
    this.disp.stage.addEventListener(h.MOUSE_MOVE, this.bindFunction(this.updateMouse));
    this.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleNativeCustomCursor.prototype.updateMouse = function (t) {
    if (this.isEnabled) {
      e.prototype.updateMouse.call(this, t);
      if (r.currentBrowserInfo.isTouchEvent(t) && !this.draggedItem.visible) {
        this.draggedItem.visible = true;
      }
    }
  };
  CastleNativeCustomCursor.prototype.stopAllDrag = function () {
    a.MovieClipHelper.clearMovieClip(this.draggedItem);
    this.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleNativeCustomCursor.prototype, "hasDraggedItem", {
    get: function () {
      return this.draggedItem.numChildren > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNativeCustomCursor.prototype, "isEnabled", {
    get: function () {
      return Object.getOwnPropertyDescriptor(o.BasicCustomCursor.prototype, "isEnabled").get.call(this);
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  CastleNativeCustomCursor.CURSOR_INPUT = 7;
  return CastleNativeCustomCursor;
}(o.BasicCustomCursor);
exports.CastleNativeCustomCursor = g;