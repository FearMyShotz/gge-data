Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./40.js");
var d = require("./322.js");
var p = require("./8.js");
var h = createjs.MouseEvent;
var g = createjs.Point;
var C = function (e) {
  function DecorationForgeMergeButton(t, i) {
    var n = this;
    n._currentState = DecorationForgeMergeButton.STATE_DISABLED;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._onButtonClickedFunc = i;
    t.mouseChildren = false;
    n.setDownState(false);
    n.setHoverState(false);
    return n;
  }
  n.__extends(DecorationForgeMergeButton, e);
  DecorationForgeMergeButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  DecorationForgeMergeButton.prototype.removeEventListener = function () {
    this.disp.removeEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  DecorationForgeMergeButton.prototype.setSelection = function (e) {
    this._currentSelectionVO = e;
    this.destroyCollectableRenderList();
    o.MovieClipHelper.clearMovieClip(this.disp.mc_icon);
    if (this._currentSelectionVO && this._currentSelectionVO.itemVO) {
      m.CollectableRenderHelper.displaySingleItemComplete(this, new l.CollectableRenderClips(this.disp), this._currentSelectionVO.itemVO, new c.CollectableRenderOptions(c.CollectableRenderOptions.ICON, this.getIconDimension()));
    }
    var t = this.disp.mc_info;
    if (t) {
      var i = this._currentSelectionVO ? this._currentSelectionVO.getBuildingFusionInfoVO() : null;
      if (t.mc_levelIcon) {
        t.mc_levelIcon.visible = i != null;
      }
      if (t.txt_level) {
        t.txt_level.visible = i != null;
        if (i) {
          _.CastleComponent.textFieldManager.registerTextField(t.txt_level, new s.LocalizedNumberVO(i.getCurrentLevel()));
        }
      }
      if (t.mc_xpIcon) {
        t.mc_xpIcon.visible = i != null;
      }
      if (t.txt_xp) {
        t.txt_xp.visible = i != null;
        if (i) {
          _.CastleComponent.textFieldManager.registerTextField(t.txt_xp, new r.LocalizedTextVO("value_proportional_value", [i.getDeltaXpBetweenCurrentLevels(), i.getDeltaXpForNextLevel()]));
        }
      }
      if (t.mc_xpProgress) {
        t.mc_xpProgress.visible = i != null;
        if (i) {
          new d.SimpleProgressBarComponent(t.mc_xpProgress, 238).setProgressByPercent(i.getDeltaXpPercentFactor());
        }
      }
    }
  };
  DecorationForgeMergeButton.prototype.setState = function (e) {
    this._currentState = e;
    this.disp.mc_background.gotoAndStop(e);
    if (this._currentState == DecorationForgeMergeButton.STATE_DISABLED) {
      if (this.disp.basicButton) {
        this.disp.basicButton.removeMouseEventListener();
        this.disp.basicButton = null;
      }
    } else {
      p.ButtonHelper.initBasicButton(this.disp, 1.025);
    }
  };
  DecorationForgeMergeButton.prototype.updateInfo = function () {
    if (this.disp.mc_info) {
      this.disp.mc_info.visible = this._currentState != DecorationForgeMergeButton.STATE_DISABLED;
    }
  };
  DecorationForgeMergeButton.prototype.reset = function () {
    this.setSelection(null);
    this.setState(DecorationForgeMergeButton.STATE_DISABLED);
    this.updateInfo();
  };
  DecorationForgeMergeButton.prototype.setDownState = function (e) {
    this.disp.mc_downState.visible = this._currentState != DecorationForgeMergeButton.STATE_DISABLED && e;
  };
  DecorationForgeMergeButton.prototype.setHoverState = function (e) {
    this.disp.mc_overState.visible = this._currentState != DecorationForgeMergeButton.STATE_DISABLED && e;
  };
  DecorationForgeMergeButton.prototype.getIconDimension = function () {
    var e = this.disp.mc_iconDimension.getBounds(null);
    return new g(e.width, e.height);
  };
  DecorationForgeMergeButton.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this._currentState != DecorationForgeMergeButton.STATE_DISABLED && this._onButtonClickedFunc) {
      this._onButtonClickedFunc(this);
    }
  };
  DecorationForgeMergeButton.prototype.onMouseDown = function (e) {
    this.setDownState(true);
    this.setHoverState(false);
  };
  DecorationForgeMergeButton.prototype.onMouseUp = function (e) {
    this.setDownState(false);
  };
  DecorationForgeMergeButton.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    this.setHoverState(true);
  };
  DecorationForgeMergeButton.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    this.setHoverState(false);
    this.setDownState(false);
  };
  Object.defineProperty(DecorationForgeMergeButton.prototype, "infoMc", {
    get: function () {
      return this.disp.mc_info;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeMergeButton.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeMergeButton.prototype, "currentSelectionVO", {
    get: function () {
      return this._currentSelectionVO;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeMergeButton.__initialize_static_members = function () {
    DecorationForgeMergeButton.STATE_DISABLED = 1;
    DecorationForgeMergeButton.STATE_READY = 2;
    DecorationForgeMergeButton.STATE_SET = 3;
  };
  return DecorationForgeMergeButton;
}(u.CastleItemRenderer);
exports.DecorationForgeMergeButton = C;
var _ = require("./14.js");
var m = require("./25.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();