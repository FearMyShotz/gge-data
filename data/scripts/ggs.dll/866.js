Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./189.js");
var s = require("./188.js");
var r = createjs.MovieClip;
var o = createjs.Event;
var l = function (e) {
  function ExtraScreenMovieClip(t, n) {
    var i = e.call(this) || this;
    i.disp = t;
    i.basicCustomCursor = n;
    t.addEventListener("click", i.bindFunction(i.onClick));
    t.addEventListener("mouseover", i.bindFunction(i.onCursorOver));
    t.addEventListener("mouseout", i.bindFunction(i.onCursorOut));
    t.addEventListener(o.ADDED_TO_STAGE, i.bindFunction(i.onDispAddedToStage));
    t.addEventListener(o.REMOVED_FROM_STAGE, i.bindFunction(i.onRemoveDisp));
    return i;
  }
  i.__extends(ExtraScreenMovieClip, e);
  ExtraScreenMovieClip.prototype.onDispAddedToStage = function (e) {
    this.disp.removeEventListener(o.ADDED_TO_STAGE, this.bindFunction(this.onDispAddedToStage));
    this.disp.stage.addEventListener(o.RESIZE, this.bindFunction(this.updatePosition));
    this.updatePos();
  };
  ExtraScreenMovieClip.prototype.onRemoveDisp = function (e) {
    this.disp.removeEventListener("click", this.bindFunction(this.onClick));
    this.disp.removeEventListener("mouseover", this.bindFunction(this.onCursorOver));
    this.disp.removeEventListener("mouseout", this.bindFunction(this.onCursorOut));
    this.disp.removeEventListener(o.REMOVED_FROM_STAGE, this.bindFunction(this.onRemoveDisp));
    this.disp.stage.removeEventListener(o.RESIZE, this.bindFunction(this.updatePosition));
    this.basicCustomCursor.setCursorType(s.BasicCustomCursor.CURSOR_ARROW);
    a.MovieClipHelper.clearMovieClip(this.disp);
    this.disp = null;
  };
  ExtraScreenMovieClip.prototype.init = function () {};
  ExtraScreenMovieClip.prototype.onClick = function (e) {};
  ExtraScreenMovieClip.prototype.onCursorOver = function (e) {};
  ExtraScreenMovieClip.prototype.onCursorOut = function (e) {};
  ExtraScreenMovieClip.prototype.updatePosition = function (e) {
    this.updatePos();
  };
  ExtraScreenMovieClip.prototype.updatePos = function () {
    if (this.disp && this.disp.stage) {
      if (this.disp.stage.stageHeight / 600 < this.disp.stage.stageWidth / 800) {
        this.disp.scaleX = this.disp.scaleY = this.disp.stage.stageHeight / 600;
      } else {
        this.disp.scaleX = this.disp.scaleY = this.disp.stage.stageWidth / 800;
      }
      this.disp.x = (this.disp.stage.stageWidth - this.disp.scaleX * 800) * 0.5;
    }
  };
  return ExtraScreenMovieClip;
}(r);
exports.ExtraScreenMovieClip = l;