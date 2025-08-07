Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = createjs.Event;
var s = createjs.Container;
var r = function (e) {
  function SimplePreloadAnim() {
    var t = e.call(this) || this;
    t.addEventListener(a.ADDED_TO_STAGE, t.bindFunction(t.onAddedToStage));
    t.addEventListener(a.REMOVED_FROM_STAGE, t.bindFunction(t.onRemovedFromStage));
    return t;
  }
  i.__extends(SimplePreloadAnim, e);
  SimplePreloadAnim.prototype.onAddedToStage = function (e) {
    if (!this._ggsLogo) {
      this._ggsLogo = new s();
      this.addChild(this._ggsLogo);
      this.resizeLogo();
      this.addEventListener(a.ENTER_FRAME, this.bindFunction(this.updatePreloadAnim));
      this.stage.addEventListener(a.RESIZE, this.bindFunction(this.resizeLogo));
    }
  };
  SimplePreloadAnim.prototype.onRemovedFromStage = function (e) {
    if (this._ggsLogo) {
      this.removeChild(this._ggsLogo);
      this._ggsLogo = null;
      this.removeEventListener(a.ENTER_FRAME, this.bindFunction(this.updatePreloadAnim));
      this.stage.removeEventListener(a.RESIZE, this.bindFunction(this.resizeLogo));
    }
  };
  SimplePreloadAnim.prototype.updatePreloadAnim = function (e) {
    if (this._ggsLogo) {
      this._ggsLogo.spinner.rotation += 5;
    }
  };
  SimplePreloadAnim.prototype.resizeLogo = function (e = null) {
    if (this._ggsLogo) {
      this._ggsLogo.x = this.stage.stageWidth / 2;
      this._ggsLogo.y = this.stage.stageHeight / 2;
      this._ggsLogo.bg.width = this.stage.stageWidth;
      this._ggsLogo.bg.height = this.stage.stageHeight;
    }
  };
  return SimplePreloadAnim;
}(s);
exports.SimplePreloadAnim = r;