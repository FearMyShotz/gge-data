Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./15.js");
var u = require("./8.js");
var d = createjs.MouseEvent;
var p = createjs.Point;
var h = function (e) {
  function BasicIngameUIComponent(t) {
    var i = this;
    i.isPermanent = false;
    i._isLocked = false;
    CONSTRUCTOR_HACK;
    i = e.call(this, t) || this;
    t.visible = false;
    i._dispBounds = t.getBounds(null);
    return i;
  }
  n.__extends(BasicIngameUIComponent, e);
  BasicIngameUIComponent.prototype.onClick = function (e) {};
  BasicIngameUIComponent.prototype.initComponent = function () {};
  BasicIngameUIComponent.prototype.updateTextField = function (e) {};
  BasicIngameUIComponent.prototype.show = function () {
    e.prototype.show.call(this);
    this.disp.addEventListener(d.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(d.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  BasicIngameUIComponent.prototype.hide = function () {
    this._target = null;
    this.disp.removeEventListener(d.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(d.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    e.prototype.hide.call(this);
  };
  BasicIngameUIComponent.prototype.onMouseOver = function (e) {
    if (u.ButtonHelper.getBasicButton(e.target) && u.ButtonHelper.isButtonEnabled(e.target)) {
      this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_CLICK);
    } else if (l.instanceOfClass(e.target, "BasicButton") || "basicButton" in e.target) {
      this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_ARROW);
    }
    if (s.BasicToolTipManager.TOOLTIP_LABEL in e.target && e.target.toolTipText) {
      this.layoutManager.tooltipManager.show(e.target.toolTipText, e.target);
    }
  };
  BasicIngameUIComponent.prototype.onMouseOut = function (e) {
    this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_ARROW);
    this.layoutManager.tooltipManager.hide();
  };
  BasicIngameUIComponent.prototype.onEnterFrameUpdate = function () {
    if (this.isVisible()) {
      if (this._target) {
        if (this.disp) {
          this.updateContent();
          this.updateMenuPosition();
        } else {
          this._target = null;
        }
      } else {
        this.hide();
      }
    }
  };
  BasicIngameUIComponent.prototype.updateContent = function () {};
  BasicIngameUIComponent.prototype.updateMenuPosition = function () {
    var e = this._target.uiBounds;
    var t = this._target.uiPos;
    if (this.worldLayer && t) {
      var i = this.worldLayer.localToGlobal(new p(t.x + e.x + e.width / 2, t.y + e.y + e.height / 2));
      this.disp.x = i.x;
      this.disp.y = i.y;
    } else {
      this.hide();
    }
  };
  Object.defineProperty(BasicIngameUIComponent.prototype, "target", {
    get: function () {
      return this._target;
    },
    set: function (e) {
      if (this._target != e) {
        this._target = e;
        this.initComponent();
        this.updateMenuPosition();
        this.show();
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicIngameUIComponent.prototype.destroy = function () {
    this._target = null;
    e.prototype.destroy.call(this);
  };
  Object.defineProperty(BasicIngameUIComponent.prototype, "worldLayer", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicIngameUIComponent.prototype, "layoutManager", {
    get: function () {
      return g.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicIngameUIComponent.prototype, "controller", {
    get: function () {
      return c.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicIngameUIComponent.prototype, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return BasicIngameUIComponent;
}(o.AnimatedFlashUIComponent);
exports.BasicIngameUIComponent = h;
var g = require("./17.js");