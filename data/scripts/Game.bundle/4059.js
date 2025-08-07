Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./4060.js");
var d = require("./41.js");
var p = require("./141.js");
var h = createjs.Event;
var g = createjs.TimerEvent;
var C = function (e) {
  function GloryHUDView(t) {
    var i = e.call(this) || this;
    i._gloryHUD = t;
    i.initProgressBar();
    i.initText();
    return i;
  }
  n.__extends(GloryHUDView, e);
  GloryHUDView.prototype.initProgressBar = function () {
    this._progressBar = new o.BasicProgressBar(this._gloryHUD.mc_hud.mc_progressBar);
    this._gloryHUD.mc_hud.mc_progressBar.mouseEnabled = false;
    this._gloryHUD.txt_progress.mouseEnabled = false;
    this._gloryHUD.txt_title.mouseEnabled = false;
  };
  GloryHUDView.prototype.initText = function () {
    this._itxt_progress = this.textFieldManager.registerTextField(this._gloryHUD.txt_progress, new c.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this._itxt_title = this.textFieldManager.registerTextField(this._gloryHUD.txt_title, new c.LocalizedTextVO(""));
  };
  GloryHUDView.prototype.update = function () {
    this.updateTexts();
    if (this.gloryHUD_model.triggerAnimationStart) {
      this._gloryHUD.mc_hud.gotoAndPlay(2);
      this._gloryHUD.mc_hud.addEventListener(h.ENTER_FRAME, this.bindFunction(this.onAnimationFinished));
      this.gloryHUD_model.triggerAnimationStart = false;
      d.CastleMovieClipHelper.uncacheSafe(this._gloryHUD);
    } else if (this._gloryHUD.mc_hud.paused) {
      this._gloryHUD.doCache();
    }
  };
  GloryHUDView.prototype.updateTexts = function () {
    var e = this.gloryHUD_model.getCurrentTitle();
    if (e) {
      this._itxt_title.textContentVO.textId = e.textID;
    }
    this._gloryHUD.toolTipText = this.gloryHUD_model.currentTooltip;
    this._progressBar.scaleX = this.gloryHUD_model.progress;
    if (this.gloryHUD_model.userReachedHighestRank) {
      p.CastleTextFieldHelper.safeSetNumber(this._itxt_progress, this.gloryHUD_model.currentPoints);
    } else {
      p.CastleTextFieldHelper.safeSetText(this._itxt_progress, a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.gloryHUD_model.currentPoints, this.gloryHUD_model.neededPoints]);
    }
  };
  GloryHUDView.prototype.onAnimationFinished = function (e) {
    if (this._gloryHUD.mc_hud.currentFrame >= this._gloryHUD.mc_hud.totalFrames - 1) {
      this._gloryHUD.mc_hud.removeEventListener(h.ENTER_FRAME, this.bindFunction(this.onAnimationFinished));
      this._gloryHUD.mc_hud.gotoAndStop(1);
      this.loopHighlight();
    } else if (this._gloryHUD.mc_hud.paused) {
      this._gloryHUD.mc_hud.removeEventListener(h.ENTER_FRAME, this.bindFunction(this.onAnimationFinished));
      this._gloryHUD.doCache();
    }
  };
  GloryHUDView.prototype.loopHighlight = function () {
    if (this._timer) {
      if (this._timer.currentCount == this._timer.repeatCount) {
        this._gloryHUD.doCache();
      }
      this._timer.reset();
    } else {
      this._timer = new r.Timer(1500, 1);
      this._timer.addEventListener(g.TIMER, this.bindFunction(this.loopAnimationCallBack));
    }
    this._timer.start();
  };
  GloryHUDView.prototype.loopAnimationCallBack = function (e) {
    this._gloryHUD.mc_hud.mc_glow.gotoAndPlay(2);
    if (this.gloryHUD_model.breakAnimation) {
      this._timer.removeEventListener(g.TIMER, this.bindFunction(this.loopAnimationCallBack));
      this._timer = null;
    } else {
      this.loopHighlight();
    }
  };
  Object.defineProperty(GloryHUDView.prototype, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GloryHUDView.prototype, "gloryHUD_model", {
    get: function () {
      return this._model;
    },
    enumerable: true,
    configurable: true
  });
  return GloryHUDView;
}(u.AView);
exports.GloryHUDView = C;
l.classImplementsInterfaces(C, "IView");