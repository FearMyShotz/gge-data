Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./288.js");
var r = require("./15.js");
var l = require("./24.js");
var c = require("./14.js");
var u = require("./41.js");
var d = require("./362.js");
var p = require("./556.js");
var h = function (e) {
  function GachaComponentAnimation(t) {
    return e.call(this, t) || this;
  }
  n.__extends(GachaComponentAnimation, e);
  GachaComponentAnimation.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    var t = this.getEventVO().assetName();
    var i = this.getEventVO().getCurrentGachaVO().skinID;
    var n = p.GachaEventMainDialog.NAME + "_Animation_Idle_" + t + (i ? "_" + i : "");
    var s = p.GachaEventMainDialog.NAME + "_Animation_Active_" + t + (i ? "_" + i : "");
    var r = this.getEventVO().animationFPS;
    var c = new l.CastleGoodgameExternalClip(n, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, r, true);
    var u = new l.CastleGoodgameExternalClip(s, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(s), null, r, true);
    this._idleAnimation = c;
    this._activeAnimation = u;
    this._idleAnimation.doWhenLoaded(this.bindFunction(this.onLoadComplete));
    var d = this.getEventVO().animationPos;
    var h = this.getEventVO().animationScale;
    this._idleAnimation.scaleX = this._idleAnimation.scaleY = h;
    this._activeAnimation.scaleX = this._activeAnimation.scaleY = h;
    this._idleAnimation.x = d.x;
    this._idleAnimation.y = d.y;
    this._activeAnimation.x = d.x;
    this._activeAnimation.y = d.y;
    this._idleAnimation.visible = true;
    this._activeAnimation.visible = false;
    o.MovieClipHelper.clearMovieClip(this.disp);
    this.disp.addChild(this._idleAnimation);
    this.disp.addChild(this._activeAnimation);
  };
  GachaComponentAnimation.prototype.onLoadComplete = function (e = null) {
    o.MovieClipHelper.playAllMovies(this._idleAnimation);
  };
  GachaComponentAnimation.prototype.onHide = function () {
    e.prototype.onHide.call(this);
  };
  GachaComponentAnimation.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleComponent.controller.addEventListener(s.GachaEvent.SPIN, this.bindFunction(this.onSpin));
  };
  GachaComponentAnimation.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    c.CastleComponent.controller.removeEventListener(s.GachaEvent.SPIN, this.bindFunction(this.onSpin));
    if (this._activeAnimation) {
      this._activeAnimation.stop();
      this._activeAnimation.onLoopEnd.removeAll();
    }
  };
  GachaComponentAnimation.prototype.onSpin = function (e) {
    if (this.getEventVO().eventId == e.eventVO.eventId) {
      this._idleAnimation.visible = false;
      this._activeAnimation.visible = true;
      this._idleAnimation.gotoAndStop(1);
      if (this._activeAnimation.numFrames > 1) {
        u.CastleMovieClipHelper.goAndPlayAllMovies(this._activeAnimation, 1, -1, 1);
        this._activeAnimation.onLoopEnd.addOnce(this.bindFunction(this.onSpinEnd));
      } else {
        this.onSpinEnd();
      }
    }
  };
  GachaComponentAnimation.prototype.onSpinEnd = function () {
    this._idleAnimation.visible = true;
    this._activeAnimation.visible = false;
    o.MovieClipHelper.playAllMovies(this._idleAnimation);
    o.MovieClipHelper.stopAllMoviesGotoFrameOne(this._activeAnimation);
    r.CastleBasicController.getInstance().dispatchEvent(new s.GachaEvent(s.GachaEvent.SPIN_ANIMATION_COMPLETE, this.getEventVO()));
  };
  GachaComponentAnimation.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentAnimation;
}(d.AGachaComponent);
exports.GachaComponentAnimation = h;