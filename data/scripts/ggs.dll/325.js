Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./326.js");
var s = require("./8.js");
var r = require("./160.js");
var o = require("./328.js");
var l = createjs.Container;
var u = function (e) {
  function BasicIdleScreen(t) {
    return e.call(this, t) || this;
  }
  i.__extends(BasicIdleScreen, e);
  BasicIdleScreen.prototype.drawBackground = function () {
    this.bg.alpha = 0.5;
    this.bg.graphics.clear().beginFill("#000000").drawRect(0, 0, this.disp.stage.stageWidth, this.disp.stage.stageHeight).endFill();
    this.idleScreenBackground.addChildAt(this.bg, 0);
  };
  BasicIdleScreen.prototype.applyProperties = function () {
    this.idleScreenBackground = new l();
    this.idleScreen.addChild(this.idleScreenBackground);
    this.loadingAnimation = new o.SimplePreloadAnim();
    s.BasicController.getInstance().addEventListener(r.IdleScreenEvent.SHOW, this.bindFunction(this.showScreen));
    s.BasicController.getInstance().addEventListener(r.IdleScreenEvent.HIDE, this.bindFunction(this.hideScreen));
  };
  BasicIdleScreen.prototype.show = function () {
    e.prototype.show.call(this);
    this.idleScreenBackground.addChild(this.loadingAnimation);
  };
  BasicIdleScreen.prototype.hide = function () {
    if (this.idleScreenBackground && this.idleScreenBackground.contains(this.loadingAnimation)) {
      this.idleScreenBackground.removeChild(this.loadingAnimation);
    }
    e.prototype.hide.call(this);
  };
  BasicIdleScreen.prototype.init = function () {
    e.prototype.init.call(this);
  };
  BasicIdleScreen.prototype.hideScreen = function (e) {
    this.hide();
  };
  BasicIdleScreen.prototype.onResize = function (e) {
    this.drawBackground();
  };
  BasicIdleScreen.prototype.showScreen = function (e) {
    this.drawBackground();
    this.show();
  };
  Object.defineProperty(BasicIdleScreen.prototype, "idleScreen", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  BasicIdleScreen.NAME = "BasicIdleScreen";
  return BasicIdleScreen;
}(a.BasicScreen);
exports.BasicIdleScreen = u;