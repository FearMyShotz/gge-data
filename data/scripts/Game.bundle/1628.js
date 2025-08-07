Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./23.js");
var l = require("./23.js");
var c = require("./14.js");
var u = require("./200.js");
var d = createjs.MouseEvent;
var p = function (e) {
  function InteractiveTooltip() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(InteractiveTooltip, e);
  InteractiveTooltip.prototype.onMouseOver = function (e) {
    if (a.BasicToolTipManager.TOOLTIP_LABEL in e.target && e.target.toolTipText) {
      c.CastleComponent.layoutManager.tooltipManager.show(e.target.toolTipText, e.target);
    }
    if ((s.instanceOfClass(e.target, "BasicButton") || s.instanceOfClass(e.target, "MovieClip") && e.target.basicButton != null) && e.target.enabled) {
      c.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
    l.TweenMax.killTweensOf(this.disp);
    l.TweenMax.to(this.disp, this.fadeDuration, {
      autoAlpha: 1,
      ease: r.Linear.easeOut
    });
  };
  InteractiveTooltip.prototype.onMouseOut = function (e) {
    c.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    u.TooltipManagerFacade.hideAllTooltips();
  };
  InteractiveTooltip.prototype.addEventListener = function () {
    this.disp.addEventListener(d.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(d.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  InteractiveTooltip.prototype.removeEventListener = function () {
    this.disp.removeEventListener(d.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(d.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  InteractiveTooltip.prototype.onShow = function () {
    this.addEventListener();
    l.TweenMax.killTweensOf(this.disp);
    l.TweenMax.to(this.disp, this.fadeDuration, {
      autoAlpha: 1,
      ease: r.Linear.easeOut
    });
  };
  InteractiveTooltip.prototype.hide = function () {
    l.TweenMax.killTweensOf(this.disp);
    l.TweenMax.to(this.disp, this.fadeDuration, {
      autoAlpha: 0,
      ease: r.Linear.easeIn
    });
  };
  InteractiveTooltip.prototype.destroy = function () {
    this.destroyCollectableRenderList();
    this.removeEventListener();
  };
  Object.defineProperty(InteractiveTooltip.prototype, "disp", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveTooltip.prototype, "fadeDuration", {
    get: function () {
      return 0.1;
    },
    enumerable: true,
    configurable: true
  });
  return InteractiveTooltip;
}(c.CastleComponent);
exports.InteractiveTooltip = p;