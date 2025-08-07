Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleTutorialClickBlocker(e) {
    this.added = false;
    this._ignoreMouseMove = false;
    if (e == null) {
      throw new Error("do not instantiate, use instance getter");
    }
    this.clear();
  }
  Object.defineProperty(CastleTutorialClickBlocker, "instance", {
    get: function () {
      CastleTutorialClickBlocker._instance ||= new CastleTutorialClickBlocker(new l());
      return CastleTutorialClickBlocker._instance;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialClickBlocker.prototype.addEventListeners = function () {
    if (!this.added) {
      this.added = true;
      this.addStageEventListeners(s.CastleLayoutManager.getInstance().uiStage);
      this.addStageEventListeners(s.CastleLayoutManager.getInstance().gamestage);
      this.addStageEventListeners(s.CastleLayoutManager.getInstance().bgStage);
      this.addStageEventListeners(s.CastleLayoutManager.getInstance().staticStage);
    }
  };
  CastleTutorialClickBlocker.prototype.addStageEventListeners = function (e) {
    e.addEventListener(n.CLICK, this.bindFunction(this.avoidEventPropagation), true);
    e.addEventListener(n.MOUSE_DOWN, this.bindFunction(this.avoidEventPropagation), true);
    e.addEventListener(n.MOUSE_UP, this.bindFunction(this.avoidEventPropagation), true);
    e.addEventListener(n.MOUSE_OVER, this.bindFunction(this.avoidEventPropagationWithCursor), true);
    e.addEventListener(n.MOUSE_MOVE, this.bindFunction(this.avoidEventPropagationMove), true);
    e.addEventListener(n.ROLL_OVER, this.bindFunction(this.avoidEventPropagationWithCursor), true);
  };
  CastleTutorialClickBlocker.prototype.removeEventListeners = function () {
    this.added = false;
    this.removeStageEventListeners(s.CastleLayoutManager.getInstance().uiStage);
    this.removeStageEventListeners(s.CastleLayoutManager.getInstance().gamestage);
    this.removeStageEventListeners(s.CastleLayoutManager.getInstance().bgStage);
    this.removeStageEventListeners(s.CastleLayoutManager.getInstance().staticStage);
  };
  CastleTutorialClickBlocker.prototype.removeStageEventListeners = function (e) {
    e.removeEventListener(n.CLICK, this.bindFunction(this.avoidEventPropagation), true);
    e.removeEventListener(n.MOUSE_DOWN, this.bindFunction(this.avoidEventPropagation), true);
    e.removeEventListener(n.MOUSE_UP, this.bindFunction(this.avoidEventPropagation), true);
    e.removeEventListener(n.MOUSE_OVER, this.bindFunction(this.avoidEventPropagationWithCursor), true);
    e.removeEventListener(n.MOUSE_MOVE, this.bindFunction(this.avoidEventPropagationMove), true);
    e.removeEventListener(n.ROLL_OVER, this.bindFunction(this.avoidEventPropagationWithCursor), true);
  };
  CastleTutorialClickBlocker.prototype.replace = function (e) {
    if (!e) {
      throw new ReferenceError("target must not be null!");
    }
    this.clear(false);
    this.add(e);
  };
  CastleTutorialClickBlocker.prototype.allowNoClicks = function () {
    this.clear(false);
    this.addEventListeners();
  };
  CastleTutorialClickBlocker.prototype.add = function (e) {
    if (!e) {
      throw new ReferenceError("target must not be null!");
    }
    this.targets.push(e);
    this.addEventListeners();
  };
  CastleTutorialClickBlocker.prototype.remove = function (e) {
    this.targets.splice(e, 1);
  };
  CastleTutorialClickBlocker.prototype.clear = function (e = true) {
    try {
      if (a.Iso.renderer) {
        a.Iso.renderer.mouse.cancelDraggedTarget();
      }
    } catch (e) {
      d.debug(e.stack);
    }
    this._ignoreMouseMove = false;
    this.targets = [];
    this.addExceptions();
    if (e) {
      this.removeEventListeners();
    }
  };
  CastleTutorialClickBlocker.prototype.addExceptions = function () {
    try {
      var e = s.CastleLayoutManager.getInstance().getPanel(r.CastleOptionPanel);
      if (e && p.instanceOfClass(e, "CastleOptionPanel")) {
        var t = e.panelDisp;
        if (t && t.btn_logout) {
          this.targets.push(t.btn_logout);
        }
      }
    } catch (e) {
      d.debug(e.stack);
    }
  };
  CastleTutorialClickBlocker.prototype.avoidEventPropagation = function (e) {
    if (!this.validTarget(e)) {
      e.stopImmediatePropagation();
    }
  };
  CastleTutorialClickBlocker.prototype.avoidEventPropagationMove = function (e) {
    if (!this.validMoveTarget(e)) {
      e.stopImmediatePropagation();
    }
  };
  CastleTutorialClickBlocker.prototype.avoidEventPropagationWithCursor = function (e) {
    if (this.validTarget(e)) {
      s.CastleLayoutManager.getInstance().customCursor.setCursorType(c.BasicCustomCursor.CURSOR_CLICK);
    } else {
      s.CastleLayoutManager.getInstance().customCursor.setCursorType(c.BasicCustomCursor.CURSOR_ARROW);
      h.ButtonHelper.resetHoverState(e.target);
      e.stopImmediatePropagation();
    }
  };
  CastleTutorialClickBlocker.prototype.validTarget = function (e) {
    if (this.targets != null) {
      for (var t = 0, i = this.targets; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && (n == e.target || u.MovieClipHelper.isChildrenOf(e.target, n))) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(CastleTutorialClickBlocker.prototype, "ignoreMouseMove", {
    set: function (e) {
      this._ignoreMouseMove = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialClickBlocker.prototype.validMoveTarget = function (e) {
    if (this._ignoreMouseMove) {
      return true;
    }
    if (this.targets != null) {
      for (var t = 0, i = this.targets; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && (n == e.target || u.MovieClipHelper.isChildrenOf(e.target, n))) {
          return true;
        }
      }
    }
    return false;
  };
  return CastleTutorialClickBlocker;
}();
exports.CastleTutorialClickBlocker = o;
var a = require("./33.js");
var s = require("./17.js");
var r = require("./514.js");
var l = function () {
  return function SingletonBlocker() {};
}();
exports.SingletonBlocker = l;
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./1.js");
var h = require("./8.js");