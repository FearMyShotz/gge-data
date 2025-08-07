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
var u = createjs.Container;
var d = createjs.Event;
var p = function (e) {
  function CastleScreen(t) {
    var i = this;
    i._backgroundColor = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleScreen, e);
  CastleScreen.prototype.drawBackground = function (e, t) {
    this._backgroundColor = t;
    if (this._background && e.contains(this._background)) {
      e.removeChild(this._background);
    }
    this._background = new u();
    this._background.graphics.beginFill(this._backgroundColor, 1);
    this._background.graphics.drawRect(0, 0, e.stage.stageWidth, e.stage.stageHeight);
    this._background.graphics.endFill();
    this._background.addEventListener(d.ADDED_TO_STAGE, this.bindFunction(this.onBackGroundAddedToStage));
    e.addChildAt(this._background, 0);
  };
  CastleScreen.prototype.onBackGroundAddedToStage = function (e) {
    this._background.removeEventListener(d.ADDED_TO_STAGE, this.bindFunction(this.onBackGroundAddedToStage));
    window.addEventListener(d.RESIZE, this.bindFunction(this.onResizeBG));
    this.onResizeBG(null);
  };
  CastleScreen.prototype.onResizeBG = function (e) {
    if (this._background.stage) {
      this._background.graphics.clear();
      this._background.graphics.beginFill(this._backgroundColor, 1);
      this._background.graphics.drawRect(0, 0, this._background.stage.stageWidth, this._background.stage.stageHeight);
      this._background.graphics.endFill();
      h.CastleLayoutManager.getInstance().gamestage.update();
      h.CastleLayoutManager.getInstance().renderBGStage();
    }
  };
  CastleScreen.prototype.removeBackground = function (e) {
    if (this._background) {
      window.removeEventListener(d.RESIZE, this.bindFunction(this.onResizeBG));
      if (e.contains(this._background)) {
        e.removeChild(this._background);
      }
    }
  };
  CastleScreen.prototype.destroy = function () {
    if (this._background) {
      this._background.removeEventListener(d.ADDED_TO_STAGE, this.bindFunction(this.onBackGroundAddedToStage));
      window.removeEventListener(d.RESIZE, this.bindFunction(this.onResizeBG));
    }
    e.prototype.destroy.call(this);
  };
  CastleScreen.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (s.BasicToolTipManager.TOOLTIP_LABEL in t.target && t.target.toolTipText) {
      this.layoutManager.tooltipManager.show(t.target.toolTipText, t.target);
    }
  };
  CastleScreen.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.layoutManager.tooltipManager.hide();
    this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleScreen.prototype.onCursorOver = function (e) {
    if (l.instanceOfClass(e.target, "BasicButton")) {
      if (e.target.enabled) {
        this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (CastleScreen.ACTLIKEBUTTON_LABEL in e.target && e.target.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  Object.defineProperty(CastleScreen.prototype, "layoutManager", {
    get: function () {
      return h.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScreen.prototype, "controller", {
    get: function () {
      return c.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScreen.prototype, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleScreen.__initialize_static_members = function () {
    CastleScreen.ACTLIKEBUTTON_LABEL = "actLikeButton";
  };
  return CastleScreen;
}(a.BasicScreen);
exports.CastleScreen = p;
var h = require("./17.js");
p.__initialize_static_members();