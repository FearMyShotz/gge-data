Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = require("./84.js");
var r = require("./100.js");
var o = createjs.Event;
var l = createjs.Shape;
var u = function (e) {
  function BasicDialog(t) {
    var n = e.call(this, t) || this;
    n.showBackground = true;
    n.backgroundAlpha = 0.3;
    n.backgroundColor = "#000000";
    n.dispBounds = t.getBounds();
    return n;
  }
  i.__extends(BasicDialog, e);
  BasicDialog.prototype.onBGAddedToStage = function (e) {
    this.bg.removeEventListener(o.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    this.bg.updateBounds();
    this.bg.width = this.bg.stage.stageWidth;
    this.bg.height = this.bg.stage.stageHeight;
    this.bg.x = -this.disp.x;
    this.bg.y = -this.disp.y;
    this.bg.graphics.clear().beginFill(this.backgroundColor).drawRect(this.bg.x, this.bg.y, this.bg.width, this.bg.height).endFill();
    if (this.bg.cacheCanvas) {
      this.bg.updateCache();
    } else {
      this.bg.cache(this.bg.x, this.bg.y, this.bg.width, this.bg.height);
    }
  };
  BasicDialog.prototype.init = function () {
    this.initBackground();
    e.prototype.init.call(this);
    this.addEventListenerOnInit();
  };
  BasicDialog.prototype.addEventListenerOnInit = function () {};
  BasicDialog.prototype.initBackground = function () {
    this.bg = new l();
    if (this.showBackground) {
      this.bg.alpha = this.backgroundAlpha;
    } else {
      this.bg.alpha = 0;
    }
    this.bg.graphics.clear().beginFill(this.backgroundColor).drawRect(0, 0, 1, 1).endFill();
    this.bg.addEventListener(o.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    this.disp.addChildAt(this.bg, 0);
  };
  BasicDialog.prototype.show = function () {
    e.prototype.show.call(this);
    this.addEventListenerOnShow();
  };
  BasicDialog.prototype.addEventListenerOnShow = function () {};
  BasicDialog.prototype.removeBackground = function () {
    if (this.bg) {
      if (this.disp.contains(this.bg)) {
        this.disp.removeChild(this.bg);
      }
      this.bg.uncache();
      this.bg = null;
    }
  };
  BasicDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.removeEventListenerOnHide();
    this.basicDialogHandler.onHideCurrentDialog();
  };
  BasicDialog.prototype.removeEventListenerOnHide = function () {};
  BasicDialog.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.removeEventListenerOnDestroy();
  };
  BasicDialog.prototype.removeEventListenerOnDestroy = function () {};
  BasicDialog.prototype.onResize = function (e) {
    this.updateBackground();
  };
  BasicDialog.prototype.updateBackground = function () {
    if (this.bg && this.bg.stage) {
      this.bg.width = this.bg.stage.width / this.disp.scaleX;
      this.bg.width = this.bg.stage.height / this.disp.scaleY;
      this.bg.x = -this.disp.x / this.disp.scaleX;
      this.bg.y = -this.disp.y / this.disp.scaleY;
      this.bg.graphics.clear().beginFill(this.backgroundColor).drawRect(this.bg.x, this.bg.y, this.bg.width, this.bg.height).endFill();
      if (this.bg.cacheCanvas) {
        this.bg.updateCache();
      } else {
        this.bg.cache(this.bg.x, this.bg.y, this.bg.width, this.bg.height);
      }
    }
  };
  BasicDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      var t = 1;
      var n = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width) {
        t = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * e) {
        n = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      e = t < n ? t : n;
      this.disp.x = -this.dispBounds.x * e - this.dispBounds.width * e * 0.5 + this.disp.stage.stageWidth * 0.5;
      this.disp.y = -this.dispBounds.y * e - this.dispBounds.height * e * 0.5 + this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = e;
      this.disp.x = this.disp.x | 0;
      this.disp.y = this.disp.y | 0;
    }
  };
  Object.defineProperty(BasicDialog.prototype, "basicDialogHandler", {
    get: function () {
      return s.BasicDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  BasicDialog.prototype.onMouseOver = function (e) {
    this.onCursorOver(e);
  };
  BasicDialog.prototype.onMouseOut = function (e) {
    this.onCursorOut(e);
  };
  BasicDialog.prototype.onCursorOver = function (e) {};
  BasicDialog.prototype.onCursorOut = function (e) {};
  BasicDialog.prototype.checkWaitingAnimState = function (e) {};
  Object.defineProperty(BasicDialog.prototype, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicDialog.NAME = "BasicDialog";
  return BasicDialog;
}(r.FlashUIComponent);
exports.BasicDialog = u;