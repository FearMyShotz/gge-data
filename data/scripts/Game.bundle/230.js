Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./1.js");
var g = require("./1.js");
var C = require("./1.js");
var _ = require("./1.js");
var m = require("./103.js");
var f = require("./199.js");
var O = require("./15.js");
var E = require("./4.js");
var y = require("./685.js");
var b = require("./41.js");
var D = createjs.MovieClip;
var I = createjs.Container;
var T = createjs.Event;
var v = createjs.MouseEvent;
var S = createjs.TimerEvent;
var A = function (e) {
  function CastleDialog(t) {
    var i = this;
    i._isLocked = false;
    i.isWaitingForServerMessage = false;
    i._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).dispBounds = t.getBounds();
    t.mouseChildren = true;
    t.addEventListener(v.MOUSE_OVER, i.bindFunction(i.onMouseOver));
    t.addEventListener(v.MOUSE_OUT, i.bindFunction(i.onMouseOut));
    return i;
  }
  n.__extends(CastleDialog, e);
  CastleDialog.prototype.onKeyUp = function (t) {
    e.prototype.onKeyUp.call(this, t);
  };
  CastleDialog.prototype.destroy = function () {
    this.destroyCollectableRenderList();
    e.prototype.destroy.call(this);
    this.disp.removeEventListener(v.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(v.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  CastleDialog.prototype.onBGAddedToStage = function (e) {
    this.bg.removeEventListener(T.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    if (this.bg.width != 0) {
      this.bg.width = this.bg.stage.stageWidth + 10;
      this.bg.height = this.bg.stage.stageHeight + 10;
    }
    this.bg.x = -(this.disp.x + 5);
    this.bg.y = -(this.disp.y + 5);
    this.bg.doCache();
  };
  CastleDialog.prototype.updateBackground = function () {
    if (this.bg && this.bg.stage) {
      this.bg.graphics.clear();
      this.bg.graphics.beginFill(0, 1);
      this.bg.graphics.drawRect(0, 0, this.disp.stage.stageWidth / this.disp.scaleX + 10, this.disp.stage.stageHeight / this.disp.scaleY + 10);
      this.bg.graphics.endFill();
      this.bg.x = -this.disp.x / this.disp.scaleX - 5;
      this.bg.y = -this.disp.y / this.disp.scaleY - 5;
      this.bg.updateBounds();
      this.bg.doCache();
    }
  };
  CastleDialog.prototype.initDelayedButtons = function (e) {
    if (e) {
      this.delayTimerArray = [];
      this.buttonArray = [];
      this.delayButtonArray = e;
      for (var t = 0; t < e.length; t++) {
        var i = new p.Timer(500, 1);
        e[t].basicButton = new o.BasicButton(e[t], true);
        e[t].basicButton.enableButton = false;
        this.delayTimerArray.push(i);
        this.buttonArray.push(e[t].basicButton);
        i.addEventListener(S.TIMER, this.onBtnDelayOver(i, e[t]));
        i.start();
      }
    }
  };
  CastleDialog.prototype.onBtnDelayOver = function (e, t) {
    return function (i) {
      e.stop();
      e.removeEventListener(S.TIMER, this.bindFunction(this.onBtnDelayOver));
      e = null;
      t.basicButton.enableButton = true;
    };
  };
  CastleDialog.prototype.lockDialog = function () {
    this._isLocked = true;
  };
  CastleDialog.prototype.unLockDialog = function () {
    this._isLocked = false;
  };
  Object.defineProperty(CastleDialog.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    enumerable: true,
    configurable: true
  });
  CastleDialog.prototype.onMouseOver = function (t) {
    this.controller.dispatchEvent(m.EventInstanceMapper.getEvent(f.CastleDialogEvent, f.CastleDialogEvent.MOUSE_ON_DIALOG));
    e.prototype.onMouseOver.call(this, t);
    var i = b.CastleMovieClipHelper.getFirstMovieClipParent(t.target);
    if (i && r.BasicToolTipManager.TOOLTIP_LABEL in i && i.toolTipText) {
      this.layoutManager.tooltipManager.show(i.toolTipText, i);
    }
  };
  CastleDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    M.TooltipManagerFacade.hideAllTooltips();
  };
  CastleDialog.prototype.onCursorOver = function (e) {
    if (_.instanceOfClass(e.target, "BasicButton") || e.target instanceof D && e.target.basicButton != null) {
      if (e.target.enabled) {
        this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (e.target.actLikeButton || e.target.parent.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_CLICK);
    } else if (e.target instanceof d.TextField && e.target.selectable) {
      this.layoutManager.customCursor.setCursorType(y.CastleNativeCustomCursor.CURSOR_INPUT);
    }
  };
  CastleDialog.prototype.onCursorOut = function (e) {
    this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleDialog.prototype.onResize = function (t) {
    e.prototype.onResize.call(this, t);
    this.updatePosition();
    this.updateBackground();
  };
  Object.defineProperty(CastleDialog.prototype, "env", {
    get: function () {
      return l.EnvGlobalsHandler.globals;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicDialog.prototype, "env").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialog, "dialogHandler", {
    get: function () {
      return L.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialog.prototype, "layoutManager", {
    get: function () {
      return P.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialog.prototype, "controller", {
    get: function () {
      return O.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.buttonArray != null) {
      for (var t = 0, i = this.buttonArray; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.resetHoverState();
          n.removeMouseEventListener();
          n.enableButton = true;
        }
      }
    }
    this.layoutManager.hideDialog(g.getDefinitionByName(C.getQualifiedClassName(this)));
    this.destroyCollectableRenderList();
    if (this.disp && this.disp.parent) {
      this.disp.parent.removeChild(this.disp);
    }
    this.layoutManager.restrictToHighestDialog();
  };
  CastleDialog.prototype.show = function () {
    if (this.disp instanceof I) {
      if (this.disp.numChildren > 0) {
        e.prototype.show.call(this);
        this.layoutManager.restrictToHighestDialog();
        if (u.currentBrowserInfo.isMobile && this.layoutManager.worldmapScreen && this.layoutManager.worldmapScreen.renderer) {
          this.layoutManager.worldmapScreen.renderer.renderNavForMobile(true);
        }
      }
    } else {
      console.warn("is Invalid --> maybe Empty");
    }
    this.layoutManager.hideAllRingMenus();
  };
  Object.defineProperty(CastleDialog.prototype, "textFieldManager", {
    get: function () {
      return c.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleDialog.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList) {
      for (var e = 0; e < this._collectableRenderList.length; ++e) {
        this._collectableRenderList[e].destroy();
      }
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(CastleDialog.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  CastleDialog.prototype.isOutOfTutorial = function () {
    return !E.CastleModel.tutorialData.isTutorialActive;
  };
  CastleDialog.prototype.setTickEnablement = function () {
    this.disp.tickEnabled = true;
  };
  CastleDialog.prototype.onRemovedFromStage = function (e) {};
  CastleDialog.ACTLIKEBUTTON_LABEL = "actLikeButton";
  return CastleDialog;
}(s.BasicDialog);
exports.CastleDialog = A;
var L = require("./9.js");
var P = require("./17.js");
var M = require("./200.js");
h.classImplementsInterfaces(A, "ICollectableRendererList");